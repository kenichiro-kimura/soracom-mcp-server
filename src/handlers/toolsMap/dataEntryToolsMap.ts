/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataEntryService } from '../../generated/services/DataEntryService';
import { ToolDefinition } from './index';

export const dataEntryToolsMap: Record<string, ToolDefinition> = {
  getDataEntries: {
    fn: DataEntryService.getDataEntries,
    args: (args: any) => [
      args.resourceType,
      args.resourceId,
      args.time,
    ],
    description: 'Retrieve a list of data entries from a specific resource',
    parameters: {
      type: 'object',
      properties: {
        resourceType: {
          type: 'string',
          description: 'Type of the data source resource',
          enum: ['Subscriber', 'LoraDevice', 'Sim', 'SigfoxDevice', 'Device', 'SoraCam'],
        },
        resourceId: { type: 'string', description: 'ID of the data source resource' },
        from: { type: 'number', description: 'Start of the time range (UNIX timestamp in ms)' },
        to: { type: 'number', description: 'End of the time range (UNIX timestamp in ms)' },
        sort: {
          type: 'string',
          description: 'Sort order',
          enum: ['desc', 'asc'],
        },
        limit: { type: 'number', description: 'Maximum number of data entries to retrieve' },
        lastEvaluatedKey: {
          type: 'string',
          description: 'Key of the last evaluated data entry for pagination',
        },
      },
      required: ['resourceType', 'resourceId'],
    },
  },
  getDataEntry: {
    fn: DataEntryService.getDataEntry,
    args: (args: any) => [args.resourceType, args.resourceId, args.time],
    description: 'Retrieve details of a specific data entry by resource ID and timestamp',
    parameters: {
      type: 'object',
      properties: {
        resourceType: {
          type: 'string',
          description: 'Type of the data source resource',
          enum: ['Subscriber', 'LoraDevice', 'Sim', 'SigfoxDevice', 'Device', 'SoraCam'],
        },
        resourceId: { type: 'string', description: 'ID of the data source resource' },
        time: { type: 'number', description: 'Timestamp of the data entry to retrieve (UNIX timestamp in ms)' },
      },
      required: ['resourceType', 'resourceId', 'time'],
    },
  },
  listDataSourceResources: {
    fn: DataEntryService.listDataSourceResources,
    args: (args: any) => [args.resourceType, args.limit, args.lastEvaluatedKey],
    description: 'List all data source resources for the operator which can be used in the data entry',
    parameters: {
      type: 'object',
      properties: {
        resourceType: {
          type: 'string',
          description: 'Type of the data source resource',
          enum: ['Subscriber', 'LoraDevice', 'Sim', 'SigfoxDevice', 'Device', 'SoraCam'],
        },
        limit: { type: 'number', description: 'Maximum number of resources to retrieve' },
        lastEvaluatedKey: {
          type: 'string',
          description: 'Key of the last evaluated resource for pagination',
        },
      },
      required: [],
    },
  },
};