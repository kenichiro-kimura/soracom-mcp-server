/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachRoleRequest } from '../models/AttachRoleRequest';
import type { CreateOrUpdateRoleRequest } from '../models/CreateOrUpdateRoleRequest';
import type { CreateRoleResponse } from '../models/CreateRoleResponse';
import type { ListRolesResponse } from '../models/ListRolesResponse';
import type { RoleResponse } from '../models/RoleResponse';
import type { UserDetailResponse } from '../models/UserDetailResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RoleService {
    /**
     * ロールの一覧を取得する
     * ロールの一覧を返す。
     * @param operatorId オペレーター ID。
     * @returns ListRolesResponse OK.
     * @throws ApiError
     */
    public static listRoles(
        operatorId: string,
    ): CancelablePromise<Array<ListRolesResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/roles',
            path: {
                'operator_id': operatorId,
            },
        });
    }
    /**
     * ロールを削除する
     * ロールを削除する。
     * @param operatorId オペレーター ID。
     * @param roleId ロール ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteRole(
        operatorId: string,
        roleId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/roles/{role_id}',
            path: {
                'operator_id': operatorId,
                'role_id': roleId,
            },
            errors: {
                400: `指定されたロールは使用中です。`,
                404: `ロールが見つかりません。`,
            },
        });
    }
    /**
     * ロールの情報を取得する
     * ロールを取得する。
     * @param operatorId オペレーター ID。
     * @param roleId ロール ID。
     * @returns RoleResponse OK.
     * @throws ApiError
     */
    public static getRole(
        operatorId: string,
        roleId: string,
    ): CancelablePromise<RoleResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/roles/{role_id}',
            path: {
                'operator_id': operatorId,
                'role_id': roleId,
            },
            errors: {
                404: `ロールが見つかりません。`,
            },
        });
    }
    /**
     * ロールを作成する
     * ロールを新しく追加する。
     * @param operatorId オペレーター ID。
     * @param roleId ロール ID。
     * @param requestBody パーミッション。
     * @returns CreateRoleResponse OK.
     * @throws ApiError
     */
    public static createRole(
        operatorId: string,
        roleId: string,
        requestBody: CreateOrUpdateRoleRequest,
    ): CancelablePromise<CreateRoleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/roles/{role_id}',
            path: {
                'operator_id': operatorId,
                'role_id': roleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `ロールの作成に失敗しました。`,
            },
        });
    }
    /**
     * ロールを更新する
     * ロールを編集する。
     * @param operatorId オペレーター ID。
     * @param roleId ロール ID。
     * @param requestBody パーミッション。
     * @returns any OK.
     * @throws ApiError
     */
    public static updateRole(
        operatorId: string,
        roleId: string,
        requestBody: CreateOrUpdateRoleRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/operators/{operator_id}/roles/{role_id}',
            path: {
                'operator_id': operatorId,
                'role_id': roleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `ロールが見つかりません。`,
            },
        });
    }
    /**
     * ロールに紐づく SAM ユーザーの一覧を取得する
     * ロールに紐づく SAM ユーザーの一覧を取得する。
     * @param operatorId オペレーター ID。
     * @param roleId ロール ID。
     * @returns UserDetailResponse OK.
     * @throws ApiError
     */
    public static listRoleAttachedUsers(
        operatorId: string,
        roleId: string,
    ): CancelablePromise<Array<UserDetailResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/roles/{role_id}/users',
            path: {
                'operator_id': operatorId,
                'role_id': roleId,
            },
            errors: {
                404: `ロールが見つかりません。`,
            },
        });
    }
    /**
     * SAM ユーザーに紐づくロールの一覧を取得する
     * SAM ユーザーのロールの一覧を取得する。
     * @param operatorId オペレーター ID。
     * @param userName SAM ユーザー名。
     * @returns RoleResponse OK.
     * @throws ApiError
     */
    public static listUserRoles(
        operatorId: string,
        userName: string,
    ): CancelablePromise<Array<RoleResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/users/{user_name}/roles',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            errors: {
                404: `SAM ユーザーが存在しません。`,
            },
        });
    }
    /**
     * SAM ユーザーにロールをアタッチする (紐づける)
     * SAM ユーザーにロールをアタッチする。
     * @param operatorId オペレーター ID。
     * @param userName SAM ユーザー名。
     * @param requestBody ロール ID。
     * @returns any OK.
     * @throws ApiError
     */
    public static attachRole(
        operatorId: string,
        userName: string,
        requestBody: AttachRoleRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/users/{user_name}/roles',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `指定されたロールはすでにアタッチされているか、あるいは存在しません。`,
                404: `SAM ユーザーが存在しません。`,
            },
        });
    }
    /**
     * SAM ユーザーからロールをデタッチする (紐づけを解除する)
     * SAM ユーザーからロールをデタッチする。
     * @param operatorId オペレーター ID。
     * @param userName SAM ユーザー名。
     * @param roleId ロール ID。
     * @returns any OK.
     * @throws ApiError
     */
    public static detachRole(
        operatorId: string,
        userName: string,
        roleId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/users/{user_name}/roles/{role_id}',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
                'role_id': roleId,
            },
            errors: {
                404: `SAM ユーザーまたはロールが存在しません。`,
            },
        });
    }
}
