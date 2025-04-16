/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataEntry } from '../models/DataEntry';
import type { LoraData } from '../models/LoraData';
import type { LoraDevice } from '../models/LoraDevice';
import type { RegisterLoraDeviceRequest } from '../models/RegisterLoraDeviceRequest';
import type { SetGroupRequest } from '../models/SetGroupRequest';
import type { TagUpdateRequest } from '../models/TagUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LoraDeviceService {
    /**
     * LoRaWAN デバイス のリストを取得する
     * 条件に合う LoRAWAN デバイスを取得します。LoRaWAN デバイスが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param tagName 検索対象にするタグの名前(完全一致)
     * @param tagValue 検索対象にするタグの検索文字列。`tag_name` を指定した場合は必須
     * @param tagValueMatchMode タグの検索条件
     * @param limit 取得する LoRaWAN デバイスの上限
     * @param lastEvaluatedKey 前ページで取得した最後の LoRaWAN デバイスの Device ID。このパラメータを指定することで次の LoRaWAN デバイス以降のリストを取得できる
     * @returns LoraDevice 条件にマッチする LoRaWAN デバイスのリスト
     * @throws ApiError
     */
    public static listLoraDevices(
        tagName?: string,
        tagValue?: string,
        tagValueMatchMode: 'exact' | 'prefix' = 'exact',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<LoraDevice>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lora_devices',
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
     * LoRaWAN デバイスの情報を取得する
     * 指定された LoRaWAN デバイスの情報を返す。
     * @param deviceId 対象の LoRaWAN デバイスの Device ID
     * @returns LoraDevice 指定された LoRaWAN デバイスの詳細情報
     * @throws ApiError
     */
    public static getLoraDevice(
        deviceId: string,
    ): CancelablePromise<LoraDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lora_devices/{device_id}',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定された LoRaWAN デバイスが存在しない`,
            },
        });
    }
    /**
     * LoRaWAN デバイスから Harvest Data に送信されたデータを取得する
     * 指定した LoRaWAN デバイス から Harvest Data に送信されたデータの中で、条件に合うデータを取得します。データエントリが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param deviceId データ取得対象の LoRaWAN デバイスの ID。LoRaWAN デバイスの ID は [LoraDevice:listLoraDevices API](#/LoraDevice/listLoraDevices) で取得できます。
     * @param from 取得対象の期間の始まり (UNIX 時間 (ミリ秒))
     * @param to 取得対象の期間の終わり (UNIX 時間 (ミリ秒))
     * @param sort データエントリのソート順。下降順 (最新のデータが先頭) もしくは上昇順 (最も古いデータが先頭)。
     * @param limit 取得するデータエントリ数の上限 (1 〜 1000)。デフォルトは、`10` です。
     * @param lastEvaluatedKey 前ページで取得した最後のデータエントリのタイムスタンプ。このパラメータを指定することで次のデータエントリ以降のリストを取得できる。
     * @returns DataEntry データエントリのリスト
     * @throws ApiError
     */
    public static getDataFromLoraDevice(
        deviceId: string,
        from?: number,
        to?: number,
        sort: 'desc' | 'asc' = 'desc',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<DataEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lora_devices/{device_id}/data',
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
     * LoRaWAN デバイスにデータを送信する
     * 指定したデバイスにデータを送信する。データは LoRa Network Server にセットされ、次に利用可能なデータ送信スロットを使って指定デバイスに送信される。未送信のデータが LoRa Network Server にあった場合には、最新の受信データで上書きされる。一定時間 (2 時間) デバイスに受け取られなかったデータは破棄されます。
     * @param deviceId 送信先デバイスの ID
     * @param requestBody 16 進数でエンコードされたバイナリデータの文字列。バイナリデータの最大サイズは 11 octets (16 進数エンコードされた文字列で 22 文字)。文字数は偶数でなければなりません。fPort を任意で指定できます。fPort は 0 以上でなければなりません。0 はコントロールプレーンに使用され、通常は 1 以上を使用します。無効な値が与えられた場合には特定ベンダーのデバイスで問題が起こらないように設定されたデフォルト値である 2 が使用されます。
     * @returns void
     * @throws ApiError
     */
    public static sendDataToLoraDevice(
        deviceId: string,
        requestBody: LoraData,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_devices/{device_id}/data',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `与えられた JSON に無効な値が含まれている。`,
                404: `指定された LoRa デバイスが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN デバイスをターミネイト不可にする
     * 指定された LoRaWAN デバイスを Terminate 不可能に設定する
     * @param deviceId 対象の LoRaWAN デバイスの ID
     * @returns LoraDevice 更新後の LoRaWAN デバイスの詳細情報
     * @throws ApiError
     */
    public static disableTerminationOnLoraDevice(
        deviceId: string,
    ): CancelablePromise<LoraDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_devices/{device_id}/disable_termination',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定された LoRaWAN デバイスが存在しない`,
            },
        });
    }
    /**
     * LoRaWAN デバイスをターミネイト可能にする
     * 指定された LoRaWAN デバイスを Terminate 可能に設定する
     * @param deviceId 対象の LoRaWAN デバイスの ID
     * @returns LoraDevice 更新後の LoRaWAN デバイスの詳細情報
     * @throws ApiError
     */
    public static enableTerminationOnLoraDevice(
        deviceId: string,
    ): CancelablePromise<LoraDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_devices/{device_id}/enable_termination',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定された LoRaWAN デバイスが存在しない`,
            },
        });
    }
    /**
     * LoRaWAN デバイスを登録する
     * LoRaWAN デバイスを登録
     * @param deviceId 対象の LoRaWAN デバイスの Device ID
     * @param requestBody LoRaWAN デバイス
     * @returns LoraDevice LoRaWAN デバイス登録完了
     * @throws ApiError
     */
    public static registerLoraDevice(
        deviceId: string,
        requestBody: RegisterLoraDeviceRequest,
    ): CancelablePromise<LoraDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_devices/{device_id}/register',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LoRaWAN デバイスを LoRaWAN グループに所属させる
     * LoRaWAN デバイスを LoRaWAN グループに所属させます。
     * @param deviceId 対象の LoRaWAN デバイスの ID。LoRaWAN デバイスの ID は [LoraDevice:listLoraDevices API](#/LoraDevice/listLoraDevices) で取得できます。
     * @param requestBody
     * @returns LoraDevice 更新後の LoRaWAN デバイスの詳細情報。
     * @throws ApiError
     */
    public static setLoraDeviceGroup(
        deviceId: string,
        requestBody: SetGroupRequest,
    ): CancelablePromise<LoraDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_devices/{device_id}/set_group',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `LoRaWAN デバイスが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN デバイスのタグを追加・更新する
     * 指定された LoRaWAN デバイスのタグを追加・更新
     * @param deviceId 対象の LoRaWAN デバイスの ID
     * @param requestBody 追加・更新対象のタグの配列
     * @returns LoraDevice 更新後の LoRaWAN デバイスの詳細情報
     * @throws ApiError
     */
    public static putLoraDeviceTags(
        deviceId: string,
        requestBody: Array<TagUpdateRequest>,
    ): CancelablePromise<LoraDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lora_devices/{device_id}/tags',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された LoRaWAN デバイスが存在しない`,
            },
        });
    }
    /**
     * LoRaWAN デバイスのタグを削除する
     * 指定された LoRaWAN デバイスのタグを削除
     * @param deviceId 対象の LoRaWAN デバイスの ID
     * @param tagName 削除対象のタグ名 (URL の Path の一部になるので、パーセントエンコーディングを施す。JavaScript なら encodeURIComponent() したものを指定する)
     * @returns void
     * @throws ApiError
     */
    public static deleteLoraDeviceTag(
        deviceId: string,
        tagName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lora_devices/{device_id}/tags/{tag_name}',
            path: {
                'device_id': deviceId,
                'tag_name': tagName,
            },
            errors: {
                404: `指定された LoRaWAN デバイスあるいはタグが存在しない`,
            },
        });
    }
    /**
     * LoRaWAN デバイスをターミネイトする
     * 指定された LoRaWAN デバイスを Terminate
     * @param deviceId 対象の LoRaWAN デバイスの ID
     * @returns LoraDevice 更新後の LoRaWAN デバイスの詳細情報
     * @throws ApiError
     */
    public static terminateLoraDevice(
        deviceId: string,
    ): CancelablePromise<LoraDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_devices/{device_id}/terminate',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定された LoRaWAN デバイスが存在しない`,
            },
        });
    }
    /**
     * LoRaWAN デバイスを LoRaWAN グループから外す
     * LoRaWAN デバイスを LoRaWAN グループから外します。
     * @param deviceId 対象の LoRaWAN デバイスの ID。LoRaWAN デバイスの ID は [LoraDevice:listLoraDevices API](#/LoraDevice/listLoraDevices) で取得できます。
     * @returns LoraDevice 更新後の LoRaWAN デバイスの詳細情報。
     * @throws ApiError
     */
    public static unsetLoraDeviceGroup(
        deviceId: string,
    ): CancelablePromise<LoraDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_devices/{device_id}/unset_group',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `LoRaWAN デバイスが存在しない。`,
            },
        });
    }
}
