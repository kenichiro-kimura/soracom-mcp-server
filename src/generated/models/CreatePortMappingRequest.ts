/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PortMappingDestination } from './PortMappingDestination';
import type { PortMappingSource } from './PortMappingSource';
export type CreatePortMappingRequest = {
    destination: PortMappingDestination;
    /**
     * オンデマンドリモートアクセスを維持する時間 (リモートアクセスを許可する時間) (秒)。指定した時間を経過すると、オンデマンドリモートアクセスが自動的に削除されます。最大で 8 時間です。
     *
     */
    duration?: number;
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

