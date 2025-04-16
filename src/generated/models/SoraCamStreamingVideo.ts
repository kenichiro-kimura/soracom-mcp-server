/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SoraCamPlayListEntry } from './SoraCamPlayListEntry';
export type SoraCamStreamingVideo = {
    /**
     * playList に含まれるすべての URL の有効期限 (UNIX 時間 (ミリ秒))
     */
    expiryTime: number;
    /**
     * ストリーミング映像 (最新映像 / 録画映像) のプレイリストエントリーの配列
     *
     * - 最新映像の場合は、返却される動画ファイルは常にひとつです。また、`from` および `to` は省略されます。
     * - 録画映像の場合は、録画の状態によって動画ファイルが分割されていることがあります。
     *
     */
    playList?: Array<SoraCamPlayListEntry>;
};

