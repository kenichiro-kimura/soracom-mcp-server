/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateEstimatedVolumeDiscountRequest = {
    /**
     * 契約月数
     */
    contractTermMonth: number;
    /**
     * 数量
     */
    quantity: number;
    /**
     * 適用開始日
     */
    startDate?: string;
    /**
     * お支払い方法
     */
    volumeDiscountPaymentType: CreateEstimatedVolumeDiscountRequest.volumeDiscountPaymentType;
    /**
     * 料金計算方法
     */
    volumeDiscountType: CreateEstimatedVolumeDiscountRequest.volumeDiscountType;
};
export namespace CreateEstimatedVolumeDiscountRequest {
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

