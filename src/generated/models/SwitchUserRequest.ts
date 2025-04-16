/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SwitchUserRequest = {
    /**
     * スイッチ先のオペレーター ID。
     */
    operatorId?: string;
    /**
     * スイッチ先のユーザーの API キーと API トークンの有効期間 (秒)。デフォルトは、3600 秒 (1 時間) です。また、最小値と最大値は以下のとおりです。
     *
     * - 最小値: 180 秒 (3 分)
     * - 最大値: 3600 秒 (1 時間)
     *
     */
    tokenTimeoutSeconds?: number;
    /**
     * スイッチ先の SAM ユーザー名。
     */
    userName?: string;
};

