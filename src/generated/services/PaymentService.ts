/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CouponResponse } from '../models/CouponResponse';
import type { FileExportResponse } from '../models/FileExportResponse';
import type { GetPaymentMethodResult } from '../models/GetPaymentMethodResult';
import type { GetPaymentTransactionResult } from '../models/GetPaymentTransactionResult';
import type { GetVolumeDiscountResponse } from '../models/GetVolumeDiscountResponse';
import type { ListCouponResponse } from '../models/ListCouponResponse';
import type { ListPaymentStatementResponse } from '../models/ListPaymentStatementResponse';
import type { ListVolumeDiscountResponse } from '../models/ListVolumeDiscountResponse';
import type { RegisterPayerInformationModel } from '../models/RegisterPayerInformationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentService {
    /**
     * クーポンの一覧を取得する
     * 現在登録されているクーポン一覧を返します。
     * @returns ListCouponResponse OK.
     * @throws ApiError
     */
    public static listCoupons(): CancelablePromise<ListCouponResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/coupons',
        });
    }
    /**
     * クーポンを登録する
     * クーポンを登録します。
     * @param couponCode クーポンコード
     * @returns CouponResponse OK.
     * @throws ApiError
     */
    public static registerCoupon(
        couponCode: string,
    ): CancelablePromise<CouponResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/coupons/{coupon_code}/register',
            path: {
                'coupon_code': couponCode,
            },
            errors: {
                400: `クーポンコードが無効であるか、クーポンコードの登録上限に達しています。`,
            },
        });
    }
    /**
     * 課金処理結果を取得する
     * 課金処理の結果を返します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @param paymentTransactionId 課金処理 ID。[Billing:getBillingHistory API](#/Billing/getBillingHistory) や [Billing:getBilling API](#/Billing/getBilling) で取得できます。
     * @returns GetPaymentTransactionResult OK.
     * @throws ApiError
     */
    public static getPaymentTransaction(
        paymentTransactionId: string,
    ): CancelablePromise<GetPaymentTransactionResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_history/transactions/{payment_transaction_id}',
            path: {
                'payment_transaction_id': paymentTransactionId,
            },
            errors: {
                400: `無効な課金処理 ID です。`,
                404: `課金処理の結果が見つかりません。`,
            },
        });
    }
    /**
     * 現在の支払い方法を取得する
     * 現在の支払い方法を返します。properties に詳細情報が入っています。
     * @returns GetPaymentMethodResult OK.
     * @throws ApiError
     */
    public static getPaymentMethod(): CancelablePromise<GetPaymentMethodResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_methods/current',
            errors: {
                404: `支払い方法が見つかりません。`,
            },
        });
    }
    /**
     * 現在の支払い方法を有効化する
     * エラーのある現在の支払い方法を有効化します。
     * @returns any OK.
     * @throws ApiError
     */
    public static activatePaymentMethod(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment_methods/current/activate',
            errors: {
                404: `支払い方法が見つかりません。`,
            },
        });
    }
    /**
     * 課金明細の一覧を取得する
     * 課金明細の一覧を返します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @returns ListPaymentStatementResponse OK.
     * @throws ApiError
     */
    public static listPaymentStatements(): CancelablePromise<ListPaymentStatementResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_statements',
        });
    }
    /**
     * 課金明細をエクスポートする
     * 課金明細を出力します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @param paymentStatementId 課金明細 ID
     * @param exportMode 出力モード (非同期, 同期)
     * @returns FileExportResponse OK.
     * @throws ApiError
     */
    public static exportPaymentStatement(
        paymentStatementId: string,
        exportMode?: 'async' | 'sync',
    ): CancelablePromise<FileExportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment_statements/{payment_statement_id}/export',
            path: {
                'payment_statement_id': paymentStatementId,
            },
            query: {
                'export_mode': exportMode,
            },
            errors: {
                400: `無効な課金明細 ID です。`,
            },
        });
    }
    /**
     * 支払い者情報を取得する
     * 課金明細に出力する支払い者情報を取得します。
     * @returns RegisterPayerInformationModel OK.
     * @throws ApiError
     */
    public static getPayerInformation(): CancelablePromise<RegisterPayerInformationModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_statements/payer_information',
            errors: {
                400: `支払い者情報が見つかりません。`,
            },
        });
    }
    /**
     * 支払い者情報を登録する
     * 課金明細に出力する支払い者情報を設定します。
     * @param requestBody 課金明細に登録する支払い者情報
     * @returns any Created.
     * @throws ApiError
     */
    public static registerPayerInformation(
        requestBody: RegisterPayerInformationModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment_statements/payer_information',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `無効な支払い者情報です。`,
            },
        });
    }
    /**
     * 契約済みの長期利用割引の一覧を取得する
     * 契約済みの長期利用割引リストを返します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月、または契約が終了してから 6 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @returns ListVolumeDiscountResponse OK.
     * @throws ApiError
     */
    public static listVolumeDiscounts(): CancelablePromise<ListVolumeDiscountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/volume_discounts',
        });
    }
    /**
     * 契約済みの長期利用割引を取得する
     * 契約済みの長期利用割引を取得します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月、または契約が終了してから 6 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @param contractId 契約 ID。
     * @returns GetVolumeDiscountResponse OK.
     * @throws ApiError
     */
    public static getVolumeDiscount(
        contractId: string,
    ): CancelablePromise<GetVolumeDiscountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/volume_discounts/{contract_id}',
            path: {
                'contract_id': contractId,
            },
            errors: {
                400: `長期利用割引が見つかりません。`,
            },
        });
    }
}
