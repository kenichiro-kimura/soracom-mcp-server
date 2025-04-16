/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SoraCamImageExportUsage } from './SoraCamImageExportUsage';
import type { SoraCamVideoExportUsage } from './SoraCamVideoExportUsage';
export type SoraCamExportUsage = {
    /**
     * ソラカメ対応カメラのデバイス ID
     */
    deviceId: string;
    /**
     * 動画のエクスポート可能時間について、すべて静止画でエクスポートしたとみなした場合の静止画の枚数。
     */
    image: SoraCamImageExportUsage;
    /**
     * 動画のエクスポート可能時間の対象年月 (フォーマット: 'YYYYMM')。`202301` の場合は、2023 年 1 月の動画のエクスポート可能時間が出力されていることを表します。
     */
    meteredYearMonth: string;
    /**
     * 動画のエクスポート可能時間について、すべて動画でエクスポートしたとみなした場合の動画の秒数。
     */
    video: SoraCamVideoExportUsage;
};

