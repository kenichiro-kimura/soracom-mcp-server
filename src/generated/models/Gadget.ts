/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Gadget = {
    attributes?: {
        /**
         * SORACOM LTE-M Button powered by AWS の有効期限。
         */
        contractEndingTime?: string;
        /**
         * SORACOM LTE-M Button powered by AWS を初めてクリックした日時。
         */
        firstClickTimestamp?: string;
        /**
         * SORACOM LTE-M Button powered by AWS の残りクリック回数。
         */
        remainingCount?: number;
        /**
         * ソラカメ専用セルラーパックの課金開始日。
         */
        wimaxBillingStartDate?: string;
        /**
         * ソラカメ専用セルラーパックに含まれる au IC カードの ICCID (Integrated Circuit Card ID)。au IC カードを識別するための識別子。
         */
        wimaxIccid?: string;
        /**
         * ソラカメ専用セルラーパックに含まれる Speed Wi-Fi HOME 5G L11 の [IMEI (International Mobile Equipment Identity)](/ja-jp/resources/glossary/#imei-international-mobile-equipment-identity)。
         */
        wimaxImei?: string;
    };
    /**
     * Gadget API 対応デバイスを登録した UNIX 時間 (ミリ秒)。
     */
    createdTime?: number;
    /**
     * Gadget API 対応デバイスの ID。
     */
    id?: string;
    /**
     * Gadget API 対応デバイスの情報が変更された UNIX 時間 (ミリ秒)。
     */
    lastModifiedTime?: number;
    lastSeen?: {
        /**
         * SORACOM LTE-M Button powered by AWS のバッテリーレベル。
         */
        batteryLevel?: number;
        clickEventPropagated?: boolean;
        /**
         * SORACOM LTE-M Button powered by AWS をクリックした日時。
         */
        clickTime?: string;
        clickType?: Gadget.clickType;
    };
    /**
     * Gadget API 対応デバイスを登録したオペレーター ID。
     */
    operatorId?: string;
    /**
     * Gadget API 対応デバイスのタイプ。
     *
     * - `button`: SORACOM LTE-M Button powered by AWS。
     * - `wimax`: ソラカメ専用セルラーパック。
     *
     */
    productId?: Gadget.productId;
    /**
     * Gadget API 対応デバイスのシリアル番号。
     */
    serialNumber?: string;
    /**
     * Gadget API 対応デバイスの契約状態。
     *
     * - `active`: 契約中。
     * - `terminated`: 解約済み。
     *
     */
    status?: Gadget.status;
    /**
     * タグ
     */
    tags?: Record<string, string>;
    /**
     * Gadget API 対応デバイスの解約日時。解約していない場合は `null` です。
     */
    terminatedTime?: number;
    /**
     * Gadget API 対応デバイスの解約プロテクション。
     *
     * - `true`: OFF (解約できる)。
     * - `false`: ON (解約できない)。
     *
     */
    terminationEnabled?: boolean;
};
export namespace Gadget {
    export enum clickType {
        SINGLE = 'SINGLE',
        DOUBLE = 'DOUBLE',
    }
    /**
     * Gadget API 対応デバイスのタイプ。
     *
     * - `button`: SORACOM LTE-M Button powered by AWS。
     * - `wimax`: ソラカメ専用セルラーパック。
     *
     */
    export enum productId {
        BUTTON = 'button',
        WIMAX = 'wimax',
    }
    /**
     * Gadget API 対応デバイスの契約状態。
     *
     * - `active`: 契約中。
     * - `terminated`: 解約済み。
     *
     */
    export enum status {
        ACTIVE = 'active',
        TERMINATED = 'terminated',
    }
}

