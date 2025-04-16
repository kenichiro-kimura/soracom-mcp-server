/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SimplifiedSubscriber } from './SimplifiedSubscriber';
export type SimProfile = {
    /**
     * WireGuard で接続するためのクライアントの PrivateKey (クライアントピア秘密鍵) です。
     * - PrivateKey (クライアントピア秘密鍵) は再表示できません。秘密鍵を紛失した場合は新しい鍵を生成し、デバイスの認証情報を更新してください。
     * - 接続情報は決して外部に公開しないでください。
     *
     */
    arcClientPeerPrivateKey?: string;
    arcClientPeerPublicKey?: string;
    iccid?: string;
    otaSupported?: boolean;
    primaryImsi?: string;
    subscribers?: Record<string, SimplifiedSubscriber>;
};

