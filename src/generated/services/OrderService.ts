/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailableLongTermDiscountResponse } from '../models/AvailableLongTermDiscountResponse';
import type { CouponResponse } from '../models/CouponResponse';
import type { CreateEstimatedCouponRequest } from '../models/CreateEstimatedCouponRequest';
import type { CreateEstimatedOrderRequest } from '../models/CreateEstimatedOrderRequest';
import type { CreateEstimatedVolumeDiscountRequest } from '../models/CreateEstimatedVolumeDiscountRequest';
import type { EstimatedCouponModel } from '../models/EstimatedCouponModel';
import type { EstimatedOrderModel } from '../models/EstimatedOrderModel';
import type { EstimatedVolumeDiscountModel } from '../models/EstimatedVolumeDiscountModel';
import type { GetOrderResponse } from '../models/GetOrderResponse';
import type { GetVolumeDiscountResponse } from '../models/GetVolumeDiscountResponse';
import type { ListOrderedSubscriberResponse } from '../models/ListOrderedSubscriberResponse';
import type { ListOrderResponse } from '../models/ListOrderResponse';
import type { ListProductResponse } from '../models/ListProductResponse';
import type { ResourceInitialSetting } from '../models/ResourceInitialSetting';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrderService {
    /**
     * クーポンの見積もりを作成する
     * 新規でクーポンの見積もりの作成を行います。orderId を /coupons/{order_id}/confirm に PUT すると発注が完了します。
     * @param requestBody クーポン詳細
     * @returns EstimatedCouponModel Created
     * @throws ApiError
     */
    public static createCouponQuotation(
        requestBody: CreateEstimatedCouponRequest,
    ): CancelablePromise<EstimatedCouponModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/coupons',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * クーポンの発注を確定する
     * 与信を実施し、問題ない場合に発注を確定します。
     * @param orderId 発注 ID
     * @returns CouponResponse OK.
     * @throws ApiError
     */
    public static confirmCouponOrder(
        orderId: string,
    ): CancelablePromise<CouponResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/coupons/{order_id}/confirm',
            path: {
                'order_id': orderId,
            },
        });
    }
    /**
     * 発注確定済みの注文履歴の一覧を取得する
     * 発注確定済みの注文履歴の一覧を取得します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @returns ListOrderResponse OK.
     * @throws ApiError
     */
    public static listOrders(): CancelablePromise<ListOrderResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders',
        });
    }
    /**
     * 見積もりを作成する
     * 新規で発注見積もりの作成を行います。orderId を /orders/{order_id}/confirm に PUT すると発注が完了します。
     * @param requestBody 注文品リストと配送先 ID
     * @returns EstimatedOrderModel 発注見積もりが作成されました。
     * @throws ApiError
     */
    public static createQuotation(
        requestBody: CreateEstimatedOrderRequest,
    ): CancelablePromise<EstimatedOrderModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 発注確定済みの発注情報を 1 件だけ取得する
     * 発注確定済みの注文履歴を 1 件だけ取得します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @param orderId 発注 ID。[Order:listOrders API](#/Order/listOrders) を呼び出すと取得できます。
     * @returns GetOrderResponse OK.
     * @throws ApiError
     */
    public static getOrder(
        orderId: string,
    ): CancelablePromise<GetOrderResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{order_id}',
            path: {
                'order_id': orderId,
            },
        });
    }
    /**
     * 発注をキャンセルする
     * 発注をキャンセルします。既に発送済みの場合はエラーが返されます。
     * @param orderId 発注 ID。[Order:listOrders API](#/Order/listOrders) を呼び出すと取得できます。
     * @returns void
     * @throws ApiError
     */
    public static cancelOrder(
        orderId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orders/{order_id}/cancel',
            path: {
                'order_id': orderId,
            },
        });
    }
    /**
     * 発注を確定する
     * 与信を実施し、問題ない場合に発注を確定します。
     *
     * **Warning**: 確定できる発注は、過去 1 か月までに完了した発注のみです。1 か月を経過した場合は、発注操作をやり直してください。
     *
     * @param orderId 発注 ID。[Order:listOrders API](#/Order/listOrders) を呼び出すと取得できます。
     * @returns any OK.
     * @throws ApiError
     */
    public static confirmOrder(
        orderId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orders/{order_id}/confirm',
            path: {
                'order_id': orderId,
            },
        });
    }
    /**
     * 発注した商品に対して初期設定を指定する
     * 発注した商品に対して初期設定を指定します。
     *
     * **Warning**: 受け取り確認後の IoT SIM の初期設定は指定できません。
     *
     * @param orderId 発注 ID。[Order:listOrders API](#/Order/listOrders) を呼び出すと取得できます。
     * @param requestBody 発注した商品に対する初期設定
     * @returns GetOrderResponse 初期設定の更新に成功しました。
     * @throws ApiError
     */
    public static updateOrderedResourceInitialSetting(
        orderId: string,
        requestBody: ResourceInitialSetting,
    ): CancelablePromise<GetOrderResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orders/{order_id}/resource_initial_setting',
            path: {
                'order_id': orderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `指定したリクエストに誤りがあります。`,
                404: `オーダー ID が見つかりません。`,
            },
        });
    }
    /**
     * 発注した IoT SIM の一覧を取得する
     * 発注した IoT SIM の一覧を返します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @param orderId 発注 ID。[Order:listOrders API](#/Order/listOrders) を呼び出すと取得できます。
     * @param lastEvaluatedKey 前ページを取得したときに返された `x-soracom-next-key` ヘッダーに含まれる値。次ページを取得する場合に指定します。詳しくは、[大量のデータを取得する (ページング)](/ja-jp/tools/api/paging/) を参照してください。
     * @param limit レスポンスに含まれる最大 Subscriber 数
     * @returns ListOrderedSubscriberResponse OK.
     * @throws ApiError
     */
    public static listOrderedSubscribers(
        orderId: string,
        lastEvaluatedKey?: string,
        limit?: number,
    ): CancelablePromise<ListOrderedSubscriberResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{order_id}/subscribers',
            path: {
                'order_id': orderId,
            },
            query: {
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
            },
        });
    }
    /**
     * IoT SIM をオペレーターに登録する
     * 発注した IoT SIM をオペレーターに登録します。
     *
     * **Warning**: 登録できる IoT SIM は、過去 18 か月までです。それ以前に発注した IoT SIM を登録する場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @param orderId 発注 ID。[Order:listOrders API](#/Order/listOrders) を呼び出すと取得できます。
     * @returns void
     * @throws ApiError
     */
    public static registerOrderedSim(
        orderId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/{order_id}/subscribers/register',
            path: {
                'order_id': orderId,
            },
        });
    }
    /**
     * 購入できる商品一覧を取得する
     * 購入できる商品一覧を取得します。
     * @param campaignCode
     * @returns ListProductResponse OK.
     * @throws ApiError
     */
    public static listProducts(
        campaignCode?: string,
    ): CancelablePromise<ListProductResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
            query: {
                'campaign_code': campaignCode,
            },
        });
    }
    /**
     * 長期利用割引の見積もりを作成する
     * 新規で長期利用割引の見積もりの作成を行います。orderId を /volume_discounts/{order_id}/confirm に PUT すると発注が完了します (現時点では、長期利用割引は plan-D バンドルなし、plan-K でのみ利用できます)。
     * @param requestBody 長期割引契約詳細
     * @returns EstimatedVolumeDiscountModel Created
     * @throws ApiError
     */
    public static createVolumeDiscountQuotation(
        requestBody: CreateEstimatedVolumeDiscountRequest,
    ): CancelablePromise<EstimatedVolumeDiscountModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/volume_discounts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 長期利用割引の発注を確定する
     * 与信を実施し、問題ない場合に発注を確定します。
     * @param orderId 発注 ID。発注 ID は [Order:createVolumeDiscountQuotation API](#/Order/createVolumeDiscountQuotation) で取得できます。
     * @returns GetVolumeDiscountResponse OK.
     * @throws ApiError
     */
    public static confirmVolumeDiscountOrder(
        orderId: string,
    ): CancelablePromise<GetVolumeDiscountResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/volume_discounts/{order_id}/confirm',
            path: {
                'order_id': orderId,
            },
        });
    }
    /**
     * 購入可能な長期利用割引の一覧を取得する
     * 購入可能な長期利用割引のリストを返します。
     * @returns AvailableLongTermDiscountResponse OK.
     * @throws ApiError
     */
    public static listAvailableDiscounts(): CancelablePromise<AvailableLongTermDiscountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/volume_discounts/available_discounts',
        });
    }
}
