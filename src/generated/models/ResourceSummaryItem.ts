/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceSummaryItemDimension } from './ResourceSummaryItemDimension';
import type { ResourceSummaryItemValue } from './ResourceSummaryItemValue';
export type ResourceSummaryItem = {
    /**
     * リソースの要約アイテムのディメンションの一覧。
     */
    dimensions?: Array<ResourceSummaryItemDimension>;
    /**
     * リソースの要約アイテムの最終更新日時 (UNIX 時間 (ミリ秒))。
     */
    updatedTime?: number;
    /**
     * リソースの要約アイテムの集計値の一覧。
     */
    values?: Array<ResourceSummaryItemValue>;
};

