/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SoraCamDeviceConfiguration } from './SoraCamDeviceConfiguration';
import type { SoraCamDeviceLicenseInfo } from './SoraCamDeviceLicenseInfo';
export type SoraCamDevice = {
    /**
     * ソラカメ対応カメラに適用されているライセンス。この情報は、[SoraCam:listSoraCamDevices API](#/SoraCam/listSoraCamDevices) を使用しても取得できません。[SoraCam:getSoraCamDevice API](#/SoraCam/getSoraCamDevice) を使用してください。
     *
     */
    appliedLicenses?: Array<SoraCamDeviceLicenseInfo>;
    /**
     * ソラカメ対応カメラの現在のコンフィグレーション
     */
    configuration?: SoraCamDeviceConfiguration;
    /**
     * ソラカメ対応カメラが現在クラウドに接続されているかどうか
     */
    connected?: boolean;
    /**
     * ソラカメ対応カメラの種類
     *
     * - `Camera`
     *
     */
    deviceCategory?: string;
    /**
     * ソラカメ対応カメラのデバイス ID
     */
    deviceId: string;
    /**
     * ソラカメ対応カメラの現在のファームウェアバージョン
     */
    firmwareVersion: string;
    isShared?: boolean;
    /**
     * ソラカメ対応カメラが最後にクラウドに接続した UNIX 時間 (ミリ秒)
     */
    lastConnectedTime?: number;
    /**
     * ソラカメ対応カメラの名前
     */
    name: string;
    powerState: SoraCamDevice.powerState;
    /**
     * ソラカメ対応カメラの製品名
     */
    productDisplayName: string;
};
export namespace SoraCamDevice {
    export enum powerState {
        ON = 'on',
        SLEEP = 'sleep',
    }
}

