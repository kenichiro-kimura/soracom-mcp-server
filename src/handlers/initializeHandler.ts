type InitializeParams = {
  id: number;
};

const PROTOCOL_VERSION = '2024-11-05';

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
                    // Additional tools omitted for brevity
                },
                resources: {},
            },
        },
    };
    return response;
};

export { handleInitialize };