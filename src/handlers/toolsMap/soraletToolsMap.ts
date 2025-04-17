import { SoraletService } from '../../generated/services/SoraletService';
import { ToolDefinition } from './index';

export const soraletToolsMap: Record<string, ToolDefinition> = {
  listSoralets: {
    fn: SoraletService.listSoralets,
    args: (args: any) => [args.sort, args.limit, args.lastEvaluatedKey],
    description: 'Retrieve a list of Soralets',
    parameters: {
      type: 'object',
      properties: {
        sort: { type: 'string', description: 'Sort order' },
        limit: { type: 'number', description: 'Limit number of Soralets' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
      },
      required: [],
    },
  },
  getSoralet: {
    fn: SoraletService.getSoralet,
    args: (args: any) => [args.soraletId],
    description: 'Retrieve details of a Soralet',
    parameters: {
      type: 'object',
      properties: {
        soraletId: { type: 'string', description: 'Soralet ID' },
      },
      required: ['soraletId'],
    },
  },
  getSoraletLogs: {
    fn: SoraletService.getSoraletLogs,
    args: (args: any) => [args.soraletId, args.sort, args.limit, args.lastEvaluatedKey],
    description: 'Retrieve logs of a Soralet',
    parameters: {
      type: 'object',
      properties: {
        soraletId: { type: 'string', description: 'ID of the Soralet' },
        sort: { type: 'string', description: 'Sort order (asc or desc)' },
        limit: { type: 'number', description: 'Maximum number of logs to retrieve' },
        lastEvaluatedKey: { type: 'string', description: 'Last log ID from the previous page' },
      },
      required: ['soraletId'],
    },
  },
  testSoralet: {
    fn: SoraletService.testSoralet,
    args: (args: any) => [args.soraletId, args.requestBody],
    description: 'Test a Soralet with arguments',
    parameters: {
      type: 'object',
      properties: {
        soraletId: { type: 'string', description: 'ID of the Soralet to test' },
        requestBody: { type: 'object', description: 'Request body for testing the Soralet' },
      },
      required: ['soraletId', 'requestBody'],
    },
  },
  listSoraletVersions: {
    fn: SoraletService.listSoraletVersions,
    args: (args: any) => [args.soraletId, args.sort, args.limit, args.lastEvaluatedKey],
    description: 'Retrieve a list of Soralet versions',
    parameters: {
      type: 'object',
      properties: {
        soraletId: { type: 'string', description: 'ID of the Soralet' },
        sort: { type: 'string', description: 'Sort order (asc or desc)' },
        limit: { type: 'number', description: 'Maximum number of versions to retrieve' },
        lastEvaluatedKey: { type: 'string', description: 'Last version ID from the previous page' },
      },
      required: ['soraletId'],
    },
  },
};
