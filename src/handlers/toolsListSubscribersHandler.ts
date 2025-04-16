import { subscriberToolsMap } from './toolsMap/subscriberToolsMap';

export const listSubscribersTool = {
  name: 'listSubscribers',
  description: subscriberToolsMap.listSubscribers.description,
  inputSchema: subscriberToolsMap.listSubscribers.parameters,
};

export const getSubscriberTool = {
  name: 'getSubscriber',
  description: subscriberToolsMap.getSubscriber.description,
  inputSchema: subscriberToolsMap.getSubscriber.parameters,
};
