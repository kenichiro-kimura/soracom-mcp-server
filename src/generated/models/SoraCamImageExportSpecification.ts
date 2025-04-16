/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SoraCamExportImageToHarvestFiles } from './SoraCamExportImageToHarvestFiles';
export type SoraCamImageExportSpecification = {
    harvestFiles?: SoraCamExportImageToHarvestFiles;
    /**
     * エクスポートした静止画に適用するフィルタ
     */
    imageFilters?: Array<'wide_angle_correction'>;
    /**
     * エクスポート対象の時刻 (UNIX 時間 (ミリ秒))。指定した時刻に撮影された録画映像から静止画がエクスポートされます。
     */
    time: number;
};

