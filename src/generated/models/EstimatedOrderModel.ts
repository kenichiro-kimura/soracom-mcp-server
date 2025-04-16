/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EstimatedOrderItemModel } from './EstimatedOrderItemModel';
import type { ShippingAddressModel } from './ShippingAddressModel';
import type { ShippingOptionOfExpeditedShipping } from './ShippingOptionOfExpeditedShipping';
import type { ShippingOptionOfNekopos } from './ShippingOptionOfNekopos';
export type EstimatedOrderModel = {
    /**
     * 適用された配送オプション
     */
    appliedShippingOptions?: Array<(ShippingOptionOfNekopos | ShippingOptionOfExpeditedShipping)>;
    /**
     * 差引請求額
     */
    balanceDue?: number;
    /**
     * 税込金額の有無
     */
    containsTaxIncludedAmounts?: boolean;
    /**
     * 通貨
     */
    currency?: EstimatedOrderModel.currency;
    /**
     * メールアドレス
     */
    email?: string;
    /**
     * 注文チャンネル
     */
    orderChannel?: string;
    /**
     * 発注 ID
     */
    orderId?: string;
    /**
     * 発注商品リスト
     */
    orderItemList?: Array<EstimatedOrderItemModel>;
    /**
     * お受け取り希望日
     */
    preferredDeliveryDate?: string;
    /**
     * 注文番号
     */
    purchaseOrderNumber?: string;
    shippingAddress?: ShippingAddressModel;
    /**
     * 商品発送先 ID
     */
    shippingAddressId?: string;
    /**
     * 配送料
     */
    shippingCost?: number;
    /**
     * 消費税
     */
    taxAmount?: number;
    /**
     * 配送料に含まれる税
     */
    taxIncludedInShippingCost?: number;
    /**
     * 配送料へ課税
     */
    taxOnShippingCost?: boolean;
    /**
     * 合計金額
     */
    totalAmount?: number;
    /**
     * 源泉徴収税
     */
    withholdingTaxAmount?: number;
};
export namespace EstimatedOrderModel {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
}

