/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateTransitGatewayPeeringConnectionRequest = {
    /**
     * ピア Transit Gateway の AWS アカウント ID
     */
    customerAwsAccountId: string;
    /**
     * ピア Transit Gateway の AWS リージョン
     */
    customerRegion: string;
    /**
     * ピア Transit Gateway の AWS Transit Gateway ID
     */
    customerTransitGatewayId: string;
    /**
     * ピアリング接続を識別するために使用される名前
     */
    name?: string;
};

