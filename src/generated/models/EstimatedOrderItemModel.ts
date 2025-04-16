/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductModel } from './ProductModel';
export type EstimatedOrderItemModel = {
    product?: ProductModel;
    /**
     * 商品金額
     */
    productAmount?: number;
    /**
     * 購入数
     */
    quantity?: number;
    taxIncludedProductAmount?: number;
};

