/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 作成された eSIM プロファイル。
 */
export type OrderedSimProfileResponse = {
    /**
     * eSIM プロファイルのアクティベーションコード。デバイスに eSIM プロファイルをインストールするときに使用します。
     */
    activationCode: string;
    /**
     * eSIM プロファイルの作成日時 (UNIX 時間 (ミリ秒))。
     */
    createdTime: number;
    /**
     * eSIM プロファイルの ICCID。
     */
    iccid: string;
    /**
     * eSIM プロファイルの IMSI。
     */
    imsi: string;
    /**
     * eSIM プロファイルのインストール日時 (UNIX 時間 (ミリ秒))。
     */
    installedTime?: number;
    /**
     * eSIM プロファイルの最終更新日時 (UNIX 時間 (ミリ秒))。
     */
    lastModifiedTime: number;
    /**
     * eSIM プロファイルのマッチング ID。デバイスに eSIM プロファイルをインストールするときに使用します。
     */
    matchingId: string;
    /**
     * この eSIM プロファイルを発注した注文 ID。
     */
    profileOrderId: string;
    /**
     * eSIM プロファイルのステータス。
     *
     * - `SUBSCRIBER_REGISTRATION_SUCCEEDED`: eSIM プロファイルに対応する IoT SIM がオペレーターに登録された。
     * - `INSTALLATION_SUCCEEDED`: eSIM プロファイルがデバイスにインストールされたことが、デバイスから通知された。
     * - `INSTALLATION_FAILED`: eSIM プロファイルがデバイスにインストールできなかったことが、デバイスから通知された。
     * - `ACTIVATION_SUCCEEDED`: eSIM プロファイルがデバイスで有効化され、通信の準備ができたことが、デバイスから通知された。
     * - `ACTIVATION_FAILED`: eSIM プロファイルがデバイスで有効化できなかったことが、デバイスから通知された。
     * - `INACTIVATION_SUCCEEDED`: eSIM プロファイルがデバイスで無効化されたことが、デバイスから通知された。
     * - `INACTIVATION_FAILED`: eSIM プロファイルがデバイスで無効化できなかったことが、デバイスから通知された。
     * - `DELETION_SUCCEEDED`: eSIM プロファイルがデバイスから削除されたことが、デバイスから通知された。
     * - `DELETION_FAILED`: eSIM プロファイルがデバイスから削除できなかったことが、デバイスから通知された。
     *
     */
    profileStatus: OrderedSimProfileResponse.profileStatus;
    /**
     * eSIM プロファイルを提供する SM-DP+ サーバーのアドレス。デバイスに eSIM プロファイルをインストールするときに使用します。
     */
    smdpAddress: string;
    /**
     * eSIM プロファイルのサブスクリプション。以下のいずれかです。
     *
     * - `plan01s`
     * - `planP1`
     * - `planX1`
     * - `planX2`
     * - `planX3`
     * - `plan-US`
     *
     */
    subscription?: string;
};
export namespace OrderedSimProfileResponse {
    /**
     * eSIM プロファイルのステータス。
     *
     * - `SUBSCRIBER_REGISTRATION_SUCCEEDED`: eSIM プロファイルに対応する IoT SIM がオペレーターに登録された。
     * - `INSTALLATION_SUCCEEDED`: eSIM プロファイルがデバイスにインストールされたことが、デバイスから通知された。
     * - `INSTALLATION_FAILED`: eSIM プロファイルがデバイスにインストールできなかったことが、デバイスから通知された。
     * - `ACTIVATION_SUCCEEDED`: eSIM プロファイルがデバイスで有効化され、通信の準備ができたことが、デバイスから通知された。
     * - `ACTIVATION_FAILED`: eSIM プロファイルがデバイスで有効化できなかったことが、デバイスから通知された。
     * - `INACTIVATION_SUCCEEDED`: eSIM プロファイルがデバイスで無効化されたことが、デバイスから通知された。
     * - `INACTIVATION_FAILED`: eSIM プロファイルがデバイスで無効化できなかったことが、デバイスから通知された。
     * - `DELETION_SUCCEEDED`: eSIM プロファイルがデバイスから削除されたことが、デバイスから通知された。
     * - `DELETION_FAILED`: eSIM プロファイルがデバイスから削除できなかったことが、デバイスから通知された。
     *
     */
    export enum profileStatus {
        SUBSCRIBER_REGISTRATION_SUCCEEDED = 'SUBSCRIBER_REGISTRATION_SUCCEEDED',
        INSTALLATION_SUCCEEDED = 'INSTALLATION_SUCCEEDED',
        INSTALLATION_FAILED = 'INSTALLATION_FAILED',
        ACTIVATION_SUCCEEDED = 'ACTIVATION_SUCCEEDED',
        ACTIVATION_FAILED = 'ACTIVATION_FAILED',
        INACTIVATION_SUCCEEDED = 'INACTIVATION_SUCCEEDED',
        INACTIVATION_FAILED = 'INACTIVATION_FAILED',
        DELETION_SUCCEEDED = 'DELETION_SUCCEEDED',
        DELETION_FAILED = 'DELETION_FAILED',
    }
}

