import readline from 'readline';
import { AuthService } from './generated/services/AuthService';
import { handleInitialize } from './handlers/initializeHandler';
import { handleToolsList } from './handlers/toolsListHandler';
import { handleToolsCall } from './handlers/toolsCallHandler';

// AuthService を呼び出して認証を行う
AuthService.auth(
  {
    authKey: process.env.SORACOM_AUTH_KEY,
    authKeyId: process.env.SORACOM_AUTH_KEY_ID,
  }
).then(
  (response) => {
    AuthService.setApiKey(response.apiKey);
    AuthService.setToken(response.token);
  }
);

// Create a readline interface for standard input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const handleCommand = async (command: string) => {
  try {
    const parsedCommand = JSON.parse(command);
    if (parsedCommand.method === 'initialize') {
      const response = handleInitialize(parsedCommand.params,parsedCommand.id);
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

// Listen for input commands
rl.on('line', (line) => {
  handleCommand(line.trim());
});
