/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExportRequest = {
    /**
     * 対象期間の開始月/日/分を UNIX 時間 (秒) で指定します。
     */
    from?: number;
    /**
     * 集計単位。
     *
     * - `month`: 月ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む月の 1 日 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む月の月末の 24:00:00 です。 |
     * - `day`: 日ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む日の 00:00:00 です 。|
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む日の 24:00:00 です。 |
     * - `minutes`: 約 5 分ごと。
     *
     * `from` と `to` には、現在時刻の 32 日前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の集計対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の開始時刻です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の終了時刻です。 |
     *
     */
    period?: ExportRequest.period;
    /**
     * 対象期間の終了月/日/分を UNIX 時間 (秒) で指定します。
     */
    to?: number;
};
export namespace ExportRequest {
    /**
     * 集計単位。
     *
     * - `month`: 月ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む月の 1 日 00:00:00 です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む月の月末の 24:00:00 です。 |
     * - `day`: 日ごと。
     *
     * `from` と `to` には、現在時刻の 18 か月前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む日の 00:00:00 です 。|
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む日の 24:00:00 です。 |
     * - `minutes`: 約 5 分ごと。
     *
     * `from` と `to` には、現在時刻の 32 日前 〜 現在時刻の UNIX 時間 (秒) を指定してください。実際の集計対象期間は、`from` と `to` で指定した時刻ではありません。
     *
     * | 項目 | 説明 |
     * |-|-|
     * | 実際の開始時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の開始時刻です。 |
     * | 実際の終了時刻 | 指定した UNIX 時間 (秒) を含む約 5 分間の終了時刻です。 |
     *
     */
    export enum period {
        MONTH = 'month',
        DAY = 'day',
        MINUTES = 'minutes',
    }
}

