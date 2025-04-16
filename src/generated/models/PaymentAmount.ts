/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Payment amount
 */
export type PaymentAmount = {
    /**
     * 通貨
     */
    currency?: PaymentAmount.currency;
    paymentAmount?: number;
    subTotalAmount?: number;
    /**
     * 税額
     */
    taxAmount?: number;
    /**
     * 非課税小計
     */
    taxFreeSubTotalAmount?: number;
    taxRate?: Record<string, any>;
    /**
     * 課税小計
     */
    taxableSubTotalAmount?: number;
    /**
     * 合計額 (税込)
     */
    totalAmount?: number;
    /**
     * 源泉徴収税額
     */
    withholdingTaxAmount?: number;
};
export namespace PaymentAmount {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
}

