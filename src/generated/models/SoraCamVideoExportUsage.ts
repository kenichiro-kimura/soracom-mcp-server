/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamVideoExportUsage = {
    /**
     * 課金対象の動画のエクスポート可能時間について、すべて動画でエクスポートしたとみなした場合の動画の秒数。つまり、0 のときは課金が発生していません。なお、課金額の計算には、`billedSeconds` のみが使用されます。
     */
    billedSeconds: number;
    /**
     * 動画のエクスポート可能時間の上限まで、すべて動画でエクスポートしたとみなした場合の動画の秒数。動画のエクスポート可能時間の上限が、動画の秒数で出力されます。
     */
    limitSeconds: number;
    /**
     * 動画のエクスポート可能時間の上限まで、すべて動画でエクスポートすると仮定した場合の、エクスポート可能な動画の秒数。`limitSeconds` から `usedSeconds` を引いた値です。
     */
    remainingSeconds: number;
    /**
     * 当月に消費した動画のエクスポート可能時間を、すべて動画でエクスポートしたとみなした場合の、エクスポートした動画の秒数。
     */
    usedSeconds: number;
};

