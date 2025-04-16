import readline from 'readline';
import { SubscriberService } from './generated/services/SubscriberService';
import { VirtualPrivateGatewayService } from './generated/services/VirtualPrivateGatewayService';
import { UserService } from './generated/services/UserService';
import { SystemNotificationService } from './generated/services/SystemNotificationService';
import { StatsService } from './generated/services/StatsService';
import { SoraletService } from './generated/services/SoraletService';
import { SoraCamService } from './generated/services/SoraCamService';
import { SimService } from './generated/services/SimService';
import { SimProfileOrderService } from './generated/services/SimProfileOrderService';
import { SigfoxDeviceService } from './generated/services/SigfoxDeviceService';
import { ShippingAddressService } from './generated/services/ShippingAddressService';
import { RoleService } from './generated/services/RoleService';
import { ResourceSummaryService } from './generated/services/ResourceSummaryService';
import { QueryService } from './generated/services/QueryService';
import { PortMappingService } from './generated/services/PortMappingService';
import { PaymentService } from './generated/services/PaymentService';
import { OrderService } from './generated/services/OrderService';
import { OperatorService } from './generated/services/OperatorService';
import { LoraNetworkSetService } from './generated/services/LoraNetworkSetService';
import { LoraDeviceService } from './generated/services/LoraDeviceService';
import { LoraGatewayService } from './generated/services/LoraGatewayService';
import { AuditLogService } from './generated/services/AuditLogService';
import { AuthService } from './generated/services/AuthService';
import { BillingService } from './generated/services/BillingService';
import { CellLocationService } from './generated/services/CellLocationService';
import { CredentialService } from './generated/services/CredentialService';
import { DataEntryService } from './generated/services/DataEntryService';
import { DeviceService } from './generated/services/DeviceService';
import { DeviceObjectModelService } from './generated/services/DeviceObjectModelService';
import { DiagnosticService } from './generated/services/DiagnosticService';
import { EmailService } from './generated/services/EmailService';
import { EventHandlerService } from './generated/services/EventHandlerService';
import { FileEntryService } from './generated/services/FileEntryService';
import { FilesService } from './generated/services/FilesService';
import { GadgetService } from './generated/services/GadgetService';
import { GroupService } from './generated/services/GroupService';
import { LagoonService } from './generated/services/LagoonService';
import { LogService } from './generated/services/LogService';

const PROTOCOL_VERSION = '2024-11-05';

type InitializeParams = {
  id: number;
};

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

const handleInitialize = (params: InitializeParams, id: number) => {
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
        tools: {
          listSubscribers: {
            description: 'List all subscribers',
            parameters: {
              type: 'object',
              properties: {
                tagName: { type: 'string' },
                tagValue: { type: 'string' },
                statusFilter: { type: 'string' },
              },
              required: [],
            },
          },
          getSubscriber: {
            description: 'Get details of a subscriber',
            parameters: {
              type: 'object',
              properties: {
                imsi: { type: 'string' },
              },
              required: ['imsi'],
            },
          },
        },
        listSims: {
          description: 'List all SIMs',
          parameters: {
            type: 'object',
            properties: {
              tagName: { type: 'string' },
              tagValue: { type: 'string' },
              statusFilter: { type: 'string' },
            },
            required: [],
          },
        },
        getSim: {
          description: 'Get details of a SIM',
          parameters: {
            type: 'object',
            properties: {
              sim_id: { type: 'string' },
            },
            required: ['sim_id'],
          },
        },
        resources: {
        },
      },
    },
  };
  return response;
};

