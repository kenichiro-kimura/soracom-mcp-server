/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataEntry } from '../models/DataEntry';
import type { DownlinkPingRequest } from '../models/DownlinkPingRequest';
import type { DownlinkPingResponse } from '../models/DownlinkPingResponse';
import type { ExpiryTime } from '../models/ExpiryTime';
import type { FileExportResponse } from '../models/FileExportResponse';
import type { IssueSubscriberTransferTokenRequest } from '../models/IssueSubscriberTransferTokenRequest';
import type { IssueSubscriberTransferTokenResponse } from '../models/IssueSubscriberTransferTokenResponse';
import type { RegisterSubscribersRequest } from '../models/RegisterSubscribersRequest';
import type { SessionEvent } from '../models/SessionEvent';
import type { SetGroupRequest } from '../models/SetGroupRequest';
import type { SetImeiLockRequest } from '../models/SetImeiLockRequest';
import type { SmsForwardingReport } from '../models/SmsForwardingReport';
import type { SmsForwardingRequest } from '../models/SmsForwardingRequest';
import type { Subscriber } from '../models/Subscriber';
import type { TagUpdateRequest } from '../models/TagUpdateRequest';
import type { UpdateSpeedClassRequest } from '../models/UpdateSpeedClassRequest';
import type { VerifySubscriberTransferTokenRequest } from '../models/VerifySubscriberTransferTokenRequest';
import type { VerifySubscriberTransferTokenResponse } from '../models/VerifySubscriberTransferTokenResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubscriberService {
    /**
     * Subscriber のリストを取得する
     * 条件に合う Subscriber を取得します。Subscriber が 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param tagName 検索対象にするタグの名前(完全一致)。
     * @param tagValue 検索対象にするタグの検索文字列。`tag_name` を指定した場合は必須。
     * @param tagValueMatchMode タグの検索条件。
     * @param statusFilter 検索対象にする status。`|`で区切って複数指定することができる。指定可能な値の一覧は以下のとおり: `active`, `inactive`, `ready`, `instock`, `shipped`, `suspended`, `terminated`
     * @param speedClassFilter 検索対象にする速度クラス。`|`で区切って複数指定することができる。指定可能な値の一覧は以下のとおり:
     *
     * - `s1.minimum`
     * - `s1.slow`
     * - `s1.standard`
     * - `s1.fast`
     * - `s1.4xfast`
     * - `s1.8xfast`
     * - `u1.standard`
     * - `u1.slow`
     * - `t1.standard`
     * - `arc.standard`
     *
     * @param serialNumberFilter 検索対象にする製造番号。`|`で区切って複数指定することができる。指定された値で始まる製造番号を持つ Subscriber の一覧を返す。
     * @param limit 取得する Subscriber の上限 (1 〜 100)。ただし、返却される Subscriber の個数は指定された値を下回る可能性があります。
     * @param lastEvaluatedKey 前ページで取得した最後の Subscriber の IMSI。このパラメータを指定することで次の Subscriber 以降のリストを取得できる。
     * @returns Subscriber A list of subscribers
     * @throws ApiError
     */
    public static listSubscribers(
        tagName?: string,
        tagValue?: string,
        tagValueMatchMode: 'exact' | 'prefix' = 'exact',
        statusFilter?: string,
        speedClassFilter?: string,
        serialNumberFilter?: string,
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<Subscriber>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscribers',
            query: {
                'tag_name': tagName,
                'tag_value': tagValue,
                'tag_value_match_mode': tagValueMatchMode,
                'status_filter': statusFilter,
                'speed_class_filter': speedClassFilter,
                'serial_number_filter': serialNumberFilter,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * Subscriber の情報を取得する
     * 指定した Subscriber の情報を取得する。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber Subscriber の詳細情報。
     * @throws ApiError
     */
    public static getSubscriber(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscribers/{imsi}',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber のステータスを「使用中 (active)」に変更する
     * 指定した Subscriber のステータスを「使用中 (active)」に変更する。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static activateSubscriber(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/activate',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber にバンドルを設定する
     * 指定した Subscriber にバンドルを設定します。
     * @param imsi 対象の Subscriber の IMSI。IMSI は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param requestBody Subscriber に設定するバンドルの配列
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static putBundles(
        imsi: string,
        requestBody: Array<'D-300MB' | 'DU-10GB' | 'DU-50GB' | 'DU-100GB'>,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscribers/{imsi}/bundles',
            path: {
                'imsi': imsi,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `指定されたバンドルは、この Subscriber のサブスクリプションではサポートされていない`,
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * IoT SIM から Harvest Data に送信したデータを取得する
     * 指定した IoT SIM から Harvest Data に送信されたデータの中で、条件に合うデータを取得します。データエントリが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param imsi データ取得対象の IoT SIM の IMSI
     * @param from 取得対象の期間の始まり (UNIX 時間 (ミリ秒))
     * @param to 取得対象の期間の終わり (UNIX 時間 (ミリ秒))
     * @param sort データエントリのソート順。下降順 (最新のデータが先頭) もしくは上昇順 (最も古いデータが先頭)。
     * @param limit 取得するデータエントリ数の上限 (1 〜 1000)。デフォルトは、`10` です。
     * @param lastEvaluatedKey 前のページで取得した最後のデータエントリのキー。この API でのデータエントリーのキーは、`${UNIX 時間 (ミリ秒)}_${IMSI}` です。このパラメータを指定することで次のデータエントリを取得できます。
     *
     * @returns DataEntry データエントリのリスト
     * @throws ApiError
     */
    public static getDataFromSubscriber(
        imsi: string,
        from?: number,
        to?: number,
        sort: 'desc' | 'asc' = 'desc',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<DataEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscribers/{imsi}/data',
            path: {
                'imsi': imsi,
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
     * Subscriber のステータスを「休止中 (inactive)」に変更する
     * 指定した Subscriber のステータスを「休止中 (inactive)」に変更する。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static deactivateSubscriber(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/deactivate',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber のセッションを切断する
     * 指定した Subscriber のセッションを切断する。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static deleteSubscriberSession(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/delete_session',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber の解約プロテクションを設定する (解約できないようにする)
     * 指定した Subscriber の解約プロテクションを設定する (解約できないようにする)。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static disableTermination(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/disable_termination',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber に対して ping リクエストを送信する
     * 指定した Subscriber に ICMP ping リクエストを送信する。
     * @param imsi 対象の Subscriber の IMSI
     * @param requestBody ping リクエストのオプション
     * @returns DownlinkPingResponse ping の結果
     * @throws ApiError
     */
    public static subscriberDownlinkPingToUserEquipment(
        imsi: string,
        requestBody: DownlinkPingRequest,
    ): CancelablePromise<DownlinkPingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/downlink/ping',
            path: {
                'imsi': imsi,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Subscriber の解約プロテクションを解除する (解約できるようにする)
     * 指定した Subscriber の解約プロテクションを解除する (解約できるようにする)。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static enableTermination(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/enable_termination',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * セッション履歴リストを取得する
     * 指定した Subscriber に関する過去 32 日間のセッションの作成 / 変更 / 切断のイベント履歴を取得します。イベント履歴が 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param imsi 対象の Subscriber の IMSI
     * @param from イベントの検索範囲時刻の始まり(unixtime)
     * @param to イベントの検索範囲時刻の終わり(unixtime)
     * @param limit 取得するイベント数の上限
     * @param lastEvaluatedKey 前ページで取得した最後のイベントのタイムスタンプ。このパラメータを指定することで次のイベント以降のリストを取得できる。
     * @returns SessionEvent A list of session events
     * @throws ApiError
     */
    public static listSessionEvents(
        imsi: string,
        from?: number,
        to?: number,
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<SessionEvent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscribers/{imsi}/events/sessions',
            path: {
                'imsi': imsi,
            },
            query: {
                'from': from,
                'to': to,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * Subscriber を登録する
     * オペレーターに Subscriber を登録する。
     * @param imsi 対象の Subscriber の IMSI
     * @param requestBody subscriber
     * @returns Subscriber Subscriber 登録完了
     * @throws ApiError
     */
    public static registerSubscriber(
        imsi: string,
        requestBody: RegisterSubscribersRequest,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/register',
            path: {
                'imsi': imsi,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SIM ローカル情報レポートを更新する
     * Subscriber に対し、SIM ローカル情報レポートを更新するように指示する。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber SIM ローカル情報レポートの指示に成功。Subscriber の情報は SIM からのレポートが成功した時点で非同期に更新される
     * @throws ApiError
     */
    public static reportLocalInfo(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/report_local_info',
            path: {
                'imsi': imsi,
            },
            errors: {
                400: `Subscriber が SIM ローカル情報レポート機能に対応していない`,
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber を IMSI で指定して SMS を送信する
     * 指定した Subscriber 宛に SMS を送信する。
     * @param imsi SMS 送信対象の Subscriber の IMSI
     * @param requestBody メッセージ本体とエンコーディングタイプからなる SMS 送信リクエスト
     * @returns SmsForwardingReport SMS 送信を受け付け完了。メッセージに割り振られた ID を返す
     * @throws ApiError
     */
    public static sendSms(
        imsi: string,
        requestBody: SmsForwardingRequest,
    ): CancelablePromise<SmsForwardingReport> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/send_sms',
            path: {
                'imsi': imsi,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `指定した Subscriber は SMS API をサポートしていない`,
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber の有効期限とアクションを設定する
     * 指定した Subscriber の有効期限とアクションを設定する。
     * @param imsi 対象の Subscriber の IMSI
     * @param requestBody 更新後の有効期限 (UNIX 時間 (ミリ秒)) とアクション
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static setExpiryTime(
        imsi: string,
        requestBody: ExpiryTime,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/set_expiry_time',
            path: {
                'imsi': imsi,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * IoT SIM を SIM グループに所属させる
     * IoT SIM を SIM グループに所属させます。
     * @param imsi 対象の IoT SIM の Subscriber の IMSI。IMSI は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param requestBody
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static setGroup(
        imsi: string,
        requestBody: SetGroupRequest,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/set_group',
            path: {
                'imsi': imsi,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber の IMEI ロックを設定する
     * 指定した Subscriber の IMEI ロックを設定する。
     * @param imsi 対象の Subscriber の IMSI
     * @param requestBody Subscriber に指定する IMEI ロックの設定 （オンラインの Subscriber の現在の IMEI にロックするには IMEI は指定しなくてもよい）
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static setImeiLock(
        imsi: string,
        requestBody?: SetImeiLockRequest,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/set_imei_lock',
            path: {
                'imsi': imsi,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `IMEI 文字列が無効か、オフラインの Subscriber にも関わらず IMEI が指定されていない.`,
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber のステータスを「利用開始待ち (standby)」に変更する
     * 指定した Subscriber のステータスを「利用開始待ち (standby)」に変更する。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static setSubscriberToStandby(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/set_to_standby',
            path: {
                'imsi': imsi,
            },
            errors: {
                400: `指定した Subscriber は「利用開始待ち (standby)」に対応していない`,
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber のステータスを「利用中断中 (suspended)」に変更する
     * 指定した Subscriber のステータスを「利用中断中 (suspended)」に変更する。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static suspendSubscriber(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/suspend',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber のタグを追加 / 更新する
     * 指定した Subscriber のタグを追加 / 更新する。
     * @param imsi 対象の Subscriber の IMSI
     * @param requestBody 追加・更新対象のタグの配列
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static putSubscriberTags(
        imsi: string,
        requestBody: Array<TagUpdateRequest>,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscribers/{imsi}/tags',
            path: {
                'imsi': imsi,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber のタグを削除する
     * 指定した Subscriber のタグを削除する。
     * @param imsi 対象の Subscriber の IMSI
     * @param tagName 削除対象のタグ名（URL の Path の一部になるので、パーセントエンコーディングを施す。JavaScript なら encodeURIComponent() したものを指定する）
     * @returns void
     * @throws ApiError
     */
    public static deleteSubscriberTag(
        imsi: string,
        tagName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscribers/{imsi}/tags/{tag_name}',
            path: {
                'imsi': imsi,
                'tag_name': tagName,
            },
            errors: {
                404: `指定した Subscriber あるいはタグが存在しない`,
            },
        });
    }
    /**
     * Subscriber を解約する
     * 指定した Subscriber を解約する。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static terminateSubscriber(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/terminate',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber の有効期限を解除する
     * 指定した Subscriber の有効期限を解除する。
     * @param imsi 対象の Subscriber の IMSI
     * @returns void
     * @throws ApiError
     */
    public static unsetExpiryTime(
        imsi: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/unset_expiry_time',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `指定した Subscriber が存在しないか、Subscriber に有効期限がない`,
            },
        });
    }
    /**
     * IoT SIM を SIM グループから外す
     * IoT SIM を SIM グループから外します。
     * @param imsi 対象の IoT SIM の Subscriber の IMSI。IMSI は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static unsetGroup(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/unset_group',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber の IMEI ロックを解除する
     * 指定した Subscriber の IMEI ロックを解除する。
     * @param imsi 対象の Subscriber の IMSI
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static unsetImeiLock(
        imsi: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/unset_imei_lock',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * Subscriber の速度クラスを更新する
     * 指定した Subscriber の速度クラスを変更する。
     * @param imsi 対象の Subscriber の IMSI
     * @param requestBody speed_class
     * @returns Subscriber 更新後の Subscriber の詳細情報。
     * @throws ApiError
     */
    public static updateSpeedClass(
        imsi: string,
        requestBody: UpdateSpeedClassRequest,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{imsi}/update_speed_class',
            path: {
                'imsi': imsi,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * すべての Subscriber を CSV ファイルにエクスポートする
     * すべての Subscriber を CSV ファイルとしてエクスポートする
     * @param exportMode エクスポート方法 (非同期, 同期)
     * @returns FileExportResponse Subscriber のエクスポート先
     * @throws ApiError
     */
    public static exportSubscribers(
        exportMode: 'async' | 'sync' = 'sync',
    ): CancelablePromise<FileExportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/export',
            query: {
                'export_mode': exportMode,
            },
        });
    }
    /**
     * Subscriber を MSISDN で指定して SMS を送信する
     * MSISDN で指定した Subscriber 宛に SMS を送信する。
     * @param msisdn SMS 送信対象の Subscriber の MSISDN
     * @param requestBody メッセージ本体とエンコーディングタイプからなる SMS 送信リクエスト
     * @returns SmsForwardingReport SMS 送信を受け付け完了。メッセージに割り振られた ID を返す
     * @throws ApiError
     */
    public static sendSmsByMsisdn(
        msisdn: string,
        requestBody: SmsForwardingRequest,
    ): CancelablePromise<SmsForwardingReport> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/msisdn/{msisdn}/send_sms',
            path: {
                'msisdn': msisdn,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `指定した Subscriber は SMS API をサポートしていない`,
                404: `Subscriber が存在しない。`,
            },
        });
    }
    /**
     * 未使用の IoT SIM の譲渡をキャンセルする (譲渡用トークンを無効化する)
     * IoT SIM の譲渡用トークンを無効化し、譲渡用トークンに紐づくすべての IoT SIM の譲渡をキャンセルします。この API を利用するには、譲渡元のオペレーターで発行した API キーと API トークンが必要です。
     * @param token 譲渡用トークン。譲渡用トークンは [Subscriber:issueSubscriberTransferToken](#/Subscriber/issueSubscriberTransferToken) で取得できます。
     * @returns void
     * @throws ApiError
     */
    public static deleteSubscriberTransferToken(
        token: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscribers/transfer_token/{token}',
            path: {
                'token': token,
            },
            errors: {
                404: `譲渡用トークンが存在しません。`,
            },
        });
    }
    /**
     * 未使用の IoT SIM の譲渡を開始する (譲渡用トークンを発行する)
     * 未使用の IoT SIM の譲渡を開始します。この API を利用するには、譲渡元のオペレーターで発行した API キーと API トークンが必要です。この API を実行すると、譲渡用トークンが発行され、譲渡先のオペレーターにメールで送付されます。譲渡について詳しくは、[IoT SIM をほかのオペレーターへ譲渡 (移管) する](/ja-jp/docs/air/transfer-sim/?tab-16-2=selected) を参照してください。
     *
     * - 譲渡をキャンセルする際は、譲渡用トークンごとにキャンセルします。IoT SIM を 1 件ずつキャンセルする可能性がある場合は、IMSI を 1 件だけ指定してください。キャンセルする場合は、[Subscriber:deleteSubscriberTransferToken API](#/Subscriber/deleteSubscriberTransferToken) を利用します。
     * - この API を実行すると、IoT SIM のステータスが「譲渡手続き中」に切り替わります。
     *
     * **Warning**: 「譲渡手続き中」の IoT SIM のステータスは、変更しないでください。ステータスを変更すると、この手順では譲渡できなくなります。ステータスが変更された IoT SIM を譲渡する手続きについては、[ステータスが変わった IoT SIM を譲渡する](/ja-jp/docs/air/transfer-sim/#ステータスが変わった-iot-sim-を譲渡する) を参照してください。
     *
     * **Info**: 譲渡先のオペレーターの情報は、譲渡先のオペレーターで SORACOM ユーザーコンソールにログインすると確認できます。詳しくは、[オペレーター ID を確認する](/ja-jp/guides/basic-knowledge/display-operator-id/) を参照してください。
     *
     * @param requestBody 譲渡先のオペレーターのメールアドレス、オペレーター ID、譲渡対象の IoT SIM の IMSI。
     * @returns IssueSubscriberTransferTokenResponse OK。`transferImsi` で指定した IoT SIM のステータスが「譲渡手続き中」に切り替わります。
     *
     * **Warning**: 「譲渡手続き中」の IoT SIM のステータスは、変更しないでください。ステータスを変更すると、API を利用した譲渡はできなくなります。
     *
     * @throws ApiError
     */
    public static issueSubscriberTransferToken(
        requestBody: IssueSubscriberTransferTokenRequest,
    ): CancelablePromise<IssueSubscriberTransferTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/transfer_token/issue',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 未使用の IoT SIM の譲渡を受け入れる (譲渡用トークンを検証する)
     * IoT SIM の譲渡用トークンを検証して、譲渡を受け入れます。この API を利用するには、譲渡先のオペレーターで発行した API キーと API トークンが必要です。
     * @param requestBody 譲渡用トークン。譲渡用トークンは、メールで送付されます。
     * @returns VerifySubscriberTransferTokenResponse OK.
     * @throws ApiError
     */
    public static verifySubscriberTransferToken(
        requestBody: VerifySubscriberTransferTokenRequest,
    ): CancelablePromise<VerifySubscriberTransferTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/transfer_token/verify',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
