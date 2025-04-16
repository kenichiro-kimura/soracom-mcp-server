/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CouponResponse = {
    /**
     * クーポン額
     */
    amount?: number;
    /**
     * 残高
     */
    balance?: number;
    /**
     * 対象課金アイテム
     */
    billItemName?: string;
    /**
     * クーポンコード
     */
    couponCode?: string;
    /**
     * 通貨
     */
    currency?: CouponResponse.currency;
    /**
     * 有効期限
     */
    expiryYearMonth?: string;
    /**
     * 発注 ID
     */
    orderId?: string;
};
export namespace CouponResponse {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
}

