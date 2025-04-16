/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FileEntry = {
    /**
     * コンテントの長さ
     */
    contentLength?: number;
    /**
     * コンテントタイプ
     */
    contentType?: string;
    /**
     * ファイルの作成時刻
     */
    createdTime?: number;
    /**
     * 親ディレクトリ名
     */
    directory?: string;
    /**
     * ファイルの ETag
     */
    etag?: string;
    /**
     * ファイルの絶対パス
     */
    filePath?: string;
    /**
     * ファイル名
     */
    filename?: string;
    /**
     * ディレクトリか否か
     */
    isDirectory?: boolean;
    /**
     * ファイルの更新時刻
     */
    lastModifiedTime?: number;
};

