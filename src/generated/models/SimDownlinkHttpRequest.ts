/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SimDownlinkHttpRequest = {
    /**
     * HTTP リクエストボディ。
     *
     * **Warning**: HTTP リクエストの最大サイズは、URL、ヘッダー、本文を含めて 5 MiB です。5 MiB を超えるとエラーが返されます。
     *
     */
    body?: string;
    /**
     * HTTP リクエストヘッダー。ヘッダー名と値をペアで指定します。
     */
    headers?: Record<string, string>;
    /**
     * ホスト名。省略すると、IoT SIM の IP アドレスが使用されます。
     */
    host?: string;
    /**
     * HTTP メソッド。
     */
    method?: SimDownlinkHttpRequest.method;
    /**
     * URL パス (例: `/path/to/resource`)。
     *
     */
    path?: string;
    /**
     * HTTP 接続のポート番号。
     */
    port?: number;
    /**
     * HTTPS 接続時の SSL 証明書の検証をスキップするかどうか。
     *
     * - `true`: 検証をスキップします。
     * - `false`: 検証を行います。ただし、`ssl` が `false` (SSL 通信を行わない) の場合は無視されます。
     *
     */
    skipVerify?: boolean;
    /**
     * SSL 通信を行うかどうか。
     *
     * - `true`: SSL 通信を行う (HTTPS を使用する)。
     * - `false`: SSL 通信を行わない (HTTP を使用する)。
     *
     */
    ssl?: boolean;
};
export namespace SimDownlinkHttpRequest {
    /**
     * HTTP メソッド。
     */
    export enum method {
        GET = 'GET',
        HEAD = 'HEAD',
        POST = 'POST',
        PUT = 'PUT',
        DELETE = 'DELETE',
        PATCH = 'PATCH',
        OPTIONS = 'OPTIONS',
        TRACE = 'TRACE',
    }
}

