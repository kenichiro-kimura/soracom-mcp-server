/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EstimatedCouponModel = {
    /**
     * クーポン額
     */
    amount?: number;
    /**
     * 通貨
     */
    currency?: EstimatedCouponModel.currency;
    /**
     * 有効期限
     */
    expiryYearMonth?: string;
    /**
     * 発注 ID
     */
    orderId?: string;
    /**
     * 消費税
     */
    taxAmount?: number;
    /**
     * 合計金額
     */
    totalAmount?: number;
};
export namespace EstimatedCouponModel {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
}

