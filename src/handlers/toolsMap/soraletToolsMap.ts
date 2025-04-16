import { SoraletService } from '../../generated/services/SoraletService';

export const soraletToolsMap = {
  listSoralets: {
    fn: SoraletService.listSoralets,
    args: (args: any) => [args.sort, args.limit, args.lastEvaluatedKey],
  },
  getSoralet: {
    fn: SoraletService.getSoralet,
    args: (args: any) => [args.soraletId],
  },
  getSoraletLogs: {
    fn: SoraletService.getSoraletLogs,
    args: (args: any) => [args.soraletId, args.sort, args.limit, args.lastEvaluatedKey],
  },
  testSoralet: {
    fn: SoraletService.testSoralet,
    args: (args: any) => [args.soraletId, args.requestBody],
  },
  listSoraletVersions: {
    fn: SoraletService.listSoraletVersions,
    args: (args: any) => [args.soraletId, args.sort, args.limit, args.lastEvaluatedKey],
  },
};
