/* eslint-disable @typescript-eslint/no-explicit-any */
import { SimService } from '../../generated/services/SimService';
import { ToolDefinition } from './index';

export const simToolsMap: Record<string, ToolDefinition>  = {
  listSims: {
    fn: SimService.listSims,
    args: (args: any) => [
      args.tagName,
      args.tagValue,
      args.statusFilter,
      args.limit,
      args.lastEvaluatedKey,
    ],
    description: 'List all SIMs',
    parameters: {
      type: 'object',
      properties: {
        tagName: { type: 'string', description: 'Tag name to filter SIMs' },
        tagValue: { type: 'string', description: 'Tag value to filter SIMs' },
        statusFilter: { type: 'string', description: 'Filter by SIM status' },
      },
      required: [],
    },
  },
  getSim: {
    fn: SimService.getSim,
    args: (args: any) => [args.sim_id],
    description: 'Get details of a SIM',
    parameters: {
      type: 'object',
      properties: {
        sim_id: { type: 'string', description: 'SIM ID' },
      },
      required: ['sim_id'],
    },
  },
};
