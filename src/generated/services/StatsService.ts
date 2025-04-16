/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AirAggregatedStatsResponse } from '../models/AirAggregatedStatsResponse';
import type { AirStatsResponse } from '../models/AirStatsResponse';
import type { BeamStatsResponse } from '../models/BeamStatsResponse';
import type { ExportRequest } from '../models/ExportRequest';
import type { FileExportResponse } from '../models/FileExportResponse';
import type { FunkStatsResponse } from '../models/FunkStatsResponse';
import type { FunnelStatsResponse } from '../models/FunnelStatsResponse';
import type { HarvestExportedDataStatsResponse } from '../models/HarvestExportedDataStatsResponse';
import type { HarvestStatsResponse } from '../models/HarvestStatsResponse';
import type { NapterAuditLogsExportedDataStatsResponse } from '../models/NapterAuditLogsExportedDataStatsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatsService {
    /**
     * 指定したグループに所属するすべての IoT SIM を集約したデータ通信量履歴を取得する
     * 指定したグループに所属するすべての IoT SIM を集約したデータ通信量履歴を取得します。
     * @param groupId グループ ID
     * @param from 対象期間の開始月/日を UNIX 時間 (秒) で指定します。
     * @param to 対象期間の終了月/日を UNIX 時間 (秒) で指定します。
     * @param period 集計単位。
     *
     * - `month`: 月ごと。
     *
     * `from` と `to` には、現在時刻の 3 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む月の 1 日 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む月の月末の 24:00:00 です。 |
     * - `day`: 日ごと。
     *
     * `from` と `to` には、現在時刻の 7 日前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む日の 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む日の 24:00:00 です。 |
     *
     * @returns AirAggregatedStatsResponse OK.
     * @throws ApiError
     */
    public static getAirStatsOfGroup(
        groupId: string,
        from: number,
        to: number,
        period: 'month' | 'day',
    ): CancelablePromise<Array<AirAggregatedStatsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/air/groups/{group_id}',
            path: {
                'group_id': groupId,
            },
            query: {
                'from': from,
                'to': to,
                'period': period,
            },
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * 指定したオペレーターが保有するすべての IoT SIM を集約したデータ通信量履歴を取得する
     * 指定したオペレーターが保有するすべての IoT SIM を集約したデータ通信量履歴を取得します。
     * @param operatorId オペレーター ID
     * @param from 対象期間の開始月/日を UNIX 時間 (秒) で指定します。
     * @param to 対象期間の終了月/日を UNIX 時間 (秒) で指定します。
     * @param period 集計単位。
     *
     * - `month`: 月ごと。
     *
     * `from` と `to` には、現在時刻の 3 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む月の 1 日 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む月の月末の 24:00:00 です。 |
     * - `day`: 日ごと。
     *
     * `from` と `to` には、現在時刻の 7 日前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む日の 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む日の 24:00:00 です。 |
     *
     * @returns AirAggregatedStatsResponse OK.
     * @throws ApiError
     */
    public static getAirStatsOfOperator(
        operatorId: string,
        from: number,
        to: number,
        period: 'month' | 'day',
    ): CancelablePromise<Array<AirAggregatedStatsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/air/operators/{operator_id}',
            path: {
                'operator_id': operatorId,
            },
            query: {
                'from': from,
                'to': to,
                'period': period,
            },
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * すべての IoT SIM のデータ通信量をエクスポートする
     * オペレーターが所有していたすべての IoT SIM のデータ通信量を、[Air データ通信量実績データ CSV](/ja-jp/docs/air/stats-csv/) でダウンロードします。
     *
     * **Warning**: 対象期間にデータ通信を行わなかった場合は、ヘッダー行だけの CSV ファイルが出力されます。
     * **Info**: 解約した IoT SIM のデータ通信量も確認できます。
     *
     * @param operatorId オペレーター ID。オペレーター ID は [Operator:getOperator API](#/Operator/getOperator) で取得できます。
     * @param requestBody 出力するデータの期間および集計単位。
     * @param exportMode Air データ通信量実績データ CSV をダウンロードするための URL を取得する方法を指定します。
     *
     * - `async`: SORACOM プラットフォームで URL が発行されるのを待たずに、`exportedFieldId` を取得します。この `exportedFieldId` を [Files:getExportedFile API](#/Files/getExportedFile) で指定すると、URL を取得できます。Air データ通信量実績データ CSV のファイルサイズが大きい場合は、`async` を利用してください。
     * - `sync` (デフォルト): SORACOM プラットフォームで URL が発行されるのを待ちます。ただし、Air データ通信量実績データ CSV のファイルサイズが大きい場合など、タイムアウトして URL を取得できないことがあります。タイムアウトする場合は、`async` を指定してください。
     *
     * @returns FileExportResponse OK.
     * @throws ApiError
     */
    public static exportAirStats(
        operatorId: string,
        requestBody: ExportRequest,
        exportMode?: 'async' | 'sync',
    ): CancelablePromise<FileExportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stats/air/operators/{operator_id}/export',
            path: {
                'operator_id': operatorId,
            },
            query: {
                'export_mode': exportMode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SIM ID で指定した IoT SIM のデータ通信量履歴を取得する
     * SIM ID で指定した IoT SIM のデータ通信量履歴を取得します。
     *
     * **Warning**: 解約した IoT SIM のデータ通信量は確認できません。
     *
     * @param simId 対象の IoT SIM の SIM ID。SIM ID は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param from 対象期間の開始月/日/分を UNIX 時間 (秒) で指定します。
     * @param to 対象期間の終了月/日/分を UNIX 時間 (秒) で指定します。
     * @param period 集計単位。
     *
     * - `month`: 月ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む月の 1 日 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む月の月末の 24:00:00 です。 |
     * - `day`: 日ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む日の 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む日の 24:00:00 です。 |
     * - `minutes`: 約 5 分ごと。
     *
     * `from` と `to` には、現在時刻の 32 日前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の集計対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の開始時刻です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の終了時刻です。 |
     *
     * @returns AirStatsResponse OK.
     * @throws ApiError
     */
    public static getAirStatsOfSim(
        simId: string,
        from: number,
        to: number,
        period: 'month' | 'day' | 'minutes',
    ): CancelablePromise<Array<AirStatsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/air/sims/{sim_id}',
            path: {
                'sim_id': simId,
            },
            query: {
                'from': from,
                'to': to,
                'period': period,
            },
        });
    }
    /**
     * IMSI で指定した IoT SIM のデータ通信量履歴を取得する
     * IMSI で指定した IoT SIM のデータ通信量履歴を取得します。
     *
     * **Warning**: 解約した IoT SIM のデータ通信量は確認できません。
     *
     * @param imsi 対象の IMSI。IMSI は [Sim:listSims API](#/Sim/listSims) で取得できます。
     * @param from 対象期間の開始月/日/分を UNIX 時間 (秒) で指定します。
     * @param to 対象期間の終了月/日/分を UNIX 時間 (秒) で指定します。
     * @param period 集計単位。
     *
     * - `month`: 月ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む月の 1 日 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む月の月末の 24:00:00 です。 |
     * - `day`: 日ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む日の 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む日の 24:00:00 です。 |
     * - `minutes`: 約 5 分ごと。
     *
     * `from` と `to` には、現在時刻の 32 日前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の集計対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の開始時刻です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の終了時刻です。 |
     *
     * @returns AirStatsResponse OK.
     * @throws ApiError
     */
    public static getAirStats(
        imsi: string,
        from: number,
        to: number,
        period: 'month' | 'day' | 'minutes',
    ): CancelablePromise<Array<AirStatsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/air/subscribers/{imsi}',
            path: {
                'imsi': imsi,
            },
            query: {
                'from': from,
                'to': to,
                'period': period,
            },
        });
    }
    /**
     * すべての Subscriber の SORACOM Beam 利用量履歴をエクスポートする
     * Operator が保有する全 Subscriber の SORACOM Beam 利用量履歴をファイルで取得する。取得対象の期間は from, to の unixtime で指定する。履歴の詳細度は月単位。ファイルの出力先は AWS S3。ファイルの出力形式は CSV。
     * @param operatorId operator ID
     * @param requestBody 出力するデータの期間
     * @param exportMode export_mode (async, sync)
     * @returns FileExportResponse OK.
     * @throws ApiError
     */
    public static exportBeamStats(
        operatorId: string,
        requestBody: ExportRequest,
        exportMode?: 'async' | 'sync',
    ): CancelablePromise<FileExportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stats/beam/operators/{operator_id}/export',
            path: {
                'operator_id': operatorId,
            },
            query: {
                'export_mode': exportMode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IMSI で指定した Subscriber の SORACOM Beam 利用量履歴を取得する
     * IMSI で指定した Subscriber の SORACOM Beam 利用量履歴を取得する。
     * @param imsi imsi
     * @param from 対象期間の開始月/日/分を UNIX 時間 (秒) で指定します。
     * @param to 対象期間の終了月/日/分を UNIX 時間 (秒) で指定します。
     * @param period 集計単位。
     *
     * - `month`: 月ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む月の 1 日 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む月の月末の 24:00:00 です。 |
     * - `day`: 日ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む日の 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む日の 24:00:00 です。 |
     * - `minutes`: 約 5 分ごと。
     *
     * `from` と `to` には、現在時刻の 32 日前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の集計対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の開始時刻です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の終了時刻です。 |
     *
     * @returns BeamStatsResponse OK.
     * @throws ApiError
     */
    public static getBeamStats(
        imsi: string,
        from: number,
        to: number,
        period: 'month' | 'day' | 'minutes',
    ): CancelablePromise<Array<BeamStatsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/beam/subscribers/{imsi}',
            path: {
                'imsi': imsi,
            },
            query: {
                'from': from,
                'to': to,
                'period': period,
            },
        });
    }
    /**
     * すべての Subscriber の SORACOM Funk 利用量履歴をエクスポートする
     * Operator が保有する全 Subscriber の SORACOM Funk 利用量履歴をファイルで取得する。取得対象の期間は from, to の unixtime で指定する。履歴の詳細度は月単位。ファイルの出力先は AWS S3。ファイルの出力形式は CSV。
     * @param operatorId operator ID
     * @param requestBody 出力するデータの期間
     * @param exportMode export_mode (async, sync)
     * @returns FileExportResponse OK.
     * @throws ApiError
     */
    public static exportFunkStats(
        operatorId: string,
        requestBody: ExportRequest,
        exportMode?: 'async' | 'sync',
    ): CancelablePromise<FileExportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stats/funk/operators/{operator_id}/export',
            path: {
                'operator_id': operatorId,
            },
            query: {
                'export_mode': exportMode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IMSI で指定した Subscriber の SORACOM Funk 利用量履歴を取得する
     * IMSI で指定した Subscriber の SORACOM Funk 利用量履歴を取得する。
     * @param imsi imsi
     * @param from 対象期間の開始月/日/分を UNIX 時間 (秒) で指定します。
     * @param to 対象期間の終了月/日/分を UNIX 時間 (秒) で指定します。
     * @param period 集計単位。
     *
     * - `month`: 月ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む月の 1 日 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む月の月末の 24:00:00 です。 |
     * - `day`: 日ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む日の 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む日の 24:00:00 です。 |
     * - `minutes`: 約 5 分ごと。
     *
     * `from` と `to` には、現在時刻の 32 日前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の集計対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の開始時刻です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の終了時刻です。 |
     *
     * @returns FunkStatsResponse OK.
     * @throws ApiError
     */
    public static getFunkStats(
        imsi: string,
        from: number,
        to: number,
        period: 'month' | 'day' | 'minutes',
    ): CancelablePromise<Array<FunkStatsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/funk/subscribers/{imsi}',
            path: {
                'imsi': imsi,
            },
            query: {
                'from': from,
                'to': to,
                'period': period,
            },
        });
    }
    /**
     * すべての Subscriber の SORACOM Funnel 利用量履歴をエクスポートする
     * Operator が保有する全 Subscriber の SORACOM Funnel 利用量履歴をファイルで取得する。取得対象の期間は from, to の unixtime で指定する。履歴の詳細度は月単位。ファイルの出力先は AWS S3。ファイルの出力形式は CSV。
     * @param operatorId operator ID
     * @param requestBody 出力するデータの期間
     * @param exportMode export_mode (async, sync)
     * @returns FileExportResponse OK.
     * @throws ApiError
     */
    public static exportFunnelStats(
        operatorId: string,
        requestBody: ExportRequest,
        exportMode?: 'async' | 'sync',
    ): CancelablePromise<FileExportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stats/funnel/operators/{operator_id}/export',
            path: {
                'operator_id': operatorId,
            },
            query: {
                'export_mode': exportMode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IMSI で指定した Subscriber の SORACOM Funnel 利用量履歴を取得する
     * IMSI で指定した Subscriber の SORACOM Funnel 利用量履歴を取得する。
     * @param imsi imsi
     * @param from 対象期間の開始月/日/分を UNIX 時間 (秒) で指定します。
     * @param to 対象期間の終了月/日/分を UNIX 時間 (秒) で指定します。
     * @param period 集計単位。
     *
     * - `month`: 月ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む月の 1 日 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む月の月末の 24:00:00 です。 |
     * - `day`: 日ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む日の 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む日の 24:00:00 です。 |
     * - `minutes`: 約 5 分ごと。
     *
     * `from` と `to` には、現在時刻の 32 日前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の集計対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の開始時刻です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の終了時刻です。 |
     *
     * @returns FunnelStatsResponse OK.
     * @throws ApiError
     */
    public static getFunnelStats(
        imsi: string,
        from: number,
        to: number,
        period: 'month' | 'day' | 'minutes',
    ): CancelablePromise<Array<FunnelStatsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/funnel/subscribers/{imsi}',
            path: {
                'imsi': imsi,
            },
            query: {
                'from': from,
                'to': to,
                'period': period,
            },
        });
    }
    /**
     * Harvest の利用統計情報を取得する
     * 指定された Operator の指定された年月における Harvest データの読み込みデータ通信量を byte 単位で取得します。
     * @param operatorId operator ID
     * @param yearMonth 現在時刻の 18 か月前 〜 現在時刻の年月を YYYYMM 形式で指定します。
     * @returns HarvestExportedDataStatsResponse OK.
     * @throws ApiError
     */
    public static getHarvestExportedDataStats(
        operatorId: string,
        yearMonth?: string,
    ): CancelablePromise<HarvestExportedDataStatsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/harvest/operators/{operator_id}',
            path: {
                'operator_id': operatorId,
            },
            query: {
                'year_month': yearMonth,
            },
        });
    }
    /**
     * すべての IoT SIM の Harvest Data 書き込み回数をエクスポートする
     * オペレーターが所有していたすべての IoT SIM の SORACOM Harvest Data への書き込み回数を、[Harvest Data 書き込み回数実績データ CSV](/ja-jp/docs/harvest/stats-csv/) でダウンロードします。
     *
     * **Info**: 解約した IoT SIM の SORACOM Harvest Data への書き込み回数も確認できます。
     *
     * @param operatorId オペレーター ID。
     * @param requestBody 出力するデータの期間。
     * @param exportMode Harvest Data 書き込み回数実績データ CSV をダウンロードするための URL を取得する方法を指定します。
     *
     * - `async`: SORACOM プラットフォームで URL が発行されるのを待たずに、`exportedFieldId` を取得します。この `exportedFieldId` を [Files:getExportedFile API](#/Files/getExportedFile) で指定すると、ダウンロード用の URL を取得できます。Harvest Data 書き込み回数実績データ CSV のファイルサイズが大きい場合は、`async` を利用してください。
     * - `sync` (デフォルト): SORACOM プラットフォームでダウンロード用の URL が発行されるのを待ちます。ただし、Harvest Data 書き込み回数実績データ CSV のファイルサイズが大きい場合など、タイムアウトして URL を取得できないことがあります。タイムアウトする場合は、`async` を指定してください。
     *
     * @returns FileExportResponse OK.
     * @throws ApiError
     */
    public static exportHarvestStats(
        operatorId: string,
        requestBody: ExportRequest,
        exportMode?: 'async' | 'sync',
    ): CancelablePromise<FileExportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stats/harvest/operators/{operator_id}/export',
            path: {
                'operator_id': operatorId,
            },
            query: {
                'export_mode': exportMode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IMSI で指定した Subscriber の SORACOM Harvest Data 利用量履歴を取得する
     * IMSI で指定した Subscriber の SORACOM Harvest Data 利用量履歴を取得する。
     * @param imsi imsi
     * @param from 対象期間の開始月/日/分を UNIX 時間 (秒) で指定します。
     * @param to 対象期間の終了月/日/分を UNIX 時間 (秒) で指定します。
     * @param period 集計単位。
     *
     * - `month`: 月ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む月の 1 日 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む月の月末の 24:00:00 です。 |
     * - `day`: 日ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む日の 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む日の 24:00:00 です。 |
     * - `minutes`: 約 5 分ごと。
     *
     * `from` と `to` には、現在時刻の 32 日前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の集計対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の開始時刻です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の終了時刻です。 |
     *
     * @returns HarvestStatsResponse OK.
     * @throws ApiError
     */
    public static getHarvestStats(
        imsi: string,
        from: number,
        to: number,
        period: 'month' | 'day' | 'minutes',
    ): CancelablePromise<Array<HarvestStatsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/harvest/subscribers/{imsi}',
            path: {
                'imsi': imsi,
            },
            query: {
                'from': from,
                'to': to,
                'period': period,
            },
        });
    }
    /**
     * Napter 監査ログの月次読み込みデータ量を取得する
     * 指定された年月における Napter 監査ログの読み込みデータ通信量を byte 単位で取得する。
     * @param yearMonth 現在時刻の 18 か月前 〜 現在時刻の年月を YYYYMM 形式で指定します。
     * @returns NapterAuditLogsExportedDataStatsResponse OK.
     * @throws ApiError
     */
    public static getNapterAuditLogsExportedDataStats(
        yearMonth?: string,
    ): CancelablePromise<NapterAuditLogsExportedDataStatsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stats/napter/audit_logs',
            query: {
                'year_month': yearMonth,
            },
        });
    }
}
