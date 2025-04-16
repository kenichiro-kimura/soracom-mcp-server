/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetShippingAddressResponse } from '../models/GetShippingAddressResponse';
import type { ListShippingAddressResponse } from '../models/ListShippingAddressResponse';
import type { ShippingAddressModel } from '../models/ShippingAddressModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ShippingAddressService {
    /**
     * 商品発送先の一覧を取得する
     * 商品発送先の一覧を返します。
     * @param operatorId オペレーター ID。
     * @returns ListShippingAddressResponse OK.
     * @throws ApiError
     */
    public static listShippingAddresses(
        operatorId: string,
    ): CancelablePromise<ListShippingAddressResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/shipping_addresses',
            path: {
                'operator_id': operatorId,
            },
        });
    }
    /**
     * 商品発送先を登録する
     * 商品発送先を新規登録する。
     * @param operatorId オペレーター ID。
     * @param requestBody 商品発送先。
     * @returns GetShippingAddressResponse 商品発送先が登録されました。
     * @throws ApiError
     */
    public static createShippingAddress(
        operatorId: string,
        requestBody: ShippingAddressModel,
    ): CancelablePromise<GetShippingAddressResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/shipping_addresses',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 商品発送先を削除する
     * 商品発送先を削除する。
     * @param operatorId オペレーター ID。
     * @param shippingAddressId 商品発送先 ID。
     * @returns any OK.
     * @throws ApiError
     */
    public static deleteShippingAddress(
        operatorId: string,
        shippingAddressId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/shipping_addresses/{shipping_address_id}',
            path: {
                'operator_id': operatorId,
                'shipping_address_id': shippingAddressId,
            },
        });
    }
    /**
     * 商品発送先の情報を取得する
     * 商品発送先を返す。
     * @param operatorId オペレーター ID。
     * @param shippingAddressId 商品発送先 ID。
     * @returns GetShippingAddressResponse OK.
     * @throws ApiError
     */
    public static getShippingAddress(
        operatorId: string,
        shippingAddressId: string,
    ): CancelablePromise<GetShippingAddressResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/shipping_addresses/{shipping_address_id}',
            path: {
                'operator_id': operatorId,
                'shipping_address_id': shippingAddressId,
            },
        });
    }
    /**
     * 商品発送先を更新する
     * 商品発送先を更新する。
     * @param operatorId オペレーター ID。
     * @param shippingAddressId 商品発送先 ID。
     * @param requestBody 商品発送先。
     * @returns any OK.
     * @throws ApiError
     */
    public static updateShippingAddress(
        operatorId: string,
        shippingAddressId: string,
        requestBody: ShippingAddressModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/operators/{operator_id}/shipping_addresses/{shipping_address_id}',
            path: {
                'operator_id': operatorId,
                'shipping_address_id': shippingAddressId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
