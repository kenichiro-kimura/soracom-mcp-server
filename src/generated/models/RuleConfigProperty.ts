/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RuleConfigProperty = {
    /**
     * [再評価を行うタイミング](/ja-jp/docs/event-handler/how-it-works/#再評価を行うタイミング)。以下のいずれかを指定します。ただし、`type` の値によって指定できる値が異なります。
     *
     * - `type` が `SubscriberDailyTrafficRule`、`SubscriberMonthlyTrafficRule`、`SubscriberCumulativeTrafficRule` (*1)、`SimDailyTotalTrafficRule`、`SimMonthlyTotalTrafficRule`、`SimCumulativeTotalTrafficRule` (*1)、`SimSubscriptionStatusRule`、`DailyTotalTrafficRule`、`MonthlyTotalTrafficRule` の場合:
     * - `BEGINNING_OF_NEXT_MONTH`
     * - `BEGINNING_OF_NEXT_DAY`
     * - `AFTER_ONE_DAY`
     * - `NEVER`
     *
     * (*1) 累積データ通信量はリセットされないため、しきい値を超えたあとは、再評価を行うタイミングで繰り返しアクションが実行されます。
     * - `type` が `SubscriberFirstTrafficRule` の場合:
     * - `NEVER`
     * - `type` が `SubscriberStatusAttributeRule`、`SubscriberSpeedClassAttributeRule`、`SubscriberExpiredRule`、`SubscriberImeiMismatchedRule`、`SimStatusAttributeRule`、`SimSpeedClassAttributeRule`、`SimExpiredRule`、`SimImeiMismatchedRule`、`MonthlyChargeRule` の場合:
     * - `IMMEDIATELY`
     * - `BEGINNING_OF_NEXT_MONTH`
     * - `BEGINNING_OF_NEXT_DAY`
     * - `AFTER_ONE_DAY`
     * - `NEVER`
     *
     */
    inactiveTimeoutDateConst: RuleConfigProperty.inactiveTimeoutDateConst;
    /**
     * [ルールを再評価するときのオフセット (分)](/ja-jp/docs/event-handler/how-it-works/#ルールを再評価するときのオフセット-分)。デフォルトは `0` です。`0`～`525600` の整数を String 型で指定します。
     *
     * `inactiveTimeoutDateConst` に `NEVER` を指定した場合は、`inactiveTimeoutOffsetMinutes` は指定できません。
     *
     */
    inactiveTimeoutOffsetMinutes?: string;
    /**
     * 「オペレーターの今月の利用料金」のしきい値。単位は円 (日本カバレッジの場合)、または USD (グローバルカバレッジの場合) です。`1`～`2147483647` の整数を String 型で指定します。
     *
     */
    limitTotalAmount?: string;
    /**
     * データ通信量のしきい値。単位は MiB です。`1`～`2147483647` の整数を String 型で指定します。
     *
     */
    limitTotalTrafficMegaByte?: string;
    /**
     * [再評価を行うタイミングまで再実行しない](/ja-jp/docs/event-handler/how-it-works/#再評価を行うタイミングまで再実行しない)。
     *
     */
    runOnceAmongTarget?: string;
    /**
     * 変更前の IoT SIM のステータス。変更前のステータスを限定して、アクションを実行するときに以下のいずれかを指定します。省略すると、任意のステータスから変更されたときに、アクションが実行されます。
     *
     * - `ready`: 準備完了 (ready)。
     * - `active`: 使用中 (active)。
     * - `inactive`: 休止中 (inactive)。
     * - `standby`: 利用開始待ち (standby)。
     * - `suspended`: 利用中断中 (suspended)。
     *
     * `sourceStatus` と `targetStatus` の両方を省略すると、IoT SIM のステータスに関わらず、IoT SIM のステータスが変更されたときに、アクションが実行されます。
     *
     */
    sourceStatus?: RuleConfigProperty.sourceStatus;
    /**
     * 変化後の OTA の状況。OTA の状況を限定して、アクションを実行するときに指定します。
     *
     * - (省略): 任意の状況に変わったときにアクションが実行されます。
     * - `started`: OTA が開始されたときにアクションが実行されます。
     * - `finished`: OTA が成功したときにアクションが実行されます。
     * - `failed`: OTA が失敗したときにアクションが実行されます。
     *
     */
    targetOtaStatus?: RuleConfigProperty.targetOtaStatus;
    /**
     * 変更後の速度クラス。変更後の速度クラスを限定して、アクションを実行するときに以下のいずれかを指定します。省略すると、任意の速度クラスに変更されたときに、アクションが実行されます。
     *
     * - plan01s、plan01s - Low Data Volume、planX3 X3-5MB、planP1、plan-D (バンドルなし)、plan-D D-300MB、plan-K2 K2-300MB、plan-K の場合:
     * - `s1.minimum`
     * - `s1.slow`
     * - `s1.standard`
     * - `s1.fast`
     * - `s1.4xfast`
     * - plan-US の場合:
     * - `s1.minimum`
     * - `s1.slow`
     * - `s1.standard`
     * - `s1.fast`
     * - `s1.4xfast`
     * - `s1.8xfast`
     * - plan-DU の場合:
     * - `u1.standard`
     * - `u1.slow`
     *
     * **Warning**: plan-KM1 およびバーチャル SIM/Subscriber は、速度クラスが 1 種類のため変更できません。
     *
     */
    targetSpeedClass?: RuleConfigProperty.targetSpeedClass;
    /**
     * 変更後の IoT SIM のステータス。変更後のステータスを限定して、アクションを実行するときに以下のいずれかを指定します。省略すると、任意のステータスに変更されたときに、アクションが実行されます。
     *
     * - `ready`: 準備完了 (ready)。
     * - `active`: 使用中 (active)。
     * - `inactive`: 休止中 (inactive)。
     * - `standby`: 利用開始待ち (standby)。
     * - `suspended`: 利用中断中 (suspended)。
     * - `terminated`: 解約済み (terminated)。
     *
     * `sourceStatus` と `targetStatus` の両方を省略すると、IoT SIM のステータスに関わらず、IoT SIM のステータスが変更されたときに、アクションが実行されます。
     *
     */
    targetStatus?: RuleConfigProperty.targetStatus;
};
export namespace RuleConfigProperty {
    /**
     * [再評価を行うタイミング](/ja-jp/docs/event-handler/how-it-works/#再評価を行うタイミング)。以下のいずれかを指定します。ただし、`type` の値によって指定できる値が異なります。
     *
     * - `type` が `SubscriberDailyTrafficRule`、`SubscriberMonthlyTrafficRule`、`SubscriberCumulativeTrafficRule` (*1)、`SimDailyTotalTrafficRule`、`SimMonthlyTotalTrafficRule`、`SimCumulativeTotalTrafficRule` (*1)、`SimSubscriptionStatusRule`、`DailyTotalTrafficRule`、`MonthlyTotalTrafficRule` の場合:
     * - `BEGINNING_OF_NEXT_MONTH`
     * - `BEGINNING_OF_NEXT_DAY`
     * - `AFTER_ONE_DAY`
     * - `NEVER`
     *
     * (*1) 累積データ通信量はリセットされないため、しきい値を超えたあとは、再評価を行うタイミングで繰り返しアクションが実行されます。
     * - `type` が `SubscriberFirstTrafficRule` の場合:
     * - `NEVER`
     * - `type` が `SubscriberStatusAttributeRule`、`SubscriberSpeedClassAttributeRule`、`SubscriberExpiredRule`、`SubscriberImeiMismatchedRule`、`SimStatusAttributeRule`、`SimSpeedClassAttributeRule`、`SimExpiredRule`、`SimImeiMismatchedRule`、`MonthlyChargeRule` の場合:
     * - `IMMEDIATELY`
     * - `BEGINNING_OF_NEXT_MONTH`
     * - `BEGINNING_OF_NEXT_DAY`
     * - `AFTER_ONE_DAY`
     * - `NEVER`
     *
     */
    export enum inactiveTimeoutDateConst {
        IMMEDIATELY = 'IMMEDIATELY',
        BEGINNING_OF_NEXT_MONTH = 'BEGINNING_OF_NEXT_MONTH',
        BEGINNING_OF_NEXT_DAY = 'BEGINNING_OF_NEXT_DAY',
        AFTER_ONE_DAY = 'AFTER_ONE_DAY',
        NEVER = 'NEVER',
    }
    /**
     * 変更前の IoT SIM のステータス。変更前のステータスを限定して、アクションを実行するときに以下のいずれかを指定します。省略すると、任意のステータスから変更されたときに、アクションが実行されます。
     *
     * - `ready`: 準備完了 (ready)。
     * - `active`: 使用中 (active)。
     * - `inactive`: 休止中 (inactive)。
     * - `standby`: 利用開始待ち (standby)。
     * - `suspended`: 利用中断中 (suspended)。
     *
     * `sourceStatus` と `targetStatus` の両方を省略すると、IoT SIM のステータスに関わらず、IoT SIM のステータスが変更されたときに、アクションが実行されます。
     *
     */
    export enum sourceStatus {
        READY = 'ready',
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        STANDBY = 'standby',
        SUSPENDED = 'suspended',
    }
    /**
     * 変化後の OTA の状況。OTA の状況を限定して、アクションを実行するときに指定します。
     *
     * - (省略): 任意の状況に変わったときにアクションが実行されます。
     * - `started`: OTA が開始されたときにアクションが実行されます。
     * - `finished`: OTA が成功したときにアクションが実行されます。
     * - `failed`: OTA が失敗したときにアクションが実行されます。
     *
     */
    export enum targetOtaStatus {
        STARTED = 'started',
        FINISHED = 'finished',
        FAILED = 'failed',
    }
    /**
     * 変更後の速度クラス。変更後の速度クラスを限定して、アクションを実行するときに以下のいずれかを指定します。省略すると、任意の速度クラスに変更されたときに、アクションが実行されます。
     *
     * - plan01s、plan01s - Low Data Volume、planX3 X3-5MB、planP1、plan-D (バンドルなし)、plan-D D-300MB、plan-K2 K2-300MB、plan-K の場合:
     * - `s1.minimum`
     * - `s1.slow`
     * - `s1.standard`
     * - `s1.fast`
     * - `s1.4xfast`
     * - plan-US の場合:
     * - `s1.minimum`
     * - `s1.slow`
     * - `s1.standard`
     * - `s1.fast`
     * - `s1.4xfast`
     * - `s1.8xfast`
     * - plan-DU の場合:
     * - `u1.standard`
     * - `u1.slow`
     *
     * **Warning**: plan-KM1 およびバーチャル SIM/Subscriber は、速度クラスが 1 種類のため変更できません。
     *
     */
    export enum targetSpeedClass {
        S1_MINIMUM = 's1.minimum',
        S1_SLOW = 's1.slow',
        S1_STANDARD = 's1.standard',
        S1_FAST = 's1.fast',
        S1_4XFAST = 's1.4xfast',
        S1_8XFAST = 's1.8xfast',
        U1_STANDARD = 'u1.standard',
        U1_SLOW = 'u1.slow',
    }
    /**
     * 変更後の IoT SIM のステータス。変更後のステータスを限定して、アクションを実行するときに以下のいずれかを指定します。省略すると、任意のステータスに変更されたときに、アクションが実行されます。
     *
     * - `ready`: 準備完了 (ready)。
     * - `active`: 使用中 (active)。
     * - `inactive`: 休止中 (inactive)。
     * - `standby`: 利用開始待ち (standby)。
     * - `suspended`: 利用中断中 (suspended)。
     * - `terminated`: 解約済み (terminated)。
     *
     * `sourceStatus` と `targetStatus` の両方を省略すると、IoT SIM のステータスに関わらず、IoT SIM のステータスが変更されたときに、アクションが実行されます。
     *
     */
    export enum targetStatus {
        READY = 'ready',
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        STANDBY = 'standby',
        SUSPENDED = 'suspended',
        TERMINATED = 'terminated',
    }
}

