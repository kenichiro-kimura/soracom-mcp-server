/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentAmount } from './PaymentAmount';
import type { PaymentDescription } from './PaymentDescription';
export type GetPaymentTransactionResult = {
    /**
     * 課金額
     */
    amount?: PaymentAmount;
    /**
     * 課金内容詳細
     */
    description?: PaymentDescription;
    /**
     * メッセージ
     */
    message?: string;
    /**
     * メッセージコード
     */
    messageCode?: GetPaymentTransactionResult.messageCode;
    /**
     * ステータス
     */
    status?: GetPaymentTransactionResult.status;
};
export namespace GetPaymentTransactionResult {
    /**
     * メッセージコード
     */
    export enum messageCode {
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
     * ステータス
     */
    export enum status {
        SUCCESS = 'success',
        ERROR = 'error',
    }
}

