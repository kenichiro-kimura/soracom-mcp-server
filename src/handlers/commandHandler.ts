/* eslint-disable @typescript-eslint/no-explicit-any */
import { handleInitialize } from './initializeHandler';
import { handleToolsList } from './toolsListHandler';
import { handleToolsCall } from './toolsCallHandler';

const debugLog = (message: any) => {
  if (process.env.DEBUG_LOG === 'true') {
    console.error(message);
  }
};

enum CommandMethods {
  Initialize = 'initialize',
  ToolsList = 'tools/list',
  ToolsCall = 'tools/call',
  NotificationsInitialized = 'notifications/initialized',
}

export const handleCommand = async (command: string) => {
  let parsedCommand = null;
  try {
    parsedCommand = JSON.parse(command);

    switch (parsedCommand.method) {
      case CommandMethods.Initialize: {
        const response = handleInitialize(parsedCommand.params, parsedCommand.id);
        console.log(JSON.stringify(response));
        debugLog(JSON.stringify(response));
        debugLog('Initialization complete. Ready to accept commands.');
        break;
      }
      case CommandMethods.ToolsList: {
        const response = handleToolsList(parsedCommand);
        console.log(JSON.stringify(response));
        break;
      }
      case CommandMethods.ToolsCall: {
        const response = await handleToolsCall(parsedCommand.params, parsedCommand.id);
        console.log(JSON.stringify(response));
        debugLog(JSON.stringify(response));
        break;
      }
      case CommandMethods.NotificationsInitialized: {
        debugLog(`Notifications initialized: ${JSON.stringify(parsedCommand.params)}`);
        break;
      }
      default: {
        debugLog(`Unknown command: ${parsedCommand.method}`);
        break;
      }
    }
  } catch (error) {
    debugLog(`Error handling command: ${error}`);
    console.log(
        JSON.stringify({
            jsonrpc: '2.0',
            id: parsedCommand.id || null,
            error: {
                code: 500,
                message: 'Internal error',
                data: error instanceof Error ? error.message : String(error),
            },
        }),
    )
  }
};
