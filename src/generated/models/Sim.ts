/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArcSessionStatus } from './ArcSessionStatus';
import type { Capabilities } from './Capabilities';
import type { ImeiLock } from './ImeiLock';
import type { Map } from './Map';
import type { PreviousSessionStatus } from './PreviousSessionStatus';
import type { SessionStatus } from './SessionStatus';
import type { SimProfile } from './SimProfile';
import type { TagSet } from './TagSet';
export type Sim = {
    activeProfileId?: string;
    arcSessionStatus?: ArcSessionStatus;
    capabilities?: Capabilities;
    /**
     * IoT SIM (IoT SIM のプライマリサブスクリプション) が作成された UNIX 時間 (ミリ秒)。
     */
    createdTime?: number;
    /**
     * 有効期限が切れたときのアクション。詳しくは、[IoT SIM の有効期限とアクションを設定する](/ja-jp/docs/air/set-expiry/) を参照してください。
     *
     * - `doNothing`: 保留。
     * - `deleteSession`: セッション切断。
     * - `deactivate`: 休止。
     * - `suspend`: 利用中断。
     * - `terminate`: 解約。
     * - `null`: 有効期限が設定されていない。
     *
     */
    expiryAction?: Sim.expiryAction;
    /**
     * IoT SIM の有効期限 (UNIX 時間 (ミリ秒))。
     */
    expiryTime?: number;
    /**
     * IoT SIM が所属するグループの ID。
     */
    groupId?: string;
    imeiLock?: ImeiLock;
    /**
     * IoT SIM (IoT SIM のプライマリサブスクリプション) の情報が変更された UNIX 時間 (ミリ秒)。
     */
    lastModifiedTime?: number;
    /**
     * IoT SIM で Napter が利用された UNIX 時間 (ミリ秒)。IoT SIM で一度も Napter を利用したことがなければ null です。
     */
    lastPortMappingCreatedTime?: number;
    localInfo?: Map;
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
     *
     */
    moduleType?: Sim.moduleType;
    /**
     * IoT SIM を所有しているオペレーターのオペレーター ID。
     */
    operatorId?: string;
    otaSerialNumber?: string;
    pcapEndTime?: number;
    pcapStartTime?: number;
    previousSession?: PreviousSessionStatus;
    profiles?: Record<string, SimProfile>;
    /**
     * IoT SIM のステータスが「準備完了 (ready)」、「利用開始待ち (standby)」、「利用中断中 (suspended)」のいずれかになった UNIX 時間 (ミリ秒)。
     */
    renewalFeeStatusSetTime?: number;
    /**
     * IoT SIM のシリアル番号。バーチャル SIM/Subscriber にはシリアル番号はありません。
     */
    serialNumber?: string;
    sessionStatus?: SessionStatus;
    /**
     * IoT SIM の SIM ID。
     */
    simId?: string;
    /**
     * IoT SIM の速度クラス。
     */
    speedClass?: string;
    /**
     * IoT SIM (IoT SIM のプライマリサブスクリプション) のステータス。なお、バーチャル SIM/Subscriber のステータスは、`active` または `terminated` です。
     *
     * - `ready`: 準備完了 (ready)。
     * - `active`: 使用中 (active)。
     * - `inactive`: 休止中 (inactive)。
     * - `standby`: 利用開始待ち (standby)。
     * - `suspended`: 利用中断中 (suspended)。
     * - `terminated`: 解約済み (terminated)。
     *
     */
    status?: Sim.status;
    tags?: TagSet;
    /**
     * IoT SIM を解約できるかどうかを表す値 (解約プロテクションの設定)。
     *
     * - `true`: 解約できる (解約プロテクション OFF)。
     * - `false`: 解約できない (解約プロテクション ON)。
     *
     */
    terminationEnabled?: boolean;
    /**
     * IoT SIM のタイプ。
     *
     * - `euicc`: チップ型 (eSIM)。
     * - `uicc`: カード型。
     * - `virtual`: バーチャル SIM/Subscriber。
     *
     */
    type?: Sim.type;
};
export namespace Sim {
    /**
     * 有効期限が切れたときのアクション。詳しくは、[IoT SIM の有効期限とアクションを設定する](/ja-jp/docs/air/set-expiry/) を参照してください。
     *
     * - `doNothing`: 保留。
     * - `deleteSession`: セッション切断。
     * - `deactivate`: 休止。
     * - `suspend`: 利用中断。
     * - `terminate`: 解約。
     * - `null`: 有効期限が設定されていない。
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
    }
    /**
     * IoT SIM (IoT SIM のプライマリサブスクリプション) のステータス。なお、バーチャル SIM/Subscriber のステータスは、`active` または `terminated` です。
     *
     * - `ready`: 準備完了 (ready)。
     * - `active`: 使用中 (active)。
     * - `inactive`: 休止中 (inactive)。
     * - `standby`: 利用開始待ち (standby)。
     * - `suspended`: 利用中断中 (suspended)。
     * - `terminated`: 解約済み (terminated)。
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
    /**
     * IoT SIM のタイプ。
     *
     * - `euicc`: チップ型 (eSIM)。
     * - `uicc`: カード型。
     * - `virtual`: バーチャル SIM/Subscriber。
     *
     */
    export enum type {
        EUICC = 'euicc',
        UICC = 'uicc',
        VIRTUAL = 'virtual',
    }
}

