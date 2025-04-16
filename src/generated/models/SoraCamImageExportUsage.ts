/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamImageExportUsage = {
    /**
     * 課金対象の動画のエクスポート可能時間について、すべて静止画でエクスポートしたとみなした場合の静止画の枚数。つまり、0 のときは課金が発生していません。なお、課金額の計算には、`billedSeconds` のみが使用されます。
     */
    billedFrames: number;
    /**
     * 動画のエクスポート可能時間の上限まで、すべて静止画でエクスポートしたとみなした場合の静止画の枚数。動画のエクスポート可能時間の上限が、静止画の枚数で出力されます。
     */
    limitFrames: number;
    /**
     * 動画のエクスポート可能時間の上限まで、すべて静止画でエクスポートすると仮定した場合の、エクスポート可能な静止画の枚数。`limitFrames` から `usedFrames` を引いた値です。
     */
    remainingFrames: number;
    /**
     * 当月に消費した動画のエクスポート可能時間を、すべて静止画でエクスポートしたとみなした場合の、エクスポートした静止画の枚数。
     */
    usedFrames: number;
};

