import readline from 'readline';
import { AuthService } from './generated/services/AuthService';
import { handleCommand } from './handlers/commandHandler'; // handleCommandをインポート

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

// Listen for input commands
rl.on('line', (line) => {
  handleCommand(line.trim());
});
