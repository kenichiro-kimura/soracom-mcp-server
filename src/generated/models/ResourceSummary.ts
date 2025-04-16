/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceSummaryItem } from './ResourceSummaryItem';
export type ResourceSummary = {
    /**
     * リソースの要約アイテムの一覧。
     */
    resourceSummaryItems?: Array<ResourceSummaryItem>;
    /**
     * リソースの要約の種別。
     *
     * - `simsPerStatus`: ステータスごとの IoT SIM の数。
     *
     */
    resourceSummaryType?: string;
};

