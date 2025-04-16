/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PaymentStatementResponse = {
    /**
     * 金額
     */
    amount?: number;
    /**
     * この請求に含まれる利用年月のリスト。請求内容が月額費用でない場合は、このフィールドは省略されます。月額利用料金が一定金額未満の場合は翌月に繰り越されることがあり、そのようなケースでは複数月含まれることがあります。
     */
    chargedYearMonths?: Array<string>;
    /**
     * 通貨
     */
    currency?: PaymentStatementResponse.currency;
    /**
     * オーダーID。請求内容がオーダーでない場合は、このフィールドは省略されます。
     */
    orderId?: string;
    /**
     * 課金日時
     */
    paymentDateTime?: number;
    /**
     * 支払情報
     */
    paymentInstrument?: string;
    /**
     * 支払方法
     */
    paymentMethod?: string;
    /**
     * 課金明細 ID
     */
    paymentStatementId?: string;
    /**
     * 支払内容
     */
    paymentStatementInfo?: string;
};
export namespace PaymentStatementResponse {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
}

