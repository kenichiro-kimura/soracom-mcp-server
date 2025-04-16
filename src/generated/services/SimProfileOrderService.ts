/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSimProfileOrderRequest } from '../models/CreateSimProfileOrderRequest';
import type { OrderedSimProfileResponse } from '../models/OrderedSimProfileResponse';
import type { SimProfileOrderResponse } from '../models/SimProfileOrderResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SimProfileOrderService {
    /**
     * eSIM プロファイルの注文履歴の一覧を取得する
     * eSIM プロファイルの注文履歴の一覧を取得します。注文履歴が 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param limit 取得する eSIM プロファイルの注文履歴の上限。ただし、返却される注文履歴の個数は指定された値を下回る可能性があります。
     * @param lastEvaluatedKey 前ページで取得した最後の eSIM プロファイルの注文履歴の注文 ID。このパラメータを指定することで、次の注文履歴以降のリストを取得できます。
     * @returns SimProfileOrderResponse eSIM プロファイルの注文履歴の一覧を取得しました。
     * @throws ApiError
     */
    public static listProfileOrders(
        limit: number = 100,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<SimProfileOrderResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sim_profile_orders',
            query: {
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * eSIM プロファイルを発注する
     * eSIM プロファイルを発注します。発注後、[SimProfileOrder:confirmProfileOrder API](#/SimProfileOrder/confirmProfileOrder) を呼び出すと、発注が確定します。
     * 発注は 24 時間有効です。24 時間を過ぎると、自動的に取り消されます。
     *
     * @param requestBody
     * @returns SimProfileOrderResponse eSIM プロファイルを仮発注しました。
     * @throws ApiError
     */
    public static createProfileOrder(
        requestBody?: CreateSimProfileOrderRequest,
    ): CancelablePromise<SimProfileOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sim_profile_orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `指定したリクエストに誤りがあります。`,
            },
        });
    }
    /**
     * eSIM プロファイルの発注を取り消す
     * eSIM プロファイルの発注を取り消します。
     *
     * **Warning**: 確定した発注は取り消せません。
     *
     * **Warning**: 発注に含まれる eSIM プロファイルのサブスクリプションの種類や数量を変更することはできません。発注を取り消して、再度発注してください。
     *
     * @param profileOrderId eSIM プロファイルの発注の注文 ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteProfileOrder(
        profileOrderId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sim_profile_orders/{profile_order_id}',
            path: {
                'profile_order_id': profileOrderId,
            },
            errors: {
                404: `eSIM プロファイルが見つかりませんでした。`,
            },
        });
    }
    /**
     * eSIM プロファイルの注文履歴を取得する
     * 指定の eSIM プロファイルの注文履歴を取得します。
     *
     * @param profileOrderId eSIM プロファイルの発注の注文 ID。
     * @returns SimProfileOrderResponse eSIM プロファイルの注文履歴を取得しました。
     * @throws ApiError
     */
    public static getProfileOrder(
        profileOrderId: string,
    ): CancelablePromise<SimProfileOrderResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sim_profile_orders/{profile_order_id}',
            path: {
                'profile_order_id': profileOrderId,
            },
            errors: {
                404: `eSIM プロファイルが見つかりませんでした。`,
            },
        });
    }
    /**
     * eSIM プロファイルの発注を確定する
     * 指定の eSIM プロファイルの発注を確定します。
     *
     * **Alert**: 発注を確定すると、eSIM プロファイルの初期費用が発生します。
     *
     * @param profileOrderId eSIM プロファイルの発注の注文 ID。
     * @returns SimProfileOrderResponse eSIM プロファイルの発注を確定しました。
     * @throws ApiError
     */
    public static confirmProfileOrder(
        profileOrderId: string,
    ): CancelablePromise<SimProfileOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sim_profile_orders/{profile_order_id}/confirm',
            path: {
                'profile_order_id': profileOrderId,
            },
            errors: {
                404: `eSIM プロファイルが見つかりませんでした。`,
            },
        });
    }
    /**
     * eSIM プロファイルの注文によって作成された eSIM プロファイルの一覧を取得する
     * 指定の eSIM プロファイルの注文によって作成された eSIM プロファイルの一覧を取得します。
     *
     * @param profileOrderId eSIM プロファイルの発注の注文 ID。
     * @returns OrderedSimProfileResponse eSIM プロファイルの一覧を取得しました。
     * @throws ApiError
     */
    public static listOrderedProfiles(
        profileOrderId: string,
    ): CancelablePromise<Array<OrderedSimProfileResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sim_profile_orders/{profile_order_id}/profiles',
            path: {
                'profile_order_id': profileOrderId,
            },
            errors: {
                404: `eSIM プロファイルが見つかりませんでした。`,
            },
        });
    }
}
