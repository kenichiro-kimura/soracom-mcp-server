/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Gadget } from '../models/Gadget';
import type { GadgetRegistrationRequest } from '../models/GadgetRegistrationRequest';
import type { TagUpdateRequest } from '../models/TagUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GadgetService {
    /**
     * Gadget API 対応デバイスの一覧を取得する
     * 条件に一致する Gadget API 対応デバイスのデータを取得します。Gadget API 対応デバイスが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param productId 取得対象の Gadget API 対応デバイスの種類。
     *
     * - `button`: SORACOM LTE-M Button powered by AWS。
     * - `wimax`: ソラカメ専用セルラーパック。
     *
     * @param tagName 検索対象にするタグの名前。`tag_value_match_mode` の設定にかかわらず常に完全一致で検索されます。
     * @param tagValue タグの値を検索するための文字列を URL エンコード (パーセントエンコーディング) して指定します。`tag_name` を指定した場合は必須です。
     * @param tagValueMatchMode タグの値の検索条件。
     *
     * - `exact`: 完全一致。
     * - `prefix`: 前方一致。
     *
     * @param limit 取得する Gadget API 対応デバイスのデータの件数 (上限)。
     * @param lastEvaluatedKey Gadget API 対応デバイスの ID (`{productId}/{serialNumber}`) を URL エンコード (パーセントエンコーディング) して指定します。
     *
     * 指定した ID (`{productId}/{serialNumber}`) の次の Gadget API 対応デバイスを取得できます。
     *
     * API を呼び出したときに `link` ヘッダーで返された `rel=next` の `last_evaluated_key` の値を、次の呼び出し時に指定することが想定されていますが、任意の ID (`{productId}/{serialNumber}`) を指定できます。
     *
     * @returns Gadget 条件に一致する Gadget API 対応デバイスのデータのリスト。
     * @throws ApiError
     */
    public static listGadgets(
        productId?: 'button' | 'wimax',
        tagName?: string,
        tagValue?: string,
        tagValueMatchMode: 'exact' | 'prefix' = 'exact',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<Gadget>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gadgets',
            query: {
                'product_id': productId,
                'tag_name': tagName,
                'tag_value': tagValue,
                'tag_value_match_mode': tagValueMatchMode,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * Gadget API 対応デバイスの詳細情報を取得する
     * 指定された Gadget API 対応デバイスの詳細情報を取得します。
     * @param productId 対象の Gadget API 対応デバイスの種類。
     *
     * - `button`: SORACOM LTE-M Button powered by AWS。
     * - `wimax`: ソラカメ専用セルラーパック。
     *
     * @param serialNumber 対象の Gadget API 対応デバイスのシリアル番号。
     * @returns Gadget 指定された Gadget API 対応デバイスの詳細情報。
     * @throws ApiError
     */
    public static getGadget(
        productId: 'button' | 'wimax',
        serialNumber: string,
    ): CancelablePromise<Gadget> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gadgets/{product_id}/{serial_number}',
            path: {
                'product_id': productId,
                'serial_number': serialNumber,
            },
            errors: {
                404: `指定された Gadget API 対応デバイスが存在しない。`,
            },
        });
    }
    /**
     * Gadget API 対応デバイスを解約不可能に設定する
     * 指定された Gadget API 対応デバイスを解約不可能に設定します。
     * @param productId 対象の Gadget API 対応デバイスの種類。
     *
     * - `button`: SORACOM LTE-M Button powered by AWS。
     * - `wimax`: ソラカメ専用セルラーパック。
     *
     * @param serialNumber 対象の Gadget API 対応デバイスのシリアル番号。
     * @returns Gadget 更新後の Gadget API 対応デバイスの詳細情報。
     * @throws ApiError
     */
    public static disableTerminationOnGadget(
        productId: 'button' | 'wimax',
        serialNumber: string,
    ): CancelablePromise<Gadget> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gadgets/{product_id}/{serial_number}/disable_termination',
            path: {
                'product_id': productId,
                'serial_number': serialNumber,
            },
            errors: {
                404: `指定された Gadget API 対応デバイスが存在しない。`,
            },
        });
    }
    /**
     * Gadget API 対応デバイスを解約可能に設定する
     * 指定された Gadget API 対応デバイスを解約可能に設定します。
     * @param productId 対象の Gadget API 対応デバイスの種類。
     *
     * - `button`: SORACOM LTE-M Button powered by AWS。
     * - `wimax`: ソラカメ専用セルラーパック。
     *
     * @param serialNumber 対象の Gadget API 対応デバイスのシリアル番号。
     * @returns Gadget 更新後の Gadget API 対応デバイスの詳細情報。
     * @throws ApiError
     */
    public static enableTerminationOnGadget(
        productId: 'button' | 'wimax',
        serialNumber: string,
    ): CancelablePromise<Gadget> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gadgets/{product_id}/{serial_number}/enable_termination',
            path: {
                'product_id': productId,
                'serial_number': serialNumber,
            },
            errors: {
                404: `指定された Gadget API 対応デバイスが存在しない。`,
            },
        });
    }
    /**
     * Gadget API 対応デバイスを登録する
     * Gadget API 対応デバイスを登録する。
     * @param productId 対象の Gadget API 対応デバイスの種類。
     *
     * - `button`: SORACOM LTE-M Button powered by AWS。
     * - `wimax`: ソラカメ専用セルラーパック。
     *
     * @param serialNumber 対象の Gadget API 対応デバイスのシリアル番号。
     * @param requestBody Gadget の登録リクエスト。
     * @returns Gadget Gadget API 対応デバイスが正しく登録されました。
     * @throws ApiError
     */
    public static registerGadget(
        productId: 'button' | 'wimax',
        serialNumber: string,
        requestBody: GadgetRegistrationRequest,
    ): CancelablePromise<Gadget> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gadgets/{product_id}/{serial_number}/register',
            path: {
                'product_id': productId,
                'serial_number': serialNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された Gadget API 対応デバイスが存在しません。`,
            },
        });
    }
    /**
     * Gadget API 対応デバイスのタグを追加・更新する
     * 指定された Gadget API 対応デバイスのタグを追加・更新します。
     * @param productId 対象の Gadget API 対応デバイスの種類。
     *
     * - `button`: SORACOM LTE-M Button powered by AWS。
     * - `wimax`: ソラカメ専用セルラーパック。
     *
     * @param serialNumber 対象の Gadget API 対応デバイスのシリアル番号。
     * @param requestBody 追加・更新対象のタグの配列。
     * @returns Gadget 更新後の Gadget API 対応デバイスの詳細情報。
     * @throws ApiError
     */
    public static putGadgetTags(
        productId: 'button' | 'wimax',
        serialNumber: string,
        requestBody: Array<TagUpdateRequest>,
    ): CancelablePromise<Gadget> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/gadgets/{product_id}/{serial_number}/tags',
            path: {
                'product_id': productId,
                'serial_number': serialNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された Gadget API 対応デバイスが存在しない。`,
            },
        });
    }
    /**
     * Gadget API 対応デバイスのタグを削除する
     * 指定された Gadget API 対応デバイスのタグを削除します。
     * @param productId 対象の Gadget API 対応デバイスの種類。
     *
     * - `button`: SORACOM LTE-M Button powered by AWS。
     * - `wimax`: ソラカメ専用セルラーパック。
     *
     * @param serialNumber 対象の Gadget API 対応デバイスのシリアル番号。
     * @param tagName 削除対象のタグ名 (URL の Path の一部になるので、パーセントエンコーディングを施す。JavaScript なら encodeURIComponent() したものを指定する)。
     * @returns void
     * @throws ApiError
     */
    public static deleteGadgetTag(
        productId: 'button' | 'wimax',
        serialNumber: string,
        tagName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/gadgets/{product_id}/{serial_number}/tags/{tag_name}',
            path: {
                'product_id': productId,
                'serial_number': serialNumber,
                'tag_name': tagName,
            },
            errors: {
                404: `指定された Gadget API 対応デバイスあるいはタグが存在しない。`,
            },
        });
    }
    /**
     * Gadget API 対応デバイスを解約する
     * 指定された Gadget API 対応デバイスを解約します。
     * @param productId 対象の Gadget API 対応デバイスの種類。
     *
     * - `button`: SORACOM LTE-M Button powered by AWS。
     * - `wimax`: ソラカメ専用セルラーパック。
     *
     * @param serialNumber 対象の Gadget API 対応デバイスのシリアル番号。
     * @returns Gadget 更新後の Gadget API 対応デバイスの詳細情報。
     * @throws ApiError
     */
    public static terminateGadget(
        productId: 'button' | 'wimax',
        serialNumber: string,
    ): CancelablePromise<Gadget> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gadgets/{product_id}/{serial_number}/terminate',
            path: {
                'product_id': productId,
                'serial_number': serialNumber,
            },
            errors: {
                404: `指定された Gadget API 対応デバイスが存在しない。`,
            },
        });
    }
}
