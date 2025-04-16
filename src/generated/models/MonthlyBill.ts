/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MonthlyBill = {
    /**
     * 利用料金
     */
    amount?: number;
    /**
     * クーポン適用金額
     */
    appliedCouponAmount?: number;
    /**
     * 通貨
     */
    currency?: MonthlyBill.currency;
    /**
     * お支払い状況。詳しくは、FAQ: [ご利用料金のお支払状況について](https://support.soracom.io/hc/ja/articles/360029337031) を参照してください。
     *
     * - `lessThanMinimumCharge`: 翌月以降請求 (最低課金額に満たないため)
     * - `paying`: 支払い処理中
     * - `paid`: 支払い済み
     * - `fail`: 処理失敗
     * - `refunding`: リファンド処理中
     * - `refunded`: リファンド済み
     * - `refund_fail`: リファンド処理失敗
     * - `delegating_to_third_party`: 債権譲渡中
     * - `delegated_to_third_party`: 債権譲渡済み
     * - `charging`: 請求実施中
     * - `canceling`: キャンセル中
     * - `cancelled`: キャンセル済み
     * - `cancel_failed`: キャンセル処理失敗
     *
     */
    paymentStatus?: MonthlyBill.paymentStatus;
    /**
     * 課金処理 ID。この ID を指定して [Payment:getPaymentTransaction API](#/Payment/getPaymentTransaction) を呼び出すと課金詳細が取得できます。
     */
    paymentTransactionId?: string;
    /**
     * 利用料金の集計状況
     *
     * - `temporary`: 集計中
     * - `closed`: 確定済み
     *
     */
    state?: MonthlyBill.state;
    /**
     * 年月
     */
    yearMonth?: string;
};
export namespace MonthlyBill {
    /**
     * 通貨
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
    /**
     * お支払い状況。詳しくは、FAQ: [ご利用料金のお支払状況について](https://support.soracom.io/hc/ja/articles/360029337031) を参照してください。
     *
     * - `lessThanMinimumCharge`: 翌月以降請求 (最低課金額に満たないため)
     * - `paying`: 支払い処理中
     * - `paid`: 支払い済み
     * - `fail`: 処理失敗
     * - `refunding`: リファンド処理中
     * - `refunded`: リファンド済み
     * - `refund_fail`: リファンド処理失敗
     * - `delegating_to_third_party`: 債権譲渡中
     * - `delegated_to_third_party`: 債権譲渡済み
     * - `charging`: 請求実施中
     * - `canceling`: キャンセル中
     * - `cancelled`: キャンセル済み
     * - `cancel_failed`: キャンセル処理失敗
     *
     */
    export enum paymentStatus {
        LESS_THAN_MINIMUM_CHARGE = 'lessThanMinimumCharge',
        PAYING = 'paying',
        PAID = 'paid',
        FAIL = 'fail',
        REFUNDING = 'refunding',
        REFUNDED = 'refunded',
        REFUND_FAIL = 'refund_fail',
        DELEGATING_TO_THIRD_PARTY = 'delegating_to_third_party',
        DELEGATED_TO_THIRD_PARTY = 'delegated_to_third_party',
        CHARGING = 'charging',
        CANCELING = 'canceling',
        CANCELLED = 'cancelled',
        CANCEL_FAILED = 'cancel_failed',
    }
    /**
     * 利用料金の集計状況
     *
     * - `temporary`: 集計中
     * - `closed`: 確定済み
     *
     */
    export enum state {
        TEMPORARY = 'temporary',
        CLOSED = 'closed',
    }
}

