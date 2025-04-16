import { BillingService } from '../../generated/services/BillingService';

export const billingToolsMap = {
  getBillingHistory: {
    fn: BillingService.getBillingHistory,
    args: () => [],
    description: 'Retrieve past confirmed billing history by month',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
  getBilling: {
    fn: BillingService.getBilling,
    args: (args: any) => [args.yyyyMm],
    description: 'Retrieve confirmed billing for a specific month',
    parameters: {
      type: 'object',
      properties: {
        yyyyMm: { type: 'string', description: 'Year and month (yyyyMM)' },
      },
      required: ['yyyyMm'],
    },
  },
  getBillingPerDay: {
    fn: BillingService.getBillingPerDay,
    args: (args: any) => [args.yyyyMm],
    description: 'Retrieve daily billing for a specific month',
    parameters: {
      type: 'object',
      properties: {
        yyyyMm: { type: 'string', description: 'Year and month (yyyyMM)' },
      },
      required: ['yyyyMm'],
    },
  },
  exportBilling: {
    fn: BillingService.exportBilling,
    args: (args: any) => [args.yyyyMm, args.exportMode],
    description: 'Export past billing details CSV to storage',
    parameters: {
      type: 'object',
      properties: {
        yyyyMm: { type: 'string', description: 'Year and month (yyyyMM)' },
        exportMode: { type: 'string', description: 'Export mode' },
      },
      required: ['yyyyMm'],
    },
  },
  getLatestBilling: {
    fn: BillingService.getLatestBilling,
    args: () => [],
    description: 'Retrieve the latest billing for the current month',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
  exportLatestBilling: {
    fn: BillingService.exportLatestBilling,
    args: (args: any) => [args.exportMode],
    description: 'Export the latest billing details CSV to storage',
    parameters: {
      type: 'object',
      properties: {
        exportMode: { type: 'string', description: 'Export mode' },
      },
      required: [],
    },
  },
  getBillingSummaryOfBillItems: {
    fn: BillingService.getBillingSummaryOfBillItems,
    args: () => [],
    description: 'Retrieve billing summary by bill items for the past 4 months',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
  getBillingSummaryOfSims: {
    fn: BillingService.getBillingSummaryOfSims,
    args: () => [],
    description: 'Retrieve billing summary by SIMs for the past 4 months',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
};