const handleToolsList = (params: any) => {
  const response = {
    jsonrpc: '2.0',
    id: params.id,
    result: {
      tools: [
        {
          name: 'listSubscribers',
          description: 'List all subscribers',
          inputSchema: {
            type: 'object',
            properties: {
              tagName: { type: 'string', description: 'Tag name to filter subscribers' },
              tagValue: { type: 'string', description: 'Tag value to filter subscribers' },
              statusFilter: { type: 'string', description: 'Filter by subscriber status' },
            },
            required: [],
          },
        },
        {
          name: 'getSubscriber',
          description: 'Get details of a subscriber',
          inputSchema: {
            type: 'object',
            properties: {
              imsi: { type: 'string', description: 'IMSI of the subscriber' },
            },
            required: ['imsi'],
          },
        },
        {
          name: 'listSims',
          description: 'List all SIMs',
          inputSchema: {
            type: 'object',
            properties: {
              limit: { type: 'number', description: 'Maximum number of SIMs to retrieve' },
              lastEvaluatedKey: { type: 'string', description: 'Last SIM ID from the previous page' },
            },
            required: [],
          },
        },
        {
          name: 'getSim',
          description: 'Get details of a SIM',
          inputSchema: {
            type: 'object',
            properties: {
              simId: { type: 'string', description: 'SIM ID of the target SIM' },
            },
            required: ['simId'],
          },
        },
        {
          name: 'listGroups',
          description: 'List all groups',
          inputSchema: {
            type: 'object',
            properties: {
              tagName: { type: 'string', description: 'Tag name to filter groups' },
              tagValue: { type: 'string', description: 'Tag value to filter groups' },
              limit: { type: 'number', description: 'Maximum number of groups to retrieve' },
              lastEvaluatedKey: { type: 'string', description: 'Last group ID from the previous page' },
            },
            required: [],
          },
        },
        {
          name: 'getGroup',
          description: 'Get details of a group',
          inputSchema: {
            type: 'object',
            properties: {
              groupId: { type: 'string', description: 'Group ID of the target group' },
            },
            required: ['groupId'],
          },
        },
        {
          name: 'getBillingHistory',
          description: 'Retrieve past confirmed billing history by month',
          inputSchema: {
            type: 'object',
            properties: {},
            required: [],
          },
        },
        {
          name: 'getBilling',
          description: 'Retrieve confirmed billing for a specific month',
          inputSchema: {
            type: 'object',
            properties: {
              yyyyMm: { type: 'string', description: 'Target year and month (YYYYMM)' },
            },
            required: ['yyyyMm'],
          },
        },
        {
          name: 'getBillingPerDay',
          description: 'Retrieve daily billing for a specific month',
          inputSchema: {
            type: 'object',
            properties: {
              yyyyMm: { type: 'string', description: 'Target year and month (YYYYMM)' },
            },
            required: ['yyyyMm'],
          },
        },
        {
          name: 'exportBilling',
          description: 'Export past billing details CSV to storage',
          inputSchema: {
            type: 'object',
            properties: {
              yyyyMm: { type: 'string', description: 'Target year and month (YYYYMM)' },
              exportMode: { type: 'string', description: 'Export mode (async or sync)' },
            },
            required: ['yyyyMm'],
          },
        },
        {
          name: 'getLatestBilling',
          description: 'Retrieve the latest billing for the current month',
          inputSchema: {
            type: 'object',
            properties: {},
            required: [],
          },
        },
        {
          name: 'exportLatestBilling',
          description: 'Export the latest billing details CSV to storage',
          inputSchema: {
            type: 'object',
            properties: {
              exportMode: { type: 'string', description: 'Export mode (async or sync)' },
            },
            required: [],
          },
        },
        {
          name: 'getBillingSummaryOfBillItems',
          description: 'Retrieve billing summary by bill items for the past 4 months',
          inputSchema: {
            type: 'object',
            properties: {},
            required: [],
          },
        },
        {
          name: 'getBillingSummaryOfSims',
          description: 'Retrieve billing summary by SIMs for the past 4 months',
          inputSchema: {
            type: 'object',
            properties: {},
            required: [],
          },
        },
      ],
    },
  };
  return response;
};

const handleToolsCall = async (params: any, id: number) => {
  const { name, arguments: args } = params;
  console.error(`Calling tool: ${name} with arguments: ${JSON.stringify(args)}`);

  if (name === 'listSubscribers') {
    const result = await SubscriberService.listSubscribers(args);
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
  if (name === 'getSubscriber') {
    const result = await SubscriberService.getSubscriber(args.imsi);
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
  if (name === 'listSims') {
    const result = await SimService.listSims(args.limit, args.lastEvaluatedKey);
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
  if (name === 'getSim') {
    const result = await SimService.getSim(args.simId);
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
  if (name === 'listGroups') {
    const result = await GroupService.listGroups(args.tagName, args.tagValue, args.limit, args.lastEvaluatedKey);
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
  if (name === 'getGroup') {
    const result = await GroupService.getGroup(args.groupId);
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
  if (name === 'getBillingHistory') {
    const result = await BillingService.getBillingHistory();
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
  if (name === 'getBilling') {
    const result = await BillingService.getBilling(args.yyyyMm);
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
  if (name === 'getBillingPerDay') {
    const result = await BillingService.getBillingPerDay(args.yyyyMm);
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
  if (name === 'exportBilling') {
    const result = await BillingService.exportBilling(args.yyyyMm, args.exportMode);
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
  if (name === 'getLatestBilling') {
    const result = await BillingService.getLatestBilling();
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
  if (name === 'exportLatestBilling') {
    const result = await BillingService.exportLatestBilling(args.exportMode);
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
  if (name === 'getBillingSummaryOfBillItems') {
    const result = await BillingService.getBillingSummaryOfBillItems();
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
  if (name === 'getBillingSummaryOfSims') {
    const result = await BillingService.getBillingSummaryOfSims();
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
  } else {
    throw new Error(`Unknown tool: ${name}`);
  }
};

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
