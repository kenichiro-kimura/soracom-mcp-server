/* eslint-disable @typescript-eslint/no-explicit-any */
import { toolsMap } from './toolsMap/index';

type InitializeParams = {
  id: number;
};

const PROTOCOL_VERSION = '2024-11-05';

const handleInitialize = (params: InitializeParams, id: number) => {
  const tools = Object.entries(toolsMap).reduce((acc, [key, value]) => {
    acc[key] = {
      description: value.description,
      parameters: value.parameters,
    };
    return acc;
  }, {} as Record<string, { description: string; parameters: any }>);

  const response = {
    jsonrpc: '2.0',
    id: id,
    result: {
      protocolVersion: PROTOCOL_VERSION,
      serverInfo: {
        name: 'SoracomMCPServer',
        version: '1.0.0',
      },
      capabilities: {
        tools,
        resources: {},
      },
    },
  };
  return response;
};

export { handleInitialize };