/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SimDownlinkSshNoAuthentication } from './SimDownlinkSshNoAuthentication';
import type { SimDownlinkSshPasswordAuthentication } from './SimDownlinkSshPasswordAuthentication';
import type { SimDownlinkSshPublicKeyAuthentication } from './SimDownlinkSshPublicKeyAuthentication';
export type SimDownlinkSshRequest = {
    /**
     * SSH 接続の認証方法。`type` に以下のいずれかを指定し、認証方式にあわせて必要な情報を指定します。
     *
     * - `password`: パスワード認証。
     * - `publickey`: 公開鍵認証。
     * - `none`: 認証なし。
     *
     */
    authentication: (SimDownlinkSshPasswordAuthentication | SimDownlinkSshPublicKeyAuthentication | SimDownlinkSshNoAuthentication);
    /**
     * SSH 接続を利用してデバイスで実行されるコマンド。最大サイズは 8192 バイトです。
     */
    command: string;
    /**
     * SSH 接続のポート番号。
     */
    port?: number;
    /**
     * SSH 接続のユーザー名。
     */
    username: string;
};

