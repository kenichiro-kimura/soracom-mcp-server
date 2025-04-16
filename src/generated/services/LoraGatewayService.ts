/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoraGateway } from '../models/LoraGateway';
import type { SetNetworkSetRequest } from '../models/SetNetworkSetRequest';
import type { TagUpdateRequest } from '../models/TagUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LoraGatewayService {
    /**
     * LoRaWAN ゲートウェイのリストを取得する
     * 条件に合う LoRAWAN ゲートウェイを取得します。LoRaWAN ゲートウェイが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param tagName 検索対象にするタグの名前 (完全一致)。
     * @param tagValue 検索対象にするタグの検索文字列。`tag_name` を指定した場合は必須。
     * @param tagValueMatchMode タグの検索条件。
     * @param limit 一度に取得する LoRaWAN ゲートウェイの数の上限。
     * @param lastEvaluatedKey 前ページで取得した最後の LoRaWAN ゲートウェイの ID。このパラメータを指定することで次の LoRaWAN ゲートウェイ以降のリストを取得できる。
     * @returns LoraGateway LoRaWAN ゲートウェイのリスト。
     * @throws ApiError
     */
    public static listLoraGateways(
        tagName?: string,
        tagValue?: string,
        tagValueMatchMode: 'exact' | 'prefix' = 'exact',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<LoraGateway>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lora_gateways',
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
     * LoRaWAN ゲートウェイの情報を取得する
     * 指定された LoRaWAN ゲートウェイの情報を返す。
     * @param gatewayId 対象の LoRaWAN ゲートウェイの ID
     * @returns LoraGateway 指定された LoRaWAN ゲートウェイの詳細情報。
     * @throws ApiError
     */
    public static getLoraGateway(
        gatewayId: string,
    ): CancelablePromise<LoraGateway> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lora_gateways/{gateway_id}',
            path: {
                'gateway_id': gatewayId,
            },
            errors: {
                404: `指定された LoRaWAN ゲートウェイが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ゲートウェイをターミネイト不可にする
     * 指定された LoRaWAN ゲートウェイを Terminate 不可能に設定する。
     * @param gatewayId 対象の LoRaWAN ゲートウェイの ID。
     * @returns LoraGateway 更新後の LoRaWAN ゲートウェイの詳細情報。
     * @throws ApiError
     */
    public static disableTerminationOnLoraGateway(
        gatewayId: string,
    ): CancelablePromise<LoraGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_gateways/{gateway_id}/disable_termination',
            path: {
                'gateway_id': gatewayId,
            },
            errors: {
                404: `指定された LoRaWAN ゲートウェイが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ゲートウェイをターミネイト可能にする
     * 指定された LoRaWAN ゲートウェイを Terminate 可能に設定する。
     * @param gatewayId 対象の LoRaWAN ゲートウェイの ID。
     * @returns LoraGateway 更新後の LoRaWAN ゲートウェイの詳細情報。
     * @throws ApiError
     */
    public static enableTerminationOnLoraGateway(
        gatewayId: string,
    ): CancelablePromise<LoraGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_gateways/{gateway_id}/enable_termination',
            path: {
                'gateway_id': gatewayId,
            },
            errors: {
                404: `指定された LoRaWAN ゲートウェイが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ゲートウェイの Network Set ID を設定・更新する
     * 指定された LoRaWAN ゲートウェイの Network Set ID を指定あるいは上書き変更。
     * @param gatewayId 対象の LoRaWAN ゲートウェイの ID。
     * @param requestBody LoRaWAN ネットワーク ID。
     * @returns LoraGateway 更新後の LoRaWAN ゲートウェイの詳細情報。
     * @throws ApiError
     */
    public static setLoraNetworkSet(
        gatewayId: string,
        requestBody?: SetNetworkSetRequest,
    ): CancelablePromise<LoraGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_gateways/{gateway_id}/set_network_set',
            path: {
                'gateway_id': gatewayId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された LoRaWAN ゲートウェイが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ゲートウェイのタグを追加・更新する
     * 指定された LoRaWAN ゲートウェイのタグを追加・更新。
     * @param gatewayId 対象の LoRaWAN デバイスの ID。
     * @param requestBody 追加・更新対象のタグの配列。
     * @returns LoraGateway 更新後の LoRaWAN ゲートウェイの詳細情報。
     * @throws ApiError
     */
    public static putLoraGatewayTags(
        gatewayId: string,
        requestBody: Array<TagUpdateRequest>,
    ): CancelablePromise<LoraGateway> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lora_gateways/{gateway_id}/tags',
            path: {
                'gateway_id': gatewayId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された LoRaWAN ゲートウェイが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ゲートウェイのタグを削除する
     * 指定された LoRaWAN ゲートウェイのタグを削除。
     * @param gatewayId 対象の LoRaWAN ゲートウェイの ID。
     * @param tagName 削除対象のタグ名 (URL の Path の一部になるので、パーセントエンコーディングを施す。JavaScript なら encodeURIComponent() したものを指定する)。
     * @returns void
     * @throws ApiError
     */
    public static deleteLoraGatewayTag(
        gatewayId: string,
        tagName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lora_gateways/{gateway_id}/tags/{tag_name}',
            path: {
                'gateway_id': gatewayId,
                'tag_name': tagName,
            },
            errors: {
                404: `指定された LoRaWAN ゲートウェイあるいはタグが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ゲートウェイをターミネイトする
     * 指定された LoRaWAN ゲートウェイを Terminate。
     * @param gatewayId 対象の LoRaWAN ゲートウェイの ID。
     * @returns LoraGateway 更新後の LoRaWAN ゲートウェイの詳細情報。
     * @throws ApiError
     */
    public static terminateLoraGateway(
        gatewayId: string,
    ): CancelablePromise<LoraGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_gateways/{gateway_id}/terminate',
            path: {
                'gateway_id': gatewayId,
            },
            errors: {
                404: `指定された LoRaWAN ゲートウェイが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ゲートウェイの Network Set ID を削除する
     * 指定された LoRaWAN ゲートウェイの Network Set ID を削除。
     * @param gatewayId 対象の LoRaWAN ゲートウェイの ID。
     * @returns LoraGateway 更新後の LoRaWAN ゲートウェイの詳細情報。
     * @throws ApiError
     */
    public static unsetLoraNetworkSet(
        gatewayId: string,
    ): CancelablePromise<LoraGateway> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_gateways/{gateway_id}/unset_network_set',
            path: {
                'gateway_id': gatewayId,
            },
            errors: {
                404: `指定された LoRaWAN ゲートウェイが存在しない。`,
            },
        });
    }
}
