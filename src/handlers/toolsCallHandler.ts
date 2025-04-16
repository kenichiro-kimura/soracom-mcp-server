import { subscriberToolsMap } from './toolsMap/subscriberToolsMap';
import { simToolsMap } from './toolsMap/simToolsMap';
import { groupToolsMap } from './toolsMap/groupToolsMap';
import { billingToolsMap } from './toolsMap/billingToolsMap';
import { soraletToolsMap } from './toolsMap/soraletToolsMap';
import { logToolsMap } from './toolsMap/logToolsMap';
import { orderToolsMap } from './toolsMap/orderToolsMap';
import { soraCamToolsMap } from './toolsMap/soraCamToolsMap';

const toolMap = {
  ...subscriberToolsMap,
  ...simToolsMap,
  ...groupToolsMap,
  ...billingToolsMap,
  ...soraletToolsMap,
  ...logToolsMap,
  ...orderToolsMap,
  ...soraCamToolsMap,
} as const;
type ToolMap = typeof toolMap;

type ToolName = keyof ToolMap;

export const handleToolsCall = async (params: { name: ToolName; arguments: any }, id: number) => {
  const { name, arguments: args } = params;
  console.error(`Calling tool: ${name} with arguments: ${JSON.stringify(args)}`);

  if (toolMap[name]) {
    const { fn, args: argsFn } = toolMap[name];
    // Functionのthisコンテキストを回避するため、個別に関数呼び出し
    const argsArray = argsFn(args);
    // @ts-ignore - 異なる関数シグネチャに対応するため
    const result = await fn(...argsArray);
    console.log(JSON.stringify(result, null, 2));
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
