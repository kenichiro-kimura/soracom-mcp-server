/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SimCostBreakdown } from './SimCostBreakdown';
export type BillingSummaryResponseOfSims = {
    /**
     * 利用料金のリスト。合計金額順に降順でソートされ、上位 100 件まで出力します。
     */
    costBreakdownList?: Array<SimCostBreakdown>;
    /**
     * 通貨
     */
    currency?: BillingSummaryResponseOfSims.currency;
    /**
     * サマリーの最終更新日時 (UNIX 時間 (秒))
     */
    updatedTime?: number;
    /**
     * 年月
     */
    yearMonth?: string;
};
export namespace BillingSummaryResponseOfSims {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
}

