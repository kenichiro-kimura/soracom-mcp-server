import { SubscriberService } from '../../generated/services/SubscriberService';

export const subscriberToolsMap = {
  listSubscribers: {
    fn: SubscriberService.listSubscribers,
    args: (args: any) => [
      args.tagName,
      args.tagValue,
      args.tagValueMatchMode,
      args.statusFilter,
      args.speedClassFilter,
      args.serialNumberFilter,
      args.limit,
      args.lastEvaluatedKey,
    ],
    description: 'List all subscribers',
    parameters: {
      type: 'object',
      properties: {
        tagName: { type: 'string', description: 'Tag name to filter subscribers' },
        tagValue: { type: 'string', description: 'Tag value to filter subscribers' },
        statusFilter: { type: 'string', description: 'Filter by subscriber status' },
      },
      required: [],
    },
  },
  getSubscriber: {
    fn: SubscriberService.getSubscriber,
    args: (args: any) => [args.imsi],
    description: 'Get details of a subscriber',
    parameters: {
      type: 'object',
      properties: {
        imsi: { type: 'string', description: 'IMSI of the subscriber' },
      },
      required: ['imsi'],
    },
  },
};
