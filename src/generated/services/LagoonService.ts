/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LagoonLicensePackStatusResponse } from '../models/LagoonLicensePackStatusResponse';
import type { LagoonLicensePacksUpdatingRequest } from '../models/LagoonLicensePacksUpdatingRequest';
import type { LagoonPlanChangingRequest } from '../models/LagoonPlanChangingRequest';
import type { LagoonRegistrationRequest } from '../models/LagoonRegistrationRequest';
import type { LagoonRegistrationResponse } from '../models/LagoonRegistrationResponse';
import type { LagoonUser } from '../models/LagoonUser';
import type { LagoonUserCreationRequest } from '../models/LagoonUserCreationRequest';
import type { LagoonUserCreationResponse } from '../models/LagoonUserCreationResponse';
import type { LagoonUserEmailUpdatingRequest } from '../models/LagoonUserEmailUpdatingRequest';
import type { LagoonUserPasswordUpdatingRequest } from '../models/LagoonUserPasswordUpdatingRequest';
import type { LagoonUserPermissionUpdatingRequest } from '../models/LagoonUserPermissionUpdatingRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LagoonService {
    /**
     * SORACOM Lagoon コンソールのロゴの URL を取得する
     * SORACOM Lagoon コンソールのロゴの URL を取得します。
     * @returns string OK.
     * @throws ApiError
     */
    public static getImageLink(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lagoon/image/link',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * SORACOM Lagoon のライセンスパックのステータス取得
     * SORACOM Lagoon のライセンスパックのステータスを取得します。
     * @returns LagoonLicensePackStatusResponse OK.
     * @throws ApiError
     */
    public static listLagoonLicensePackStatus(): CancelablePromise<Array<LagoonLicensePackStatusResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lagoon/license_packs',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * SORACOM Lagoon のライセンスパック数を変更する
     * SORACOM Lagoon のライセンスパック数を変更します。
     *
     * **Warning**: ルートユーザーの認証情報を使用して実行してください。SAM ユーザーの認証情報では、Lagoon のライセンスパック数を変更できません。
     *
     * @param requestBody リクエスト。
     * @returns void
     * @throws ApiError
     */
    public static updateLagoonLicensePack(
        requestBody: LagoonLicensePacksUpdatingRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lagoon/license_packs',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
                404: `オペレーターが見つかりません。`,
            },
        });
    }
    /**
     * SORACOM Lagoon のプランを変更する
     * SORACOM Lagoon のプランを変更します。
     *
     * **Warning**: ルートユーザーの認証情報を使用して実行してください。SAM ユーザーの認証情報では、Lagoon のプランを変更できません。
     *
     * @param requestBody リクエスト。
     * @returns void
     * @throws ApiError
     */
    public static updateLagoonPlan(
        requestBody: LagoonPlanChangingRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lagoon/plan',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
                404: `オペレーターが見つかりません。`,
            },
        });
    }
    /**
     * SORACOM Lagoon 3 の利用を開始する
     * SORACOM Lagoon 3 の利用を開始します。
     *
     * **Warning**: ルートユーザーの認証情報を使用して実行してください。SAM ユーザーの認証情報では、Lagoon の利用を開始できません。
     *
     * @param requestBody リクエスト。
     * @returns LagoonRegistrationResponse 利用が開始されました。
     * @throws ApiError
     */
    public static registerLagoon(
        requestBody: LagoonRegistrationRequest,
    ): CancelablePromise<LagoonRegistrationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lagoon/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * SORACOM Lagoon を解約する
     * SORACOM Lagoon を解約します。
     *
     * **Warning**: ルートユーザーの認証情報を使用して実行してください。SAM ユーザーの認証情報では、Lagoon を解約できません。
     *
     * @returns void
     * @throws ApiError
     */
    public static terminateLagoon(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lagoon/terminate',
            errors: {
                400: `不正なリクエストです。`,
                404: `オペレーターが見つかりません。`,
            },
        });
    }
    /**
     * オペレーターに属する SORACOM Lagoon のユーザー一覧を取得する
     * オペレーターに属する SORACOM Lagoon のユーザー一覧を取得します。
     * @returns LagoonUser OK.
     * @throws ApiError
     */
    public static listLagoonUsers(): CancelablePromise<Array<LagoonUser>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lagoon/users',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * SORACOM Lagoon のユーザーを新たに作成する
     * SORACOM Lagoon のユーザーを新たに作成します。
     * @param requestBody リクエスト。
     * @returns LagoonUserCreationResponse 作成されました。
     * @throws ApiError
     */
    public static createLagoonUser(
        requestBody: LagoonUserCreationRequest,
    ): CancelablePromise<LagoonUserCreationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lagoon/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * SORACOM Lagoon のユーザーを削除する
     * SORACOM Lagoon のユーザーを削除します。
     * @param lagoonUserId 対象の SORACOM Lagoon ユーザーの ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteLagoonUser(
        lagoonUserId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lagoon/users/{lagoon_user_id}',
            path: {
                'lagoon_user_id': lagoonUserId,
            },
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * SORACOM Lagoon のユーザーのメールアドレスを変更する
     * SORACOM Lagoon のユーザーのメールアドレスを変更します。
     * @param lagoonUserId 対象の SORACOM Lagoon ユーザーの ID。
     * @param requestBody リクエスト。
     * @returns any OK.
     * @throws ApiError
     */
    public static updateLagoonUserEmail(
        lagoonUserId: number,
        requestBody: LagoonUserEmailUpdatingRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lagoon/users/{lagoon_user_id}/email',
            path: {
                'lagoon_user_id': lagoonUserId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * SORACOM Lagoon のユーザーのパスワードを変更する
     * SORACOM Lagoon のユーザーのパスワードを変更します。
     * @param lagoonUserId 対象の SORACOM Lagoon ユーザーの ID。
     * @param requestBody リクエスト。
     * @returns any OK.
     * @throws ApiError
     */
    public static updateLagoonUserPassword(
        lagoonUserId: number,
        requestBody: LagoonUserPasswordUpdatingRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lagoon/users/{lagoon_user_id}/password',
            path: {
                'lagoon_user_id': lagoonUserId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * SORACOM Lagoon のユーザーの権限を変更する
     * SORACOM Lagoon のユーザーの権限を変更します。
     * @param lagoonUserId 対象の SORACOM Lagoon ユーザーの ID。
     * @param requestBody リクエスト。
     * @returns any OK.
     * @throws ApiError
     */
    public static updateLagoonUserPermission(
        lagoonUserId: number,
        requestBody: LagoonUserPermissionUpdatingRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lagoon/users/{lagoon_user_id}/permission',
            path: {
                'lagoon_user_id': lagoonUserId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
}
