/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VolumeDiscountModel } from './VolumeDiscountModel';
export type EstimatedVolumeDiscountModel = {
    /**
     * 通貨
     */
    currency?: EstimatedVolumeDiscountModel.currency;
    /**
     * 発注 ID
     */
    orderId?: string;
    /**
     * 消費税
     */
    taxAmount?: number;
    /**
     * 合計金額
     */
    totalAmount?: number;
    volumeDiscount?: VolumeDiscountModel;
};
export namespace EstimatedVolumeDiscountModel {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
}

