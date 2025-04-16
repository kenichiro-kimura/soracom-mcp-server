/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FileExportResponse = {
    /**
     * ファイルエクスポート ID。この ID を [Files:getExportedFile API](#/Files/getExportedFile) を呼び出すときに指定すると、ファイルをダウンロードするための URL を取得できます。`export_mode` に `async` を指定した場合のみ含まれます。
     */
    exportedFileId?: string;
    /**
     * エクスポート済みファイルのパス。`export_mode` に `async` を指定した場合のみ含まれます。
     */
    exportedFilePath?: string;
    /**
     * ファイルをダウンロードするための URL。`export_mode` に `sync` を指定した場合のみ含まれます。
     */
    url?: string;
};

