/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImeiLock } from './ImeiLock';
import type { LocationRegistrationStatus } from './LocationRegistrationStatus';
import type { PreviousSessionStatus } from './PreviousSessionStatus';
import type { SessionStatus } from './SessionStatus';
import type { TagSet } from './TagSet';
export type Subscriber = {
    /**
     * IoT SIM で使用可能な APN (アクセスポイント名)
     */
    apn?: string;
    bundles?: Array<string>;
    /**
     * このサブスクリプションが作成された UNIX 時間 (ミリ秒)。たとえば、セカンダリサブスクリプションの場合は、セカンダリサブスクリプションが作成された UNIX 時間 (ミリ秒) です。
     */
    createdAt?: number;
    /**
     * このサブスクリプションが作成された UNIX 時間 (ミリ秒)。たとえば、セカンダリサブスクリプションの場合は、セカンダリサブスクリプションが作成された UNIX 時間 (ミリ秒) です。
     */
    createdTime?: number;
    /**
     * IoT SIM の有効期限 (UNIX 時間 (ミリ秒))
     */
    expiredAt?: number;
    /**
     * 有効期限が切れたときのアクション。詳しくは、[IoT SIM の有効期限とアクションを設定する](/ja-jp/docs/air/set-expiry/) を参照してください。
     *
     * - `doNothing`: 保留
     * - `deleteSession`: セッション切断
     * - `deactivate`: 休止
     * - `suspend`: 利用中断
     * - `terminate`: 解約
     * - `null`: 有効期限が設定されていない
     *
     */
    expiryAction?: Subscriber.expiryAction;
    /**
     * IoT SIM の有効期限 (UNIX 時間 (ミリ秒))
     */
    expiryTime?: number;
    /**
     * IoT SIM が所属するグループの ID
     */
    groupId?: string;
    /**
     * IoT SIM の ICCID
     */
    iccid?: string;
    imeiLock?: ImeiLock;
    /**
     * IoT SIM の IMSI
     */
    imsi?: string;
    ipAddress?: string;
    /**
     * IoT SIM の情報が変更された UNIX 時間 (ミリ秒)
     */
    lastModifiedAt?: number;
    /**
     * IoT SIM の情報が変更された UNIX 時間 (ミリ秒)
     */
    lastModifiedTime?: number;
    /**
     * IoT SIM で Napter が利用された UNIX 時間 (ミリ秒)。 IoT SIM で一度も Napter を利用したことがなければ null です。
     */
    lastPortMappingCreatedTime?: number;
    /**
     * 各ネットワークへのネットワーク登録状況
     */
    locationRegistrationStatus?: LocationRegistrationStatus;
    /**
     * IoT SIM の形状 (フォームファクタ)。
     *
     * - `mini`: 標準 (2FF) サイズ。
     * - `micro`: マイクロ (3FF) サイズ。
     * - `nano`: ナノ (4FF) サイズ。
     * - `trio`: 3 in 1 (切り取りかた次第で 2FF/3FF/4FF いずれのサイズにもできる)。
     * - `embedded`: Embedded (MFF2)。
     * - `virtual`: バーチャル SIM/Subscriber。
     * - `integrated`: Embedded (iSIM)。
     * - `profilePackage`: Profile Package (eSIM プロファイル)。
     * - `null`: セカンダリサブスクリプションの場合は null。
     *
     */
    moduleType?: Subscriber.moduleType;
    /**
     * IoT SIM の MSISDN
     */
    msisdn?: string;
    /**
     * IoT SIM を所有しているオペレーターのオペレーター ID
     */
    operatorId?: string;
    packetCaptureSessions?: Array<Record<string, any>>;
    /**
     * SMS 機能を有しているかどうか。
     *
     * - `0`: SMS 未対応
     * - `1`: SMS 対応
     *
     */
    plan?: number;
    previousSession?: PreviousSessionStatus;
    /**
     * IoT SIM が手動でオペレーターに登録された UNIX 時間 (ミリ秒)。ユーザーコンソールから IoT SIM を購入し、自動的に登録された場合はこのフィールドは存在しません。
     */
    registeredTime?: number;
    /**
     * IoT SIM のステータスが「準備完了 (ready)」、「利用開始待ち (standby)」、「利用中断中 (suspended)」のいずれかになった UNIX 時間 (ミリ秒)
     */
    renewalFeeStatusSetTime?: number;
    /**
     * IoT SIM のシリアル番号。バーチャル SIM/Subscriber にはシリアル番号はありません。
     */
    serialNumber?: string;
    sessionStatus?: SessionStatus;
    /**
     * IoT SIM の SIM ID
     */
    simId?: string;
    /**
     * IoT SIM の速度クラス
     */
    speedClass?: string;
    /**
     * IoT SIM (IoT SIM のプライマリサブスクリプション) のステータス。なお、IoT SIM に追加されたバーチャル SIM/Subscriber のステータスは、`active` または `terminated` です。
     *
     * - `ready`: 準備完了 (ready)
     * - `active`: 使用中 (active)
     * - `inactive`: 休止中 (inactive)
     * - `standby`: 利用開始待ち (standby)
     * - `suspended`: 利用中断中 (suspended)
     * - `terminated`: 解約済み (terminated)
     *
     */
    status?: Subscriber.status;
    /**
     * IoT SIM のサブスクリプションの名前
     */
    subscription?: string;
    tags?: TagSet;
    /**
     * IoT SIM の解約プロテクションの設定
     *
     * - `true`: 解約プロテクション OFF (解約できる)
     * - `false`: 解約プロテクション ON
     *
     */
    terminationEnabled?: boolean;
    /**
     * IoT SIM の速度クラス
     */
    type?: string;
};
export namespace Subscriber {
    /**
     * 有効期限が切れたときのアクション。詳しくは、[IoT SIM の有効期限とアクションを設定する](/ja-jp/docs/air/set-expiry/) を参照してください。
     *
     * - `doNothing`: 保留
     * - `deleteSession`: セッション切断
     * - `deactivate`: 休止
     * - `suspend`: 利用中断
     * - `terminate`: 解約
     * - `null`: 有効期限が設定されていない
     *
     */
    export enum expiryAction {
        DO_NOTHING = 'doNothing',
        DELETE_SESSION = 'deleteSession',
        DEACTIVATE = 'deactivate',
        SUSPEND = 'suspend',
        TERMINATE = 'terminate',
        _NULL_VALUE_ = '(null value)',
    }
    /**
     * IoT SIM の形状 (フォームファクタ)。
     *
     * - `mini`: 標準 (2FF) サイズ。
     * - `micro`: マイクロ (3FF) サイズ。
     * - `nano`: ナノ (4FF) サイズ。
     * - `trio`: 3 in 1 (切り取りかた次第で 2FF/3FF/4FF いずれのサイズにもできる)。
     * - `embedded`: Embedded (MFF2)。
     * - `virtual`: バーチャル SIM/Subscriber。
     * - `integrated`: Embedded (iSIM)。
     * - `profilePackage`: Profile Package (eSIM プロファイル)。
     * - `null`: セカンダリサブスクリプションの場合は null。
     *
     */
    export enum moduleType {
        MINI = 'mini',
        MICRO = 'micro',
        NANO = 'nano',
        TRIO = 'trio',
        EMBEDDED = 'embedded',
        VIRTUAL = 'virtual',
        INTEGRATED = 'integrated',
        PROFILE_PACKAGE = 'profilePackage',
        _NULL_VALUE_ = '(null value)',
    }
    /**
     * IoT SIM (IoT SIM のプライマリサブスクリプション) のステータス。なお、IoT SIM に追加されたバーチャル SIM/Subscriber のステータスは、`active` または `terminated` です。
     *
     * - `ready`: 準備完了 (ready)
     * - `active`: 使用中 (active)
     * - `inactive`: 休止中 (inactive)
     * - `standby`: 利用開始待ち (standby)
     * - `suspended`: 利用中断中 (suspended)
     * - `terminated`: 解約済み (terminated)
     *
     */
    export enum status {
        READY = 'ready',
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        STANDBY = 'standby',
        SUSPENDED = 'suspended',
        TERMINATED = 'terminated',
    }
}

