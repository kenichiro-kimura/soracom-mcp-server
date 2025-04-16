/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerRoute } from './CustomerRoute';
import type { JunctionInspectionConfiguration } from './JunctionInspectionConfiguration';
import type { JunctionMirroringPeer } from './JunctionMirroringPeer';
import type { JunctionRedirectionConfiguration } from './JunctionRedirectionConfiguration';
import type { Placement } from './Placement';
import type { RoutingFilterEntry } from './RoutingFilterEntry';
import type { SoracomTransitGateway } from './SoracomTransitGateway';
import type { TagSet } from './TagSet';
import type { TransitGatewayAttachment } from './TransitGatewayAttachment';
import type { TransitGatewayPeeringConnection } from './TransitGatewayPeeringConnection';
import type { TransitGatewayVpcAttachment } from './TransitGatewayVpcAttachment';
import type { VpnConnection } from './VpnConnection';
export type VirtualPrivateGateway = {
    allowedOperators?: Array<string>;
    /**
     * VPG の作成日時 (UNIX 時間 (ミリ秒))。
     */
    createdTime?: number;
    /**
     * VPG のルーティングテーブルエントリのリスト
     */
    customerRoutes?: Record<string, CustomerRoute>;
    /**
     * デバイスサブネット IP アドレスレンジ。
     */
    deviceSubnetCidrRange?: string;
    enableSimBasedRouting?: boolean;
    /**
     * 固定グローバル IP アドレスオプション。
     *
     * - `true`: 有効
     * - `false`: 無効
     *
     */
    fixedIpAddressesEnabled?: boolean;
    fixedPublicIpAddresses?: Array<string>;
    /**
     * [Gate](/ja-jp/docs/gate/) の有効 / 無効。
     *
     * - `true`: 有効
     * - `false`: 無効
     *
     */
    gateOpened?: boolean;
    gatePrivacySeparatorEnabled?: boolean;
    /**
     * Gate の VXLAN ID。
     */
    gateVxlanId?: number;
    implicitTerminationProtected?: boolean;
    inspection?: JunctionInspectionConfiguration;
    /**
     * [Junction](/ja-jp/docs/junction/) の有効 / 無効。
     *
     * - `true`: Junction のミラーリング設定、インスペクション設定、リダイレクション設定のいずれかを利用している。
     * - `false`: Junction のミラーリング設定、インスペクション設定、リダイレクション設定を利用していない。
     *
     */
    junctionEnabled?: boolean;
    /**
     * VPG の更新日時 (UNIX 時間 (ミリ秒))。
     */
    lastModifiedTime?: number;
    mirroring?: {
        peers?: Record<string, JunctionMirroringPeer>;
    };
    offsetId?: number;
    /**
     * オペレーター ID。
     */
    operatorId?: string;
    placement?: Placement;
    /**
     * (非推奨) このプロパティは使用されていません。
     */
    primaryServiceName?: string;
    redirection?: JunctionRedirectionConfiguration;
    routingFilterEntries?: Array<RoutingFilterEntry>;
    sessionStats?: {
        /**
         * セッション数の集計日時 (UNIX 時間 (ミリ秒))。
         */
        lastUpdatedAt?: number;
        /**
         * VPG を利用する IoT SIM とバーチャル SIM/Subscriber のうち、セッションが "オンライン" になっている IoT SIM とバーチャル SIM/Subscriber の数。なお、オンラインのセッション数は定期的に集計しているため、リアルタイムの数値ではありません。この数値が更新された日時は、lastUpdatedAt で確認できます。
         */
        online?: number;
    };
    simBasedRoutingConfig?: Record<string, string>;
    /**
     * (非推奨) このプロパティは使用されていません。
     */
    size?: string;
    soracomTransitGateway?: SoracomTransitGateway;
    /**
     * VPG に関連付けられた Transit Gateway ピアリング接続のマップ。
     */
    soracomTransitGatewayPeeringConnections?: Record<string, TransitGatewayPeeringConnection>;
    /**
     * VPG に関連する Transit Gateway VPC アタッチメントのマップ。
     */
    soracomTransitGatewayVpcAttachments?: Record<string, TransitGatewayVpcAttachment>;
    /**
     * VPG の状態。
     *
     * - `running`: 実行中。
     *
     */
    status?: VirtualPrivateGateway.status;
    tags?: TagSet;
    transitGatewayAttachments?: Record<string, TransitGatewayAttachment>;
    /**
     * VPG のタイプ
     *
     * - `12`: Type-C
     * - `13`: Type-D
     * - `14`: Type-E
     * - `15`: Type-F
     * - `242`: Type-F2
     *
     */
    type?: VirtualPrivateGateway.type;
    /**
     * デバイスサブネット IP アドレスレンジ。
     */
    ueSubnetCidrRange?: string;
    /**
     * インターネットゲートウェイの ON/OFF。
     *
     * - `true`: "ON"
     * - `false`: OFF
     *
     */
    useInternetGateway?: boolean;
    /**
     * [Direct](/ja-jp/docs/direct/) の設定。
     */
    virtualInterfaces?: Record<string, string>;
    /**
     * [Canal](/ja-jp/docs/canal/) の Amazon VPC ピアリング接続の設定。
     */
    vpcPeeringConnections?: Record<string, string>;
    /**
     * VPG ID。
     */
    vpgId?: string;
    /**
     * VPG に割り当てられる IP アドレスの範囲です。SORACOM Door または SORACOM Direct を利用する際に必要です。
     */
    vpgSubnetCidrRange?: string;
    vpnConnections?: Record<string, VpnConnection>;
};
export namespace VirtualPrivateGateway {
    /**
     * VPG の状態。
     *
     * - `running`: 実行中。
     *
     */
    export enum status {
        RUNNING = 'running',
    }
    /**
     * VPG のタイプ
     *
     * - `12`: Type-C
     * - `13`: Type-D
     * - `14`: Type-E
     * - `15`: Type-F
     * - `242`: Type-F2
     *
     */
    export enum type {
        '_12' = 12,
        '_13' = 13,
        '_14' = 14,
        '_15' = 15,
        '_242' = 242,
    }
}

