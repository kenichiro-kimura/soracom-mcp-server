/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 日本のオペレーターのみご利用いただけます。
 */
export type ShippingOptionOfNekopos = {
    /**
     * ネコポスの使用を許可する場合は true を指定します。
     */
    allowNekopos?: boolean;
    /**
     * 配送業者。
     */
    shipmentCompany?: ShippingOptionOfNekopos.shipmentCompany;
};
export namespace ShippingOptionOfNekopos {
    /**
     * 配送業者。
     */
    export enum shipmentCompany {
        YAMATO_TRANSPORT = 'yamato_transport',
    }
}

