/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AvailableLongTermDiscountModel = {
    /**
     * 契約月数
     */
    contractTermMonth?: number;
    /**
     * 通貨
     */
    currency?: AvailableLongTermDiscountModel.currency;
    /**
     * 税込単価
     */
    taxIncludedUnitPrice?: number;
    /**
     * 単価
     */
    unitPrice?: number;
    /**
     * お支払い方法
     */
    volumeDiscountPaymentType?: AvailableLongTermDiscountModel.volumeDiscountPaymentType;
    /**
     * 料金計算方法
     */
    volumeDiscountType?: AvailableLongTermDiscountModel.volumeDiscountType;
};
export namespace AvailableLongTermDiscountModel {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
    /**
     * お支払い方法
     */
    export enum volumeDiscountPaymentType {
        MONTHLY = 'MONTHLY',
        PREPAYMENT = 'PREPAYMENT',
    }
    /**
     * 料金計算方法
     */
    export enum volumeDiscountType {
        SORACOM_AIR_BASIC_CHARGE_V2 = 'SORACOM_AIR_BASIC_CHARGE_V2',
        SORACOM_AIR_BASIC_CHARGE = 'SORACOM_AIR_BASIC_CHARGE',
        SORACOM_AIR_MONTHLY_FIXED_BASIC_CHARGE = 'SORACOM_AIR_MONTHLY_FIXED_BASIC_CHARGE',
    }
}

