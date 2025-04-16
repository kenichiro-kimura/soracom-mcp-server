/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataEntry } from '../models/DataEntry';
import type { DataSourceResourceMetadata } from '../models/DataSourceResourceMetadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataEntryService {
    /**
     * データ送信元リソースから Harvest Data に送信したデータを取得する
     * 指定されたデータ送信元リソースから Harvest Data に送信されたデータの中で、条件に合うデータを取得します。データエントリが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param resourceType データ送信元リソースの Type
     * @param resourceId データ送信元リソースの ID。`resource_type` の値によって、指定する ID が異なります。
     *
     * | `resource_type` | 指定する ID |
     * |-|-|
     * | `Subscriber` | IoT SIM の IMSI |
     * | `LoraDevice` | LoRaWAN デバイスの ID |
     * | `Sim` | IoT SIM の SIM ID |
     * | `SigfoxDevice` | Sigfox デバイスの ID |
     * | `Device` | Inventory デバイスの ID |
     * | `SoraCam` | ソラカメ対応カメラのデバイス ID |
     *
     * @param from 取得対象の期間の始まり (UNIX 時間 (ミリ秒))
     * @param to 取得対象の期間の終わり (UNIX 時間 (ミリ秒))
     * @param sort データエントリのソート順。下降順 (最新のデータが先頭) もしくは上昇順 (最も古いデータが先頭)。
     * @param limit 取得するデータエントリ数の上限 (1 〜 1000)。デフォルトは、`10` です。
     * @param lastEvaluatedKey 前のページで取得した最後のデータエントリのキー。このパラメータを指定することで次のデータエントリを取得できます。
     * @returns DataEntry データエントリのリスト
     * @throws ApiError
     */
    public static getDataEntries(
        resourceType: 'Subscriber' | 'LoraDevice' | 'Sim' | 'SigfoxDevice' | 'Device' | 'SoraCam',
        resourceId: string,
        from?: number,
        to?: number,
        sort: 'desc' | 'asc' = 'desc',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<DataEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data/{resource_type}/{resource_id}',
            path: {
                'resource_type': resourceType,
                'resource_id': resourceId,
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
     * データエントリを削除する
     * リソース ID とタイムスタンプで指定されたデータエントリを削除する。
     * @param resourceType データ送信元リソースの Type
     * @param resourceId データ送信元リソースの ID。`resource_type` の値によって、指定する ID が異なります。
     *
     * | `resource_type` | 指定する ID |
     * |-|-|
     * | `Subscriber` | IoT SIM の IMSI |
     * | `LoraDevice` | LoRaWAN デバイスの ID |
     * | `Sim` | IoT SIM の SIM ID |
     * | `SigfoxDevice` | Sigfox デバイスの ID |
     * | `Device` | Inventory デバイスの ID |
     * | `SoraCam` | ソラカメ対応カメラのデバイス ID |
     *
     * @param time 削除対象のデータエントリのタイムスタンプ (UNIX 時間 (ミリ秒))
     * @returns void
     * @throws ApiError
     */
    public static deleteDataEntry(
        resourceType: 'Subscriber' | 'LoraDevice' | 'Sim' | 'SigfoxDevice' | 'Device' | 'SoraCam',
        resourceId: string,
        time: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/data/{resource_type}/{resource_id}/{time}',
            path: {
                'resource_type': resourceType,
                'resource_id': resourceId,
                'time': time,
            },
        });
    }
    /**
     * データエントリを取得する
     * リソース ID とタイムスタンプで指定されたデータエントリを取得する。
     * @param resourceType データ送信元リソースの Type
     * @param resourceId データ送信元リソースの ID。`resource_type` の値によって、指定する ID が異なります。
     *
     * | `resource_type` | 指定する ID |
     * |-|-|
     * | `Subscriber` | IoT SIM の IMSI |
     * | `LoraDevice` | LoRaWAN デバイスの ID |
     * | `Sim` | IoT SIM の SIM ID |
     * | `SigfoxDevice` | Sigfox デバイスの ID |
     * | `Device` | Inventory デバイスの ID |
     * | `SoraCam` | ソラカメ対応カメラのデバイス ID |
     *
     * @param time 取得対象のデータエントリのタイムスタンプ (UNIX 時間 (ミリ秒))
     * @returns any リソース ID とタイムスタンプで特定されるデータエントリ
     * @throws ApiError
     */
    public static getDataEntry(
        resourceType: 'Subscriber' | 'LoraDevice' | 'Sim' | 'SigfoxDevice' | 'Device' | 'SoraCam',
        resourceId: string,
        time: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data/{resource_type}/{resource_id}/{time}',
            path: {
                'resource_type': resourceType,
                'resource_id': resourceId,
                'time': time,
            },
            errors: {
                404: `対象のデータエントリが存在しない`,
            },
        });
    }
    /**
     * データ送信元リソースのリストを取得する
     * 当該オペレータに属するデータ送信元リソースのリストを返す。データ送信元リソースの総数が 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param resourceType 対象のリソース Type。
     *
     * - `Subscriber`: IoT SIM。
     * - `LoraDevice`: LoRaWAN デバイス。
     * - `Sim`: IoT SIM。
     * - `SigfoxDevice`: Sigfox デバイス。
     * - `Device`: Inventory デバイス。
     * - `SoraCam`: ソラカメ対応カメラ。
     *
     * @param limit 取得するデータエントリ数の上限
     * @param lastEvaluatedKey 前ページで取得した最後のデータ送信元リソースの ID。このパラメータを指定することで次のデータ送信元リソース以降のリストを取得できる。
     * @returns DataSourceResourceMetadata データ送信元リソースのリスト
     * @throws ApiError
     */
    public static listDataSourceResources(
        resourceType?: 'Subscriber' | 'LoraDevice' | 'Sim' | 'SigfoxDevice' | 'Device' | 'SoraCam',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<DataSourceResourceMetadata>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/data/resources',
            query: {
                'resource_type': resourceType,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
}
