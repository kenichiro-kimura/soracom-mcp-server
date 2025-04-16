/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DailyBill = {
    /**
     * 金額
     */
    amount?: number;
    /**
     * 通貨
     */
    currency?: DailyBill.currency;
    /**
     * 年月日
     */
    date?: string;
};
export namespace DailyBill {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
}

