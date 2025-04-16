/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PriceByQuantity } from './PriceByQuantity';
/**
 * Product
 */
export type ProductModel = {
    /**
     * キャンペーンコード
     */
    campaignCode?: string;
    /**
     * 委託者 ID
     */
    consignorId?: string;
    /**
     * 委託者名
     */
    consignorName?: string;
    /**
     * 入数
     */
    count?: number;
    /**
     * 通貨
     */
    currency?: ProductModel.currency;
    /**
     * 商品詳細
     */
    description?: string;
    /**
     * 注文あたりの最大購入数量
     */
    maxQuantity?: number;
    /**
     * 販売価格
     */
    price?: number;
    /**
     * 数量別価格リスト
     */
    priceByQuantityList?: Array<PriceByQuantity>;
    /**
     * 商品コード
     */
    productCode?: string;
    /**
     * 商品説明ページ URL
     */
    productInfoURL?: string;
    /**
     * 商品名
     */
    productName?: string;
    /**
     * 商品種別
     */
    productType?: ProductModel.productType;
    /**
     * 商品プロパティ
     */
    properties?: Record<string, string>;
    /**
     * 通常価格
     */
    regularPrice?: number;
    /**
     * 税込販売価格
     */
    taxIncludedPrice?: number;
    /**
     * 税込通常価格
     */
    taxIncludedRegularPrice?: number;
    /**
     * 委託先の販売条件に関するドキュメントの URL
     */
    termsOfConsignorURL?: string;
    /**
     * ソリューション利用規約の名称
     */
    termsOfSolutionName?: string;
    /**
     * ソリューション利用規約の URL
     */
    termsOfSolutionURL?: string;
};
export namespace ProductModel {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
    /**
     * 商品種別
     */
    export enum productType {
        SIM = 'sim',
        LORA = 'lora',
        SIGFOX = 'sigfox',
        NETWORK_MODULE = 'network_module',
        MISC = 'misc',
    }
}

