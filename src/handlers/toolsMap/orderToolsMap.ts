import { OrderService } from '../../generated/services/OrderService';
import { ToolDefinition } from './index';

export const orderToolsMap: Record<string, ToolDefinition>  = {
  listOrders: {
    fn: OrderService.listOrders,
    args: (args: any) => [args.status, args.limit, args.lastEvaluatedKey],
    description: 'List all orders',
    parameters: {
      type: 'object',
      properties: {
        status: { type: 'string', description: 'Order status' },
        limit: { type: 'number', description: 'Limit number of orders' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
      },
      required: [],
    },
  },
  getOrder: {
    fn: OrderService.getOrder,
    args: (args: any) => [args.orderId],
    description: 'Get details of an order',
    parameters: {
      type: 'object',
      properties: {
        orderId: { type: 'string', description: 'Order ID' },
      },
      required: ['orderId'],
    },
  },
  listOrderedSubscribers: {
    fn: OrderService.listOrderedSubscribers,
    args: (args: any) => [args.orderId, args.lastEvaluatedKey, args.limit],
    description: 'List subscribers ordered in a specific order',
    parameters: {
      type: 'object',
      properties: {
        orderId: { type: 'string', description: 'Order ID' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
        limit: { type: 'number', description: 'Limit number of subscribers' },
      },
      required: ['orderId'],
    },
  },
  listProducts: {
    fn: OrderService.listProducts,
    args: (args: any) => [args.campaignCode],
    description: 'Retrieve a list of available products',
    parameters: {
      type: 'object',
      properties: {
        campaignCode: { type: 'string', description: 'Campaign code for filtering products' },
      },
      required: [],
    },
  },
  listAvailableDiscounts: {
    fn: OrderService.listAvailableDiscounts,
    args: () => [],
    description: 'Retrieve a list of available long-term discounts',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
};
