/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EstimatedOrderItemModel } from './EstimatedOrderItemModel';
import type { ResourceInitialSetting } from './ResourceInitialSetting';
import type { ShippingAddressModel } from './ShippingAddressModel';
import type { ShippingLabelDetail } from './ShippingLabelDetail';
export type GetOrderResponse = {
    /**
     * 適用済み配送オプション。
     */
    appliedShippingOptions?: Array<Record<string, any>>;
    /**
     * 差引請求額。
     */
    balanceDue?: number;
    containsTaxIncludedAmounts?: boolean;
    /**
     * 通貨。
     */
    currency?: GetOrderResponse.currency;
    /**
     * メールアドレス。
     */
    email?: string;
    /**
     * 発注チャンネル。
     */
    orderChannel?: string;
    /**
     * 発注日時 (yyyyMMddHHmmss)。
     */
    orderDateTime?: string;
    /**
     * 発注 ID。
     */
    orderId?: string;
    /**
     * 発注商品リスト。
     */
    orderItemList?: Array<EstimatedOrderItemModel>;
    /**
     * 発注ステータス。
     */
    orderStatus?: GetOrderResponse.orderStatus;
    /**
     * お支払い状況。詳しくは、FAQ: [ご利用料金のお支払状況について](https://support.soracom.io/hc/ja/articles/360029337031) を参照してください。
     *
     * - `lessThanMinimumCharge`: 翌月以降請求 (最低課金額に満たないため)。
     * - `paying`: 支払い処理中。
     * - `paid`: 支払い済み。
     * - `fail`: 処理失敗。
     * - `refunding`: リファンド処理中。
     * - `refunded`: リファンド済み。
     * - `refund_fail`: リファンド処理失敗。
     * - `delegating_to_third_party`: 債権譲渡中。
     * - `delegated_to_third_party`: 債権譲渡済み。
     * - `charging`: 請求実施中。
     * - `canceling`: キャンセル中。
     * - `cancelled`: キャンセル済み。
     * - `cancel_failed`: キャンセル処理失敗。
     *
     */
    paymentStatus?: GetOrderResponse.paymentStatus;
    /**
     * 希望納品日。
     */
    preferredDeliveryDate?: string;
    /**
     * 注文番号。
     */
    purchaseOrderNumber?: string;
    resourceInitialSetting?: ResourceInitialSetting;
    shippingAddress?: ShippingAddressModel;
    /**
     * 商品発送先 ID。
     */
    shippingAddressId?: string;
    /**
     * 配送料。
     */
    shippingCost?: number;
    /**
     * 発送日時 (yyyyMMddHHmmss)。
     */
    shippingDateTime?: string;
    /**
     * 配送業者の追跡情報。
     */
    shippingLabelDetails?: Array<ShippingLabelDetail>;
    /**
     * 配送業者の伝票番号 (代表)。
     */
    shippingLabelNumber?: string;
    /**
     * 配送業者の伝票番号。
     */
    shippingLabelNumbers?: Array<string>;
    /**
     * 税額。
     */
    taxAmount?: number;
    /**
     * 送料に含まれる税額。
     */
    taxIncludedInShippingCost?: number;
    /**
     * 配送料の課税有無。
     */
    taxOnShippingCost?: boolean;
    /**
     * 合計額 (税込)。
     */
    totalAmount?: number;
    /**
     * 源泉徴収税額。
     */
    withholdingTaxAmount?: number;
};
export namespace GetOrderResponse {
    /**
     * 通貨。
     */
    export enum currency {
        JPY = 'JPY',
        USD = 'USD',
        EUR = 'EUR',
    }
    /**
     * 発注ステータス。
     */
    export enum orderStatus {
        ORDERING = 'ordering',
        ORDERED = 'ordered',
        KITTING = 'kitting',
        SHIPPED = 'shipped',
        RECEIVED = 'received',
        CANCELLING = 'cancelling',
        CANCELLED = 'cancelled',
        FAILED = 'failed',
    }
    /**
     * お支払い状況。詳しくは、FAQ: [ご利用料金のお支払状況について](https://support.soracom.io/hc/ja/articles/360029337031) を参照してください。
     *
     * - `lessThanMinimumCharge`: 翌月以降請求 (最低課金額に満たないため)。
     * - `paying`: 支払い処理中。
     * - `paid`: 支払い済み。
     * - `fail`: 処理失敗。
     * - `refunding`: リファンド処理中。
     * - `refunded`: リファンド済み。
     * - `refund_fail`: リファンド処理失敗。
     * - `delegating_to_third_party`: 債権譲渡中。
     * - `delegated_to_third_party`: 債権譲渡済み。
     * - `charging`: 請求実施中。
     * - `canceling`: キャンセル中。
     * - `cancelled`: キャンセル済み。
     * - `cancel_failed`: キャンセル処理失敗。
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
}

