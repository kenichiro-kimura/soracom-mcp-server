/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RuleConfigProperty } from './RuleConfigProperty';
export type RuleConfig = {
    properties: RuleConfigProperty;
    /**
     * ルールの種類。以下のいずれかを設定します。種類によって、`properties` で指定できる値は異なります。
     *
     * - `SubscriberFirstTrafficRule`: サブスクライバーのデータ通信量が初めて記録されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `inactiveTimeoutDateConst` (必須)
     * - `SubscriberDailyTrafficRule`: サブスクライバーの日次データ通信量が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `SubscriberMonthlyTrafficRule`: サブスクライバーの月次データ通信量が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `SubscriberCumulativeTrafficRule`: サブスクライバーの利用開始からの累積データ通信量が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `SubscriberStatusAttributeRule`: サブスクライバーのステータスが変更されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `sourceStatus`
     * - `targetStatus`
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinute`
     * - `runOnceAmongTarget`
     * - `SimStatusAttributeRule`: IoT SIM のステータスが変更されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `sourceStatus`
     * - `targetStatus`
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinute`
     * - `runOnceAmongTarget`
     * - `SubscriberSpeedClassAttributeRule`: サブスクライバーの速度クラスが変更されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `targetSpeedClass`
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimSpeedClassAttributeRule`: IoT SIM の速度クラスが変更されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `targetSpeedClass`
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SubscriberExpiredRule`: サブスクライバーの有効期限が切れたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimExpiredRule`: IoT SIM の有効期限が切れたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SubscriberImeiMismatchedRule`: サブスクライバーが IMEI ロックにより接続失敗したら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimImeiMismatchedRule`: IoT SIM が IMEI ロックにより接続失敗したら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimDailyTotalTrafficRule`: IoT SIM に紐づく全サブスクライバーの「日次データ通信量」の合計が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimMonthlyTotalTrafficRule`: IoT SIM に紐づく全サブスクライバーの月次データ通信量合計が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimCumulativeTotalTrafficRule`: IoT SIM に紐づく全サブスクライバーの利用開始からの累積データ通信量合計が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimSubscriptionStatusRule`: IoT SIM にサブスクリプションが追加されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `targetOtaStatus`
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `DailyTotalTrafficRule`: グループ / オペレーターに紐づく全 IoT SIM の日次データ通信量合計が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `MonthlyTotalTrafficRule`: グループ / オペレーターに紐づく全 IoT SIM の月次データ通信量合計が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `MonthlyChargeRule`: 今月の利用料金が設定金額を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalAmount` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     *
     */
    type: RuleConfig.type;
};
export namespace RuleConfig {
    /**
     * ルールの種類。以下のいずれかを設定します。種類によって、`properties` で指定できる値は異なります。
     *
     * - `SubscriberFirstTrafficRule`: サブスクライバーのデータ通信量が初めて記録されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `inactiveTimeoutDateConst` (必須)
     * - `SubscriberDailyTrafficRule`: サブスクライバーの日次データ通信量が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `SubscriberMonthlyTrafficRule`: サブスクライバーの月次データ通信量が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `SubscriberCumulativeTrafficRule`: サブスクライバーの利用開始からの累積データ通信量が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `SubscriberStatusAttributeRule`: サブスクライバーのステータスが変更されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `sourceStatus`
     * - `targetStatus`
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinute`
     * - `runOnceAmongTarget`
     * - `SimStatusAttributeRule`: IoT SIM のステータスが変更されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `sourceStatus`
     * - `targetStatus`
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinute`
     * - `runOnceAmongTarget`
     * - `SubscriberSpeedClassAttributeRule`: サブスクライバーの速度クラスが変更されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `targetSpeedClass`
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimSpeedClassAttributeRule`: IoT SIM の速度クラスが変更されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `targetSpeedClass`
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SubscriberExpiredRule`: サブスクライバーの有効期限が切れたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimExpiredRule`: IoT SIM の有効期限が切れたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SubscriberImeiMismatchedRule`: サブスクライバーが IMEI ロックにより接続失敗したら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimImeiMismatchedRule`: IoT SIM が IMEI ロックにより接続失敗したら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimDailyTotalTrafficRule`: IoT SIM に紐づく全サブスクライバーの「日次データ通信量」の合計が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimMonthlyTotalTrafficRule`: IoT SIM に紐づく全サブスクライバーの月次データ通信量合計が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimCumulativeTotalTrafficRule`: IoT SIM に紐づく全サブスクライバーの利用開始からの累積データ通信量合計が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `SimSubscriptionStatusRule`: IoT SIM にサブスクリプションが追加されたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `targetOtaStatus`
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `DailyTotalTrafficRule`: グループ / オペレーターに紐づく全 IoT SIM の日次データ通信量合計が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `MonthlyTotalTrafficRule`: グループ / オペレーターに紐づく全 IoT SIM の月次データ通信量合計が一定を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalTrafficMegaByte` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     * - `runOnceAmongTarget`
     * - `MonthlyChargeRule`: 今月の利用料金が設定金額を超えたら実行する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `limitTotalAmount` (必須)
     * - `inactiveTimeoutDateConst` (必須)
     * - `inactiveTimeoutOffsetMinutes`
     *
     */
    export enum type {
        SUBSCRIBER_FIRST_TRAFFIC_RULE = 'SubscriberFirstTrafficRule',
        SUBSCRIBER_DAILY_TRAFFIC_RULE = 'SubscriberDailyTrafficRule',
        SUBSCRIBER_MONTHLY_TRAFFIC_RULE = 'SubscriberMonthlyTrafficRule',
        SUBSCRIBER_CUMULATIVE_TRAFFIC_RULE = 'SubscriberCumulativeTrafficRule',
        SUBSCRIBER_STATUS_ATTRIBUTE_RULE = 'SubscriberStatusAttributeRule',
        SIM_STATUS_ATTRIBUTE_RULE = 'SimStatusAttributeRule',
        SUBSCRIBER_SPEED_CLASS_ATTRIBUTE_RULE = 'SubscriberSpeedClassAttributeRule',
        SIM_SPEED_CLASS_ATTRIBUTE_RULE = 'SimSpeedClassAttributeRule',
        SUBSCRIBER_EXPIRED_RULE = 'SubscriberExpiredRule',
        SIM_EXPIRED_RULE = 'SimExpiredRule',
        SUBSCRIBER_IMEI_MISMATCHED_RULE = 'SubscriberImeiMismatchedRule',
        SIM_IMEI_MISMATCHED_RULE = 'SimImeiMismatchedRule',
        SIM_DAILY_TOTAL_TRAFFIC_RULE = 'SimDailyTotalTrafficRule',
        SIM_MONTHLY_TOTAL_TRAFFIC_RULE = 'SimMonthlyTotalTrafficRule',
        SIM_CUMULATIVE_TOTAL_TRAFFIC_RULE = 'SimCumulativeTotalTrafficRule',
        SIM_SUBSCRIPTION_STATUS_RULE = 'SimSubscriptionStatusRule',
        DAILY_TOTAL_TRAFFIC_RULE = 'DailyTotalTrafficRule',
        MONTHLY_TOTAL_TRAFFIC_RULE = 'MonthlyTotalTrafficRule',
        MONTHLY_CHARGE_RULE = 'MonthlyChargeRule',
    }
}

