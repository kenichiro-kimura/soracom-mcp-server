/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LagoonRegistrationRequest = {
    plan?: LagoonRegistrationRequest.plan;
    /**
     * はじめに作成される Lagoon ユーザーのパスワード。
     */
    userPassword?: string;
};
export namespace LagoonRegistrationRequest {
    export enum plan {
        FREE = 'free',
        MAKER = 'maker',
        PRO = 'pro',
    }
}

