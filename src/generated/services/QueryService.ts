/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Device } from '../models/Device';
import type { SigfoxDevice } from '../models/SigfoxDevice';
import type { Sim } from '../models/Sim';
import type { Subscriber } from '../models/Subscriber';
import type { TrafficVolumeRanking } from '../models/TrafficVolumeRanking';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QueryService {
    /**
     * SORACOM Inventory デバイスをクエリに応じて検索する
     * SORACOM Inventory デバイスをクエリに応じて検索します。部分一致したものを返却します。この API 権限が付与された場合、すべての
     * Inventory デバイスに対して group も含めた検索/一覧取得を行える権限が与えられます。
     *
     * **Warning**: この API は、目的の Inventory デバイスのデバイス ID がわからない場合や、条件に一致する Inventory デバイスの一覧を取得する用途で使用してください。デバイス ID がわかっている場合は、[Device:getDevice API](#/Device/getDevice) を使用してください。
     *
     * @param name 検索する SORACOM Inventory デバイスの名前。
     * @param group 検索するグループの名前。
     * @param groupId 検索するグループの ID。
     * @param deviceId 検索する SORACOM Inventory デバイスの ID。
     * @param tag 検索するタグの値の文字列。
     * @param imsi 検索する SORACOM Inventory デバイスの bootstrap 時の IMSI。
     * @param imei 検索する SORACOM Inventory デバイスの bootstrap 時の IMEI。
     * @param limit 取得する結果の上限数。
     * @param lastEvaluatedKey 前ページで取得した最後の SORACOM Inventory デバイスの ID。このパラメータを指定することで次の SORACOM Inventory デバイス以降のリストを取得できる。
     * @param searchType 検索の種別 (AND 検索もしくは OR 検索)。
     * @returns Device 正常に検索結果を返却。
     * @throws ApiError
     */
    public static searchDevices(
        name?: Array<string>,
        group?: Array<string>,
        groupId?: Array<string>,
        deviceId?: Array<string>,
        tag?: Array<string>,
        imsi?: Array<string>,
        imei?: Array<string>,
        limit: number = 10,
        lastEvaluatedKey?: string,
        searchType: 'and' | 'or' = 'and',
    ): CancelablePromise<Array<Device>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/query/devices',
            query: {
                'name': name,
                'group': group,
                'group_id': groupId,
                'deviceId': deviceId,
                'tag': tag,
                'imsi': imsi,
                'imei': imei,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
                'search_type': searchType,
            },
            errors: {
                400: `不正な検索クエリ。`,
            },
        });
    }
    /**
     * Sigfox デバイスをクエリに応じて検索する
     * Sigfox デバイスをクエリに応じて検索します。部分一致したものを返却します。この API 権限が付与された場合、すべての
     * Sigfox デバイスに対して group も含めた検索/一覧取得を行える権限が与えられます。
     *
     * **Warning**: この API は、目的の Sigfox デバイスのデバイス ID がわからない場合や、条件に一致する Sigfox デバイスの一覧を取得する用途で使用してください。デバイス ID がわかっている場合は、[SigfoxDevice:getSigfoxDevice API](#/SigfoxDevice/getSigfoxDevice) を使用してください。
     *
     * @param name 検索する Sigfox デバイスの名前。
     * @param group 検索するグループの名前。
     * @param groupId 検索するグループの ID。
     * @param deviceId 検索する Sigfox デバイスの ID。
     * @param tag 検索するタグの値の文字列。
     * @param status 検索する Sigfox デバイスの状態。
     * @param registration 検索する Sigfox デバイスの登録状態。
     * @param limit 取得する結果の上限数。
     * @param lastEvaluatedKey 前ページで取得した最後の Sigfox デバイスの ID。このパラメータを指定することで次の Sigfox デバイス以降のリストを取得できる。
     * @param searchType 検索の種別 (AND 検索もしくは OR 検索)。
     * @returns SigfoxDevice 正常に検索結果を返却。
     * @throws ApiError
     */
    public static searchSigfoxDevices(
        status: 'active' | 'inactive' | 'suspended' | 'terminated' | 'shipped' | 'ready' | 'inStock' | 'banned' | 'standby',
        registration: 'notStarted' | 'pending' | 'success' | 'failed',
        limit: number = 10,
        lastEvaluatedKey?: string,
        searchType: 'and' | 'or' = 'and',
        name?: Array<string>,
        group?: Array<string>,
        groupId?: Array<string>,
        deviceId?: Array<string>,
        tag?: Array<string>,
    ): CancelablePromise<Array<SigfoxDevice>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/query/sigfox_devices',
            query: {
                'name': name,
                'group': group,
                'group_id': groupId,
                'deviceId': deviceId,
                'tag': tag,
                'status': status,
                'registration': registration,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
                'search_type': searchType,
            },
            errors: {
                400: `不正な検索クエリ。`,
            },
        });
    }
    /**
     * SIM をクエリに応じて検索する
     * クエリパラメータに指定した条件で、IoT SIM を検索します。
     *
     * - 部分一致で検索できます。
     * - 大文字と小文字は区別されません。
     * - 以下のパラメーターでは、カンマ (`,`。クエリパラメータに指定する際は `%2C`) 区切りで入力すると、複数の検索条件を指定できます。ただし、`,` 自体は検索条件として利用できません。
     * - `name`
     * - `group`
     * - `sim_id`
     * - `imsi`
     * - `msisdn`
     * - `iccid`
     * - `serial_number`
     * - `tag`
     * - `status`
     * - `subscription`
     * - `module_type`
     * - 検索条件は、2 文字以上にしてください。`,` を入力する場合は、`,` で分割された各文字列も 2 文字以上にしてください。たとえば、`ab,c` は `c` が 1 文字のため検索できません。
     * - クエリパラメーターを複数指定した場合は、`search_type` で検索の種別 (AND 検索または OR 検索) を指定できます。
     *
     * **Warning**: SAM ユーザーに、この API を呼び出す権限が付与された場合は、その SAM ユーザーにはすべての IoT SIM に対してグループも含めた検索 / 一覧取得を行う権限が与えられます。
     *
     * **Warning**: この API は、目的の IoT SIM の SIM ID がわからない場合や、条件に一致する IoT SIM の一覧を取得する用途で使用してください。SIM ID がわかっている場合は、[Sim:getSim API](#/Sim/getSim) を使用してください。
     *
     * @param name IoT SIM の名前。
     * @param group IoT SIM が所属する [グループ](/ja-jp/docs/group-configuration/) の名前。
     * @param groupId IoT SIM が所属する [グループ](/ja-jp/docs/group-configuration/) の ID。
     * @param simId [SIM ID](/ja-jp/resources/glossary/#sim-id)。
     * @param imsi [IMSI (International Mobile Subscriber Identity)](/ja-jp/resources/glossary/#imsi-international-mobile-subscriber-identity)。
     * @param msisdn [MSISDN (Mobile Station International Subscriber Directory Number)](/ja-jp/resources/glossary/#msisdn-mobile-station-international-subscriber-directory-number)。
     * @param iccid ICCID (Integrated Circuit Card ID)。SIM カードや仮想的な IoT SIM (バーチャル SIM/Subscriber) を識別するための識別子。
     * @param serialNumber IoT SIM の裏面に記載された製造番号。特定地域向け IoT SIM にのみ設定されています。
     * @param tag IoT SIM のタグの値の文字列。詳しくは、[IoT SIM に付加情報 (タグ) を設定する](/ja-jp/docs/air/set-tag/) を参照してください。
     * @param bundles バンドル
     * @param status IoT SIM のステータス。
     *
     * - `ready`: 準備完了 (ready)。
     * - `active`: 使用中 (active)。
     * - `inactive`: 休止中 (inactive)。
     * - `standby`: 利用開始待ち (standby)。
     * - `suspended`: 利用中断中 (suspended)。
     * - `terminated`: 解約済み (terminated)。
     * - `shipped`: 出荷済み。
     *
     * @param sessionStatus セッションの状態。以下のいずれかを指定します。
     *
     * - `NA`: 任意。
     * - `ONLINE`: オンライン。
     * - `OFFLINE`: オフライン。
     *
     * @param subscription 検索するサブスクリプション。完全一致で検索します。複数のサブスクリプションを指定する場合は、`search_type` に `OR` を指定してください。
     *
     * - 日本カバレッジの場合は、以下のいずれかを指定します。
     * - `plan-D` (plan-D (バンドルなし)、plan-D D-300MB)
     * - `plan-K2` (plan-K2 K2-300MB)
     * - `plan-DU`
     * - `plan-KM1`
     * - `plan-K`
     * - `planArc01`
     * - グローバルカバレッジの場合は、以下のいずれかを指定します。
     * - `plan01s`
     * - `plan01s-low_data_volume` (plan01s - Low Data Volume)
     * - `planX3` (planX3 X3-5MB)
     * - `planP1`
     * - `plan-US`
     * - `plan-NA1-package` (plan-NA1)
     * - `plan-US-max`
     * - `planX1`
     * - `planX2`
     * - `planX3-EU`
     * - `plan-US-NA`
     * - `planArc01`
     *
     * @param moduleType IoT SIM の形状 (フォームファクタ)。
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
     * @param limit 取得する結果の上限数。
     * @param lastEvaluatedKey 前ページで取得した最後の SIM の SIM ID。このパラメータを指定することで次の SIM 以降のリストを取得できる。
     * @param searchType 検索の種別。
     *
     * - AND: すべての検索条件に一致する IoT SIM が取得できます (デフォルト)。
     * - OR: いずれかの検索条件に一致する IoT SIM が取得できます。
     *
     * 検索条件にカンマ (`,`。クエリパラメータに指定する際は `%2C`) が含まれる場合は、カンマで分割されたあとの文字列が、複数の検索条件として扱われ、AND または OR の設定に従って評価されます。
     *
     * @returns Sim 正常に検索結果を返却。
     * @throws ApiError
     */
    public static searchSims(
        name?: Array<string>,
        group?: Array<string>,
        groupId?: Array<string>,
        simId?: Array<string>,
        imsi?: Array<string>,
        msisdn?: Array<string>,
        iccid?: Array<string>,
        serialNumber?: Array<string>,
        tag?: Array<string>,
        bundles?: Array<string>,
        status?: Array<string>,
        sessionStatus: 'NA' | 'ONLINE' | 'OFFLINE' = 'NA',
        subscription?: Array<string>,
        moduleType?: Array<string>,
        limit: number = 10,
        lastEvaluatedKey?: string,
        searchType: 'and' | 'or' = 'and',
    ): CancelablePromise<Array<Sim>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/query/sims',
            query: {
                'name': name,
                'group': group,
                'group_id': groupId,
                'sim_id': simId,
                'imsi': imsi,
                'msisdn': msisdn,
                'iccid': iccid,
                'serial_number': serialNumber,
                'tag': tag,
                'bundles': bundles,
                'status': status,
                'session_status': sessionStatus,
                'subscription': subscription,
                'module_type': moduleType,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
                'search_type': searchType,
            },
            errors: {
                400: `不正な検索クエリ。`,
            },
        });
    }
    /**
     * @deprecated
     * (非推奨) Subscriber をクエリに応じて検索する
     * (非推奨の API です。代わりに `/query/sims` API を利用することを検討してください。) Subscriber をクエリに応じて検索します。部分一致したものを返却します。この API 権限が付与された場合、すべての SIM に対して group も含めた検索/一覧取得を行える権限が与えられます。
     * @param name 検索する Subscriber の名前。
     * @param group 検索するグループの名前。
     * @param imsi 検索する IMSI。
     * @param msisdn 検索する MSISDN。
     * @param iccid 検索する ICCID。
     * @param serialNumber 検索する製造番号。
     * @param tag 検索するタグの値の文字列。
     * @param subscription 検索するサブスクリプション。完全一致で検索します。複数のサブスクリプションを指定する場合は、`search_type` に `OR` を指定してください。
     *
     * - 日本カバレッジの場合は、以下のいずれかを指定します。
     * - `plan-D`: plan-D (バンドルなし)、plan-D D-300MB。
     * - `plan-K2`: plan-K2 K2-300MB。
     * - `plan-DU`
     * - `plan-KM1`
     * - `plan-K`
     * - `planArc01`: バーチャル SIM/Subscriber。
     * - グローバルカバレッジの場合は、以下のいずれかを指定します。
     * - `plan01s`
     * - `plan01s-low_data_volume`: plan01s - Low Data Volume。
     * - `planX3`: planX3 X3-5MB。
     * - `planP1`
     * - `plan-US`
     * - `plan-NA1-package`: plan-NA1。
     * - `plan-US-max`
     * - `planX1`
     * - `planX2`
     * - `planX3-EU`
     * - `plan-US-NA`
     * - `planArc01`: バーチャル SIM/Subscriber。
     *
     * @param moduleType 検索するモジュールタイプ (例: `mini`, `virtual`)。
     * @param limit 取得する結果の上限数。
     * @param lastEvaluatedKey 前ページで取得した最後の Subscriber の IMSI。このパラメータを指定することで次の Subscriber 以降のリストを取得できる。
     * @param searchType 検索の種別 (AND 検索もしくは OR 検索)。
     * @returns Subscriber 正常に検索結果を返却。
     * @throws ApiError
     */
    public static searchSubscribers(
        name?: Array<string>,
        group?: Array<string>,
        imsi?: Array<string>,
        msisdn?: Array<string>,
        iccid?: Array<string>,
        serialNumber?: Array<string>,
        tag?: Array<string>,
        subscription?: Array<string>,
        moduleType?: Array<string>,
        limit: number = 10,
        lastEvaluatedKey?: string,
        searchType: 'and' | 'or' = 'and',
    ): CancelablePromise<Array<Subscriber>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/query/subscribers',
            query: {
                'name': name,
                'group': group,
                'imsi': imsi,
                'msisdn': msisdn,
                'iccid': iccid,
                'serial_number': serialNumber,
                'tag': tag,
                'subscription': subscription,
                'module_type': moduleType,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
                'search_type': searchType,
            },
            errors: {
                400: `不正な検索クエリ。`,
            },
        });
    }
    /**
     * Subscriber の通信量ランキングを返却する
     * 指定された期間の Subscriber の通信量ランキングを検索して返却します。
     * @param from 検索期間の始点 (UNIX 時間 (ミリ秒))。
     * @param to 検索期間の終点 (UNIX 時間 (ミリ秒))。
     * @param limit 取得する結果の上限数。
     * @param order ランキングの順序。
     * @returns TrafficVolumeRanking OK.
     * @throws ApiError
     */
    public static searchSubscriberTrafficVolumeRanking(
        from: number,
        to: number,
        limit: number = 10,
        order: 'asc' | 'desc' = 'desc',
    ): CancelablePromise<Array<TrafficVolumeRanking>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/query/subscribers/traffic_volume/ranking',
            query: {
                'from': from,
                'to': to,
                'limit': limit,
                'order': order,
            },
        });
    }
}
