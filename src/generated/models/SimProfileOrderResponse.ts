/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * eSIM プロファイルの発注。
 */
export type SimProfileOrderResponse = {
    /**
     * 注文した eSIM プロファイルのバンドル。
     */
    bundles?: Array<string>;
    /**
     * 注文処理完了日時 (UNIX 時間 (ミリ秒))。
     */
    completedTime?: number;
    /**
     * 発注確定日時 (UNIX 時間 (ミリ秒))。
     */
    confirmedTime?: number;
    /**
     * 注文の説明。
     */
    description?: string;
    /**
     * 仮発注日時 (UNIX 時間 (ミリ秒))。
     */
    orderedTime: number;
    /**
     * 注文 ID。
     */
    profileOrderId: string;
    /**
     * 注文した eSIM プロファイルの数量。
     */
    quantity: number;
    /**
     * 注文した eSIM プロファイルの速度クラス。
     */
    speedClass?: string;
    /**
     * 注文のステータス。
     *
     * - `DRAFT`: 仮発注
     * - `CONFIRMED`: 発注確定済み
     * - `IN_PROGRESS`: 注文処理中
     * - `COMPLETED`: 注文処理完了
     * - `FAILED`: 注文処理失敗
     *
     */
    status: SimProfileOrderResponse.status;
    /**
     * 注文した eSIM プロファイルのサブスクリプション。
     *
     * - `plan01s`
     * - `planP1`
     * - `planX1`
     * - `planX2`
     * - `planX3`
     * - `plan-US`
     *
     */
    subscription: string;
};
export namespace SimProfileOrderResponse {
    /**
     * 注文のステータス。
     *
     * - `DRAFT`: 仮発注
     * - `CONFIRMED`: 発注確定済み
     * - `IN_PROGRESS`: 注文処理中
     * - `COMPLETED`: 注文処理完了
     * - `FAILED`: 注文処理失敗
     *
     */
    export enum status {
        DRAFT = 'DRAFT',
        CONFIRMED = 'CONFIRMED',
        IN_PROGRESS = 'IN_PROGRESS',
        COMPLETED = 'COMPLETED',
        FAILED = 'FAILED',
    }
}

