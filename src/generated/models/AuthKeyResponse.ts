/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AuthKeyResponse = {
    /**
     * 認証キーの ID。
     */
    authKeyId: string;
    /**
     * 認証キーの作成日時 (UNIX 時間 (秒))。
     */
    createDateTime: number;
    /**
     * 認証キーの最終使用日時 (UNIX 時間 (秒))。
     */
    lastUsedDateTime?: number;
};

