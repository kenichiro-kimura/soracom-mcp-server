/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogService } from '../../generated/services/LogService';
import { ToolDefinition } from './index';

export const logToolsMap: Record<string, ToolDefinition>  = {
  getLogs: {
    fn: LogService.getLogs,
    args: (args: any) => [args.target, args.start, args.end, args.limit],
    description: 'Get logs for a target',
    parameters: {
      type: 'object',
      properties: {
        target: { type: 'string', description: 'Log target' },
        start: { type: 'string', description: 'Start time' },
        end: { type: 'string', description: 'End time' },
        limit: { type: 'number', description: 'Limit number of logs' },
      },
      required: ['target'],
    },
  },
};
