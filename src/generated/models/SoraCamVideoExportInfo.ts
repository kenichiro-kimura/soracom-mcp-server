/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamVideoExportInfo = {
    /**
     * ソラカメ対応カメラのデバイス ID。
     */
    deviceId: string;
    /**
     * URL の有効期限 (UNIX 時間 (ミリ秒))。エクスポートが完了してから 10 分が経過すると、URL は利用できなくなります。`status` が `completed` の場合のみ含まれます。
     */
    expiryTime?: number;
    /**
     * エクスポート ID。[SoraCam:exportSoraCamDeviceRecordedVideo API](#/SoraCam/exportSoraCamDeviceRecordedVideo) で取得したエクスポート ID を、[SoraCam:getSoraCamDeviceExportedVideo API](#/SoraCam/getSoraCamDeviceExportedVideo) で指定すると、mp4 ファイルを zip 形式で圧縮したファイルをダウンロードするための URL を取得できます。
     *
     */
    exportId: string;
    /**
     * [SoraCam:exportSoraCamDeviceRecordedVideo API](#/SoraCam/exportSoraCamDeviceRecordedVideo) を呼び出したオペレーターの ID
     *
     */
    operatorId: string;
    /**
     * [SoraCam:exportSoraCamDeviceRecordedVideo API](#/SoraCam/exportSoraCamDeviceRecordedVideo) によるエクスポートのリクエストを SORACOM プラットフォームが受け付けた日時 (UNIX 時間 (ミリ秒))
     *
     */
    requestedTime: number;
    /**
     * エクスポート処理の現在の状況。
     *
     * - `initializing`: 初期状態
     * - `processing`: 処理中
     * - `completed`: エクスポート完了
     * - `retrying`: エクスポート再実行中
     * - `failed`: エクスポート失敗
     * - `limitExceeded`: 動画のエクスポート可能時間の上限を超えたためエクスポート不可
     * - `expired`: URL の有効期限切れ
     *
     */
    status: SoraCamVideoExportInfo.status;
    /**
     * mp4 ファイルを zip 形式で圧縮したファイルをダウンロードするための URL。`status` が `completed` の場合のみ含まれます。
     *
     * - ダウンロードした zip 形式のファイルを展開すると、mp4 ファイルを取得できます。
     *
     */
    url?: string;
};
export namespace SoraCamVideoExportInfo {
    /**
     * エクスポート処理の現在の状況。
     *
     * - `initializing`: 初期状態
     * - `processing`: 処理中
     * - `completed`: エクスポート完了
     * - `retrying`: エクスポート再実行中
     * - `failed`: エクスポート失敗
     * - `limitExceeded`: 動画のエクスポート可能時間の上限を超えたためエクスポート不可
     * - `expired`: URL の有効期限切れ
     *
     */
    export enum status {
        INITIALIZING = 'initializing',
        PROCESSING = 'processing',
        COMPLETED = 'completed',
        RETRYING = 'retrying',
        FAILED = 'failed',
        LIMIT_EXCEEDED = 'limitExceeded',
        EXPIRED = 'expired',
    }
}

