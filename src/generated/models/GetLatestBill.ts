/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetLatestBill = {
    /**
     * 金額
     */
    amount?: number;
    /**
     * 通貨
     */
    currency?: GetLatestBill.currency;
    /**
     * 利用額計算を実施した時間
     */
    lastEvaluatedTime?: string;
};
export namespace GetLatestBill {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
}

