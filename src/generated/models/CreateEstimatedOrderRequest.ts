/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItemModel } from './OrderItemModel';
import type { ShippingOptionOfExpeditedShipping } from './ShippingOptionOfExpeditedShipping';
import type { ShippingOptionOfNekopos } from './ShippingOptionOfNekopos';
export type CreateEstimatedOrderRequest = {
    /**
     * 発注商品リスト
     */
    orderItemList?: Array<OrderItemModel>;
    /**
     * お受け取り希望日
     */
    preferredDeliveryDate?: string;
    /**
     * 商品発送先 ID
     */
    shippingAddressId?: string;
    /**
     * 配送オプション
     */
    shippingOptions?: Array<(ShippingOptionOfNekopos | ShippingOptionOfExpeditedShipping)>;
};

