import { BillingService } from '../../generated/services/BillingService';

export const billingToolsMap = {
  getBillingHistory: {
    fn: BillingService.getBillingHistory,
    args: () => [],
  },
  getBilling: {
    fn: BillingService.getBilling,
    args: (args: any) => [args.yyyyMm],
  },
  getBillingPerDay: {
    fn: BillingService.getBillingPerDay,
    args: (args: any) => [args.yyyyMm],
  },
  exportBilling: {
    fn: BillingService.exportBilling,
    args: (args: any) => [args.yyyyMm, args.exportMode],
  },
  getLatestBilling: {
    fn: BillingService.getLatestBilling,
    args: () => [],
  },
  exportLatestBilling: {
    fn: BillingService.exportLatestBilling,
    args: (args: any) => [args.exportMode],
  },
  getBillingSummaryOfBillItems: {
    fn: BillingService.getBillingSummaryOfBillItems,
    args: () => [],
  },
  getBillingSummaryOfSims: {
    fn: BillingService.getBillingSummaryOfSims,
    args: () => [],
  },
};
