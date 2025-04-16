/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetPaymentMethodResult = {
    /**
     * エラーコード (支払い情報が無効な場合のみ)
     */
    errorCode?: GetPaymentMethodResult.errorCode;
    /**
     * エラーメッセージ (支払い情報が無効な場合のみ)
     */
    errorMessage?: string;
    /**
     * 支払い情報
     */
    properties?: string;
    /**
     * 課金プロバイダ種別
     */
    providerType?: GetPaymentMethodResult.providerType;
    /**
     * 登録日
     */
    updateDate?: string;
};
export namespace GetPaymentMethodResult {
    /**
     * エラーコード (支払い情報が無効な場合のみ)
     */
    export enum errorCode {
        SUCCESS = 'success',
        PROCESSING = 'processing',
        INVALID_REQUEST = 'invalid_request',
        INVALID_NUMBER = 'invalid_number',
        INCORRECT_NUMBER = 'incorrect_number',
        INVALID_NAME = 'invalid_name',
        INVALID_EXPIRY_MONTH = 'invalid_expiry_month',
        INVALID_EXPIRY_YEAR = 'invalid_expiry_year',
        INVALID_EXPIRY = 'invalid_expiry',
        INCORRECT_EXPIRY = 'incorrect_expiry',
        INVALID_CVC = 'invalid_cvc',
        INCORRECT_CVC = 'incorrect_cvc',
        CARD_DECLINED = 'card_declined',
        MISSING = 'missing',
        PROCESSING_ERROR = 'processing_error',
    }
    /**
     * 課金プロバイダ種別
     */
    export enum providerType {
        WEB_PAY = 'WebPay',
    }
}

