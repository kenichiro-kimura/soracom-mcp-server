/* eslint-disable @typescript-eslint/no-explicit-any */
import { toolsMap } from './toolsMap/index';

type ToolMap = typeof toolsMap;
type ToolName = keyof ToolMap;

export const handleToolsCall = async (params: { name: ToolName; arguments: any }, id: number) => {
  const { name, arguments: args } = params;
  console.error(`Calling tool: ${name} with arguments: ${JSON.stringify(args)}`);

  if (toolsMap[name]) {
    const { fn, args: argsFn } = toolsMap[name];
    // Functionのthisコンテキストを回避するため、個別に関数呼び出し
    const argsArray = argsFn(args);
    const result = await fn(...argsArray);
    return {
      jsonrpc: '2.0',
      id: id,
      result: {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result),
          },
        ],
        metadata: {},
      },
    };
  }
  throw new Error(`Unknown tool: ${name}`);
};
