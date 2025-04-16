/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Harvest Files に動画をエクスポートする場合に指定します。
 *
 * 例: `harvestFiles: { pathPrefix: "/sora_cam/{device_id}" }`
 *
 * `pathPrefix` を省略した場合や、空文字を指定した場合は、Harvest Files のルートディレクトリにエクスポートされます。
 *
 * ルートディレクトリにエクスポートする例: `harvestFiles: { pathPrefix: "" }`
 *
 */
export type SoraCamExportVideoToHarvestFiles = {
    /**
     * Harvest Files にエクスポートするときに動画が保存されるディレクトリ名。
     *
     * 以下の文字を入力すると、エクスポート時にルールに従って置き換えられます。
     *
     * - `{export_id}`: エクスポート ID (例: `123e4567-e89b-12d3-a456-426614174000`)。
     * - `{device_id}`: デバイス ID (例: `001A2B3C4D5E`)。
     * - `{date}`: エクスポートのリクエスト日時 (例: `2024/10/01/12/34`)。
     * - `{from}`: 動画の開始時刻 (UNIX 時間 (ミリ秒)) (例: `1728393803000`)。
     * - `{to}`: 動画の終了時刻 (UNIX 時間 (ミリ秒)) (例: `1728394700000`)。
     *
     * たとえば、`/sora_cam/{device_id}` を入力すると、ソラカメ対応カメラごとに異なるディレクトリにエクスポートされます。また、`{date}`、`{from}`、`{to}` は、複数のソラカメ対応カメラで同じ時刻にエクスポート/撮影された動画を、同じディレクトリに保存する場合に便利です。
     *
     * **Info**: 省略した場合や、空文字を指定した場合は、Harvest Files のルートディレクトリにエクスポートされます。
     *
     */
    pathPrefix?: string;
};

