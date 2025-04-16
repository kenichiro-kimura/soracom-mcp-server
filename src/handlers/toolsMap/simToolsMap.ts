import { SimService } from '../../generated/services/SimService';

export const simToolsMap = {
  listSims: {
    fn: SimService.listSims,
    args: (args: any) => [args.limit, args.lastEvaluatedKey],
  },
  getSim: {
    fn: SimService.getSim,
    args: (args: any) => [args.simId],
  },
};
