import { handleInitialize } from './initializeHandler';
import { handleToolsList } from './toolsListHandler';
import { handleToolsCall } from './toolsCallHandler';

export const handleCommand = async (command: string) => {
  try {
    const parsedCommand = JSON.parse(command);
    if (parsedCommand.method === 'initialize') {
      const response = handleInitialize(parsedCommand.params, parsedCommand.id);
      console.log(JSON.stringify(response));
      console.error(JSON.stringify(response));
      console.error('Initialization complete. Ready to accept commands.');
      return;
    } else if (parsedCommand.method === 'tools/list') {
      const response = handleToolsList(parsedCommand);
      console.log(JSON.stringify(response));
      return;
    } else if (parsedCommand.method === 'tools/call') {
      const response = await handleToolsCall(parsedCommand.params, parsedCommand.id);
      console.log(JSON.stringify(response));
      console.error(JSON.stringify(response));
      return;
    } else {
      console.error(`Unknown command: ${parsedCommand.method}`);
    }
  } catch (error) {
    console.error('Error handling command:', error);
  }
};
