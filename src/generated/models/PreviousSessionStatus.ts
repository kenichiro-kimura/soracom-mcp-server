/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cell } from './Cell';
/**
 * 前のセッションの情報。
 */
export type PreviousSessionStatus = {
    cell?: Cell;
    /**
     * The time when the previous session was created.
     */
    createdTime?: number;
    /**
     * The time when the previous session was deleted.
     */
    deletedTime?: number;
    /**
     * Array of IP address of the DNS servers.
     */
    dnsServers?: Array<string>;
    /**
     * VPG のプライベート IP アドレス。VPG Type-F の場合は、IoT SIM からお客様システムへの閉域網通信の送信元 IP アドレスが、この IP アドレスに NAT されます。
     */
    gatewayPrivateIpAddress?: string;
    /**
     * VPG の [固定グローバル IP アドレスオプション](/ja-jp/docs/vpg/configure-fixed-global-ips/) を利用しているときの固定グローバル IP アドレス。
     */
    gatewayPublicIpAddress?: string;
    /**
     * IoT SIM を利用するデバイスの IMEI。バーチャル SIM/Subscriber の場合は `null` です。
     */
    imei?: string;
    /**
     * IoT SIM の IMSI。
     */
    imsi?: string;
    /**
     * セッション ID。
     */
    sessionId?: string;
    /**
     * サブスクリプション。
     */
    subscription?: string;
    /**
     * The IP address of the device.
     */
    ueIpAddress?: string;
    /**
     * VPG ID。VPG を利用していなかった場合は出力されません。
     */
    vpgId?: string;
};

