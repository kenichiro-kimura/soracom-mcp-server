/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GenerateTokenRequest = {
    /**
     * 新しい API トークンの有効期限の長さ (秒)。
     * 指定しなければデフォルトは 86400 [秒] (24 時間)。
     * 最大値は 172800 [秒] (48 時間)。
     *
     */
    tokenTimeoutSeconds?: number;
};

