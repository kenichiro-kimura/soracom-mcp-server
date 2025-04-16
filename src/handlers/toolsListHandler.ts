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

export { handleToolsList };