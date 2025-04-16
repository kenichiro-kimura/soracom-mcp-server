/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cell } from './Cell';
export type SessionEvent = {
    /**
     * The Access Point Name configured.
     */
    apn?: string;
    cell?: Cell;
    createdTime?: string;
    /**
     * First IP address of DNS servers.
     */
    dns0?: string;
    /**
     * Second IP address of DNS servers.
     */
    dns1?: string;
    /**
     * セッションのイベントの種類です。以下のいずれかです:
     *
     * - `Created`: セッションが確立されました。
     * - `Modified`: デバイスの移動や電波強度の変化などの理由で、基地局からセッションの更新 (ハンドオーバー) が通知されました。
     * - `Deleted`: セッションが切断されました。
     *
     * `Created` または `Modified` の場合は、セッションの状態がオンラインであることを表します。`Deleted` の場合は、セッションの状態がオフラインであることを表します。セッションの意味は、[状態 (オンライン / オフライン)](/ja-jp/resources/glossary/session/#状態-オンライン--オフライン) を参照してください。
     *
     */
    event?: string;
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
     * The operator ID of the session event.
     */
    operatorId?: string;
    /**
     * セッション ID。
     */
    sessionId?: string;
    simId?: string;
    /**
     * サブスクリプション。
     */
    subscription?: string;
    /**
     * The timestamp of the session event.
     */
    time?: number;
    /**
     * The IP address of the device.
     */
    ueIpAddress?: string;
    /**
     * VPG ID。VPG を利用していない場合は出力されません。
     */
    vpgId?: string;
};

