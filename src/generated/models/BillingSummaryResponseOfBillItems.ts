/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillItemCostBreakdown } from './BillItemCostBreakdown';
export type BillingSummaryResponseOfBillItems = {
    /**
     * 利用料金のリスト。合計金額順に降順でソートされます。
     */
    costBreakdownList?: Array<BillItemCostBreakdown>;
    /**
     * 通貨
     */
    currency?: BillingSummaryResponseOfBillItems.currency;
    /**
     * サマリーの最終更新日時 (UNIX 時間 (秒))
     */
    updatedTime?: number;
    /**
     * 年月
     */
    yearMonth?: string;
};
export namespace BillingSummaryResponseOfBillItems {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
}

