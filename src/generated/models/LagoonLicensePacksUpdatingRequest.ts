/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LagoonLicensePacksUpdatingRequest = {
    licensePackQuantities?: Array<{
        desiredQuantity?: number;
        /**
         * 個数を変更するライセンスパックを指定します。
         * - `basicUser`: ユーザー追加パック。
         * - `basicDashboard`: ダッシュボード追加パック。
         *
         */
        licensePackName?: 'basicUser' | 'basicDashboard';
    }>;
};

