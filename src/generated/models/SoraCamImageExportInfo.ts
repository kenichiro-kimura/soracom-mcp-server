/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamImageExportInfo = {
    /**
     * ソラカメ対応カメラのデバイス ID
     */
    deviceId: string;
    /**
     * URL の有効期限 (UNIX 時間 (ミリ秒))。エクスポートが完了してから 10 分が経過すると、URL は利用できなくなります。`status` が `completed` の場合のみ含まれます。
     */
    expiryTime?: number;
    /**
     * エクスポート ID。[SoraCam:exportSoraCamDeviceRecordedImage API](#/SoraCam/exportSoraCamDeviceRecordedImage) で取得したエクスポート ID を、[SoraCam:getSoraCamDeviceExportedImage API](#/SoraCam/getSoraCamDeviceExportedImage) で指定すると、jpg ファイルをダウンロードするための URL を取得できます。
     *
     */
    exportId: string;
    /**
     * [SoraCam:exportSoraCamDeviceRecordedImage API](#/SoraCam/exportSoraCamDeviceRecordedImage) を呼び出したオペレーターの ID
     *
     */
    operatorId: string;
    /**
     * [SoraCam:exportSoraCamDeviceRecordedImage API](#/SoraCam/exportSoraCamDeviceRecordedImage) によるエクスポートのリクエストを SORACOM プラットフォームが受け付けた日時 (UNIX 時間 (ミリ秒))
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
    status: SoraCamImageExportInfo.status;
    /**
     * エクスポートされた jpg ファイルをダウンロードするための URL。`status` が `completed` の場合のみ含まれます。
     */
    url?: string;
};
export namespace SoraCamImageExportInfo {
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

