import { GroupService } from '../../generated/services/GroupService';

export const groupToolsMap = {
  listGroups: {
    fn: GroupService.listGroups,
    args: (args: any) => [
      args.tagName,
      args.tagValue,
      args.tagValueMatchMode,
      args.limit,
      args.lastEvaluatedKey,
    ],
  },
  getGroup: {
    fn: GroupService.getGroup,
    args: (args: any) => [args.groupId],
  },
};
