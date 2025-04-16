/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type APIAuditLogEntry = {
    /**
     * API 種別 (例: `/v1/auth`)。
     */
    apiKind?: string;
    /**
     * API を呼び出したオペレーター ID。
     */
    operatorId?: string;
    /**
     * API の呼び出し元 IP アドレス。
     */
    remoteIpAddress?: string;
    /**
     * リクエストされた API のパス。
     */
    requestPath?: string;
    /**
     * API が呼び出された時刻。この値はページネーションのために `last_evaluated_key` リクエストパラメータに利用することができます。
     */
    requestedTimeEpochMs?: number;
    /**
     * API を呼び出した SAM ユーザー名。もしこの値が空の場合は呼び出しユーザーは root ユーザーです。
     */
    userName?: string;
};

