/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LogEntry = {
    /**
     * エラーログ。
     */
    body?: Record<string, any>;
    /**
     * ログレベル。
     */
    logLevel?: LogEntry.logLevel;
    /**
     * オペレーター ID。
     */
    operatorId?: string;
    /**
     * リソース ID。`resourceType` ごとに異なります。
     *
     * - `resourceType` が `Subscriber` の場合は、サブスクライバーの IMSI です。
     * - `resourceType` が `Device` の場合は、Inventory デバイスの ID です。
     * - `resourceType` が `LoraDevice` の場合は、LoRaWAN デバイスの ID です。
     * - `resourceType` が `SigfoxDevice` の場合は、Sigfox デバイスの ID です。
     *
     */
    resourceId?: string;
    /**
     * リソースタイプ。
     */
    resourceType?: LogEntry.resourceType;
    /**
     * エラーログを出力したサービス名。
     *
     * - `Air`: SORACOM Air
     * - `Beam`: SORACOM Beam
     * - `Funk`: SORACOM Funk
     * - `Funnel`: SORACOM Funnel
     * - `Harvest`: SORACOM Harvest Data/Files
     * - `Napter`: SORACOM Napter
     * - `Orbit`: SORACOM Orbit
     * - `Unified`: Unified Endpoint
     *
     */
    service?: LogEntry.service;
    /**
     * UNIX 時間 (ミリ秒)。
     */
    time?: number;
};
export namespace LogEntry {
    /**
     * ログレベル。
     */
    export enum logLevel {
        DEBUG = 'debug',
        ERROR = 'error',
        WARNING = 'warning',
        INFO = 'info',
    }
    /**
     * リソースタイプ。
     */
    export enum resourceType {
        SUBSCRIBER = 'Subscriber',
        DEVICE = 'Device',
        LORA_DEVICE = 'LoraDevice',
        SIGFOX_DEVICE = 'SigfoxDevice',
    }
    /**
     * エラーログを出力したサービス名。
     *
     * - `Air`: SORACOM Air
     * - `Beam`: SORACOM Beam
     * - `Funk`: SORACOM Funk
     * - `Funnel`: SORACOM Funnel
     * - `Harvest`: SORACOM Harvest Data/Files
     * - `Napter`: SORACOM Napter
     * - `Orbit`: SORACOM Orbit
     * - `Unified`: Unified Endpoint
     *
     */
    export enum service {
        AIR = 'Air',
        BEAM = 'Beam',
        FUNK = 'Funk',
        FUNNEL = 'Funnel',
        HARVEST = 'Harvest',
        NAPTER = 'Napter',
        ORBIT = 'Orbit',
        UNIFIED = 'Unified',
    }
}

