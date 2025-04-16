/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamPlayListEntry = {
    /**
     * 録画映像の開始時刻 (UNIX 時間 (ミリ秒))。最新映像の場合は省略されます。
     */
    from?: number;
    /**
     * 録画映像の終了時刻 (UNIX 時間 (ミリ秒))。最新映像の場合は省略されます。
     */
    to?: number;
    /**
     * ストリーミング映像 (最新映像 / 録画映像) の mpd ファイルを取得するための URL
     *
     * - 以下の場合は URL が返されません。
     * - 最新映像を取得しようとした場合に、ソラカメ対応カメラの電源が入っていない。
     * - 最新映像を取得しようとした場合に、ソラカメ対応カメラでクラウド録画が開始されていない。
     * - 録画映像を取得しようとした場合に、指定した `from` から `to` の間に録画映像が存在しない。
     *
     */
    url: string;
};

