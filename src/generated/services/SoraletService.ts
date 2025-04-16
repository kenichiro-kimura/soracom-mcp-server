/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSoraletRequest } from '../models/CreateSoraletRequest';
import type { ExecuteSoraletRequest } from '../models/ExecuteSoraletRequest';
import type { ExecuteSoraletResponse } from '../models/ExecuteSoraletResponse';
import type { Soralet } from '../models/Soralet';
import type { SoraletLog } from '../models/SoraletLog';
import type { SoraletVersion } from '../models/SoraletVersion';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SoraletService {
    /**
     * Soralet の一覧を取得する
     * Soralet の一覧を取得します。
     * @param sort データエントリのソート順。下降順 (最新のデータが先頭) もしくは上昇順 (最も古いデータが先頭)。
     * @param limit 一度のレスポンスに含まれる項目数の最大値。
     * @param lastEvaluatedKey 現在のページで最後に取得された Soralet の識別子を指定します。このパラメータを指定することで、Soralet のリストの続きを取得できます。
     * @returns Soralet OK.
     * @throws ApiError
     */
    public static listSoralets(
        sort: 'asc' | 'desc' = 'asc',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<Soralet>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/soralets',
            query: {
                'sort': sort,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * Soralet を作成する
     * Soralet を作成します。
     * @param requestBody request
     * @returns any 新しい Soralet が作成されました。
     * @throws ApiError
     */
    public static createSoralet(
        requestBody: CreateSoraletRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/soralets',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `指定された Soralet はすでに存在しているか、不正な soralet_id が指定されました。`,
            },
        });
    }
    /**
     * Soralet を削除する
     * Soralet を削除します。
     * @param soraletId 削除したい Soralet の識別子。
     * @returns void
     * @throws ApiError
     */
    public static deleteSoralet(
        soraletId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/soralets/{soralet_id}',
            path: {
                'soralet_id': soraletId,
            },
            errors: {
                404: `指定された Soralet が見つかりませんでした。`,
            },
        });
    }
    /**
     * Soralet を取得する
     * Soralet を取得します。
     * @param soraletId 取得したい Soralet の識別子。
     * @returns Soralet OK.
     * @throws ApiError
     */
    public static getSoralet(
        soraletId: string,
    ): CancelablePromise<Soralet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/soralets/{soralet_id}',
            path: {
                'soralet_id': soraletId,
            },
            errors: {
                404: `指定された Soralet が見つかりませんでした。`,
            },
        });
    }
    /**
     * Soralet のログメッセージを取得する
     * 指定された Soralet からのログメッセージの一覧を取得します。
     * @param soraletId Soralet の識別子。
     * @param sort データエントリのソート順。下降順 (最新のデータが先頭) もしくは上昇順 (最も古いデータが先頭)。
     * @param limit 一度のレスポンスに含まれる項目数の最大値。
     * @param lastEvaluatedKey 現在のページで最後に取得されたログの識別子を指定します。このパラメータを指定することで、ログのリストの続きを取得できます。
     * @returns SoraletLog OK.
     * @throws ApiError
     */
    public static getSoraletLogs(
        soraletId: string,
        sort: 'asc' | 'desc' = 'desc',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<SoraletLog>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/soralets/{soralet_id}/logs',
            path: {
                'soralet_id': soraletId,
            },
            query: {
                'sort': sort,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * 引数を指定して Soralet をテスト実行する
     * 引数を指定して Soralet をテスト実行します。
     * @param soraletId Soralet の識別子。
     * @param requestBody 実行リクエスト。
     * @returns ExecuteSoraletResponse OK.
     * @throws ApiError
     */
    public static testSoralet(
        soraletId: string,
        requestBody: ExecuteSoraletRequest,
    ): CancelablePromise<ExecuteSoraletResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/soralets/{soralet_id}/test',
            path: {
                'soralet_id': soraletId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Soralet のバージョン一覧を取得する
     * Soralet のバージョン一覧を取得します。
     * @param soraletId バージョン一覧を取得したい Soralet の識別子。
     * @param sort データエントリのソート順。下降順 (最新のデータが先頭) もしくは上昇順 (最も古いデータが先頭)。
     * @param limit 一度のレスポンスに含まれる項目数の最大値。
     * @param lastEvaluatedKey 現在のページで最後に取得されたバージョンの識別子を指定します。このパラメータを指定することで、バージョンのリストの続きを取得できます。
     * @returns SoraletVersion OK.
     * @throws ApiError
     */
    public static listSoraletVersions(
        soraletId: string,
        sort: 'asc' | 'desc' = 'desc',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<SoraletVersion>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/soralets/{soralet_id}/versions',
            path: {
                'soralet_id': soraletId,
            },
            query: {
                'sort': sort,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * コードをアップロードし、新しいバージョンを作成する
     * コードをアップロードし、新しいバージョンを作成します。
     * @param soraletId コードのアップロード先の Soralet の識別子。
     * @param requestBody アップロードしたいファイルの内容。
     * @param contentType アップロードするファイルの Content-Type。.wasm ファイルをアップロードする場合は `application/json` を指定してください。
     * @returns SoraletVersion Successfully created a new version.
     * @throws ApiError
     */
    public static uploadSoraletCode(
        soraletId: string,
        requestBody: Blob,
        contentType?: string,
    ): CancelablePromise<SoraletVersion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/soralets/{soralet_id}/versions',
            path: {
                'soralet_id': soraletId,
            },
            headers: {
                'content-type': contentType,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Soralet のバージョンを削除する
     * Soralet のバージョンを削除します。
     * @param soraletId Soralet の識別子。
     * @param version 削除したい Soralet のバージョン。
     * @returns void
     * @throws ApiError
     */
    public static deleteSoraletVersion(
        soraletId: string,
        version: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/soralets/{soralet_id}/versions/{version}',
            path: {
                'soralet_id': soraletId,
                'version': version,
            },
            errors: {
                404: `指定された Soralet のバージョンが見つかりませんでした。`,
            },
        });
    }
}
