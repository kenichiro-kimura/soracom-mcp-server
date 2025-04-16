/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SoraCamExportVideoToHarvestFiles } from './SoraCamExportVideoToHarvestFiles';
export type SoraCamVideoExportSpecification = {
    /**
     * エクスポート対象の開始時刻 (UNIX 時間 (ミリ秒))
     */
    from: number;
    harvestFiles?: SoraCamExportVideoToHarvestFiles;
    /**
     * エクスポート対象の終了時刻 (UNIX 時間 (ミリ秒))
     *
     * - 一回の API 呼び出しでエクスポートできる時間は最大 900 秒 (15 分) です。`from` と `to` の差が、900 秒を超えないようにしてください。
     *
     */
    to: number;
};

