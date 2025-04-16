import { LogService } from '../../generated/services/LogService';

export const logToolsMap = {
  getLogs: {
    fn: LogService.getLogs,
    args: (args: any) => [
      args.resourceType,
      args.resourceId,
      args.service,
      args.from,
      args.to,
      args.limit,
      args.lastEvaluatedKey,
    ],
  },
};
