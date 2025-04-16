/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagSet } from './TagSet';
export type CreateVirtualPrivateGatewayRequest = {
    deviceSubnetCidrRange?: string;
    placement?: {
        /**
         * VPG の [ランデブーポイント](/ja-jp/docs/rendezvous-point/)。
         *
         * - `ap-northeast-1`: 東京 (日本)。日本カバレッジのデフォルトです。
         * - `eu-central-1`: フランクフルト (ドイツ)。グローバルカバレッジのデフォルトです。
         * - `us-west-2`: オレゴン (米国)。
         * - `ap-southeast-2`: シドニー (オーストラリア)。
         *
         */
        region?: CreateVirtualPrivateGatewayRequest.region;
    };
    soracomTransitGateway?: {
        asn?: number;
    };
    tags?: TagSet;
    /**
     * VPG のタイプ
     *
     * - `14` : Type-E
     * - `15` : Type-F
     *
     */
    type: CreateVirtualPrivateGatewayRequest.type;
    useInternetGateway?: boolean;
};
export namespace CreateVirtualPrivateGatewayRequest {
    /**
     * VPG の [ランデブーポイント](/ja-jp/docs/rendezvous-point/)。
     *
     * - `ap-northeast-1`: 東京 (日本)。日本カバレッジのデフォルトです。
     * - `eu-central-1`: フランクフルト (ドイツ)。グローバルカバレッジのデフォルトです。
     * - `us-west-2`: オレゴン (米国)。
     * - `ap-southeast-2`: シドニー (オーストラリア)。
     *
     */
    export enum region {
        AP_NORTHEAST_1 = 'ap-northeast-1',
        EU_CENTRAL_1 = 'eu-central-1',
        US_WEST_2 = 'us-west-2',
        AP_SOUTHEAST_2 = 'ap-southeast-2',
    }
    /**
     * VPG のタイプ
     *
     * - `14` : Type-E
     * - `15` : Type-F
     *
     */
    export enum type {
        '_14' = 14,
        '_15' = 15,
        '_242' = 242,
    }
}

