/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogEntry } from '../models/LogEntry';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LogService {
    /**
     * エラーログを取得する
     * 条件に合うエラーログを取得します。エラーログが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param resourceType エラーログ取得対象のリソースのタイプ。
     *
     * - `Subscriber`: IoT SIM。
     * - `Device`: Inventory デバイス。
     * - `LoraDevice`: LoRaWAN デバイス。
     * - `SigfoxDevice`: Sigfox デバイス。
     *
     * @param resourceId エラーログ取得対象リソースの ID。`resource_type` の値によって、指定する ID が異なります。
     *
     * | `resource_type` | 指定する ID |
     * |-|-|
     * | `Subscriber` | IoT SIM の IMSI。IMSI は [Sim:listSims API](#/Sim/listSims) で取得できます。 |
     * | `Device` | Inventory デバイスの ID。ID は [Device:listDevices API](#/Device/listDevices) で取得できます。 |
     * | `LoraDevice` | LoRaWAN デバイスの ID。ID は [LoraDevice:listLoraDevices API](#/LoraDevice/listLoraDevices) で取得できます。 |
     * | `SigfoxDevice` | Sigfox デバイスの ID。ID は [SigfoxDevice:listSigfoxDevices API](#/SigfoxDevice/listSigfoxDevices) で取得できます。 |
     *
     * @param service エラーログをフィルタするためのサービス名。
     *
     * - `Air`: SORACOM Air
     * - `Beam`: SORACOM Beam
     * - `Funk`: SORACOM Funk
     * - `Funnel`: SORACOM Funnel
     * - `Harvest`: SORACOM Harvest Data/Files
     * - `Napter`: SORACOM Napter
     * - `Orbit`: SORACOM Orbit
     * - `Unified`: Unified Endpoint
     *
     * @param from エラーログ取得対象の期間の始まり (UNIX 時間 (ミリ秒))。
     * @param to エラーログ取得対象の期間の終わり (UNIX 時間 (ミリ秒))。
     * @param limit 取得するエラーログ数の上限。
     * @param lastEvaluatedKey 前ページを取得したときに返された `x-soracom-next-key` ヘッダーに含まれる値。次ページを取得する場合に指定します。詳しくは、[大量のデータを取得する (ページング)](/ja-jp/tools/api/paging/) を参照してください。
     * @returns LogEntry エラーログのリスト。
     * @throws ApiError
     */
    public static getLogs(
        resourceType?: 'Subscriber' | 'Device' | 'LoraDevice' | 'SigfoxDevice',
        resourceId?: string,
        service?: 'Air' | 'Beam' | 'Funk' | 'Funnel' | 'Harvest' | 'Napter' | 'Orbit' | 'Unified',
        from?: number,
        to?: number,
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<LogEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/logs',
            query: {
                'resource_type': resourceType,
                'resource_id': resourceId,
                'service': service,
                'from': from,
                'to': to,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
}
