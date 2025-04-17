import { handleInitialize } from './initializeHandler';
import { handleToolsList } from './toolsListHandler';
import { handleToolsCall } from './toolsCallHandler';

const debugLog = (message: any) => {
  if (process.env.DEBUG_LOG) {
    console.error(message);
  }
};

export const handleCommand = async (command: string) => {
  try {
    const parsedCommand = JSON.parse(command);

    switch (parsedCommand.method) {
      case 'initialize': {
        const response = handleInitialize(parsedCommand.params, parsedCommand.id);
        console.log(JSON.stringify(response));
        debugLog(JSON.stringify(response));
        debugLog('Initialization complete. Ready to accept commands.');
        break;
      }
      case 'tools/list': {
        const response = handleToolsList(parsedCommand);
        console.log(JSON.stringify(response));
        break;
      }
      case 'tools/call': {
        const response = await handleToolsCall(parsedCommand.params, parsedCommand.id);
        console.log(JSON.stringify(response));
        debugLog(JSON.stringify(response));
        break;
      }
      case 'notifications/initialized': {
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
  }
};
