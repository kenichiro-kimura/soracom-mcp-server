/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Placement } from './Placement';
export type ArcSessionStatus = {
    /**
     * Arc サーバーから受信した WireGuard AllowedIPs。
     */
    arcAllowedIPs?: Array<string>;
    /**
     * クライアントの IP アドレス。
     */
    arcClientPeerIpAddress?: string;
    arcClientPeerPublicKey?: string;
    /**
     * Arc サーバーの WireGuard プロトコルのエンドポイント。
     */
    arcServerEndpoint?: string;
    /**
     * Arc サーバーのサーバーピア公開鍵。
     */
    arcServerPeerPublicKey?: string;
    /**
     * VPG のプライベート IP アドレス。VPG Type-F の場合は、IoT SIM からお客様システムへの閉域網通信の送信元 IP アドレスが、この IP アドレスに NAT されます。
     */
    gatewayPrivateIpAddress?: string;
    /**
     * VPG の [固定グローバル IP アドレスオプション](/ja-jp/docs/vpg/configure-fixed-global-ips/) を利用しているときの固定グローバル IP アドレス。
     */
    gatewayPublicIpAddress?: string;
    lastUpdatedAt?: number;
    placement?: Placement;
    /**
     * VPG ID。VPG を利用していない場合は出力されません。
     */
    vpgId?: string;
};

