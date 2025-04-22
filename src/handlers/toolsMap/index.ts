/* eslint-disable @typescript-eslint/no-explicit-any */
import * as subscriberToolsMap from './subscriberToolsMap';
import * as simToolsMap from './simToolsMap';
import * as groupToolsMap from './groupToolsMap';
import * as billingToolsMap from './billingToolsMap';
import * as logToolsMap from './logToolsMap';
import * as orderToolsMap from './orderToolsMap';
import * as soraCamToolsMap from './soraCamToolsMap';
import * as soraletToolsMap from './soraletToolsMap';
import * as dataEntryToolsMap from './dataEntryToolsMap';

export type ToolDefinition = {
  fn: (...args: any[]) => Promise<any>;
  args: (args: any) => any[];
  description: string;
  parameters: any;
};

export const toolsMap: Record<string, ToolDefinition> = {
  ...Object.values(subscriberToolsMap).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  ...Object.values(simToolsMap).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  ...Object.values(groupToolsMap).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  ...Object.values(billingToolsMap).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  ...Object.values(logToolsMap).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  ...Object.values(orderToolsMap).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  ...Object.values(soraCamToolsMap).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  ...Object.values(soraletToolsMap).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  ...Object.values(dataEntryToolsMap).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
};