/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TransitGatewayPeeringConnection = {
    /**
     * ピアリング接続の作成日時
     */
    createdTime?: number;
    /**
     * ピア Transit Gateway の AWS アカウント ID
     */
    customerAwsAccountId?: string;
    /**
     * ピア Transit Gateway の AWS リージョン
     */
    customerRegion?: string;
    /**
     * ピア Transit Gateway ID
     */
    customerTransitGatewayId?: string;
    /**
     * Transit Gateway ピアリングアタッチメント ID。Transit Gateway ピアリング接続の一意の ID です。
     */
    id?: string;
    /**
     * ピアリング接続の最終更新日時
     */
    lastModifiedTime?: number;
    /**
     * Transit Gateway ピアリング接続のユーザー定義名
     */
    name?: string;
    /**
     * Transit Gateway ピアリングアタッチメント ID。Transit Gateway ピアリング接続の一意の ID です。
     */
    soracomTransitGatewayPeeringAttachmentId?: string;
    /**
     * Transit Gateway ピアリング接続の現在のステータス
     */
    status?: TransitGatewayPeeringConnection.status;
};
export namespace TransitGatewayPeeringConnection {
    /**
     * Transit Gateway ピアリング接続の現在のステータス
     */
    export enum status {
        PENDING = 'pending',
        ACTIVE = 'active',
    }
}

