/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Capabilities } from './Capabilities';
export type SimplifiedSubscriber = {
    bundles?: Array<string>;
    capabilities?: Capabilities;
    /**
     * IMSI
     */
    imsi?: string;
    msisdn?: string;
    /**
     * IoT SIM (IoT SIM のプライマリサブスクリプション) のステータス、または追加サブスクリプションのステータス。
     *
     * プライマリサブスクリプションの場合は、IoT SIM のステータスです。
     *
     * - `ready`: 準備完了 (ready)。
     * - `active`: 使用中 (active)。
     * - `inactive`: 休止中 (inactive)。
     * - `standby`: 利用開始待ち (standby)。
     * - `suspended`: 利用中断中 (suspended)。
     * - `terminated`: 解約済み (terminated)。
     *
     * 追加サブスクリプションの場合は、追加サブスクリプションのステータスです。
     *
     * - `shipped`: OTA の準備完了、または OTA の実行中 (前半)。
     * - `delivered`: OTA の実行中 (後半)。
     * - `ready`: OTA が完了。
     * - `active`: 追加サブスクリプションによる接続が確認できました。IoT SIM のステータスではありません。
     * - `terminated`: 解約済み (terminated)。
     *
     * なお、バーチャル SIM/Subscriber のステータスは、`active` または `terminated` です。
     *
     */
    status?: SimplifiedSubscriber.status;
    subscription?: string;
};
export namespace SimplifiedSubscriber {
    /**
     * IoT SIM (IoT SIM のプライマリサブスクリプション) のステータス、または追加サブスクリプションのステータス。
     *
     * プライマリサブスクリプションの場合は、IoT SIM のステータスです。
     *
     * - `ready`: 準備完了 (ready)。
     * - `active`: 使用中 (active)。
     * - `inactive`: 休止中 (inactive)。
     * - `standby`: 利用開始待ち (standby)。
     * - `suspended`: 利用中断中 (suspended)。
     * - `terminated`: 解約済み (terminated)。
     *
     * 追加サブスクリプションの場合は、追加サブスクリプションのステータスです。
     *
     * - `shipped`: OTA の準備完了、または OTA の実行中 (前半)。
     * - `delivered`: OTA の実行中 (後半)。
     * - `ready`: OTA が完了。
     * - `active`: 追加サブスクリプションによる接続が確認できました。IoT SIM のステータスではありません。
     * - `terminated`: 解約済み (terminated)。
     *
     * なお、バーチャル SIM/Subscriber のステータスは、`active` または `terminated` です。
     *
     */
    export enum status {
        SHIPPED = 'shipped',
        DELIVERED = 'delivered',
        READY = 'ready',
        ACTIVE = 'active',
        TERMINATED = 'terminated',
    }
}

