/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * オンデマンドリモートアクセスを作成するときは、`imsi` または `simId` のいずれかを必ず指定してください。
 *
 */
export type PortMappingDestination = {
    /**
     * オンデマンドリモートアクセスが作成された方法を示す文字列。作成時は無視されます。
     *
     * - `AIR_PRIORITIZED`: SIM ID を指定し、`service` に `air` を指定して作成されたオンデマンドリモートアクセス。
     * - `ARC_PRIORITIZED`: SIM ID を指定し、`service` に `arc` を指定して作成されたオンデマンドリモートアクセス。
     * - `DYNAMIC`: SIM ID だけを指定して作成されたオンデマンドリモートアクセス。
     *
     * セッションがオンラインのサブスクライバーが、オンデマンドリモートアクセスを作成する対象となります。セッションがオンラインのサブスクライバーが複数ある場合、つまり SORACOM Air のセッションと SORACOM Arc のセッションが両方オンラインの場合は、どちらがオンデマンドリモートアクセス作成の対象となるかは保証されません。
     * - `IMSI_PRIORITIZED`: IMSI を指定して作成されたオンデマンドリモートアクセス。
     *
     */
    destinationChoosingStrategy?: PortMappingDestination.destinationChoosingStrategy;
    /**
     * 対象となる IMSI。オンデマンドリモートアクセスを作成する際、`simId` が指定されている場合は、`imsi` は無視されます。
     *
     */
    imsi?: string;
    /**
     * IoT SIM やバーチャル SIM/Subscriber を利用するデバイスで、接続を待ち受けているポート番号。
     */
    port: number;
    /**
     * オンデマンドリモートアクセスを作成する対象。`simId` が指定されているときに有効です。
     *
     * - `air`: セッションがオンラインの SORACOM Air のサブスクライバーを対象とする。
     * - `arc`: SORACOM Arc のバーチャル SIM/Subscriber を対象とする。
     *
     * **Warning**: `service` を省略した場合は、セッションがオンラインのサブスクライバーが、オンデマンドリモートアクセスを作成する対象となります。セッションがオンラインのサブスクライバーが複数ある場合 (SORACOM Air のセッションと SORACOM Arc のセッションが両方オンラインの場合) は、どちらがオンデマンドリモートアクセス作成の対象となるかは保証されません。`air` または `arc` を指定してください。
     *
     * **Warning**: オンデマンドリモートアクセスを作成するときに必要なプロパティです。レスポンスには含まれません。
     *
     */
    service?: PortMappingDestination.service;
    /**
     * 対象となる SIM ID。オンデマンドリモートアクセスを作成する際、`simId` を指定する場合は、`service` も指定してください。なお、`simId` が指定されている場合は、`imsi` は無視されます。
     *
     */
    simId?: string;
};
export namespace PortMappingDestination {
    /**
     * オンデマンドリモートアクセスが作成された方法を示す文字列。作成時は無視されます。
     *
     * - `AIR_PRIORITIZED`: SIM ID を指定し、`service` に `air` を指定して作成されたオンデマンドリモートアクセス。
     * - `ARC_PRIORITIZED`: SIM ID を指定し、`service` に `arc` を指定して作成されたオンデマンドリモートアクセス。
     * - `DYNAMIC`: SIM ID だけを指定して作成されたオンデマンドリモートアクセス。
     *
     * セッションがオンラインのサブスクライバーが、オンデマンドリモートアクセスを作成する対象となります。セッションがオンラインのサブスクライバーが複数ある場合、つまり SORACOM Air のセッションと SORACOM Arc のセッションが両方オンラインの場合は、どちらがオンデマンドリモートアクセス作成の対象となるかは保証されません。
     * - `IMSI_PRIORITIZED`: IMSI を指定して作成されたオンデマンドリモートアクセス。
     *
     */
    export enum destinationChoosingStrategy {
        AIR_PRIORITIZED = 'AIR_PRIORITIZED',
        ARC_PRIORITIZED = 'ARC_PRIORITIZED',
        DYNAMIC = 'DYNAMIC',
        IMSI_PRIORITIZED = 'IMSI_PRIORITIZED',
    }
    /**
     * オンデマンドリモートアクセスを作成する対象。`simId` が指定されているときに有効です。
     *
     * - `air`: セッションがオンラインの SORACOM Air のサブスクライバーを対象とする。
     * - `arc`: SORACOM Arc のバーチャル SIM/Subscriber を対象とする。
     *
     * **Warning**: `service` を省略した場合は、セッションがオンラインのサブスクライバーが、オンデマンドリモートアクセスを作成する対象となります。セッションがオンラインのサブスクライバーが複数ある場合 (SORACOM Air のセッションと SORACOM Arc のセッションが両方オンラインの場合) は、どちらがオンデマンドリモートアクセス作成の対象となるかは保証されません。`air` または `arc` を指定してください。
     *
     * **Warning**: オンデマンドリモートアクセスを作成するときに必要なプロパティです。レスポンスには含まれません。
     *
     */
    export enum service {
        AIR = 'air',
        ARC = 'arc',
    }
}

