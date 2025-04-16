/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetExportedFileResponse } from '../models/GetExportedFileResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FilesService {
    /**
     * 非同期でファイルをエクスポートした場合の処理の進捗を取得する
     * 非同期でファイルをエクスポートした場合の処理の進捗を取得します。エクスポートが完了している場合は、ファイルをダウンロードするための URL を取得できます。URL からファイルをダウンロードしてください。
     *
     * 非同期でファイルをエクスポートできる API は以下のとおりです。`exported_file_id` には、以下の API で取得した ファイルエクスポート ID (`exportedFileId` の値) を指定します。
     *
     * - [Billing:exportBilling API](#/Billing/exportBilling)
     * - [Billing:exportLatestBilling API](#/Billing/exportLatestBilling)
     * - [Payment:exportPaymentStatement API](#/Payment/exportPaymentStatement)
     * - [Stats:exportAirStats API](#/Stats/exportAirStats)
     * - [Stats:exportBeamStats API](#/Stats/exportBeamStats)
     * - [Stats:exportFunkStats API](#/Stats/exportFunkStats)
     * - [Stats:exportFunnelStats API](#/Stats/exportFunnelStats)
     * - [Subscriber:exportSubscribers API](#/Subscriber/exportSubscribers)
     *
     * @param exportedFileId ファイルエクスポート ID
     * @returns GetExportedFileResponse OK
     * @throws ApiError
     */
    public static getExportedFile(
        exportedFileId: string,
    ): CancelablePromise<GetExportedFileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/exported/{exported_file_id}',
            path: {
                'exported_file_id': exportedFileId,
            },
        });
    }
}
