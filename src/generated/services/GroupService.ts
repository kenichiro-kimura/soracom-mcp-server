/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGroupRequest } from '../models/CreateGroupRequest';
import type { Group } from '../models/Group';
import type { GroupConfigurationUpdateRequest } from '../models/GroupConfigurationUpdateRequest';
import type { Sim } from '../models/Sim';
import type { TagUpdateRequest } from '../models/TagUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GroupService {
    /**
     * グループの一覧を取得する
     * Group の一覧を返す
     * @param tagName Group についた Tag 名。完全一致する Tag 名が検索対象となる。tag_name を指定した場合、tag_value が必須。
     * @param tagValue Group についた Tag の値。
     * @param tagValueMatchMode タグの文字列 (`tag_value`) に対する検索条件。
     * @param limit レスポンス 1 ページあたりの最大数。
     * @param lastEvaluatedKey 前ページで取得した最後の Group の ID。このパラメータを指定することで次の Group から始まるリストを取得できる。
     * @returns Group Group の一覧。
     * @throws ApiError
     */
    public static listGroups(
        tagName?: string,
        tagValue?: string,
        tagValueMatchMode: 'exact' | 'prefix' = 'exact',
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<Group>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/groups',
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
     * グループを作成する
     * Group を新規作成する。
     * @param requestBody グループに付けるタグと、グループの設定。
     * @returns Group Created
     * @throws ApiError
     */
    public static createGroup(
        requestBody: CreateGroupRequest,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * グループを削除する
     * Group ID で指定された Group を削除する。
     * @param groupId 対象の Group の ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteGroup(
        groupId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/groups/{group_id}',
            path: {
                'group_id': groupId,
            },
            errors: {
                404: `指定された Group は存在しない。`,
            },
        });
    }
    /**
     * グループの情報を取得する
     * Group ID で指定された Group を返す。
     * @param groupId 対象の Group の ID。
     * @returns Group 指定された Group。
     * @throws ApiError
     */
    public static getGroup(
        groupId: string,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/groups/{group_id}',
            path: {
                'group_id': groupId,
            },
            errors: {
                404: `指定された Group は存在しない。`,
            },
        });
    }
    /**
     * グループのネームスペースを削除する
     * 指定された Group のネームスペースを削除。
     * @param groupId 対象の Group。
     * @param namespace 削除対象のネームスペース。
     * @returns void
     * @throws ApiError
     */
    public static deleteConfigurationNamespace(
        groupId: string,
        namespace: 'SoracomAir' | 'SoracomBeam' | 'SoracomEndorse' | 'SoracomOrbit' | 'SoracomFunk' | 'SoracomFunnel' | 'SoracomHarvest' | 'SoracomHarvestFiles' | 'SoracomKrypton' | 'UnifiedEndpoint',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/groups/{group_id}/configuration/{namespace}',
            path: {
                'group_id': groupId,
                'namespace': namespace,
            },
            errors: {
                400: `指定されたネームスペースが存在しない。`,
                404: `指定された Group が存在しない。`,
            },
        });
    }
    /**
     * グループの設定を更新する
     * 指定されたグループの設定を更新します。
     * @param groupId 対象のグループの ID。グループ ID は [Group:listGroups API](#/Group/listGroups) で取得できます。
     * @param namespace 設定対象を示す文字列。設定内容によって異なります。
     *
     * - `SoracomAir`: カスタム DNS、メタデータサービス、VPG (Virtual Private Gateway)、CHAP 認証、簡易位置測位機能、バイナリパーサー。
     * - `SoracomBeam`: SORACOM Beam。
     * - `SoracomEndorse`: SORACOM Endorse。
     * - `SoracomFunk`: SORACOM Funk。
     * - `SoracomFunnel`: SORACOM Funnel。
     * - `SoracomHarvest`: SORACOM Harvest Data。
     * - `SoracomHarvestFiles`: SORACOM Harvest Files。
     * - `SoracomKrypton`: SORACOM Krypton。
     * - `SoracomOrbit`: SORACOM Orbit。
     * - `UnifiedEndpoint`: Unified Endpoint。
     *
     * @param requestBody グループ設定。
     *
     * **Warning**: 同じ `namespace` に含まれる設定を変更する場合は、リクエストボディに変更点だけでなく、既存の設定をすべて含めてください。リクエストボディに含めなかった設定は、すべてデフォルト設定に戻ります。
     *
     * @returns Group 更新後の Group。
     * @throws ApiError
     */
    public static putConfigurationParameters(
        groupId: string,
        namespace: 'SoracomAir' | 'SoracomBeam' | 'SoracomEndorse' | 'SoracomFunk' | 'SoracomFunnel' | 'SoracomHarvest' | 'SoracomHarvestFiles' | 'SoracomKrypton' | 'SoracomOrbit' | 'UnifiedEndpoint',
        requestBody: Array<GroupConfigurationUpdateRequest>,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/groups/{group_id}/configuration/{namespace}',
            path: {
                'group_id': groupId,
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された Group が存在しない。`,
            },
        });
    }
    /**
     * グループのパラメータを削除する
     * 指定された Group のパラメータを削除。
     * @param groupId 対象の Group。
     * @param namespace 対象のパラメータのネームスペース。
     * @param name 削除対象のパラメータ名 (URL の Path の一部になるので、パーセントエンコーディングを施す。JavaScript なら encodeURIComponent() したものを指定する)。
     * @returns void
     * @throws ApiError
     */
    public static deleteConfigurationParameter(
        groupId: string,
        namespace: 'SoracomAir' | 'SoracomBeam' | 'SoracomEndorse' | 'SoracomFunk' | 'SoracomFunnel' | 'SoracomHarvest' | 'SoracomHarvestFiles' | 'SoracomKrypton' | 'UnifiedEndpoint',
        name: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/groups/{group_id}/configuration/{namespace}/{name}',
            path: {
                'group_id': groupId,
                'namespace': namespace,
                'name': name,
            },
            errors: {
                404: `指定された Group が存在しない。`,
            },
        });
    }
    /**
     * グループに属する Subscriber の一覧を取得する
     * Group ID で指定された Group に属する Subscriber の一覧を返す。
     * @param groupId 対象の Group の ID。
     * @param limit レスポンス 1 ページあたりの最大数。
     * @param lastEvaluatedKey 前ページで取得した最後の Subscriber の IMSI。このパラメータを指定することで次の Subscriber 以降のリストを取得できる。
     * @returns Sim 指定された Group。
     * @throws ApiError
     */
    public static listSubscribersInGroup(
        groupId: string,
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<Sim>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/groups/{group_id}/subscribers',
            path: {
                'group_id': groupId,
            },
            query: {
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
            errors: {
                404: `指定された Group は存在しない。`,
            },
        });
    }
    /**
     * グループのタグを更新する
     * 指定された Configuration Group のタグを追加・更新。
     * @param groupId 対象の Group の ID。
     * @param requestBody 更新対象のタグの配列。
     * @returns Group 更新後の Group。
     * @throws ApiError
     */
    public static putGroupTags(
        groupId: string,
        requestBody: Array<TagUpdateRequest>,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/groups/{group_id}/tags',
            path: {
                'group_id': groupId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定された Group が存在しない。`,
            },
        });
    }
    /**
     * グループのタグを削除する
     * 指定された Group のタグを削除。
     * @param groupId 対象の Group の ID。
     * @param tagName 削除対象のタグ名 (URL の Path の一部になるので、パーセントエンコーディングを施す。JavaScript なら encodeURIComponent() したものを指定する)。
     * @returns void
     * @throws ApiError
     */
    public static deleteGroupTag(
        groupId: string,
        tagName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/groups/{group_id}/tags/{tag_name}',
            path: {
                'group_id': groupId,
                'tag_name': tagName,
            },
            errors: {
                404: `指定されたグループあるいはタグが存在しない。`,
            },
        });
    }
}
