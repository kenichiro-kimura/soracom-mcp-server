/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PortMappingDestination } from './PortMappingDestination';
import type { PortMappingSource } from './PortMappingSource';
export type PortMapping = {
    /**
     * オンデマンドリモートアクセスが作成された UNIX 時間 (ミリ秒)。
     */
    createdTime?: number;
    destination?: PortMappingDestination;
    /**
     * オンデマンドリモートアクセスを維持する時間 (リモートアクセスを許可する時間) (秒)。
     */
    duration?: number;
    /**
     * オンデマンドリモートアクセスのエンドポイント (IP アドレスとポート番号)。
     */
    endpoint?: string;
    expired?: boolean;
    /**
     * オンデマンドリモートアクセスが自動的に削除される日時 (UNIX 時間 (ミリ秒))。
     */
    expiredTime?: number;
    /**
     * オンデマンドリモートアクセスのホスト名。
     */
    hostname?: string;
    /**
     * IMSI。`destination.destinationChoosingStrategy` が `IMSI_PRIORITIZED` の場合にのみ含まれます。
     *
     */
    imsi?: string;
    /**
     * オンデマンドリモートアクセスの IP アドレス。
     */
    ipAddress?: string;
    /**
     * オペレーター ID。
     */
    operatorId?: string;
    /**
     * ランデブーポイント。
     *
     * - `default`: デフォルトのランデブーポイント。日本カバレッジの場合は東京 (日本)、グローバルカバレッジの場合はフランクフルト (ドイツ) です。
     * - `aws:ap-northeast-1`: 東京 (日本)。
     * - `aws:eu-central-1`: フランクフルト (ドイツ)。
     * - `aws:us-west-2`: オレゴン (米国)。
     * - `aws:ap-southeast-2`: シドニー (オーストラリア)。
     *
     */
    placement?: string;
    /**
     * オンデマンドリモートアクセスのポート番号。
     */
    port?: number;
    /**
     * SIM ID。`destination.destinationChoosingStrategy` が `IMSI_PRIORITIZED` 以外の場合にのみ含まれます。
     *
     */
    simId?: string;
    source?: PortMappingSource;
    /**
     * アクセス元から SORACOM までを TLS で暗号化するかどうか。
     *
     * - `true`: TLS を使用して暗号化する。
     *
     * デバイスで HTTP で待ち受けている場合は、`true` を指定します。
     * - `false`: TLS を使用しない。
     *
     * デバイスに SSH 接続する場合や、デバイスで HTTPS で待ち受けている場合は、`false` を指定します。なお、SSH や HTTPS では、アクセス元からデバイスまでの通信は暗号化されています。
     *
     */
    tlsRequired?: boolean;
};

