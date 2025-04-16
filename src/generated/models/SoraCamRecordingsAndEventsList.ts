/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamRecordingsAndEventsList = {
    events: Array<{
        /**
         * イベントの終了時刻 (UNIX 時間 (ミリ秒))。
         */
        endTime?: number;
        /**
         * イベントの開始時刻 (UNIX 時間 (ミリ秒))。
         */
        startTime: number;
        /**
         * イベント種別。
         *
         * - `motion`: モーション検知。
         * - `sound`: サウンド検出。
         * - `other`: その他。
         *
         */
        type: 'motion' | 'sound' | 'other';
    }>;
    records: Array<{
        /**
         * 録画の終了時刻 (UNIX 時間 (ミリ秒))。録画中の場合は、`endTime` が含まれません。
         */
        endTime?: number;
        /**
         * 録画の開始時刻 (UNIX 時間 (ミリ秒))。
         */
        startTime: number;
    }>;
};

