/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileEntry } from '../models/FileEntry';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FileEntryService {
    /**
     * scope と prefix にマッチするファイルを探す
     * scope と prefix にマッチしたファイルエントリの一覧をファイルエントリを filePath の UTF-8 バイトでソートされた順 (昇順) で返却します。 prefix がマッチするファイルエントリが無ければ空のリストが返却されます。
     * @param scope リクエストのスコープ。Harvest Files にアップロードしたファイルを扱う場合は `private` を指定します。
     * @param prefix ファイルパスにマッチさせるプレフィックス
     * @param limit 返却するファイルエントリ数の上限
     * @param lastEvaluatedKey 前ページで取得した最後のファイルエントリの filePath。このパラメータを指定することで次のファイルエントリ以降のリストを取得できる。
     * @returns FileEntry prefix にマッチしたファイルエントリのリスト。prefix にマッチするファイルエントリが無ければ空のリスト。
     * @throws ApiError
     */
    public static findFiles(
        scope: 'private' | 'public',
        prefix: string,
        limit: number = 10,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<FileEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files',
            query: {
                'scope': scope,
                'prefix': prefix,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
            errors: {
                404: `指定された scope が存在しない`,
            },
        });
    }
    /**
     * scope と path で指定されたファイルを削除する
     * scope と path で指定されたファイルを削除します。`private` スコープのみが許可されます。
     * @param path 対象 Path
     * @param scope リクエストのスコープ。Harvest Files にアップロードしたファイルを扱う場合は `private` を指定します。
     * @returns void
     * @throws ApiError
     */
    public static deleteFile(
        path: string,
        scope: 'private' = 'private',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/files/{scope}/{path}',
            path: {
                'scope': scope,
                'path': path,
            },
            errors: {
                404: `指定されたファイルが見つからない`,
            },
        });
    }
    /**
     * scope と path で指定されたファイルをダウンロードする
     * scope と path で指定されたファイルをダウンロードします。なお、path の末尾が `/` の場合は [FileEntry:listFiles API](#/FileEntry/listFiles) が呼び出されます。
     * @param path 対象 Path
     * @param scope リクエストのスコープ。Harvest Files にアップロードしたファイルを扱う場合は `private` を指定します。
     * @returns void
     * @throws ApiError
     */
    public static getFile(
        path: string,
        scope: 'private' | 'public' = 'private',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/{scope}/{path}',
            path: {
                'scope': scope,
                'path': path,
            },
            errors: {
                302: `ファイルをダウンロードするためのリンクへのリダイレクション。指定された path がディレクトリの場合は listFiles API へのリダイレクション。`,
                404: `指定されたファイルが見つからない`,
            },
        });
    }
    /**
     * scope と path で指定されたファイルのメタデータを取得する
     * scope と path で指定されたファイルのメタデータを取得します。
     * @param path 対象 Path
     * @param scope リクエストのスコープ。Harvest Files にアップロードしたファイルを扱う場合は `private` を指定します。
     * @returns string 指定されたファイルのメタデータ
     * @throws ApiError
     */
    public static getFileMetadata(
        path: string,
        scope: 'private' | 'public' = 'private',
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/files/{scope}/{path}',
            path: {
                'scope': scope,
                'path': path,
            },
            responseHeader: 'Content-Length',
            errors: {
                404: `指定されたファイルが見つからない`,
            },
        });
    }
    /**
     * 指定された scope 内の path にファイルをアップロードする
     * 指定された scope 内の path にファイルをアップロードします。`private` スコープのみが許可されます。
     * @param path 対象 Path
     * @param requestBody アップデートするファイルの内容。
     * @param scope リクエストのスコープ。Harvest Files にアップロードしたファイルを扱う場合は `private` を指定します。
     * @param contentType アップロードするファイルの Content-Type。
     * @returns any ファイルの更新に成功
     * @throws ApiError
     */
    public static putFile(
        path: string,
        requestBody: Blob,
        scope: 'private' = 'private',
        contentType?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/files/{scope}/{path}',
            path: {
                'scope': scope,
                'path': path,
            },
            headers: {
                'content-type': contentType,
            },
            body: requestBody,
            mediaType: '*/*',
        });
    }
    /**
     * scope と path で指定されたディレクトリを削除する
     * scope と path で指定されたディレクトリを削除します。`private` スコープのみが許可されます。
     * @param path 対象 Path
     * @param scope リクエストのスコープ。Harvest Files にアップロードしたファイルを扱う場合は `private` を指定します。
     * @returns void
     * @throws ApiError
     */
    public static deleteDirectory(
        path: string,
        scope: 'private' = 'private',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/files/{scope}/{path}/',
            path: {
                'scope': scope,
                'path': path,
            },
            errors: {
                400: `指定されたディレクトリが空ではない`,
                404: `指定されたディレクトリが見つからない`,
            },
        });
    }
    /**
     * scope と path で指定されたディレクトリに含まれるファイルやディレクトリの一覧を取得する
     * scope と path で指定されたディレクトリに含まれるファイルまたはディレクトリを取得します。なお、path の末尾が `/` 以外の場合は [FileEntry:getFile API](#/FileEntry/getFile) が呼び出されます。エントリの総数が 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param scope リクエストのスコープ。Harvest Files にアップロードしたファイルを扱う場合は `private` を指定します。
     * @param path 対象 Path
     * @param limit 返却するファイルエントリ数の上限
     * @param lastEvaluatedKey 前ページで取得した最後のファイルエントリの filename。このパラメータを指定することで次のファイルエントリ以降のリストを取得できる。
     * @returns FileEntry 指定されたディレクトリに含まれるファイルやディレクトリ
     * @throws ApiError
     */
    public static listFiles(
        scope: 'private' | 'public' = 'private',
        path: string = '/',
        limit: number = 10,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<FileEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/{scope}/{path}/',
            path: {
                'scope': scope,
                'path': path,
            },
            query: {
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
            errors: {
                404: `ディレクトリが見つからない`,
            },
        });
    }
}
