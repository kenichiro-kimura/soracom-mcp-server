/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoraGateway } from '../models/LoraGateway';
import type { LoraNetworkSet } from '../models/LoraNetworkSet';
import type { TagUpdateRequest } from '../models/TagUpdateRequest';
import type { UpdatePermissionRequest } from '../models/UpdatePermissionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LoraNetworkSetService {
    /**
     * LoRaWAN ネットワークのリストを取得する
     * 条件に合う LoRAWAN ネットワークを取得します。LoRaWAN ネットワークが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param tagName 検索対象にするタグの名前 (完全一致)。
     * @param tagValue 検索対象にするタグの検索文字列。`tag_name` を指定した場合は必須。
     * @param tagValueMatchMode タグの検索条件。
     * @param limit 一度に取得する LoRaWAN ネットワークの数の上限。
     * @param lastEvaluatedKey 前ページで取得した最後の LoRaWAN ネットワークの ID。このパラメータを指定することで次以降のリストを取得できる。
     * @returns LoraNetworkSet LoRaWAN ネットワークのリスト。
     * @throws ApiError
     */
    public static listLoraNetworkSets(
        tagName?: string,
        tagValue?: string,
        tagValueMatchMode: 'exact' | 'prefix' = 'exact',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<LoraNetworkSet>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lora_network_sets',
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
     * LoRaWAN ネットワークを作成する
     * LoRaWAN ネットワークを作成する。
     * @param requestBody タグなど作成対象の LoRaWAN ネットワークに設定する付加情報。
     * @returns LoraNetworkSet LoRaWAN ネットワークの作成に成功。
     * @throws ApiError
     */
    public static createLoraNetworkSet(
        requestBody: LoraNetworkSet,
    ): CancelablePromise<LoraNetworkSet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_network_sets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LoRaWAN ネットワークを削除する
     * 指定された LoRaWAN ネットワークを削除する。
     * @param nsId 対象の LoRaWAN ネットワークの ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteLoraNetworkSet(
        nsId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lora_network_sets/{ns_id}',
            path: {
                'ns_id': nsId,
            },
            errors: {
                404: `指定された LoRaWAN ネットワークが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ネットワークの情報を取得する
     * 指定された LoRaWAN ネットワークの情報を返す。
     * @param nsId 対象の LoRaWAN ネットワークの ID。
     * @returns LoraNetworkSet LoRaWAN ネットワークの詳細情報を取得完了。
     * @throws ApiError
     */
    public static getLoraNetworkSet(
        nsId: string,
    ): CancelablePromise<LoraNetworkSet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lora_network_sets/{ns_id}',
            path: {
                'ns_id': nsId,
            },
            errors: {
                404: `指定された LoRaWAN ネットワークが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ネットワークのパーミッションを追加する
     * 別の Operator から LoRaWAN ネットワークが利用できるようにパーミッションを追加する。
     * @param nsId 対象の LoRaWAN ネットワークの ID。
     * @param requestBody 許可された Operator のリストに追加すべき Operator の ID。
     * @returns LoraNetworkSet 指定された LoRaWAN ネットワークのパーミッションを更新完了。
     * @throws ApiError
     */
    public static addPermissionToLoraNetworkSet(
        nsId: string,
        requestBody: UpdatePermissionRequest,
    ): CancelablePromise<LoraNetworkSet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_network_sets/{ns_id}/add_permission',
            path: {
                'ns_id': nsId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LoRaWAN ネットワークに所属する LoRaWAN ゲートウェイのリストを取得する
     * 指定された LoRAWAN ネットワークに属する LoRaWAN ゲートウェイを取得します。LoRaWAN ゲートウェイが 1 ページに収まらない場合は、同じ条件で次のページを取得するための URL が、レスポンスの `link` ヘッダーに含まれます。
     *
     * @param nsId 対象の LoRaWAN ネットワークの ID。
     * @param limit 一度に取得する LoRaWAN ゲートウェイの数の上限。
     * @param lastEvaluatedKey 前ページで取得した最後の LoRaWAN ゲートウェイの ID。このパラメータを指定することで次の LoRaWAN ゲートウェイ以降のリストを取得できる。
     * @returns LoraGateway LoRaWAN ゲートウェイのリスト。
     * @throws ApiError
     */
    public static listGatewaysInLoraNetworkSet(
        nsId: string,
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<LoraGateway>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lora_network_sets/{ns_id}/gateways',
            path: {
                'ns_id': nsId,
            },
            query: {
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
            errors: {
                404: `指定された LoRaWAN ネットワークが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ネットワークのパーミッションを削除する
     * 指定された LoRaWAN ネットワークの別の Operator への利用許可を取り消す。
     * @param nsId 対象の LoRaWAN ネットワークの ID。
     * @param requestBody 許可された Operator のリストに追加すべき Operator の ID。
     * @returns LoraNetworkSet 指定された LoRaWAN ネットワークのパーミッションを削除完了。
     * @throws ApiError
     */
    public static revokePermissionFromLoraNetworkSet(
        nsId: string,
        requestBody: UpdatePermissionRequest,
    ): CancelablePromise<LoraNetworkSet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lora_network_sets/{ns_id}/revoke_permission',
            path: {
                'ns_id': nsId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LoRaWAN ネットワークのタグを追加・更新する
     * 指定された LoRaWAN ネットワークのタグを追加・更新。
     * @param nsId 対象の LoRaWAN ネットワークの ID。
     * @param requestBody 追加・更新対象のタグの配列。
     * @returns LoraNetworkSet 更新後の LoRaWAN ネットワークの詳細情報。
     * @throws ApiError
     */
    public static putLoraNetworkSetTags(
        nsId: string,
        requestBody: Array<TagUpdateRequest>,
    ): CancelablePromise<LoraNetworkSet> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lora_network_sets/{ns_id}/tags',
            path: {
                'ns_id': nsId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された LoRaWAN ネットワークが存在しない。`,
            },
        });
    }
    /**
     * LoRaWAN ネットワークのタグを削除する
     * 指定された LoRaWAN ネットワークのタグを削除。
     * @param nsId 対象の LoRaWAN ネットワークの ID。
     * @param tagName 削除対象のタグ名 (URL の Path の一部になるので、パーセントエンコーディングを施す。JavaScript なら encodeURIComponent() したものを指定する)。
     * @returns void
     * @throws ApiError
     */
    public static deleteLoraNetworkSetTag(
        nsId: string,
        tagName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lora_network_sets/{ns_id}/tags/{tag_name}',
            path: {
                'ns_id': nsId,
                'tag_name': tagName,
            },
            errors: {
                404: `指定された LoRaWAN ネットワークあるいはタグが存在しない。`,
            },
        });
    }
}
