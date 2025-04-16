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
          listGroups: {
            description: 'List all groups',
            parameters: {
              type: 'object',
              properties: {
                tagName: { type: 'string' },
                tagValue: { type: 'string' },
                limit: { type: 'number' },
                lastEvaluatedKey: { type: 'string' },
              },
              required: [],
            },
          },
          getGroup: {
            description: 'Get details of a group',
            parameters: {
              type: 'object',
              properties: {
                groupId: { type: 'string' },
              },
              required: ['groupId'],
            },
          },
          getBillingHistory: {
            description: 'Retrieve past confirmed billing history by month',
            parameters: {
              type: 'object',
              properties: {},
              required: [],
            },
          },
          getBilling: {
            description: 'Retrieve confirmed billing for a specific month',
            parameters: {
              type: 'object',
              properties: {
                yyyyMm: { type: 'string' },
              },
              required: ['yyyyMm'],
            },
          },
          getBillingPerDay: {
            description: 'Retrieve daily billing for a specific month',
            parameters: {
              type: 'object',
              properties: {
                yyyyMm: { type: 'string' },
              },
              required: ['yyyyMm'],
            },
          },
          exportBilling: {
            description: 'Export past billing details CSV to storage',
            parameters: {
              type: 'object',
              properties: {
                yyyyMm: { type: 'string' },
                exportMode: { type: 'string' },
              },
              required: ['yyyyMm'],
            },
          },
          getLatestBilling: {
            description: 'Retrieve the latest billing for the current month',
            parameters: {
              type: 'object',
              properties: {},
              required: [],
            },
          },
          exportLatestBilling: {
            description: 'Export the latest billing details CSV to storage',
            parameters: {
              type: 'object',
              properties: {
                exportMode: { type: 'string' },
              },
              required: [],
            },
          },
          getBillingSummaryOfBillItems: {
            description: 'Retrieve billing summary by bill items for the past 4 months',
            parameters: {
              type: 'object',
              properties: {},
              required: [],
            },
          },
          getBillingSummaryOfSims: {
            description: 'Retrieve billing summary by SIMs for the past 4 months',
            parameters: {
              type: 'object',
              properties: {},
              required: [],
            },
          },
          listSoralets: {
            description: 'Retrieve a list of Soralets',
            parameters: {
              type: 'object',
              properties: {
                sort: { type: 'string' },
                limit: { type: 'number' },
                lastEvaluatedKey: { type: 'string' },
              },
              required: [],
            },
          },
          getSoralet: {
            description: 'Retrieve details of a Soralet',
            parameters: {
              type: 'object',
              properties: {
                soraletId: { type: 'string' },
              },
              required: ['soraletId'],
            },
          },
          getSoraletLogs: {
            description: 'Retrieve logs of a Soralet',
            parameters: {
              type: 'object',
              properties: {
                soraletId: { type: 'string' },
                sort: { type: 'string' },
                limit: { type: 'number' },
                lastEvaluatedKey: { type: 'string' },
              },
              required: ['soraletId'],
            },
          },
          testSoralet: {
            description: 'Test a Soralet with arguments',
            parameters: {
              type: 'object',
              properties: {
                soraletId: { type: 'string' },
                requestBody: { type: 'object' },
              },
              required: ['soraletId', 'requestBody'],
            },
          },
          listSoraletVersions: {
            description: 'Retrieve a list of Soralet versions',
            parameters: {
              type: 'object',
              properties: {
                soraletId: { type: 'string' },
                sort: { type: 'string' },
                limit: { type: 'number' },
                lastEvaluatedKey: { type: 'string' },
              },
              required: ['soraletId'],
            },
          },
          getLogs: {
            description: 'Retrieve error logs',
            parameters: {
              type: 'object',
              properties: {
                resourceType: { type: 'string' },
                resourceId: { type: 'string' },
                service: { type: 'string' },
                from: { type: 'number' },
                to: { type: 'number' },
                limit: { type: 'number' },
                lastEvaluatedKey: { type: 'string' },
              },
              required: [],
            },
          },
          listOrders: {
            description: 'Retrieve a list of confirmed orders',
            parameters: {
              type: 'object',
              properties: {},
              required: [],
            },
          },
          getOrder: {
            description: 'Retrieve details of a specific order',
            parameters: {
              type: 'object',
              properties: {
                orderId: { type: 'string' },
              },
              required: ['orderId'],
            },
          },
          listOrderedSubscribers: {
            description: 'Retrieve a list of ordered IoT SIMs',
            parameters: {
              type: 'object',
              properties: {
                orderId: { type: 'string' },
                lastEvaluatedKey: { type: 'string' },
                limit: { type: 'number' },
              },
              required: ['orderId'],
            },
          },
          listProducts: {
            description: 'Retrieve a list of available products',
            parameters: {
              type: 'object',
              properties: {
                campaignCode: { type: 'string' },
              },
              required: [],
            },
          },
          listAvailableDiscounts: {
            description: 'Retrieve a list of available long-term discounts',
            parameters: {
              type: 'object',
              properties: {},
              required: [],
            },
          },
          listSoraCamDevices: {
            description: 'Retrieve a list of SoraCam devices',
            parameters: {
              type: 'object',
              properties: {},
              required: [],
            },
          },
          getSoraCamDevice: {
            description: 'Retrieve details of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceAtomCamSettingsMotion: {
            description: 'Retrieve motion detection settings of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceAtomCamSettingsMotionSensitivity: {
            description: 'Retrieve motion sensitivity settings of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceAtomCamSettingsNightVision: {
            description: 'Retrieve night vision settings of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceAtomCamSettingsQuality: {
            description: 'Retrieve quality settings of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceAtomCamSettingsRotation: {
            description: 'Retrieve rotation settings of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceAtomCamSettingsSound: {
            description: 'Retrieve sound settings of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceAtomCamSettingsSoundSensitivity: {
            description: 'Retrieve sound sensitivity settings of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceAtomCamSettingsStatusLight: {
            description: 'Retrieve status light settings of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceAtomCamSettingsTimestamp: {
            description: 'Retrieve timestamp settings of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          listSoraCamDeviceEventsForDevice: {
            description: 'Retrieve events for a specific SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
                from: { type: 'number' },
                to: { type: 'number' },
                limit: { type: 'number' },
                lastEvaluatedKey: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceExportUsage: {
            description: 'Retrieve export usage of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          listSoraCamDeviceImageExportsForDevice: {
            description: 'Retrieve image exports for a specific SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
                lastEvaluatedKey: { type: 'string' },
                limit: { type: 'number' },
              },
              required: ['deviceId'],
            },
          },
          exportSoraCamDeviceRecordedImage: {
            description: 'Export recorded images from a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
                requestBody: { type: 'object' },
              },
              required: ['deviceId', 'requestBody'],
            },
          },
          getSoraCamDeviceExportedImage: {
            description: 'Retrieve exported image details of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
                exportId: { type: 'string' },
              },
              required: ['deviceId', 'exportId'],
            },
          },
          getSoraCamDeviceName: {
            description: 'Retrieve the name of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDevicePowerState: {
            description: 'Retrieve the power state of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          listSoraCamDeviceRecordingsAndEvents: {
            description: 'Retrieve recordings and events of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
                from: { type: 'number' },
                to: { type: 'number' },
                sort: { type: 'string' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceStreamingVideo: {
            description: 'Retrieve streaming video information of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
                from: { type: 'number' },
                to: { type: 'number' },
              },
              required: ['deviceId'],
            },
          },
          listSoraCamDeviceVideoExportsForDevice: {
            description: 'Retrieve video exports for a specific SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
                lastEvaluatedKey: { type: 'string' },
                limit: { type: 'number' },
              },
              required: ['deviceId'],
            },
          },
          getSoraCamDeviceExportedVideo: {
            description: 'Retrieve exported video details of a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
                exportId: { type: 'string' },
              },
              required: ['deviceId', 'exportId'],
            },
          },
          exportSoraCamDeviceRecordedVideo: {
            description: 'Export recorded videos from a SoraCam device',
            parameters: {
              type: 'object',
              properties: {
                deviceId: { type: 'string' },
                requestBody: { type: 'object' },
              },
              required: ['deviceId', 'requestBody'],
            },
          },
          listSoraCamDeviceAtomCamFirmwareUpdates: {
            description: 'Retrieve firmware updates for SoraCam devices',
            parameters: {
              type: 'object',
              properties: {},
              required: [],
            },
          },
          listSoraCamDeviceEvents: {
            description: 'Retrieve events for all SoraCam devices',
            parameters: {
              type: 'object',
              properties: {
                from: { type: 'number' },
                to: { type: 'number' },
                limit: { type: 'number' },
                lastEvaluatedKey: { type: 'string' },
              },
              required: [],
            },
          },
          listSoraCamDeviceImageExports: {
            description: 'Retrieve image exports for all SoraCam devices',
            parameters: {
              type: 'object',
              properties: {
                lastEvaluatedKey: { type: 'string' },
                limit: { type: 'number' },
              },
              required: [],
            },
          },
          listSoraCamDeviceVideoExports: {
            description: 'Retrieve video exports for all SoraCam devices',
            parameters: {
              type: 'object',
              properties: {
                lastEvaluatedKey: { type: 'string' },
                limit: { type: 'number' },
              },
              required: [],
            },
          },
          listSoraCamLicensePacks: {
            description: 'Retrieve license packs for SoraCam devices',
            parameters: {
              type: 'object',
              properties: {},
              required: [],
            },
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
        {
          name: 'listSoralets',
          description: 'Retrieve a list of Soralets',
          inputSchema: {
            type: 'object',
            properties: {
              sort: { type: 'string', description: 'Sort order (asc or desc)' },
              limit: { type: 'number', description: 'Maximum number of Soralets to retrieve' },
              lastEvaluatedKey: { type: 'string', description: 'Last Soralet ID from the previous page' },
            },
            required: [],
          },
        },
        {
          name: 'getSoralet',
          description: 'Retrieve details of a Soralet',
          inputSchema: {
            type: 'object',
            properties: {
              soraletId: { type: 'string', description: 'ID of the Soralet to retrieve' },
            },
            required: ['soraletId'],
          },
        },
        {
          name: 'getSoraletLogs',
          description: 'Retrieve logs of a Soralet',
          inputSchema: {
            type: 'object',
            properties: {
              soraletId: { type: 'string', description: 'ID of the Soralet' },
              sort: { type: 'string', description: 'Sort order (asc or desc)' },
              limit: { type: 'number', description: 'Maximum number of logs to retrieve' },
              lastEvaluatedKey: { type: 'string', description: 'Last log ID from the previous page' },
            },
            required: ['soraletId'],
          },
        },
        {
          name: 'testSoralet',
          description: 'Test a Soralet with arguments',
          inputSchema: {
            type: 'object',
            properties: {
              soraletId: { type: 'string', description: 'ID of the Soralet to test' },
              requestBody: { type: 'object', description: 'Request body for testing the Soralet' },
            },
            required: ['soraletId', 'requestBody'],
          },
        },
        {
          name: 'listSoraletVersions',
          description: 'Retrieve a list of Soralet versions',
          inputSchema: {
            type: 'object',
            properties: {
              soraletId: { type: 'string', description: 'ID of the Soralet' },
              sort: { type: 'string', description: 'Sort order (asc or desc)' },
              limit: { type: 'number', description: 'Maximum number of versions to retrieve' },
              lastEvaluatedKey: { type: 'string', description: 'Last version ID from the previous page' },
            },
            required: ['soraletId'],
          },
        },
        {
          name: 'getLogs',
          description: 'Retrieve error logs',
          inputSchema: {
            type: 'object',
            properties: {
              resourceType: { type: 'string', description: 'Type of the resource' },
              resourceId: { type: 'string', description: 'ID of the resource' },
              service: { type: 'string', description: 'Service name' },
              from: { type: 'number', description: 'Start time (UNIX timestamp in ms)' },
              to: { type: 'number', description: 'End time (UNIX timestamp in ms)' },
              limit: { type: 'number', description: 'Maximum number of logs to retrieve' },
              lastEvaluatedKey: { type: 'string', description: 'Key for pagination' },
            },
            required: [],
          },
        },
        {
          name: 'listOrders',
          description: 'Retrieve a list of confirmed orders',
          inputSchema: {
            type: 'object',
            properties: {},
            required: [],
          },
        },
        {
          name: 'getOrder',
          description: 'Retrieve details of a specific order',
          inputSchema: {
            type: 'object',
            properties: {
              orderId: { type: 'string', description: 'Order ID' },
            },
            required: ['orderId'],
          },
        },
        {
          name: 'listOrderedSubscribers',
          description: 'Retrieve a list of ordered IoT SIMs',
          inputSchema: {
            type: 'object',
            properties: {
              orderId: { type: 'string', description: 'Order ID' },
              lastEvaluatedKey: { type: 'string', description: 'Key for pagination' },
              limit: { type: 'number', description: 'Maximum number of subscribers to retrieve' },
            },
            required: ['orderId'],
          },
        },
        {
          name: 'listProducts',
          description: 'Retrieve a list of available products',
          inputSchema: {
            type: 'object',
            properties: {
              campaignCode: { type: 'string', description: 'Campaign code for filtering products' },
            },
            required: [],
          },
        },
        {
          name: 'listAvailableDiscounts',
          description: 'Retrieve a list of available long-term discounts',
          inputSchema: {
            type: 'object',
            properties: {},
            required: [],
          },
        },
        {
          name: 'listSoraCamDevices',
          description: 'Retrieve a list of SoraCam devices',
          inputSchema: {
            type: 'object',
            properties: {},
            required: [],
          },
        },
        {
          name: 'getSoraCamDevice',
          description: 'Retrieve details of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsMotion',
          description: 'Retrieve motion detection settings of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsMotionSensitivity',
          description: 'Retrieve motion sensitivity settings of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsNightVision',
          description: 'Retrieve night vision settings of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsQuality',
          description: 'Retrieve quality settings of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsRotation',
          description: 'Retrieve rotation settings of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsSound',
          description: 'Retrieve sound settings of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsSoundSensitivity',
          description: 'Retrieve sound sensitivity settings of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsStatusLight',
          description: 'Retrieve status light settings of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsTimestamp',
          description: 'Retrieve timestamp settings of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'listSoraCamDeviceEventsForDevice',
          description: 'Retrieve events for a specific SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
              from: { type: 'number', description: 'Start time (UNIX timestamp in ms)' },
              to: { type: 'number', description: 'End time (UNIX timestamp in ms)' },
              limit: { type: 'number', description: 'Maximum number of events to retrieve' },
              lastEvaluatedKey: { type: 'string', description: 'Key for pagination' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceExportUsage',
          description: 'Retrieve export usage of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'listSoraCamDeviceImageExportsForDevice',
          description: 'Retrieve image exports for a specific SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
              lastEvaluatedKey: { type: 'string', description: 'Key for pagination' },
              limit: { type: 'number', description: 'Maximum number of image exports to retrieve' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'exportSoraCamDeviceRecordedImage',
          description: 'Export recorded images from a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
              requestBody: { type: 'object', description: 'Request body for exporting recorded images' },
            },
            required: ['deviceId', 'requestBody'],
          },
        },
        {
          name: 'getSoraCamDeviceExportedImage',
          description: 'Retrieve exported image details of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
              exportId: { type: 'string', description: 'Export ID of the image' },
            },
            required: ['deviceId', 'exportId'],
          },
        },
        {
          name: 'getSoraCamDeviceName',
          description: 'Retrieve the name of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDevicePowerState',
          description: 'Retrieve the power state of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'listSoraCamDeviceRecordingsAndEvents',
          description: 'Retrieve recordings and events of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
              from: { type: 'number', description: 'Start time (UNIX timestamp in ms)' },
              to: { type: 'number', description: 'End time (UNIX timestamp in ms)' },
              sort: { type: 'string', description: 'Sort order (asc or desc)' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceStreamingVideo',
          description: 'Retrieve streaming video information of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
              from: { type: 'number', description: 'Start time (UNIX timestamp in ms)' },
              to: { type: 'number', description: 'End time (UNIX timestamp in ms)' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'listSoraCamDeviceVideoExportsForDevice',
          description: 'Retrieve video exports for a specific SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
              lastEvaluatedKey: { type: 'string', description: 'Key for pagination' },
              limit: { type: 'number', description: 'Maximum number of video exports to retrieve' },
            },
            required: ['deviceId'],
          },
        },
        {
          name: 'getSoraCamDeviceExportedVideo',
          description: 'Retrieve exported video details of a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
              exportId: { type: 'string', description: 'Export ID of the video' },
            },
            required: ['deviceId', 'exportId'],
          },
        },
        {
          name: 'exportSoraCamDeviceRecordedVideo',
          description: 'Export recorded videos from a SoraCam device',
          inputSchema: {
            type: 'object',
            properties: {
              deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
              requestBody: { type: 'object', description: 'Request body for exporting recorded videos' },
            },
            required: ['deviceId', 'requestBody'],
          },
        },
        {
          name: 'listSoraCamDeviceAtomCamFirmwareUpdates',
          description: 'Retrieve firmware updates for SoraCam devices',
          inputSchema: {
            type: 'object',
            properties: {},
            required: [],
          },
        },
        {
          name: 'listSoraCamDeviceEvents',
          description: 'Retrieve events for all SoraCam devices',
          inputSchema: {
            type: 'object',
            properties: {
              from: { type: 'number', description: 'Start time (UNIX timestamp in ms)' },
              to: { type: 'number', description: 'End time (UNIX timestamp in ms)' },
              limit: { type: 'number', description: 'Maximum number of events to retrieve' },
              lastEvaluatedKey: { type: 'string', description: 'Key for pagination' },
            },
            required: [],
          },
        },
        {
          name: 'listSoraCamDeviceImageExports',
          description: 'Retrieve image exports for all SoraCam devices',
          inputSchema: {
            type: 'object',
            properties: {
              lastEvaluatedKey: { type: 'string', description: 'Key for pagination' },
              limit: { type: 'number', description: 'Maximum number of image exports to retrieve' },
            },
            required: [],
          },
        },
        {
          name: 'listSoraCamDeviceVideoExports',
          description: 'Retrieve video exports for all SoraCam devices',
          inputSchema: {
            type: 'object',
            properties: {
              lastEvaluatedKey: { type: 'string', description: 'Key for pagination' },
              limit: { type: 'number', description: 'Maximum number of video exports to retrieve' },
            },
            required: [],
          },
        },
        {
          name: 'listSoraCamLicensePacks',
          description: 'Retrieve license packs for SoraCam devices',
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
  }
  if (name === 'listSoralets') {
    const result = await SoraletService.listSoralets(args.sort, args.limit, args.lastEvaluatedKey);
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
  if (name === 'getSoralet') {
    const result = await SoraletService.getSoralet(args.soraletId);
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
  if (name === 'getSoraletLogs') {
    const result = await SoraletService.getSoraletLogs(args.soraletId, args.sort, args.limit, args.lastEvaluatedKey);
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
  if (name === 'testSoralet') {
    const result = await SoraletService.testSoralet(args.soraletId, args.requestBody);
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
  if (name === 'listSoraletVersions') {
    const result = await SoraletService.listSoraletVersions(args.soraletId, args.sort, args.limit, args.lastEvaluatedKey);
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
  if (name === 'getLogs') {
    const result = await LogService.getLogs(
      args.resourceType,
      args.resourceId,
      args.service,
      args.from,
      args.to,
      args.limit,
      args.lastEvaluatedKey
    );
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
  if (name === 'listOrders') {
    const result = await OrderService.listOrders();
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
  if (name === 'getOrder') {
    const result = await OrderService.getOrder(args.orderId);
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
  if (name === 'listOrderedSubscribers') {
    const result = await OrderService.listOrderedSubscribers(args.orderId, args.lastEvaluatedKey, args.limit);
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
  if (name === 'listProducts') {
    const result = await OrderService.listProducts(args.campaignCode);
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
  if (name === 'listAvailableDiscounts') {
    const result = await OrderService.listAvailableDiscounts();
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
  if (name === 'listSoraCamDevices') {
    const result = await SoraCamService.listSoraCamDevices();
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
  if (name === 'getSoraCamDevice') {
    const result = await SoraCamService.getSoraCamDevice(args.deviceId);
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
  if (name === 'getSoraCamDeviceAtomCamSettingsMotion') {
    const result = await SoraCamService.getSoraCamDeviceAtomCamSettingsMotion(args.deviceId);
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
  if (name === 'getSoraCamDeviceAtomCamSettingsMotionSensitivity') {
    const result = await SoraCamService.getSoraCamDeviceAtomCamSettingsMotionSensitivity(args.deviceId);
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
  if (name === 'getSoraCamDeviceAtomCamSettingsNightVision') {
    const result = await SoraCamService.getSoraCamDeviceAtomCamSettingsNightVision(args.deviceId);
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
  if (name === 'getSoraCamDeviceAtomCamSettingsQuality') {
    const result = await SoraCamService.getSoraCamDeviceAtomCamSettingsQuality(args.deviceId);
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
  if (name === 'getSoraCamDeviceAtomCamSettingsRotation') {
    const result = await SoraCamService.getSoraCamDeviceAtomCamSettingsRotation(args.deviceId);
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
  if (name === 'getSoraCamDeviceAtomCamSettingsSound') {
    const result = await SoraCamService.getSoraCamDeviceAtomCamSettingsSound(args.deviceId);
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
  if (name === 'getSoraCamDeviceAtomCamSettingsSoundSensitivity') {
    const result = await SoraCamService.getSoraCamDeviceAtomCamSettingsSoundSensitivity(args.deviceId);
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
  if (name === 'getSoraCamDeviceAtomCamSettingsStatusLight') {
    const result = await SoraCamService.getSoraCamDeviceAtomCamSettingsStatusLight(args.deviceId);
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
  if (name === 'getSoraCamDeviceAtomCamSettingsTimestamp') {
    const result = await SoraCamService.getSoraCamDeviceAtomCamSettingsTimestamp(args.deviceId);
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
  if (name === 'listSoraCamDeviceEventsForDevice') {
    const result = await SoraCamService.listSoraCamDeviceEventsForDevice(args.deviceId, args.from, args.to, args.limit, args.lastEvaluatedKey);
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
  if (name === 'getSoraCamDeviceExportUsage') {
    const result = await SoraCamService.getSoraCamDeviceExportUsage(args.deviceId);
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
  if (name === 'listSoraCamDeviceImageExportsForDevice') {
    const result = await SoraCamService.listSoraCamDeviceImageExportsForDevice(args.deviceId, args.lastEvaluatedKey, args.limit);
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
  if (name === 'exportSoraCamDeviceRecordedImage') {
    const result = await SoraCamService.exportSoraCamDeviceRecordedImage(args.deviceId, args.requestBody);
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
  if (name === 'getSoraCamDeviceExportedImage') {
    const result = await SoraCamService.getSoraCamDeviceExportedImage(args.deviceId, args.exportId);
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
  if (name === 'getSoraCamDeviceName') {
    const result = await SoraCamService.getSoraCamDeviceName(args.deviceId);
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
  if (name === 'getSoraCamDevicePowerState') {
    const result = await SoraCamService.getSoraCamDevicePowerState(args.deviceId);
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
  if (name === 'listSoraCamDeviceRecordingsAndEvents') {
    const result = await SoraCamService.listSoraCamDeviceRecordingsAndEvents(args.deviceId, args.from, args.to, args.sort);
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
  if (name === 'getSoraCamDeviceStreamingVideo') {
    const result = await SoraCamService.getSoraCamDeviceStreamingVideo(args.deviceId, args.from, args.to);
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
  if (name === 'listSoraCamDeviceVideoExportsForDevice') {
    const result = await SoraCamService.listSoraCamDeviceVideoExportsForDevice(args.deviceId, args.lastEvaluatedKey, args.limit);
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
  if (name === 'getSoraCamDeviceExportedVideo') {
    const result = await SoraCamService.getSoraCamDeviceExportedVideo(args.deviceId, args.exportId);
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
  if (name === 'exportSoraCamDeviceRecordedVideo') {
    const result = await SoraCamService.exportSoraCamDeviceRecordedVideo(args.deviceId, args.requestBody);
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
  if (name === 'listSoraCamDeviceAtomCamFirmwareUpdates') {
    const result = await SoraCamService.listSoraCamDeviceAtomCamFirmwareUpdates();
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
  if (name === 'listSoraCamDeviceEvents') {
    const result = await SoraCamService.listSoraCamDeviceEvents(args.from, args.to, args.limit, args.lastEvaluatedKey);
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
  if (name === 'listSoraCamDeviceImageExports') {
    const result = await SoraCamService.listSoraCamDeviceImageExports(args.lastEvaluatedKey, args.limit);
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
  if (name === 'listSoraCamDeviceVideoExports') {
    const result = await SoraCamService.listSoraCamDeviceVideoExports(args.lastEvaluatedKey, args.limit);
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
  if (name === 'listSoraCamLicensePacks') {
    const result = await SoraCamService.listSoraCamLicensePacks();
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
