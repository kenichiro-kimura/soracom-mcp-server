/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceSummary } from '../models/ResourceSummary';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourceSummaryService {
    /**
     * resource_summary_type で指定された種別のリソースの要約を取得する
     * resource_summary_type で指定された種別のリソースの要約を取得します。
     * @param resourceSummaryType リソースの要約の種別。
     *
     * - `simsPerStatus`: ステータスごとの IoT SIM の数。
     *
     * @returns ResourceSummary リソースの要約を取得しました。
     * @throws ApiError
     */
    public static getResourceSummary(
        resourceSummaryType: 'simsPerStatus',
    ): CancelablePromise<ResourceSummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/resource_summaries/{resource_summary_type}',
            path: {
                'resource_summary_type': resourceSummaryType,
            },
            errors: {
                404: `指定のリソースの要約は存在しません。`,
            },
        });
    }
}
