/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArcCredentialAttachRequest } from '../models/ArcCredentialAttachRequest';
import type { ArcCredentialAttachResponse } from '../models/ArcCredentialAttachResponse';
import type { ArcCredentialRenewRequest } from '../models/ArcCredentialRenewRequest';
import type { ArcCredentialRenewResponse } from '../models/ArcCredentialRenewResponse';
import type { ArcSessionCreateResponse } from '../models/ArcSessionCreateResponse';
import type { CreateSimRequest } from '../models/CreateSimRequest';
import type { DataEntry } from '../models/DataEntry';
import type { DownlinkPingRequest } from '../models/DownlinkPingRequest';
import type { DownlinkPingResponse } from '../models/DownlinkPingResponse';
import type { ExpiryTime } from '../models/ExpiryTime';
import type { PacketCaptureSession } from '../models/PacketCaptureSession';
import type { PacketCaptureSessionRequest } from '../models/PacketCaptureSessionRequest';
import type { RegisterSimRequest } from '../models/RegisterSimRequest';
import type { SessionEvent } from '../models/SessionEvent';
import type { SetGroupRequest } from '../models/SetGroupRequest';
import type { SetImeiLockRequest } from '../models/SetImeiLockRequest';
import type { Sim } from '../models/Sim';
import type { SimDownlinkHttpRequest } from '../models/SimDownlinkHttpRequest';
import type { SimDownlinkHttpResponse } from '../models/SimDownlinkHttpResponse';
import type { SimDownlinkSshRequest } from '../models/SimDownlinkSshRequest';
import type { SimDownlinkSshResponse } from '../models/SimDownlinkSshResponse';
import type { SimProfile } from '../models/SimProfile';
import type { SimStatusHistoryResponse } from '../models/SimStatusHistoryResponse';
import type { SmsForwardingReport } from '../models/SmsForwardingReport';
import type { SmsForwardingRequest } from '../models/SmsForwardingRequest';
import type { Subscriber } from '../models/Subscriber';
import type { SubscriptionContainerStatus } from '../models/SubscriptionContainerStatus';
import type { TagUpdateRequest } from '../models/TagUpdateRequest';
import type { UpdateSpeedClassRequest } from '../models/UpdateSpeedClassRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SimService {
    /**
     * IoT SIM のリストを取得する
     * 条件に合う IoT SIM を取得します。IoT SIM が 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param limit 取得する IoT SIM の上限。ただし、返却される IoT SIM の個数は指定された値を下回る可能性があります。
     * @param lastEvaluatedKey 前ページで取得した最後の SIM ID。このパラメータを指定することで次の IoT SIM 以降のリストを取得できる。
     * @returns Sim IoT SIM の一覧
     * @throws ApiError
     */
    public static listSims(
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<Sim>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sims',
            query: {
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
            errors: {
                404: `指定した IoT SIM が存在しない`,
            },
        });
    }
    /**
     * バーチャル SIM/Subscriber を新規作成する
     * SORACOM Arc のバーチャル SIM/Subscriber を新規作成します。詳しくは、[バーチャル SIM/Subscriber を作成する](/ja-jp/docs/arc/create-virtual-sim/) を参照してください。
     * @param requestBody バーチャル SIM/Subscriber の作成リクエスト。
     * @returns Sim バーチャル SIM/Subscriber が作成されました。
     * @throws ApiError
     */
    public static createSim(
        requestBody: CreateSimRequest,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IoT SIM の情報を取得する
     * IoT SIM の情報を取得します。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Sim IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static getSim(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sims/{sim_id}',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `IoT SIM が存在しません。`,
            },
        });
    }
    /**
     * IoT SIM のステータスを「使用中 (active)」に変更する
     * 指定した IoT SIM のステータスを「使用中 (active)」に変更します。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Sim 更新後の IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static activateSim(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/activate',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `指定した IoT SIM が存在しません。`,
            },
        });
    }
    /**
     * @deprecated
     * (非推奨) Arc のクレデンシャルを IoT SIM から除去
     * (非推奨) SORACOM Arc のクレデンシャル (公開鍵) を IoT SIM から除去します。
     *
     * **Warning**: この API は利用しないでください。
     *
     * @param simId 対象とする IoT SIM の SIM ID
     * @returns void
     * @throws ApiError
     */
    public static removeArcSimCredentials(
        simId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sims/{sim_id}/credentials/arc',
            path: {
                'sim_id': simId,
            },
        });
    }
    /**
     * @deprecated
     * (非推奨) Arc のクレデンシャルを IoT SIM へ付与
     * (非推奨) SORACOM Arc のクレデンシャル (公開鍵) を IoT SIM に付与します。
     *
     * **Warning**: 代わりに `renewArcSimCredentials` API を利用してください。
     *
     * @param simId 対象とする IoT SIM の SIM ID
     * @param requestBody Arc のクレデンシャルの付与リクエスト
     * @returns ArcCredentialAttachResponse Arc のクレデンシャル付与成功レスポンス
     * @throws ApiError
     */
    public static attachArcSimCredentials(
        simId: string,
        requestBody: ArcCredentialAttachRequest,
    ): CancelablePromise<ArcCredentialAttachResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/credentials/arc',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IoT SIM に対する Arc のクレデンシャルを更新する
     * IoT SIM に Arc のクレデンシャルを付与し、セッションの再初期化処理を行います
     * @param simId 対象とする IoT SIM の SIM ID
     * @param requestBody Arc のクレデンシャルの付与リクエスト
     * @returns ArcCredentialRenewResponse Arc のクレデンシャルの付与およびセッションの再初期化の成功レスポンス
     * @throws ApiError
     */
    public static renewArcSimCredentials(
        simId: string,
        requestBody: ArcCredentialRenewRequest,
    ): CancelablePromise<ArcCredentialRenewResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sims/{sim_id}/credentials/arc',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IoT SIM から Harvest Data に送信されたデータを取得する
     * 指定した IoT SIM から Harvest Data に送信されたデータの中で、条件に合うデータを取得します。データエントリが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param simId データ取得対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param from 取得対象の期間の始まり (UNIX 時間 (ミリ秒))
     * @param to 取得対象の期間の終わり (UNIX 時間 (ミリ秒))
     * @param sort データエントリのソート順。下降順 (最新のデータが先頭) もしくは上昇順 (最も古いデータが先頭)。
     * @param limit 取得するデータエントリ数の上限 (1 〜 1000)。デフォルトは、`10` です。
     * @param lastEvaluatedKey 前のページで取得した最後のデータエントリのキー。この API でのデータエントリーのキーは、`${UNIX 時間 (ミリ秒)}_${IMSI}` です。このパラメータを指定することで次のデータエントリを取得できます。
     *
     * @returns DataEntry データエントリのリスト
     * @throws ApiError
     */
    public static getDataFromSim(
        simId: string,
        from?: number,
        to?: number,
        sort: 'desc' | 'asc' = 'desc',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<DataEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sims/{sim_id}/data',
            path: {
                'sim_id': simId,
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
     * IoT SIM のステータスを「休止中 (inactive)」に変更する
     * 指定した IoT SIM のステータスを「休止中 (inactive)」に変更します。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Sim 更新後の IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static deactivateSim(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/deactivate',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `指定した IoT SIM が存在しません。`,
            },
        });
    }
    /**
     * セッションを切断して再確立する
     * 指定した IoT SIM のセッションを切断して再確立します。
     *
     * **Warning**: オフラインの IoT SIM に対してセッションを切断しようとすると、以下のエラーメッセージが返されます。
     *
     * ```
     * Error: {"code":"SEM0016","message":"The specified subscriber is offline"}
     * ```
     *
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Sim 更新後の IoT SIM の詳細情報
     * @throws ApiError
     */
    public static deleteSimSession(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/delete_session',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `指定した IoT SIM が存在しない`,
            },
        });
    }
    /**
     * IoT SIM の解約プロテクションを設定する (解約できないようにする)
     * 指定した IoT SIM の解約プロテクションを設定します (解約できないようにします)。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Sim 更新後の IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static disableSimTermination(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/disable_termination',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `指定した IoT SIM が存在しません。`,
            },
        });
    }
    /**
     * IoT SIM を利用するデバイスに対して HTTP リクエストを送信する
     * IoT SIM を利用するデバイスに対して HTTP リクエストを送信し、デバイスからの HTTP レスポンスを API のレスポンスボディに含めて返します。
     *
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param requestBody デバイスへの HTTP リクエストの設定。
     * @returns SimDownlinkHttpResponse デバイスへの HTTP リクエストが成功しました。デバイスからの HTTP ステータスコード、ヘッダー、本文は、レスポンスボディを確認してください。
     *
     * @throws ApiError
     */
    public static sendDownlinkHttp(
        simId: string,
        requestBody: SimDownlinkHttpRequest,
    ): CancelablePromise<SimDownlinkHttpResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/downlink/http',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定した IoT SIM が存在しません。`,
                422: `- デバイスへの HTTP リクエストに失敗しました。
                - デバイスへネットワーク接続できなかった。
                - デバイスから HTTP 接続を拒否された。
                - デバイスからの HTTP レスポンスを受信できません。
                - 規定の時間 (10 秒) 以内にデバイスから HTTP レスポンスを受信できなかった。
                - デバイスからの HTTP レスポンスが 5MB を超えた。最大サイズは、URL、ヘッダー、本文を含めて 5MB です。
                `,
            },
        });
    }
    /**
     * IoT SIM に対して ping リクエストを送信する
     * IoT SIM に対して ICMP ping リクエストを送信する。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param requestBody ping リクエストのオプション
     * @returns DownlinkPingResponse ping の結果
     * @throws ApiError
     */
    public static sendDownlinkPing(
        simId: string,
        requestBody: DownlinkPingRequest,
    ): CancelablePromise<DownlinkPingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/downlink/ping',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IoT SIM を利用するデバイスに SSH 接続し、指定したコマンドを実行する
     * IoT SIM を利用するデバイスに SSH 接続し、指定したコマンドを実行して、標準出力、標準エラー出力を API のレスポンスボディに含めて返します。
     *
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     *
     * @param requestBody デバイスへの SSH 接続とコマンドの設定。
     * @returns SimDownlinkSshResponse コマンドの実行に成功しました。コマンドの終了コード、標準出力、標準エラー出力は、レスポンスボディを確認してください。
     * @throws ApiError
     */
    public static sendDownlinkSsh(
        simId: string,
        requestBody: SimDownlinkSshRequest,
    ): CancelablePromise<SimDownlinkSshResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/downlink/ssh',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `- コマンドの実行に失敗しました。
                - デバイスへネットワーク接続できなかった。
                - デバイスに SSH 接続が拒否された。
                - デバイスからのレスポンスを受信できません。
                - 規定の時間 (10 秒) 以内にデバイスからレスポンスを受信できなかった。
                - コマンドの実行結果の出力が 5 MiB を超えた。最大サイズは、標準出力、標準エラー出力を含めて 5 MiB です。
                `,
            },
        });
    }
    /**
     * IoT SIM の解約プロテクションを解除する (解約できるようにする)
     * 指定した IoT SIM の解約プロテクションを解除します (解約できるようにします)。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Sim 更新後の IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static enableSimTermination(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/enable_termination',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `指定した IoT SIM が存在しません。`,
            },
        });
    }
    /**
     * セッションのイベント履歴 (セッション履歴) を取得する
     * 指定した IoT SIM に関する過去 32 日間のセッションの作成 / 変更 / 切断のイベント履歴を取得します。イベント履歴が 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * 現在のセッションは、[Sim:getSim API](#/Sim/getSim) で確認します。現在のセッションをこの API で確認するには、最新のセッション履歴の `event` の値を確認します。セッションの意味は、[状態 (オンライン / オフライン)](/ja-jp/resources/glossary/session/#状態-オンライン--オフライン) を参照してください。
     *
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param from セッションのイベント履歴を取得する期間の開始時刻 (UNIX 時間 (ミリ秒))。
     * @param to セッションのイベント履歴を取得する期間の終了時刻 (UNIX 時間 (ミリ秒))。
     * @param limit 取得するイベント履歴の上限。ただし、返却されるイベント履歴の個数は指定された値を下回る可能性があります。
     * @param lastEvaluatedKey 前ページで取得した最後のイベント履歴のタイムスタンプ。このパラメータを指定することで次のイベント履歴以降のリストを取得できます。
     * @returns SessionEvent セッションのイベント履歴。
     * @throws ApiError
     */
    public static listSimSessionEvents(
        simId: string,
        from?: number,
        to?: number,
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<SessionEvent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sims/{sim_id}/events/sessions',
            path: {
                'sim_id': simId,
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
     * IoT SIM に対するパケットキャプチャセッションのリストを取得する
     * IoT SIM に対するパケットキャプチャセッションのリストを取得する。
     * @param simId 対象の IoT SIM の SIM ID。
     * @param lastEvaluatedKey 前ページで取得した最後のパケットキャプチャセッション。このパラメータを指定することで次のパケットキャプチャセッション以降のリストを取得できる。
     * @param limit 取得するパケットキャプチャセッションの上限
     * @returns PacketCaptureSession IoT SIM に対するパケットキャプチャセッションのリスト
     * @throws ApiError
     */
    public static listSimPacketCaptureSessions(
        simId: string,
        lastEvaluatedKey?: string,
        limit: number = 10,
    ): CancelablePromise<Array<PacketCaptureSession>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sims/{sim_id}/packet_capture_sessions',
            path: {
                'sim_id': simId,
            },
            query: {
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
            },
            errors: {
                404: `指定した IoT SIM が存在しない`,
            },
        });
    }
    /**
     * IoT SIM に対するパケットキャプチャセッションを作成する
     * IoT SIM に対するパケットキャプチャセッションを作成する。
     * @param simId 対象の IoT SIM の SIM ID。
     * @param requestBody パケットキャプチャセッションリクエスト
     * @returns PacketCaptureSession IoT SIM に対するパケットキャプチャセッション
     * @throws ApiError
     */
    public static createSimPacketCaptureSession(
        simId: string,
        requestBody: PacketCaptureSessionRequest,
    ): CancelablePromise<PacketCaptureSession> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/packet_capture_sessions',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `IoT SIM に対するパケットキャプチャセッションの作成が失敗した`,
                404: `指定した IoT SIM が存在しない`,
            },
        });
    }
    /**
     * IoT SIM に対するパケットキャプチャセッションを削除する
     * IoT SIM に対するパケットキャプチャセッションを削除する。
     * @param simId 対象の IoT SIM の SIM ID。
     * @param sessionId 対象のパケットキャプチャセッション ID
     * @returns PacketCaptureSession 削除されたパケットキャプチャセッションの情報
     * @throws ApiError
     */
    public static deleteSimPacketCaptureSession(
        simId: string,
        sessionId: string,
    ): CancelablePromise<PacketCaptureSession> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sims/{sim_id}/packet_capture_sessions/{session_id}',
            path: {
                'sim_id': simId,
                'session_id': sessionId,
            },
            errors: {
                400: `IoT SIM に対するパケットキャプチャセッションの削除に失敗`,
                404: `IoT SIM に対するパケットキャプチャセッションが存在しない`,
            },
        });
    }
    /**
     * IoT SIM に対するパケットキャプチャセッションを取得する
     * IoT SIM に対するパケットキャプチャセッションを取得する。
     * @param simId 対象の IoT SIM の SIM ID。
     * @param sessionId 対象のパケットキャプチャセッション ID
     * @returns PacketCaptureSession IoT SIM に対するパケットキャプチャセッション
     * @throws ApiError
     */
    public static getSimPacketCaptureSession(
        simId: string,
        sessionId: string,
    ): CancelablePromise<PacketCaptureSession> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sims/{sim_id}/packet_capture_sessions/{session_id}',
            path: {
                'sim_id': simId,
                'session_id': sessionId,
            },
            errors: {
                404: `IoT SIM に対するパケットキャプチャセッションが存在しない`,
            },
        });
    }
    /**
     * IoT SIM に対するパケットキャプチャセッションを停止する
     * IoT SIM に対するパケットキャプチャセッションを停止する。
     * @param simId 対象の IoT SIM の SIM ID。
     * @param sessionId 対象のパケットキャプチャセッション ID
     * @returns PacketCaptureSession 停止されたパケットキャプチャセッションの情報
     * @throws ApiError
     */
    public static stopSimPacketCaptureSession(
        simId: string,
        sessionId: string,
    ): CancelablePromise<PacketCaptureSession> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/packet_capture_sessions/{session_id}/stop',
            path: {
                'sim_id': simId,
                'session_id': sessionId,
            },
            errors: {
                400: `The packet capture session can be stopped only when its status is CAPTURING`,
                404: `IoT SIM に対するパケットキャプチャセッションが存在しない`,
                500: `IoT SIM に対するパケットキャプチャセッションが停止できなかった`,
            },
        });
    }
    /**
     * 新しいセカンダリサブスクリプションを IoT SIM に追加する
     * 新しい [セカンダリサブスクリプション (追加サブスクリプション、またはバーチャル SIM/Subscriber)](/ja-jp/resources/glossary/subscription/) を IoT SIM に追加します。
     * @param simId 対象の IoT SIM の ID
     * @param iccid 対象の IoT SIM の ICCID。eUICC 非対応 の IoT SIM の場合は、ICCID と SIM ID は同一です。
     * @param requestBody
     * @returns SimProfile 更新された SIM プロファイル
     * @throws ApiError
     */
    public static addSubscription(
        simId: string,
        iccid: string,
        requestBody?: {
            /**
             * [追加サブスクリプション](/ja-jp/resources/glossary/subscription/) の場合に、追加サブスクリプションのダウンロードが完了すると、すぐに有効化 (active) するかどうかを指定します。デフォルトは `true` です。
             * - `true`: すぐに有効化 (active) する
             * - `false`: 無効 (inactive) を維持する。次の [ネットワーク登録](/ja-jp/resources/glossary/#ネットワーク登録) または [セッション](/ja-jp/resources/glossary/session/) 確立時に、追加サブスクリプションが有効化 (active) されます。
             *
             * なお、バーチャル SIM/Subscriber の場合は、無視されます。
             *
             */
            enable?: boolean;
            /**
             * 追加する [セカンダリサブスクリプション](/ja-jp/resources/glossary/subscription/)
             * - `planP1`、`planX1`、`planX2`、`planX3`、`plan-US-max`: 追加サブスクリプション
             * - `planArc01`: バーチャル SIM/Subscriber
             *
             */
            subscription: 'planP1' | 'planX1' | 'planX2' | 'planX3' | 'plan-US-max' | 'planArc01';
            /**
             * - `virtual`: `subscription` で `planArc01` を指定した場合
             * - `cellular`: `subscription` で `planArc01` 以外を指定した場合
             *
             */
            type?: 'virtual' | 'cellular';
        },
    ): CancelablePromise<SimProfile> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/profiles/{iccid}/add_subscription',
            path: {
                'sim_id': simId,
                'iccid': iccid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `追加できないサブスクリプションを指定した。たとえば、plan-D の IoT SIM に \`planP1\` は追加できません。`,
                404: `指定した SIM ID および ICCID の IoT SIM が存在しない`,
            },
        });
    }
    /**
     * サブスクリプションコンテナへの追加サブスクリプションの OTA をキャンセルする
     * 追加サブスクリプションの OTA が始まる前に、OTA をキャンセルします。なお、IoT SIM がオンラインになり、OTA が始まるとキャンセルできません。
     * @param simId 対象の IoT SIM の SIM ID。
     * @param iccid 対象のサブスクリプションコンテナの ICCID。
     * @param imsi 対象の追加サブスクリプションの IMSI。
     * @returns SubscriptionContainerStatus サブスクリプションコンテナの情報 (PLMN コードとサブスクリプションコンテナの対応を含む)。
     * @throws ApiError
     */
    public static cancelSubscriptionContainerDownload(
        simId: string,
        iccid: string,
        imsi: string,
    ): CancelablePromise<SubscriptionContainerStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/profiles/{iccid}/subscribers/{imsi}/cancel_download',
            path: {
                'sim_id': simId,
                'iccid': iccid,
                'imsi': imsi,
            },
            errors: {
                404: `指定した SIM ID または ICCID または IMSI が存在しない。`,
            },
        });
    }
    /**
     * セカンダリサブスクリプションの利用終了
     * セカンダリサブスクリプションの利用を終了します。現在、SORACOM Arc のセカンダリサブスクリプションのバーチャル SIM/Subscriber の解約のみに対応しています。
     * @param simId 対象のプライマリサブスクリプションの IoT SIM の SIM ID
     * @param iccid 対象のプライマリサブスクリプションの IoT SIM の ICCID
     * @param imsi 対象のセカンダリサブスクリプションのバーチャル SIM/Subscriber の IMSI
     * @returns void
     * @throws ApiError
     */
    public static terminateSubscriptionContainer(
        simId: string,
        iccid: string,
        imsi: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/profiles/{iccid}/subscribers/{imsi}/terminate',
            path: {
                'sim_id': simId,
                'iccid': iccid,
                'imsi': imsi,
            },
        });
    }
    /**
     * オペレーターに IoT SIM を登録する
     * オペレーターに IoT SIM を登録します。
     * @param simId 対象の IoT SIM の SIM ID。
     * @param requestBody IoT SIM 登録リクエスト
     * @returns Sim IoT SIM 登録完了
     * @throws ApiError
     */
    public static registerSim(
        simId: string,
        requestBody: RegisterSimRequest,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/register',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SIM ローカル情報レポートを取得する
     * SIM ローカル情報レポートを取得します。
     *
     * **Alert**: SIM ローカル情報レポート取得のリクエスト 1 件につき、IoT デバイスへの SMS 送信 1 通が発生します。IoT デバイスへの SMS 送信は有料です。利用料金について詳しくは、以下のページを参照してください。
     * - [SMS 機能](https://soracom.jp/services/air/cellular/pricing/price_iot_sim/#sms) (グローバルカバレッジ)
     * - [SMS 機能](https://soracom.jp/services/air/cellular/pricing/price_specific_area_sim/#sms) (日本カバレッジ)
     *
     * @param simId 対象の IoT SIM の ID
     * @returns Subscriber SIM ローカル情報レポートの更新依頼に成功しました。SIM ローカル情報レポートは、IoT SIM からのレポートが成功すると非同期に更新されます。非同期に更新された情報は、SORACOM ユーザーコンソールで確認できます。詳しくは、[SIM ローカル情報レポートを確認する](/ja-jp/docs/air/get-local-info-report/) を参照してください。
     * @throws ApiError
     */
    public static reportSimLocalInfo(
        simId: string,
    ): CancelablePromise<Subscriber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/report_local_info',
            path: {
                'sim_id': simId,
            },
            errors: {
                400: `指定した IoT SIM は、SIM ローカル情報レポート機能に対応していません。`,
                404: `指定したカバレッジタイプに、指定した IoT SIM が存在しません。`,
            },
        });
    }
    /**
     * IoT SIM に SMS を送信する
     * 指定した IoT SIM 宛に SMS を送信する。
     * @param simId SMS 送信対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param requestBody メッセージ本体とエンコーディングタイプからなる SMS 送信リクエスト
     * @returns SmsForwardingReport SMS 送信を受け付け完了。メッセージに割り振られた ID を返す
     * @throws ApiError
     */
    public static sendSmsToSim(
        simId: string,
        requestBody: SmsForwardingRequest,
    ): CancelablePromise<SmsForwardingReport> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/send_sms',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `指定した IoT SIM は SMS API をサポートしていない`,
                404: `指定した IoT SIM が存在しない`,
            },
        });
    }
    /**
     * SORACOM Arc セッションの作成
     * SORACOM Arc セッションの作成を行います。すでにセッションが存在する場合は再作成を行います。
     * @param simId 対象とする IoT SIM の SIM ID
     * @param requestBody
     * @returns ArcSessionCreateResponse Arc セッションが作成されました
     * @throws ApiError
     */
    public static createArcSession(
        simId: string,
        requestBody: Record<string, any>,
    ): CancelablePromise<ArcSessionCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/sessions/arc',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `作成リクエスト中に Arc のクレデンシャルが不足しています`,
            },
        });
    }
    /**
     * IoT SIM の有効期限とアクションを設定する
     * 指定した IoT SIM の有効期限とアクションを設定します。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param requestBody 更新後の有効期限 (UNIX 時間 (ミリ秒)) とアクション
     * @returns Sim 更新後の IoT SIM の詳細情報
     * @throws ApiError
     */
    public static setSimExpiryTime(
        simId: string,
        requestBody: ExpiryTime,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/set_expiry_time',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定した IoT SIM が存在しない`,
            },
        });
    }
    /**
     * IoT SIM を SIM グループに所属させる
     * IoT SIM を SIM グループに所属させます。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param requestBody
     * @returns Sim 更新後の IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static setSimGroup(
        simId: string,
        requestBody: SetGroupRequest,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/set_group',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `IoT SIM が存在しない。`,
            },
        });
    }
    /**
     * IoT SIM の IMEI ロックを設定する
     * 指定した IoT SIM の IMEI ロックを設定する。
     * @param simId 対象の IoT SIM の SIM ID。
     * @param requestBody IoT SIM に指定する IMEI ロックの設定 (オンラインの IoT SIM の現在の IMEI にロックするには IMEI は指定しなくてもよい)
     * @returns Sim 更新後の IoT SIM の詳細情報
     * @throws ApiError
     */
    public static setSimImeiLock(
        simId: string,
        requestBody?: SetImeiLockRequest,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/set_imei_lock',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `- IMEI 文字列が無効です。
                - オフラインの IoT SIM にも関わらず IMEI が指定されていません。
                `,
                404: `指定した IoT SIM が存在しない`,
            },
        });
    }
    /**
     * IoT SIM のステータスを「利用開始待ち (standby)」に変更する
     * 指定した IoT SIM のステータスを「利用開始待ち (standby)」に変更します。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Sim 更新後の IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static setSimToStandby(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/set_to_standby',
            path: {
                'sim_id': simId,
            },
            errors: {
                400: `指定した IoT SIM は「利用開始待ち (standby)」に対応していません。`,
                404: `指定した IoT SIM が存在しません。`,
            },
        });
    }
    /**
     * IoT SIM のステータス操作履歴を取得する
     * IoT SIM のステータス操作履歴を取得します。ステータス操作履歴は、どの IMSI、どのサブスクリプションに対して、どのようなステータス操作を行ったかが操作時間とともに記録されています。速度クラスやグループ ID、IoT SIM のステータスなどが含まれます。ステータス操作履歴が 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     * @param simId 対象の IoT SIM の SIM ID。
     * @param from ステータス操作履歴を取得する期間の開始時刻 (UNIX 時間 (ミリ秒))。省略した場合は、対象の IoT SIM の最も古いステータス操作履歴の発生時刻が設定されます。
     * @param to ステータス操作履歴を取得する期間の終了時刻 (UNIX 時間 (ミリ秒))。省略した場合は、現在時刻が設定されます。
     * @param lastEvaluatedKey 前ページで取得した最後のステータス操作履歴のプライマリ IMSI とタイムスタンプ (UNIX 時間 (ミリ秒)) を `@` で連結した文字列。このパラメータを指定することで次のステータス操作履歴以降のデータを取得できます。
     * @param sort ステータス操作履歴のソート順。下降順 (最新のデータが先頭) もしくは上昇順 (最も古いデータが先頭)。
     * @param limit 取得するステータス操作履歴の上限。ただし、返却されるステータス操作履歴の個数は指定された値を下回る可能性があります。
     * @returns SimStatusHistoryResponse IoT SIM のステータス操作履歴。
     * @throws ApiError
     */
    public static listSimStatusHistory(
        simId: string,
        from?: number,
        to?: number,
        lastEvaluatedKey?: string,
        sort: 'desc' | 'asc' = 'desc',
        limit: number = 30,
    ): CancelablePromise<Array<SimStatusHistoryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sims/{sim_id}/statuses/history',
            path: {
                'sim_id': simId,
            },
            query: {
                'from': from,
                'to': to,
                'last_evaluated_key': lastEvaluatedKey,
                'sort': sort,
                'limit': limit,
            },
            errors: {
                400: `不正なリクエスト。`,
                404: `指定した IoT SIM が存在しない。`,
            },
        });
    }
    /**
     * IoT SIM のステータスを「利用中断中 (suspended)」に変更する
     * 指定した IoT SIM のステータスを「利用中断中 (suspended)」に変更します。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Sim 更新後の IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static suspendSim(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/suspend',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `指定した IoT SIM が存在しません。`,
            },
        });
    }
    /**
     * IoT SIM のタグを追加 / 更新する
     * 指定した IoT SIM のタグを追加 / 更新します。
     *
     * なお、IoT SIM の名前は、`name` がキーのタグに登録する仕組みです。
     *
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param requestBody 追加・更新対象のタグの配列。
     * @returns Sim 更新後の IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static putSimTags(
        simId: string,
        requestBody: Array<TagUpdateRequest>,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sims/{sim_id}/tags',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定した IoT SIM が存在しません。`,
            },
        });
    }
    /**
     * IoT SIM のタグを削除する
     * 指定した IoT SIM のタグを削除する。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param tagName 削除対象のタグ名。URL のパスの一部になるので、URL エンコード (パーセントエンコーディング) を行います。たとえば JavaScript では、encodeURIComponent() を利用するとエンコードできます。
     *
     * **Warning**: SORACOM CLI を利用する場合は、URL エンコード (パーセントエンコーディング) しないでください。
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteSimTag(
        simId: string,
        tagName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sims/{sim_id}/tags/{tag_name}',
            path: {
                'sim_id': simId,
                'tag_name': tagName,
            },
            errors: {
                404: `指定した IoT SIM あるいはタグが存在しない`,
            },
        });
    }
    /**
     * IoT SIM を解約する
     * 指定した IoT SIM を解約します。あらかじめ [Sim:enableSimTermination API](#/Sim/enableSimTermination) を使用して解約できるように (解約プロテクションを解除) してください。
     *
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Sim 更新後の IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static terminateSim(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/terminate',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `指定した IoT SIM が存在しません。`,
            },
        });
    }
    /**
     * IoT SIM の有効期限を解除する
     * 指定した IoT SIM の有効期限を解除します。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns void
     * @throws ApiError
     */
    public static unsetSimExpiryTime(
        simId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/unset_expiry_time',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `指定した IoT SIM が存在しないか、IoT SIM に有効期限が設定されていません。`,
            },
        });
    }
    /**
     * IoT SIM を SIM グループから外す
     * IoT SIM を SIM グループから外します。
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @returns Sim 更新後の IoT SIM の詳細情報。
     * @throws ApiError
     */
    public static unsetSimGroup(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/unset_group',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `IoT SIM が存在しない。`,
            },
        });
    }
    /**
     * IoT SIM の IMEI ロックを解除する
     * 指定した IoT SIM の IMEI ロックを解除する。
     * @param simId 対象の IoT SIM の SIM ID。
     * @returns Sim 更新後の IoT SIM の詳細情報
     * @throws ApiError
     */
    public static unsetSimImeiLock(
        simId: string,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/unset_imei_lock',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `指定した IoT SIM が存在しない`,
            },
        });
    }
    /**
     * IoT SIM の速度クラスを変更する
     * IoT SIM の速度クラスを変更します。
     * @param simId 対象の IoT SIM の SIM ID。
     * @param requestBody IoT SIM の速度クラス。
     * @returns Sim 更新後の IoT SIM の詳細情報
     * @throws ApiError
     */
    public static updateSimSpeedClass(
        simId: string,
        requestBody: UpdateSpeedClassRequest,
    ): CancelablePromise<Sim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sims/{sim_id}/update_speed_class',
            path: {
                'sim_id': simId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `指定された速度クラスは、このサブスクリプションに存在しません。たとえば、plan01s のときは arc.standard は指定できません。`,
                404: `指定した IoT SIM が存在しない`,
            },
        });
    }
}
