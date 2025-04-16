/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetVolumeDiscountResponse = {
    /**
     * 契約日時
     */
    contractDateTime?: string;
    /**
     * 契約 ID
     */
    contractId?: string;
    /**
     * 契約月数
     */
    contractTermMonth?: number;
    /**
     * 通貨
     */
    currency?: GetVolumeDiscountResponse.currency;
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
     * ステータス
     */
    status?: GetVolumeDiscountResponse.status;
    /**
     * 単価
     */
    unitPrice?: number;
    /**
     * お支払い方法
     */
    volumeDiscountPaymentType?: GetVolumeDiscountResponse.volumeDiscountPaymentType;
    /**
     * 料金計算方法
     */
    volumeDiscountType?: GetVolumeDiscountResponse.volumeDiscountType;
};
export namespace GetVolumeDiscountResponse {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
    /**
     * ステータス
     */
    export enum status {
        ACTIVE = 'active',
        EXPIRED = 'expired',
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

