import { OrderService } from '../../generated/services/OrderService';

export const orderToolsMap = {
  listOrders: {
    fn: OrderService.listOrders,
    args: () => [],
  },
  getOrder: {
    fn: OrderService.getOrder,
    args: (args: any) => [args.orderId],
  },
  listOrderedSubscribers: {
    fn: OrderService.listOrderedSubscribers,
    args: (args: any) => [args.orderId, args.lastEvaluatedKey, args.limit],
  },
  listProducts: {
    fn: OrderService.listProducts,
    args: (args: any) => [args.campaignCode],
  },
  listAvailableDiscounts: {
    fn: OrderService.listAvailableDiscounts,
    args: () => [],
  },
};
