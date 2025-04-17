import { GroupService } from '../../generated/services/GroupService';
import { ToolDefinition } from './index';

export const groupToolsMap: Record<string, ToolDefinition>  = {
  listGroups: {
    fn: GroupService.listGroups,
    args: (args: any) => [
      args.tagName,
      args.tagValue,
      args.limit,
      args.lastEvaluatedKey,
    ],
    description: 'List all groups',
    parameters: {
      type: 'object',
      properties: {
        tagName: { type: 'string', description: 'Tag name to filter groups' },
        tagValue: { type: 'string', description: 'Tag value to filter groups' },
        limit: { type: 'number', description: 'Limit number of groups' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
      },
      required: [],
    },
  },
  getGroup: {
    fn: GroupService.getGroup,
    args: (args: any) => [args.groupId],
    description: 'Get details of a group',
    parameters: {
      type: 'object',
      properties: {
        groupId: { type: 'string', description: 'Group ID' },
      },
      required: ['groupId'],
    },
  },
};
