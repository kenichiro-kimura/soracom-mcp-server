/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 発送料
 */
export type ShippingCostModel = {
    /**
     * 適用済み配送オプション
     */
    appliedShippingOptions?: Array<Record<string, any>>;
    /**
     * 通貨
     */
    currency?: ShippingCostModel.currency;
    /**
     * (日本カバレッジのみ) 発送先エリア
     */
    shippingArea?: ShippingCostModel.shippingArea;
    /**
     * 発送先エリア名称
     */
    shippingAreaName?: string;
    /**
     * 送料
     */
    shippingCost?: number;
    /**
     * 発送サイズ
     */
    size?: number;
};
export namespace ShippingCostModel {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
    /**
     * (日本カバレッジのみ) 発送先エリア
     */
    export enum shippingArea {
        HOKKAIDO = 'hokkaido',
        KITA_TOHOKU = 'kita_tohoku',
        MINAMI_TOHOKU = 'minami_tohoku',
        KANTO = 'kanto',
        SHINETSU = 'shinetsu',
        CHUBU = 'chubu',
        HOKURIKU = 'hokuriku',
        KANSAI = 'kansai',
        CHUGOKU = 'chugoku',
        SHIKOKU = 'shikoku',
        KYUSHU = 'kyushu',
        OKINAWA = 'okinawa',
    }
}

