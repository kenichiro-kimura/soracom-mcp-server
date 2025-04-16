/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIAuditLogEntry } from '../models/APIAuditLogEntry';
import type { NapterAuditLogEntry } from '../models/NapterAuditLogEntry';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuditLogService {
    /**
     * SORACOM API 呼び出しの監査ログを取得する
     * SORACOM API 呼び出しの監査ログを新しいものから順に取得する
     * @param apiKind ログ取得のフィルターに用いる API 種別 (例: `/v1/auth`)
     * @param fromEpochMs ログ取得対象の期間の始まり (unixtime milliseconds)
     * @param toEpochMs ログ取得対象の期間の終わり (unixtime milliseconds)
     * @param limit 取得するログエントリ数の上限 (1 〜 1000)
     * @param lastEvaluatedKey 前ページで取得した最後のログエントリのタイムスタンプ (`requestedTimeEpochMs`)。このパラメータを指定することで次のログエントリ以降のリストを取得できる。
     * @returns APIAuditLogEntry SORACOM API 呼び出し監査ログのエントリのリスト
     * @throws ApiError
     */
    public static getApiAuditLogs(
        apiKind?: string,
        fromEpochMs?: number,
        toEpochMs?: number,
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<APIAuditLogEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/audit_logs/api',
            query: {
                'api_kind': apiKind,
                'from_epoch_ms': fromEpochMs,
                'to_epoch_ms': toEpochMs,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * SORACOM Napter の監査ログを取得する
     * SORACOM Napter の監査ログを新しいものから順に取得する
     * @param resourceType ログ取得対象のリソースのタイプ
     * @param resourceId ログ取得対象のリソースの ID
     * @param from ログ取得対象の期間の始まり (unixtime milliseconds)
     * @param to ログ取得対象の期間の終わり (unixtime milliseconds)
     * @param limit 取得するログエントリ数の上限 (1 〜 1000)
     * @param lastEvaluatedKey 前ページで取得した最後のログエントリのタイムスタンプ。このパラメータを指定することで次のログエントリ以降のリストを取得できる。
     * @returns NapterAuditLogEntry Napter 監査ログのエントリのリスト
     * @throws ApiError
     */
    public static getNapterAuditLogs(
        resourceType?: 'Subscriber',
        resourceId?: string,
        from?: number,
        to?: number,
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<NapterAuditLogEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/audit_logs/napter',
            query: {
                'resource_type': resourceType,
                'resource_id': resourceId,
                'from': from,
                'to': to,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
}
