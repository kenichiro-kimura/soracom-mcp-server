/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiagnosticRequest } from '../models/DiagnosticRequest';
import type { DiagnosticResponse } from '../models/DiagnosticResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DiagnosticService {
    /**
     * 診断リクエストを送信する
     * 診断リクエストを送信します。
     * @param requestBody request
     * @returns DiagnosticResponse 診断リクエストが受け付けられました。
     * @throws ApiError
     */
    public static sendDiagnosticRequest(
        requestBody: DiagnosticRequest,
    ): CancelablePromise<DiagnosticResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/diagnostics',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `診断対象期間の指定 (from/to) に誤りがあります。`,
                404: `指定されたリソースが見つかりませんでした。`,
            },
        });
    }
    /**
     * 診断結果を取得する
     * 診断結果を取得します。
     * @param diagnosticId 診断リクエストの識別子。
     * @returns DiagnosticResponse OK.
     * @throws ApiError
     */
    public static getDiagnostic(
        diagnosticId: string,
    ): CancelablePromise<DiagnosticResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/diagnostics/{diagnostic_id}',
            path: {
                'diagnostic_id': diagnosticId,
            },
            errors: {
                404: `指定された diagnostic_id が見つかりませんでした。`,
            },
        });
    }
}
