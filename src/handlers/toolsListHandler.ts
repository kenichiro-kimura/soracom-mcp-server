/* eslint-disable @typescript-eslint/no-explicit-any */
import { toolsMap } from './toolsMap/index';

export const handleToolsList = (params: any) => {
  const tools = Object.entries(toolsMap).map(([name, tool]) => ({
    name,
    description: tool.description,
    inputSchema: tool.parameters,
  }));

  const response = {
    jsonrpc: '2.0',
    id: params.id,
    result: {
      tools,
    },
  };
  return response;
};