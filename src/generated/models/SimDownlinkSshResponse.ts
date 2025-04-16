/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SimDownlinkSshResponse = {
    /**
     * コマンドの終了コード。
     */
    exitcode: number;
    /**
     * `stderr` の値が Base64 エンコードされているかどうか。
     */
    isStderrBase64Encoded?: boolean;
    /**
     * `stdout` の値が Base64 エンコードされているかどうか。
     *
     */
    isStdoutBase64Encoded?: boolean;
    /**
     * コマンドの標準エラー出力。
     *
     * - 有効な UTF-8 文字列の場合は、そのまま返されます。
     * - それ以外の場合は、Base64 エンコードされます。このとき、`isStderrBase64Encoded` は `true` になります。
     *
     */
    stderr?: string;
    /**
     * コマンドの標準出力。
     *
     * - 有効な UTF-8 文字列の場合は、そのまま返されます。
     * - それ以外の場合は、Base64 エンコードされます。このとき、`isStdoutBase64Encoded` は `true` になります。
     *
     */
    stdout?: string;
};

