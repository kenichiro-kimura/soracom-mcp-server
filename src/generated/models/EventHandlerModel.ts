/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionConfig } from './ActionConfig';
import type { RuleConfig } from './RuleConfig';
export type EventHandlerModel = {
    actionConfigList: Array<ActionConfig>;
    description?: string;
    handlerId: string;
    name: string;
    ruleConfig: RuleConfig;
    status: EventHandlerModel.status;
    targetGroupId?: string;
    targetImsi?: string;
    targetOperatorId?: string;
    targetSimId?: string;
};
export namespace EventHandlerModel {
    export enum status {
        INACTIVE = 'inactive',
        ACTIVE = 'active',
    }
}

