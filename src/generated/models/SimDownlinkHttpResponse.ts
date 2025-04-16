/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SimDownlinkHttpResponse = {
    /**
     * デバイスからの HTTP レスポンスボディ。
     *
     * - 有効な UTF-8 文字列の場合は、そのまま返されます。
     * - それ以外の場合は、Base64 エンコードされます。このとき、`isBase64Encoded` は `true` になります。
     *
     */
    body?: string;
    /**
     * デバイスからの HTTP レスポンスヘッダー。
     */
    headers?: Record<string, string>;
    /**
     * `body` の値が Base64 エンコードされているかどうか。
     *
     */
    isBase64Encoded?: boolean;
    /**
     * デバイスからの HTTP ステータスコード。
     */
    statusCode: number;
};

