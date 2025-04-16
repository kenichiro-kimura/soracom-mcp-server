/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ResourceSummaryItemValue = {
    /**
     * リソースの要約アイテムの集計値の名前。
     *
     * - `resourceSummaryType` が `simsPerStatus` の場合:
     * - `readySims`: ステータスが「準備完了 (ready)」の IoT SIM の数。
     * - `activeSims`: ステータスが「使用中 (active)」の IoT SIM の数。
     * - `inactiveSims`: ステータスが「休止中 (inactive)」の IoT SIM の数。
     * - `standbySims`: ステータスが「利用開始待ち (standby)」の IoT SIM の数。
     * - `suspendedSims`: ステータスが「利用中断中 (suspended)」の IoT SIM の数。
     *
     */
    name?: string;
    /**
     * リソースの要約アイテムの集計値の値。
     */
    value?: number;
};

