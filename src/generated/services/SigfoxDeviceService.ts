/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataEntry } from '../models/DataEntry';
import type { SetGroupRequest } from '../models/SetGroupRequest';
import type { SigfoxData } from '../models/SigfoxData';
import type { SigfoxDevice } from '../models/SigfoxDevice';
import type { SigfoxRegistrationRequest } from '../models/SigfoxRegistrationRequest';
import type { TagUpdateRequest } from '../models/TagUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SigfoxDeviceService {
    /**
     * Sigfox デバイスのリストを取得する
     * 条件に合う Sigfox デバイスを取得します。Sigfox デバイスが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param tagName 検索対象にするタグの名前(完全一致)
     * @param tagValue 検索対象にするタグの検索文字列。`tag_name` を指定した場合は必須
     * @param tagValueMatchMode タグの検索条件
     * @param limit 取得する Sigfox device の上限
     * @param lastEvaluatedKey 前ページで取得した最後の Sigfox device の Device ID。このパラメータを指定することで次の Sigfox device 以降のリストを取得できる
     * @returns SigfoxDevice 条件にマッチする Sigfox device のリスト
     * @throws ApiError
     */
    public static listSigfoxDevices(
        tagName?: string,
        tagValue?: string,
        tagValueMatchMode: 'exact' | 'prefix' = 'exact',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<SigfoxDevice>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sigfox_devices',
            query: {
                'tag_name': tagName,
                'tag_value': tagValue,
                'tag_value_match_mode': tagValueMatchMode,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * Sigfox デバイスの情報を取得する
     * 指定された Sigfox device の情報を返す。
     * @param deviceId 対象の Sigfox device の Device ID
     * @returns SigfoxDevice 指定された Sigfox device の詳細情報
     * @throws ApiError
     */
    public static getSigfoxDevice(
        deviceId: string,
    ): CancelablePromise<SigfoxDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sigfox_devices/{device_id}',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定された Sigfox device が存在しない`,
            },
        });
    }
    /**
     * Sigfox デバイスから Harvest Data に送信されたデータを取得する
     * 指定した Sigfox デバイス から Harvest Data に送信されたデータの中で、条件に合うデータを取得します。データエントリが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param deviceId データ取得対象の Sigfox デバイスの ID。Sigfox デバイスの ID は [SigfoxDevice:listSigfoxDevices API](#/SigfoxDevice/listSigfoxDevices) で取得できます。
     * @param from 取得対象の期間の始まり (UNIX 時間 (ミリ秒))
     * @param to 取得対象の期間の終わり (UNIX 時間 (ミリ秒))
     * @param sort データエントリのソート順。下降順 (最新のデータが先頭) もしくは上昇順 (最も古いデータが先頭)。
     * @param limit 取得するデータエントリ数の上限 (1 〜 1000)。デフォルトは、`10` です。
     * @param lastEvaluatedKey 前ページで取得した最後のデータエントリのタイムスタンプ。このパラメータを指定することで次のデータエントリ以降のリストを取得できる。
     * @returns DataEntry データエントリのリスト
     * @throws ApiError
     */
    public static getDataFromSigfoxDevice(
        deviceId: string,
        from?: number,
        to?: number,
        sort: 'desc' | 'asc' = 'desc',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<DataEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sigfox_devices/{device_id}/data',
            path: {
                'device_id': deviceId,
            },
            query: {
                'from': from,
                'to': to,
                'sort': sort,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * Sigfox デバイスにデータを送信する
     * 指定したデバイスにデータを送信する。データはサーバに保持され、次に当該デバイスがデータ送信リクエストを行った際に送信される。未送信のデータがサーバにあった場合には、最新のデータで上書きされる。
     * @param deviceId 送信先デバイスの ID
     * @param requestBody 16 進数でエンコードされたバイナリデータの文字列。バイナリデータのサイズは 8 octets（16 進数エンコードされた文字列で 16 文字）である必要がある。
     * @returns any データがサーバにセットされ、対象のデバイスによる取得待ち状態になったことを示す。
     * @throws ApiError
     */
    public static sendDataToSigfoxDevice(
        deviceId: string,
        requestBody: SigfoxData,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sigfox_devices/{device_id}/data',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された Sigfox デバイスが存在しない。`,
            },
        });
    }
    /**
     * Sigfox デバイスをターミネイト不可にする
     * 指定された Sigfox device を Terminate 不可能に設定する
     * @param deviceId 対象の Sigfox device の ID
     * @returns SigfoxDevice 更新後の Sigfox device の詳細情報
     * @throws ApiError
     */
    public static disableTerminationOnSigfoxDevice(
        deviceId: string,
    ): CancelablePromise<SigfoxDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sigfox_devices/{device_id}/disable_termination',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定された Sigfox device が存在しない`,
            },
        });
    }
    /**
     * Sigfox デバイスをターミネイト可能にする
     * 指定された Sigfox device を Terminate 可能に設定する
     * @param deviceId 対象の Sigfox device の ID
     * @returns SigfoxDevice 更新後の Sigfox device の詳細情報
     * @throws ApiError
     */
    public static enableTerminationOnSigfoxDevice(
        deviceId: string,
    ): CancelablePromise<SigfoxDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sigfox_devices/{device_id}/enable_termination',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定された Sigfox device が存在しない`,
            },
        });
    }
    /**
     * Sigfox デバイスを登録する
     * Sigfox デバイスを登録する
     * @param deviceId 登録対象の Sigfox デバイスの ID
     * @param requestBody Sigfox デバイスの登録リクエスト
     * @returns SigfoxDevice Sigfox デバイスが正しく登録されました
     * @throws ApiError
     */
    public static registerSigfoxDevice(
        deviceId: string,
        requestBody: SigfoxRegistrationRequest,
    ): CancelablePromise<SigfoxDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sigfox_devices/{device_id}/register',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `PAC が指定されていません`,
            },
        });
    }
    /**
     * Sigfox デバイスを Sigfox グループに所属させる
     * Sigfox デバイスを Sigfox グループに所属させます。
     * @param deviceId 対象の Sigfox デバイスの ID。Sigfox デバイスの ID は [SigfoxDevice:listSigfoxDevices API](#/SigfoxDevice/listSigfoxDevices) で取得できます。
     * @param requestBody
     * @returns SigfoxDevice 更新後の Sigfox デバイスの詳細情報。
     * @throws ApiError
     */
    public static setSigfoxDeviceGroup(
        deviceId: string,
        requestBody: SetGroupRequest,
    ): CancelablePromise<SigfoxDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sigfox_devices/{device_id}/set_group',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Sigfox デバイスが存在しない。`,
            },
        });
    }
    /**
     * Sigfox デバイスのタグを追加・更新する
     * 指定された Sigfox device のタグを追加・更新
     * @param deviceId 対象の Sigfox device の ID
     * @param requestBody 追加・更新対象のタグの配列
     * @returns SigfoxDevice 更新後の Sigfox device の詳細情報
     * @throws ApiError
     */
    public static putSigfoxDeviceTags(
        deviceId: string,
        requestBody: Array<TagUpdateRequest>,
    ): CancelablePromise<SigfoxDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sigfox_devices/{device_id}/tags',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された Sigfox device が存在しない`,
            },
        });
    }
    /**
     * Sigfox デバイスのタグを削除する
     * 指定された Sigfox device のタグを削除
     * @param deviceId 対象の Sigfox device の ID
     * @param tagName 削除対象のタグ名（URL の Path の一部になるので、パーセントエンコーディングを施す。JavaScript なら encodeURIComponent() したものを指定する）
     * @returns void
     * @throws ApiError
     */
    public static deleteSigfoxDeviceTag(
        deviceId: string,
        tagName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sigfox_devices/{device_id}/tags/{tag_name}',
            path: {
                'device_id': deviceId,
                'tag_name': tagName,
            },
            errors: {
                404: `指定された Sigfox device あるいはタグが存在しない`,
            },
        });
    }
    /**
     * Sigfox デバイスをターミネイトする
     * 指定された Sigfox device を Terminate
     * @param deviceId 対象の Sigfox device の ID
     * @param deleteImmediately Sigfox デバイスを即座に削除する
     * @returns SigfoxDevice 更新後の Sigfox device の詳細情報
     * @throws ApiError
     */
    public static terminateSigfoxDevice(
        deviceId: string,
        deleteImmediately: boolean = false,
    ): CancelablePromise<SigfoxDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sigfox_devices/{device_id}/terminate',
            path: {
                'device_id': deviceId,
            },
            query: {
                'delete_immediately': deleteImmediately,
            },
            errors: {
                404: `指定された Sigfox device が存在しない`,
            },
        });
    }
    /**
     * Sigfox デバイスを Sigfox グループから外す
     * Sigfox デバイスを Sigfox グループから外します。
     * @param deviceId 対象の Sigfox デバイスの ID。Sigfox デバイスの ID は [SigfoxDevice:listSigfoxDevices API](#/SigfoxDevice/listSigfoxDevices) で取得できます。
     * @returns SigfoxDevice 更新後の Sigfox デバイスの詳細情報。
     * @throws ApiError
     */
    public static unsetSigfoxDeviceGroup(
        deviceId: string,
    ): CancelablePromise<SigfoxDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sigfox_devices/{device_id}/unset_group',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `Sigfox デバイスが存在しない。`,
            },
        });
    }
}
