/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataEntry } from '../models/DataEntry';
import type { Device } from '../models/Device';
import type { ObjectInstance } from '../models/ObjectInstance';
import type { ResourceInstance } from '../models/ResourceInstance';
import type { SetGroupRequest } from '../models/SetGroupRequest';
import type { TagUpdateRequest } from '../models/TagUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DeviceService {
    /**
     * デバイスのリストを取得する
     * デバイスのリストを取得します。
     * @param tagName タグの名前
     * @param tagValue タグの値
     * @param tagValueMatchMode タグの検索条件 (exact | prefix)
     * @param lastEvaluatedKey 前ページで取得した最後のデバイスの ID。このパラメータを指定することで次のデバイスから始まるリストを取得できる。
     * @param limit 取得するデバイス数の上限
     * @returns Device デバイスのリスト
     * @throws ApiError
     */
    public static listDevices(
        tagName?: string,
        tagValue?: string,
        tagValueMatchMode?: string,
        lastEvaluatedKey?: string,
        limit: number = -1,
    ): CancelablePromise<Array<Device>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/devices',
            query: {
                'tag_name': tagName,
                'tag_value': tagValue,
                'tag_value_match_mode': tagValueMatchMode,
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
            },
        });
    }
    /**
     * 新しいデバイスを作成する
     * 新しいデバイスを作成します。
     * @param requestBody 作成するデバイス
     * @returns Device 作成されたデバイス
     * @throws ApiError
     */
    public static createDevice(
        requestBody: Device,
    ): CancelablePromise<Device> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/devices',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * デバイスを削除する
     * デバイスを削除します。
     * @param deviceId 削除するデバイス
     * @returns void
     * @throws ApiError
     */
    public static deleteDevice(
        deviceId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/devices/{device_id}',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定されたデバイス ID を持つデバイスが見つからなかった`,
            },
        });
    }
    /**
     * 指定されたデバイス ID のデバイスを取得する
     * 指定されたデバイス ID のデバイスを取得します。
     * @param deviceId デバイス ID
     * @param model モデル情報を取得するかどうか
     * @returns Device 指定されたデバイス ID のデバイス
     * @throws ApiError
     */
    public static getDevice(
        deviceId: string,
        model: boolean = false,
    ): CancelablePromise<Device> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/devices/{device_id}',
            path: {
                'device_id': deviceId,
            },
            query: {
                'model': model,
            },
            errors: {
                404: `指定されたデバイス ID を持つデバイスが見つからなかった`,
            },
        });
    }
    /**
     * デバイスの Instance 以下のすべての Resource を Read する
     * デバイスの Instance 以下のすべての Resource を Read します。
     * @param deviceId 対象となるデバイス
     * @param object Object ID
     * @param instance Instance ID
     * @param model モデル情報を含めるかどうか
     * @returns ObjectInstance 指定された Object Instance 下の Resource のリスト
     * @throws ApiError
     */
    public static readDeviceResources(
        deviceId: string,
        object: string,
        instance: string,
        model: boolean = false,
    ): CancelablePromise<ObjectInstance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/devices/{device_id}/{object}/{instance}',
            path: {
                'device_id': deviceId,
                'object': object,
                'instance': instance,
            },
            query: {
                'model': model,
            },
            errors: {
                400: `指定した Resource が Read をサポートしていません (デバイスがオフラインなど接続エラーの場合を含みます)`,
                404: `指定した Resource が見つかりません`,
            },
        });
    }
    /**
     * 指定されたデバイスの Resource を Read する
     * 指定されたデバイスの Resource を Read します。
     * @param deviceId 対象となるデバイス
     * @param object Object ID
     * @param instance Instance ID
     * @param resource Resource ID
     * @param model モデル情報を含めるかどうか
     * @returns ResourceInstance Resource
     * @throws ApiError
     */
    public static readDeviceResource(
        deviceId: string,
        object: string,
        instance: string,
        resource: string,
        model: boolean = false,
    ): CancelablePromise<ResourceInstance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/devices/{device_id}/{object}/{instance}/{resource}',
            path: {
                'device_id': deviceId,
                'object': object,
                'instance': instance,
                'resource': resource,
            },
            query: {
                'model': model,
            },
            errors: {
                400: `指定した Resource が Read をサポートしていません (デバイスがオフラインなど接続エラーの場合を含みます)`,
                404: `指定した Resource が見つかりません`,
            },
        });
    }
    /**
     * デバイスの Resource に値を Write する
     * デバイスの Resource に値を Write します。
     * @param deviceId 対象となるデバイス
     * @param object Object ID
     * @param instance Instance ID
     * @param resource Resource ID
     * @param requestBody リソースにセットする値。この値は LwM2M の基本的なデータ型を受け入れます。もしリソースモデルが `multiple` モードの場合はプロパティ名を `value` ではなく `values` にする必要があります。
     * @returns any Resource の更新を受け付けました
     * @throws ApiError
     */
    public static writeDeviceResource(
        deviceId: string,
        object: string,
        instance: string,
        resource: string,
        requestBody: {
            value?: (string | number | boolean);
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/devices/{device_id}/{object}/{instance}/{resource}',
            path: {
                'device_id': deviceId,
                'object': object,
                'instance': instance,
                'resource': resource,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `指定した Resource が Write をサポートしていません (デバイスがオフラインなど接続エラーの場合を含みます)`,
                404: `指定した Resource が見つかりません`,
                500: `デバイスから更新エラーの応答がありました。(デバイスから LwM2M 応答メッセージがエラーの場合が含まれます。デバイスからのエラーメッセージは、レスポンスの \`message\` に含まれます。)`,
            },
        });
    }
    /**
     * デバイスの Resource を Execute する
     * デバイスの Resource を Execute します。
     * @param deviceId 対象となるデバイス
     * @param object Object ID
     * @param instance Instance ID
     * @param resource Resource ID
     * @param requestBody Resource を実行する際に渡す引数文字列
     * @returns any Resource の実行を受け付けました
     * @throws ApiError
     */
    public static executeDeviceResource(
        deviceId: string,
        object: string,
        instance: string,
        resource: string,
        requestBody?: {
            value?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/devices/{device_id}/{object}/{instance}/{resource}/execute',
            path: {
                'device_id': deviceId,
                'object': object,
                'instance': instance,
                'resource': resource,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Resource は Execute 操作をサポートしていません (デバイスがオフラインなど接続エラーの場合を含みます)`,
                404: `Resource が見つかりません`,
            },
        });
    }
    /**
     * 指定されたデバイスの Resource の Observe を開始する
     * 指定されたデバイスの Resource の Observe を開始します。Observe を開始すると、デバイス側で値に変化があったらサーバー側に通知するようになります。
     * @param deviceId 対象となるデバイス
     * @param object Object ID
     * @param instance Instance ID
     * @param resource Resource ID
     * @param model モデル情報を含めるかどうか
     * @returns any Resource の Observe を開始しました
     * @throws ApiError
     */
    public static observeDeviceResource(
        deviceId: string,
        object: string,
        instance: string,
        resource: string,
        model: boolean = false,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/devices/{device_id}/{object}/{instance}/{resource}/observe',
            path: {
                'device_id': deviceId,
                'object': object,
                'instance': instance,
                'resource': resource,
            },
            query: {
                'model': model,
            },
            errors: {
                400: `Resource は Read 操作をサポートしていません (デバイスがオフラインなど接続エラーの場合を含みます)`,
                404: `Resource が見つかりません`,
            },
        });
    }
    /**
     * デバイスの Resource の Observe を停止する
     * デバイスの Resource の Observe を停止します。
     * @param deviceId 対象となるデバイス
     * @param object Object ID
     * @param instance Instance ID
     * @param resource Resource ID
     * @returns void
     * @throws ApiError
     */
    public static unobserveDeviceResource(
        deviceId: string,
        object: string,
        instance: string,
        resource: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/devices/{device_id}/{object}/{instance}/{resource}/unobserve',
            path: {
                'device_id': deviceId,
                'object': object,
                'instance': instance,
                'resource': resource,
            },
            errors: {
                404: `Resource が見つかりません`,
            },
        });
    }
    /**
     * 指定されたデバイスの Object Instance 下の Resource 全体の Observe を開始する
     * 指定されたデバイスの Object Instance 下の Resource 全体の Observe を開始します。
     * @param deviceId 対象となるデバイス
     * @param object Object ID
     * @param instance Instance ID
     * @param model モデルの情報を追加するか否か
     * @returns any Observe を開始しました
     * @throws ApiError
     */
    public static observeDeviceResources(
        deviceId: string,
        object: string,
        instance: string,
        model: boolean = false,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/devices/{device_id}/{object}/{instance}/observe',
            path: {
                'device_id': deviceId,
                'object': object,
                'instance': instance,
            },
            query: {
                'model': model,
            },
            errors: {
                400: `Resource は Read 操作をサポートしていません (デバイスがオフラインなど接続エラーの場合を含みます)`,
                404: `Resource が見つかりません`,
            },
        });
    }
    /**
     * 指定されたデバイスの Object Instance への Observe を停止する
     * 指定されたデバイスの Object Instance への Observe を停止します。
     * @param deviceId 対象となるデバイス
     * @param object Object ID
     * @param instance Instance ID
     * @returns void
     * @throws ApiError
     */
    public static unobserveDeviceResources(
        deviceId: string,
        object: string,
        instance: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/devices/{device_id}/{object}/{instance}/unobserve',
            path: {
                'device_id': deviceId,
                'object': object,
                'instance': instance,
            },
            errors: {
                404: `Resource が見つかりません`,
            },
        });
    }
    /**
     * Inventory デバイスから Harvest Data に送信されたデータを取得する
     * 指定した Inventory デバイスから Harvest Data に送信されたデータの中で、条件に合うデータを取得します。データエントリが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param deviceId データ取得対象の Inventory デバイスの ID。Inventory デバイスの ID は [Device:listDevices API](#/Device/listDevices) で取得できます。
     * @param from 取得対象の期間の始まり (UNIX 時間 (ミリ秒))
     * @param to 取得対象の期間の終わり (UNIX 時間 (ミリ秒))
     * @param sort データエントリのソート順。下降順 (最新のデータが先頭) もしくは上昇順 (最も古いデータが先頭)。
     * @param limit 取得するデータエントリ数の上限 (1 〜 1000)。デフォルトは、`10` です。
     * @param lastEvaluatedKey 前ページで取得した最後のデータエントリのタイムスタンプ。このパラメータを指定することで次のデータエントリ以降のリストを取得できる。
     * @returns DataEntry データエントリのリスト
     * @throws ApiError
     */
    public static getDataFromDevice(
        deviceId: string,
        from?: number,
        to?: number,
        sort: 'desc' | 'asc' = 'desc',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<DataEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/devices/{device_id}/data',
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
     * Inventory デバイスを Inventory グループに所属させる
     * Inventory デバイスを Inventory グループに所属させます。
     * @param deviceId 対象の Inventory デバイスのデバイス ID。
     * @param requestBody
     * @returns Device 更新後の Inventory デバイスの詳細情報。
     * @throws ApiError
     */
    public static setDeviceGroup(
        deviceId: string,
        requestBody: SetGroupRequest,
    ): CancelablePromise<Device> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/devices/{device_id}/set_group',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Inventory デバイスが存在しない。`,
            },
        });
    }
    /**
     * デバイスのタグを更新する
     * デバイスのタグを更新します。
     * @param deviceId 更新するデバイスのデバイス ID
     * @param requestBody 追加・更新対象のタグの配列
     * @returns Device デバイスが更新された
     * @throws ApiError
     */
    public static putDeviceTags(
        deviceId: string,
        requestBody: Array<TagUpdateRequest>,
    ): CancelablePromise<Device> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/devices/{device_id}/tags',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定されたデバイス ID を持つデバイスが見つからなかった`,
            },
        });
    }
    /**
     * デバイスのタグを削除する
     * デバイスのタグを削除します。
     * @param deviceId 更新するデバイスのデバイス ID
     * @param tagName 削除するタグの名前
     * @returns void
     * @throws ApiError
     */
    public static deleteDeviceTag(
        deviceId: string,
        tagName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/devices/{device_id}/tags/{tag_name}',
            path: {
                'device_id': deviceId,
                'tag_name': tagName,
            },
            errors: {
                404: `指定されたデバイス ID を持つデバイス、もしくは指定されたタグが見つからなかった`,
            },
        });
    }
    /**
     * Inventory デバイスを Inventory グループから外す
     * Inventory デバイスを Inventory グループから外します。
     * @param deviceId 対象の Inventory デバイスのデバイス ID。
     * @returns Device 更新後の Inventory デバイスの詳細情報。
     * @throws ApiError
     */
    public static unsetDeviceGroup(
        deviceId: string,
    ): CancelablePromise<Device> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/devices/{device_id}/unset_group',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `Inventory デバイスが存在しない。`,
            },
        });
    }
}
