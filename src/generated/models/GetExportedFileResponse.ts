/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetExportedFileResponse = {
    /**
     * エクスポートステータス。
     *
     * - `processing`: エクスポート中です。お待ちください。
     * - `exported`: エクスポートが完了しました。ダウンロードできます。
     * - `failed`: エクスポートに失敗しました。
     *
     */
    status?: GetExportedFileResponse.status;
    /**
     * ファイルダウンロード URL。`status` が `exported` になっていることを確認し、`url` で取得した URL から CSV ファイルをダウンロードします。
     *
     * ```bash
     * $ wget -O export.csv "https://soracom-xxxxxxxx-...."
     * ```
     *
     */
    url?: string;
};
export namespace GetExportedFileResponse {
    /**
     * エクスポートステータス。
     *
     * - `processing`: エクスポート中です。お待ちください。
     * - `exported`: エクスポートが完了しました。ダウンロードできます。
     * - `failed`: エクスポートに失敗しました。
     *
     */
    export enum status {
        PROCESSING = 'processing',
        EXPORTED = 'exported',
        FAILED = 'failed',
    }
}

