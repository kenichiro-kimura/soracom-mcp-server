/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamEvent = {
    /**
     * デバイスを識別するための識別子
     */
    deviceId: string;
    /**
     * デバイスのタイプ
     */
    deviceType: string;
    /**
     * イベントを識別するための識別子
     */
    eventId: string;
    eventInfo?: {
        /**
         * イベントの詳細
         */
        atomEventV1?: {
            /**
             * イベントの終了時刻 (UNIX 時間 (ミリ秒))
             */
            endTime?: number;
            /**
             * イベントで検出されたオブジェクトの一覧
             */
            labels?: Array<string>;
            /**
             * イベントが検出されて録画された動画の URL。有効期限が切れていた場合、再度 API を呼び出してください。
             *
             * - クラウドモーション検知 “無制限” 録画ライセンスが適用されている場合はモーション検知で録画された動画の URL はここには含まれません。[SoraCam:exportSoraCamDeviceRecordedVideo API](#/SoraCam/exportSoraCamDeviceRecordedVideo) でエクスポートしてください。
             * - クラウドモーション検知 “無制限” 録画ライセンスが適用されている場合でも、モーション検知以外のイベントの場合は、この URL が含まれます。
             *
             */
            movie?: string;
            /**
             * イベント開始時の静止画の URL。有効期限が切れていた場合、再度 API を呼び出してください。
             */
            picture?: string;
            /**
             * イベントの録画状況
             */
            recordingStatus?: SoraCamEvent.recordingStatus;
            /**
             * イベントの開始時刻 (UNIX 時間 (ミリ秒))
             */
            startTime?: number;
            /**
             * イベント種別
             * - `motion`: モーション検知
             * - `sound`: サウンド検出
             * - `other`: その他
             *
             */
            type?: SoraCamEvent.type;
        };
        /**
         * イベント詳細のタイプ。デバイスのタイプによって変更される場合があります。
         */
        infoType: string;
    };
    /**
     * イベントが発生した時刻 (UNIX 時間 (ミリ秒))
     */
    time: number;
};
export namespace SoraCamEvent {
    /**
     * イベントの録画状況
     */
    export enum recordingStatus {
        COMPLETED = 'completed',
        RECORDING = 'recording',
        FAILED = 'failed',
    }
    /**
     * イベント種別
     * - `motion`: モーション検知
     * - `sound`: サウンド検出
     * - `other`: その他
     *
     */
    export enum type {
        MOTION = 'motion',
        SOUND = 'sound',
        OTHER = 'other',
    }
}

