/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionConfig } from './ActionConfig';
import type { RuleConfig } from './RuleConfig';
export type CreateEventHandlerRequest = {
    /**
     * アクションタイプ。詳しくは、[アクションタイプ一覧](/ja-jp/docs/event-handler/actions/) を参照してください。
     *
     */
    actionConfigList: Array<ActionConfig>;
    /**
     * 概要。
     */
    description?: string;
    /**
     * イベント名。
     */
    name: string;
    /**
     * ルール。詳しくは、[ルールタイプ一覧](/ja-jp/docs/event-handler/rules/) を参照してください。
     *
     */
    ruleConfig: RuleConfig;
    /**
     * イベントハンドラーの有効 / 無効。
     *
     * - `active`: 有効
     * - `inactive`: 無効
     *
     */
    status: CreateEventHandlerRequest.status;
    /**
     * 監視対象のグループ。グループに所属するすべての IoT SIM が監視されます。
     *
     * `targetGroupId`、`targetImsi`、`targetOperatorId`、`targetSimId` のいずれか 1 つを指定してください。
     *
     */
    targetGroupId?: string;
    /**
     * 監視対象の IoT SIM の IMSI。
     *
     * `targetGroupId`、`targetImsi`、`targetOperatorId`、`targetSimId` のいずれか 1 つを指定してください。
     *
     */
    targetImsi?: string;
    /**
     * 監視対象のオペレーター。オペレーターが保有するすべての IoT SIM が監視されます。
     *
     * `targetGroupId`、`targetImsi`、`targetOperatorId`、`targetSimId` のいずれか 1 つを指定してください。
     *
     */
    targetOperatorId?: string;
    /**
     * 監視対象の IoT SIM の SIM ID。
     *
     * `targetGroupId`、`targetImsi`、`targetOperatorId`、`targetSimId` のいずれか 1 つを指定してください。
     *
     */
    targetSimId?: string;
};
export namespace CreateEventHandlerRequest {
    /**
     * イベントハンドラーの有効 / 無効。
     *
     * - `active`: 有効
     * - `inactive`: 無効
     *
     */
    export enum status {
        INACTIVE = 'inactive',
        ACTIVE = 'active',
    }
}

