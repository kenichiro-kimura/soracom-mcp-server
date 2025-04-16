/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttributeUpdate } from '../models/AttributeUpdate';
import type { CreateCustomerRouteRequest } from '../models/CreateCustomerRouteRequest';
import type { CreateTransitGatewayPeeringConnectionRequest } from '../models/CreateTransitGatewayPeeringConnectionRequest';
import type { CreateTransitGatewayVpcAttachmentRequest } from '../models/CreateTransitGatewayVpcAttachmentRequest';
import type { CreateVirtualPrivateGatewayRequest } from '../models/CreateVirtualPrivateGatewayRequest';
import type { CreateVpcPeeringConnectionRequest } from '../models/CreateVpcPeeringConnectionRequest';
import type { CustomerRoute } from '../models/CustomerRoute';
import type { GatePeer } from '../models/GatePeer';
import type { IpAddressMapEntry } from '../models/IpAddressMapEntry';
import type { JunctionInspectionConfiguration } from '../models/JunctionInspectionConfiguration';
import type { JunctionMirroringPeer } from '../models/JunctionMirroringPeer';
import type { JunctionRedirectionConfiguration } from '../models/JunctionRedirectionConfiguration';
import type { OpenGateRequest } from '../models/OpenGateRequest';
import type { PacketCaptureSession } from '../models/PacketCaptureSession';
import type { PacketCaptureSessionRequest } from '../models/PacketCaptureSessionRequest';
import type { PutIpAddressMapEntryRequest } from '../models/PutIpAddressMapEntryRequest';
import type { PutSimBasedRoutingRoutesRequest } from '../models/PutSimBasedRoutingRoutesRequest';
import type { RegisterGatePeerRequest } from '../models/RegisterGatePeerRequest';
import type { RoutingFilterEntry } from '../models/RoutingFilterEntry';
import type { SetVirtualPrivateGatewayVxLanIdRequest } from '../models/SetVirtualPrivateGatewayVxLanIdRequest';
import type { UpdateCustomerRouteRequest } from '../models/UpdateCustomerRouteRequest';
import type { UpdateVirtualPrivateGatewayTagsRequest } from '../models/UpdateVirtualPrivateGatewayTagsRequest';
import type { VirtualPrivateGateway } from '../models/VirtualPrivateGateway';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VirtualPrivateGatewayService {
    /**
     * VPG の一覧を取得する
     * VPG の一覧を返す
     * @param tagName VPG についた Tag 名。完全一致する Tag 名が検索対象となる。tag_name を指定した場合、tag_value が必須。
     * @param tagValue VPG についた Tag の値。
     * @param tagValueMatchMode タグの検索条件。
     * @param limit レスポンス 1 ページあたりの最大数
     * @param lastEvaluatedKey 前ページで取得した最後の VPG の ID。このパラメータを指定することで次の VPG から始まるリストを取得できる。
     * @returns VirtualPrivateGateway VPG の一覧
     * @throws ApiError
     */
    public static listVirtualPrivateGateways(
        tagName?: string,
        tagValue?: string,
        tagValueMatchMode: 'exact' | 'prefix' = 'exact',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<VirtualPrivateGateway>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/virtual_private_gateways',
            query: {
                'tag_name': tagName,
                'tag_value': tagValue,
                'tag_value_match_mode': tagValueMatchMode,
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * VPG を新規作成する
     * VPG を新規作成する
     * @param requestBody 作成対象の VPG の情報を含むリクエスト
     * @returns VirtualPrivateGateway Created
     * @throws ApiError
     */
    public static createVirtualPrivateGateway(
        requestBody: CreateVirtualPrivateGatewayRequest,
    ): CancelablePromise<VirtualPrivateGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * VPG の情報を取得する
     * 指定された VPG の情報を取得する
     * @param vpgId 対象の VPG の ID
     * @returns VirtualPrivateGateway 指定された VPG
     * @throws ApiError
     */
    public static getVirtualPrivateGateway(
        vpgId: string,
    ): CancelablePromise<VirtualPrivateGateway> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/virtual_private_gateways/{vpg_id}',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                404: `指定された VPG は存在しない`,
            },
        });
    }
    /**
     * ルーティングテーブルエントリを作成する
     * VPG にルーティングテーブルエントリを作成する
     * @param vpgId 対象の VPG ID
     * @param requestBody
     * @returns CustomerRoute ルーティングテーブルエントリが作成されました
     * @throws ApiError
     */
    public static createCustomerRoute(
        vpgId: string,
        requestBody: CreateCustomerRouteRequest,
    ): CancelablePromise<CustomerRoute> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/customer_routes',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `リクエストが不正`,
                404: `指定された VPG が存在しません`,
            },
        });
    }
    /**
     * ルーティングテーブルエントリを削除する
     * VPG のルーティングテーブルエントリを削除する
     * @param vpgId 対象の VPG ID
     * @param routeId ルートの ID
     * @returns void
     * @throws ApiError
     */
    public static deleteCustomerRoute(
        vpgId: string,
        routeId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/virtual_private_gateways/{vpg_id}/customer_routes/{route_id}',
            path: {
                'vpg_id': vpgId,
                'route_id': routeId,
            },
            errors: {
                404: `指定された VPG が存在しません`,
            },
        });
    }
    /**
     * ルーティングテーブルエントリを更新する
     * VPG のルーティングテーブルエントリのゲートウェイを更新する
     * @param vpgId 対象の VPG ID
     * @param routeId ルートの ID
     * @param requestBody
     * @returns CustomerRoute ルーティングテーブルエントリが更新されました
     * @throws ApiError
     */
    public static updateCustomerRoute(
        vpgId: string,
        routeId: string,
        requestBody: UpdateCustomerRouteRequest,
    ): CancelablePromise<CustomerRoute> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/virtual_private_gateways/{vpg_id}/customer_routes/{route_id}',
            path: {
                'vpg_id': vpgId,
                'route_id': routeId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `リクエストが不正`,
                404: `指定された VPG が存在しません`,
            },
        });
    }
    /**
     * VPG の固定グローバル IP アドレスオプションを無効化する
     * VPG の固定グローバル IP アドレスオプションを無効化します。
     * @param vpgId
     * @returns VirtualPrivateGateway VPG の固定グローバル IP アドレスオプションが無効化されました。
     * @throws ApiError
     */
    public static releaseFixedPublicIpAddresses(
        vpgId: string,
    ): CancelablePromise<VirtualPrivateGateway> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/virtual_private_gateways/{vpg_id}/fixed_public_ip_addresses',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                400: `すでに VPG の固定グローバル IP アドレスオプションは無効化されています。`,
                404: `指定された VPG は存在しません。`,
            },
        });
    }
    /**
     * VPG の固定グローバル IP アドレスオプションを有効化する
     * VPG の固定グローバル IP アドレスオプションを有効化します。
     * @param vpgId
     * @returns VirtualPrivateGateway VPG の固定グローバル IP アドレスオプションが有効化されました。
     * @throws ApiError
     */
    public static assignFixedPublicIpAddresses(
        vpgId: string,
    ): CancelablePromise<VirtualPrivateGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/fixed_public_ip_addresses',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                400: `すでに VPG の固定グローバル IP アドレスオプションは有効化されています。`,
                404: `指定された VPG は存在しません。`,
            },
        });
    }
    /**
     * SORACOM Gate を閉じる
     * 指定した VPG で SORACOM Gate を無効化し、Gate を閉じる
     * @param vpgId 対象の VPG の ID
     * @returns any SORACOM Gate の無効化が完了
     * @throws ApiError
     */
    public static closeGate(
        vpgId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/gate/close',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                400: `リクエストに誤りがある`,
                404: `指定された VPG は存在しない`,
            },
        });
    }
    /**
     * 指定された VPG に対して SORACOM Gate のプライバシーセパレーター機能を無効にする
     * 指定された VPG に対して SORACOM Gate のプライバシーセパレーター機能を無効化して、Gate D2D 機能を有効化します。
     * @param vpgId VPG ID
     * @returns VirtualPrivateGateway プライバシーセパレーター機能の無効化に成功
     * @throws ApiError
     */
    public static disableGatePrivacySeparator(
        vpgId: string,
    ): CancelablePromise<VirtualPrivateGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/gate/disable_privacy_separator',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                404: `指定された VPG が存在しない`,
            },
        });
    }
    /**
     * 指定された VPG に対して SORACOM Gate のプライバシーセパレーター機能を有効化する
     * 指定された VPG に対して SORACOM Gate のプライバシーセパレーター機能を有効化して、Gate D2D 機能を無効化します。
     * @param vpgId VPG ID
     * @returns VirtualPrivateGateway プライバシーセパレーター機能の有効化に成功
     * @throws ApiError
     */
    public static enableGatePrivacySeparator(
        vpgId: string,
    ): CancelablePromise<VirtualPrivateGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/gate/enable_privacy_separator',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                404: `指定された VPG が存在しない`,
            },
        });
    }
    /**
     * SORACOM Gate を開く
     * 指定した VPG で SORACOM Gate を有効化し、Gate を開く
     * @param vpgId 対象の VPG の ID
     * @param requestBody オプショナルな Gate の設定パラメータ。
     * @returns any SORACOM Gate の有効化が完了
     * @throws ApiError
     */
    public static openGate(
        vpgId: string,
        requestBody?: OpenGateRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/gate/open',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `リクエストに誤りがある`,
                404: `指定された VPG は存在しない`,
            },
        });
    }
    /**
     * VPG に登録された Gate Peer の一覧を取得する
     * VPG に登録された Gate Peer の一覧を取得する
     * @param vpgId 対象の VPG の ID
     * @returns GatePeer 正しく VPG に登録された Gate Peer のリストが取得できた
     * @throws ApiError
     */
    public static listGatePeers(
        vpgId: string,
    ): CancelablePromise<Array<GatePeer>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/virtual_private_gateways/{vpg_id}/gate/peers',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                400: `リクエストに誤りがある`,
                404: `指定された VPG は存在しない`,
            },
        });
    }
    /**
     * VPG に Gate Peer を登録する
     * VPG に Gate Peer を登録する
     * @param vpgId 対象の VPG の ID
     * @param requestBody
     * @returns GatePeer VPG に Gate Peer の登録が完了した
     * @throws ApiError
     */
    public static registerGatePeer(
        vpgId: string,
        requestBody: RegisterGatePeerRequest,
    ): CancelablePromise<GatePeer> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/gate/peers',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `リクエストに誤りがある`,
                404: `指定された VPG は存在しない`,
            },
        });
    }
    /**
     * VPG から Gate Peer を登録解除する
     * Gate Peer を VPG から登録解除する
     * @param vpgId 対象の VPG の ID
     * @param outerIpAddress 対象の Peer の ID
     * @returns void
     * @throws ApiError
     */
    public static unregisterGatePeer(
        vpgId: string,
        outerIpAddress: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/virtual_private_gateways/{vpg_id}/gate/peers/{outer_ip_address}',
            path: {
                'vpg_id': vpgId,
                'outer_ip_address': outerIpAddress,
            },
            errors: {
                400: `リクエストに誤りがある`,
                404: `指定された VPG あるいは Peer は存在しない`,
            },
        });
    }
    /**
     * SIM ベースルーティングを無効化する
     * SIM ベースルーティングを無効化します。
     * @param vpgId 対象の VPG の ID
     * @returns void
     * @throws ApiError
     */
    public static disableSimBasedRouting(
        vpgId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/gate/routing/static/sims/disable',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                404: `指定された VPG は存在しません。`,
            },
        });
    }
    /**
     * SIM ベースルーティングを有効化する
     * SIM ベースルーティングを有効化します。
     * @param vpgId 対象の VPG の ID
     * @returns any SIM ベースルーティングが有効化されました。
     * @throws ApiError
     */
    public static enableSimBasedRouting(
        vpgId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/gate/routing/static/sims/enable',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                400: `SORACOM Gate が有効化されていません。`,
                404: `指定された VPG は存在しません。`,
            },
        });
    }
    /**
     * ルーターの LAN の IP アドレスレンジと SIM ID の対応を登録する
     * ルーターの LAN の IP アドレスレンジと SIM ID の対応を登録します。
     * @param vpgId 対象の VPG の ID
     * @param requestBody ルーターの LAN の IP アドレスレンジと、SIM ID の対応を指定します。
     * @returns any OK
     * @throws ApiError
     */
    public static putSimBasedRoutingRoutes(
        vpgId: string,
        requestBody: PutSimBasedRoutingRoutesRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/virtual_private_gateways/{vpg_id}/gate/routing/static/sims/routes',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `リクエストに誤りがあります。`,
                404: `指定された VPG は存在しません。`,
            },
        });
    }
    /**
     * Gate の VXLAN ID を設定する
     * Gate の VXLAN ID を設定します。
     * @param vpgId 対象の VPG の ID
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setVirtualPrivateGatewayVxLanId(
        vpgId: string,
        requestBody: SetVirtualPrivateGatewayVxLanIdRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/gate/set_vxlan_id',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された VPG は存在しません。`,
            },
        });
    }
    /**
     * VPG の IP アドレスマップのエントリの一覧を取得する
     * 指定された VPG の IP アドレスマップのエントリを取得します。
     * @param vpgId 対象の VPG の ID。
     * @param limit 取得する IP アドレスマップのエントリの上限数。なお、レスポンスには、指定した値よりも少ないデータしか含まれないことがあります。
     * @param lastEvaluatedKey 前ページで取得した最後の IP アドレス。このパラメータを指定することで、次ページ (IP アドレスマップのエントリのリスト) を取得できます。
     * @returns IpAddressMapEntry IP アドレスマップのエントリのリスト
     * @throws ApiError
     */
    public static listVirtualPrivateGatewayIpAddressMapEntries(
        vpgId: string,
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<IpAddressMapEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/virtual_private_gateways/{vpg_id}/ip_address_map',
            path: {
                'vpg_id': vpgId,
            },
            query: {
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
            errors: {
                400: `リクエストに誤りがある`,
                404: `指定された VPG は存在しない`,
            },
        });
    }
    /**
     * VPG の IP アドレスマップのエントリーを追加する
     * VPG の IP アドレスマップのエントリーを追加します。
     * @param vpgId 対象の VPG の ID
     * @param requestBody
     * @returns IpAddressMapEntry IP アドレスマップのエントリー追加に成功
     * @throws ApiError
     */
    public static putVirtualPrivateGatewayIpAddressMapEntry(
        vpgId: string,
        requestBody: PutIpAddressMapEntryRequest,
    ): CancelablePromise<IpAddressMapEntry> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/ip_address_map',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `リクエストに誤りがある`,
                404: `指定された VPG は存在しない`,
            },
        });
    }
    /**
     * VPG の IP アドレスマップからエントリーを削除する
     * VPG の IP アドレスマップからエントリーを削除する
     * @param vpgId 対象の VPG の ID
     * @param key 対象の Key
     * @returns void
     * @throws ApiError
     */
    public static deleteVirtualPrivateGatewayIpAddressMapEntry(
        vpgId: string,
        key: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/virtual_private_gateways/{vpg_id}/ip_address_map/{key}',
            path: {
                'vpg_id': vpgId,
                'key': key,
            },
            errors: {
                400: `リクエストに誤りがある`,
                404: `指定された VPG または Key は存在しない`,
            },
        });
    }
    /**
     * Junction ミラーリング peer を追加する
     * Junction ミラーリング peer を追加します。
     * @param vpgId VPG ID
     * @param requestBody ミラーリング peer に関する情報
     * @returns any ミラーリング peer が作成または更新されました。
     * @throws ApiError
     */
    public static createMirroringPeer(
        vpgId: string,
        requestBody: JunctionMirroringPeer,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/junction/mirroring/peers',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された VPG が見つかりませんでした。`,
            },
        });
    }
    /**
     * Junction ミラーリング peer を削除する
     * Junction ミラーリング peer を削除します。
     * @param vpgId VPG ID
     * @param ipaddr 削除したいミラーリング peer の IP アドレス
     * @returns void
     * @throws ApiError
     */
    public static deleteMirroringPeer(
        vpgId: string,
        ipaddr: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/virtual_private_gateways/{vpg_id}/junction/mirroring/peers/{ipaddr}',
            path: {
                'vpg_id': vpgId,
                'ipaddr': ipaddr,
            },
            errors: {
                404: `指定された VPG が見つかりませんでした。`,
            },
        });
    }
    /**
     * Junction ミラーリング peer を更新する
     * Junction ミラーリング peer を更新します。
     * @param vpgId VPG ID
     * @param ipaddr 更新したいミラーリング peer の IP アドレス
     * @param requestBody 更新する属性のリスト
     * @returns any ミラーリング peer の情報が更新されました。
     * @throws ApiError
     */
    public static updateMirroringPeer(
        vpgId: string,
        ipaddr: string,
        requestBody: Array<AttributeUpdate>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/virtual_private_gateways/{vpg_id}/junction/mirroring/peers/{ipaddr}',
            path: {
                'vpg_id': vpgId,
                'ipaddr': ipaddr,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された VPG が見つかりませんでした。`,
            },
        });
    }
    /**
     * Junction インスペクション機能の設定を行う
     * Junction インスペクション機能の設定を行います。
     * @param vpgId VPG ID
     * @param requestBody インスペクション設定内容
     * @returns any 設定内容が追加または更新されました。
     * @throws ApiError
     */
    public static setInspectionConfiguration(
        vpgId: string,
        requestBody: JunctionInspectionConfiguration,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/junction/set_inspection',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された VPG が見つかりませんでした。`,
            },
        });
    }
    /**
     * Junction リダイレクション機能の設定を行う
     * Junction リダイレクション機能の設定を行います。
     * @param vpgId VPG ID
     * @param requestBody リダイレクション設定内容
     * @returns any 設定内容が追加または更新されました。
     * @throws ApiError
     */
    public static setRedirectionConfiguration(
        vpgId: string,
        requestBody: JunctionRedirectionConfiguration,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/junction/set_redirection',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された VPG が見つかりませんでした。`,
            },
        });
    }
    /**
     * Junction インスペクション機能の設定を解除する
     * Junction インスペクション機能の設定を解除します。
     * @param vpgId VPG ID
     * @returns any 設定が解除されました。
     * @throws ApiError
     */
    public static unsetInspectionConfiguration(
        vpgId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/junction/unset_inspection',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                404: `指定された VPG が見つかりませんでした。`,
            },
        });
    }
    /**
     * Junction リダイレクション機能の設定を解除する
     * Junction リダイレクション機能の設定を解除します。
     * @param vpgId VPG ID
     * @returns any 設定が解除されました。
     * @throws ApiError
     */
    public static unsetRedirectionConfiguration(
        vpgId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/junction/unset_redirection',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                404: `指定された VPG が見つかりませんでした。`,
            },
        });
    }
    /**
     * VPG に対するパケットキャプチャセッションのリストを取得する
     * VPG に対するパケットキャプチャセッションのリストを取得する。
     * @param vpgId 対象の VPG ID
     * @param lastEvaluatedKey 前ページで取得した最後のパケットキャプチャセッション。このパラメータを指定することで次のパケットキャプチャセッション以降のリストを取得できる。
     * @param limit 取得するパケットキャプチャセッションの上限
     * @returns PacketCaptureSession VPG に対するパケットキャプチャセッションのリスト
     * @throws ApiError
     */
    public static listPacketCaptureSessions(
        vpgId: string,
        lastEvaluatedKey: string = 'null',
        limit: number = 10,
    ): CancelablePromise<Array<PacketCaptureSession>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/virtual_private_gateways/{vpg_id}/packet_capture_sessions',
            path: {
                'vpg_id': vpgId,
            },
            query: {
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
            },
            errors: {
                400: `Failed to list packet capture sessions associated with the VPG`,
                404: `指定された VPG が存在しない`,
            },
        });
    }
    /**
     * VPG に対するパケットキャプチャセッションを作成する
     * VPG に対するパケットキャプチャセッションを作成する。
     * @param vpgId 対象の VPG ID
     * @param requestBody パケットキャプチャセッションリクエスト
     * @returns PacketCaptureSession VPG に対するパケットキャプチャセッション
     * @throws ApiError
     */
    public static createPacketCaptureSession(
        vpgId: string,
        requestBody: PacketCaptureSessionRequest,
    ): CancelablePromise<PacketCaptureSession> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/packet_capture_sessions',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `VPG に対するパケットキャプチャセッションの作成が失敗した`,
                404: `指定された VPG が存在しない`,
            },
        });
    }
    /**
     * VPG に対するパケットキャプチャセッションを削除する
     * VPG に対するパケットキャプチャセッションを削除する。
     * @param vpgId 対象の VPG ID
     * @param sessionId 対象のパケットキャプチャセッション ID
     * @returns PacketCaptureSession 削除されたパケットキャプチャセッションの情報
     * @throws ApiError
     */
    public static deletePacketCaptureSession(
        vpgId: string,
        sessionId: string,
    ): CancelablePromise<PacketCaptureSession> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/virtual_private_gateways/{vpg_id}/packet_capture_sessions/{session_id}',
            path: {
                'vpg_id': vpgId,
                'session_id': sessionId,
            },
            errors: {
                400: `VPG に対するパケットキャプチャセッションの削除に失敗`,
                404: `VPG に対するパケットキャプチャセッションが存在しない`,
            },
        });
    }
    /**
     * VPG に対するパケットキャプチャセッションを取得する
     * VPG に対するパケットキャプチャセッションを取得する。
     * @param vpgId 対象の VPG ID
     * @param sessionId 対象のパケットキャプチャセッション ID
     * @returns PacketCaptureSession VPG に対するパケットキャプチャセッション
     * @throws ApiError
     */
    public static getPacketCaptureSession(
        vpgId: string,
        sessionId: string,
    ): CancelablePromise<PacketCaptureSession> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/virtual_private_gateways/{vpg_id}/packet_capture_sessions/{session_id}',
            path: {
                'vpg_id': vpgId,
                'session_id': sessionId,
            },
            errors: {
                404: `VPG に対するパケットキャプチャセッションが存在しない`,
            },
        });
    }
    /**
     * VPG に対するパケットキャプチャセッションを停止する
     * VPG に対するパケットキャプチャセッションを停止する。
     * @param vpgId 対象の VPG ID
     * @param sessionId 対象のパケットキャプチャセッション ID
     * @returns PacketCaptureSession 停止されたパケットキャプチャセッションの情報
     * @throws ApiError
     */
    public static stopPacketCaptureSession(
        vpgId: string,
        sessionId: string,
    ): CancelablePromise<PacketCaptureSession> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/packet_capture_sessions/{session_id}/stop',
            path: {
                'vpg_id': vpgId,
                'session_id': sessionId,
            },
            errors: {
                400: `The packet capture session can be stopped only when its status is CAPTURING`,
                404: `VPG に対するパケットキャプチャセッションが存在しない`,
                500: `VPG に対するパケットキャプチャセッションが停止できなかった`,
            },
        });
    }
    /**
     * VPG のアウトバウンドルーティングフィルタを設定する
     * VPG のアウトバウンドルーティングフィルタを設定する
     * @param vpgId 対象の VPG の ID
     * @param requestBody アウトバウンドルーティングフィルタエントリのリスト
     * @returns any アウトバウンドルーティングフィルタが正しく設定された
     * @throws ApiError
     */
    public static setRoutingFilter(
        vpgId: string,
        requestBody: Array<RoutingFilterEntry>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/set_routing_filter',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `引数が不正`,
                404: `指定された VPG は存在しない`,
            },
        });
    }
    /**
     * VPG のタグを更新する
     * VPG のタグを更新します。
     * @param vpgId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateVirtualPrivateGatewayTags(
        vpgId: string,
        requestBody: UpdateVirtualPrivateGatewayTagsRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/virtual_private_gateways/{vpg_id}/tags',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された VPG は存在しません。`,
            },
        });
    }
    /**
     * VPG のタグを削除する
     * VPG のタグを削除します。
     * @param vpgId
     * @param tagName
     * @returns void
     * @throws ApiError
     */
    public static deleteVirtualPrivateGatewayTag(
        vpgId: string,
        tagName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/virtual_private_gateways/{vpg_id}/tags/{tag_name}',
            path: {
                'vpg_id': vpgId,
                'tag_name': tagName,
            },
            errors: {
                404: `指定された VPG は存在しません。`,
            },
        });
    }
    /**
     * VPG を削除する
     * 指定された VPG を Terminate する
     * @param vpgId 対象の VPG の ID
     * @returns any 指定された VPG の Terminate 作業を開始
     * @throws ApiError
     */
    public static terminateVirtualPrivateGateway(
        vpgId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/terminate',
            path: {
                'vpg_id': vpgId,
            },
            errors: {
                400: `指定された VPG の Terminate できない理由が存在`,
                404: `指定された VPG は存在しない`,
            },
        });
    }
    /**
     * Transit Gateway ピアリング接続を作成する
     * 指定された VPG に Transit Gateway ピアリング接続を作成
     * @param vpgId 対象の VPG ID
     * @param requestBody
     * @returns VirtualPrivateGateway Transit Gateway ピアリング接続が作成されました
     * @throws ApiError
     */
    public static createTransitGatewayPeeringConnection(
        vpgId: string,
        requestBody: CreateTransitGatewayPeeringConnectionRequest,
    ): CancelablePromise<VirtualPrivateGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/transit_gateway_peering_connections',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `リクエストが不正`,
                404: `指定された VPG が存在しません`,
            },
        });
    }
    /**
     * Transit Gateway ピアリング接続を削除する
     * 指定された Transit Gateway ピアリング接続を削除
     * @param vpgId 対象の VPG ID
     * @param soracomTgwPeeringAttachmentId Transit Gateway ピアリング接続の ID
     * @returns void
     * @throws ApiError
     */
    public static deleteTransitGatewayPeeringConnection(
        vpgId: string,
        soracomTgwPeeringAttachmentId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/virtual_private_gateways/{vpg_id}/transit_gateway_peering_connections/{soracom_tgw_peering_attachment_id}',
            path: {
                'vpg_id': vpgId,
                'soracom_tgw_peering_attachment_id': soracomTgwPeeringAttachmentId,
            },
            errors: {
                404: `指定された VPG または Transit Gateway ピアリング接続が存在しません`,
            },
        });
    }
    /**
     * Transit Gateway VPC アタッチメントを作成する
     * 指定された VPG に Transit Gateway VPC アタッチメントを作成
     * @param vpgId 対象の VPG ID
     * @param requestBody
     * @returns VirtualPrivateGateway Transit Gateway VPC アタッチメントが作成されました
     * @throws ApiError
     */
    public static createTransitGatewayVpcAttachment(
        vpgId: string,
        requestBody: CreateTransitGatewayVpcAttachmentRequest,
    ): CancelablePromise<VirtualPrivateGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/transit_gateway_vpc_attachments',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `リクエストが不正`,
                404: `指定された VPG が存在しません`,
            },
        });
    }
    /**
     * Transit Gateway VPC アタッチメントを削除する
     * 指定された Transit Gateway VPC アタッチメントを削除
     * @param vpgId 対象の VPG ID
     * @param customerTgwVpcAttachmentId Transit Gateway VPC アタッチメントの ID
     * @returns void
     * @throws ApiError
     */
    public static deleteTransitGatewayVpcAttachment(
        vpgId: string,
        customerTgwVpcAttachmentId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/virtual_private_gateways/{vpg_id}/transit_gateway_vpc_attachments/{customer_tgw_vpc_attachment_id}',
            path: {
                'vpg_id': vpgId,
                'customer_tgw_vpc_attachment_id': customerTgwVpcAttachmentId,
            },
            errors: {
                404: `指定された VPG または Transit Gateway VPC アタッチメントが存在しません`,
            },
        });
    }
    /**
     * Transit Gateway VPC アタッチメントの接続リクエストを受け入れる
     * 指定された Transit Gateway VPC アタッチメントの接続リクエストを受け入れる
     * @param vpgId 対象の VPG ID
     * @param customerTgwVpcAttachmentId Transit Gateway VPC アタッチメントの ID
     * @returns any Transit Gateway VPC アタッチメントが受け入れられました
     * @throws ApiError
     */
    public static acceptTransitGatewayVpcAttachmentFromCustomer(
        vpgId: string,
        customerTgwVpcAttachmentId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/transit_gateway_vpc_attachments/{customer_tgw_vpc_attachment_id}/accept',
            path: {
                'vpg_id': vpgId,
                'customer_tgw_vpc_attachment_id': customerTgwVpcAttachmentId,
            },
            errors: {
                400: `リクエストが不正`,
                404: `指定された VPG または Transit Gateway VPC アタッチメントが存在しません`,
            },
        });
    }
    /**
     * VPC ピアリング接続を作成する
     * 指定された VPG に VPC ピアリング接続を作成
     * @param vpgId 対象の VPG の ID
     * @param requestBody 作成対象の VPC ピアリング接続
     * @returns CreateVpcPeeringConnectionRequest 作成された VPC ピアリング接続
     * @throws ApiError
     */
    public static createVpcPeeringConnection(
        vpgId: string,
        requestBody: CreateVpcPeeringConnectionRequest,
    ): CancelablePromise<CreateVpcPeeringConnectionRequest> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/virtual_private_gateways/{vpg_id}/vpc_peering_connections',
            path: {
                'vpg_id': vpgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された VPC ピアリング接続は存在しない`,
            },
        });
    }
    /**
     * VPC ピアリング接続を削除する
     * 指定された VPC ピアリング接続を削除
     * @param vpgId 対象の VPG の ID
     * @param pcxId 削除対象の VPC ピアリング接続の ID
     * @returns void
     * @throws ApiError
     */
    public static deleteVpcPeeringConnection(
        vpgId: string,
        pcxId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/virtual_private_gateways/{vpg_id}/vpc_peering_connections/{pcx_id}',
            path: {
                'vpg_id': vpgId,
                'pcx_id': pcxId,
            },
            errors: {
                404: `指定された VPC ピアリング接続は存在しない`,
            },
        });
    }
}
