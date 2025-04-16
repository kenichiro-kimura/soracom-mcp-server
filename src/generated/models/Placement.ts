/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Placement = {
    infrastructureProvider?: Placement.infrastructureProvider;
    /**
     * `infrastructureProvider` が `aws` の場合は、ランデブーポイントです。
     *
     * - `ap-northeast-1`: 東京 (日本)。日本カバレッジのデフォルトです。
     * - `eu-central-1`: フランクフルト (ドイツ)。グローバルカバレッジのデフォルトです。
     * - `us-west-2`: オレゴン (米国)。
     * - `ap-southeast-2`: シドニー (オーストラリア)。
     *
     */
    region?: Placement.region;
};
export namespace Placement {
    export enum infrastructureProvider {
        AWS = 'aws',
    }
    /**
     * `infrastructureProvider` が `aws` の場合は、ランデブーポイントです。
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
}

