/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Long term discount
 */
export type VolumeDiscountModel = {
    /**
     * 契約月数
     */
    contractTermMonth?: number;
    /**
     * 通貨
     */
    currency?: VolumeDiscountModel.currency;
    /**
     * 適用終了日
     */
    endDate?: string;
    /**
     * 初期費用
     */
    initialCost?: number;
    /**
     * 数量
     */
    quantity?: number;
    /**
     * 適用開始日
     */
    startDate?: string;
    /**
     * 税込初期費用
     */
    taxIncludedInitialCost?: number;
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
    volumeDiscountPaymentType?: VolumeDiscountModel.volumeDiscountPaymentType;
    /**
     * 料金計算方法
     */
    volumeDiscountType?: VolumeDiscountModel.volumeDiscountType;
};
export namespace VolumeDiscountModel {
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

