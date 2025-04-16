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
  },
  getSubscriber: {
    fn: SubscriberService.getSubscriber,
    args: (args: any) => [args.imsi],
  },
};
