/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamDeviceLicenseInfo = {
    /**
     * ソラカメ対応カメラに適用されているライセンスの名前
     *
     * - `Cloud Continuous Recording License (x Days)` もしくは `クラウド常時録画ライセンス (x 日間)`
     * - `Cloud Motion Detection "Unlimited" Recording License (x Days)` もしくは `クラウドモーション検知 "無制限" 録画ライセンス (x 日間)`
     *
     */
    name: string;
    /**
     * ソラカメ対応カメラに適用されているライセンスのプロパティ
     *
     * `name` が `Cloud Continuous Recording License (x Days)` もしくは `クラウド常時録画ライセンス (x 日間)` もしくは
     * `Cloud Motion Detection "Unlimited" Recording License (x Days)` もしくは `クラウドモーション検知 "無制限" 録画ライセンス (x 日間)` の場合:
     *
     * - `storage_life`: 保存期間
     *
     */
    value: string;
};

