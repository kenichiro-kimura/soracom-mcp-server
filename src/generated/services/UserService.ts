/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthKeyResponse } from '../models/AuthKeyResponse';
import type { CreateUserPasswordRequest } from '../models/CreateUserPasswordRequest';
import type { CreateUserRequest } from '../models/CreateUserRequest';
import type { EnableMFAOTPResponse } from '../models/EnableMFAOTPResponse';
import type { GenerateUserAuthKeyResponse } from '../models/GenerateUserAuthKeyResponse';
import type { GetDefaultPermissionsResponse } from '../models/GetDefaultPermissionsResponse';
import type { GetUserPasswordResponse } from '../models/GetUserPasswordResponse';
import type { GetUserPermissionResponse } from '../models/GetUserPermissionResponse';
import type { GetUserTrustPolicyResponse } from '../models/GetUserTrustPolicyResponse';
import type { MFAAuthenticationRequest } from '../models/MFAAuthenticationRequest';
import type { MFAStatusOfUseResponse } from '../models/MFAStatusOfUseResponse';
import type { SetUserPermissionRequest } from '../models/SetUserPermissionRequest';
import type { SetUserTrustPolicyRequest } from '../models/SetUserTrustPolicyRequest';
import type { UpdateDefaultPermissionsRequest } from '../models/UpdateDefaultPermissionsRequest';
import type { UpdatePasswordRequest } from '../models/UpdatePasswordRequest';
import type { UpdateUserRequest } from '../models/UpdateUserRequest';
import type { UserDetailResponse } from '../models/UserDetailResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * SAM ユーザーの一覧を取得する
     * SAM ユーザーの一覧を取得します。
     * @param operatorId オペレーター ID。
     * @returns UserDetailResponse OK.
     * @throws ApiError
     */
    public static listUsers(
        operatorId: string,
    ): CancelablePromise<Array<UserDetailResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/users',
            path: {
                'operator_id': operatorId,
            },
        });
    }
    /**
     * SAM ユーザーを削除する
     * SAM ユーザーを削除する。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @returns void
     * @throws ApiError
     */
    public static deleteUser(
        operatorId: string,
        userName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/users/{user_name}',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            errors: {
                404: `SAM ユーザーが見つかりません。`,
            },
        });
    }
    /**
     * SAM ユーザーの情報を取得する
     * SAM ユーザーを返す。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @returns UserDetailResponse OK.
     * @throws ApiError
     */
    public static getUser(
        operatorId: string,
        userName: string,
    ): CancelablePromise<UserDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/users/{user_name}',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
        });
    }
    /**
     * SAM ユーザーを作成する
     * SAM ユーザーを新しく追加する。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @param requestBody description
     * @returns any SAM ユーザーが新しく追加されました。
     * @throws ApiError
     */
    public static createUser(
        operatorId: string,
        userName: string,
        requestBody: CreateUserRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/users/{user_name}',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `SAM ユーザーの作成に失敗しました。`,
            },
        });
    }
    /**
     * SAM ユーザーの情報を更新する
     * SAM ユーザーを更新する。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @param requestBody description
     * @returns any OK
     * @throws ApiError
     */
    public static updateUser(
        operatorId: string,
        userName: string,
        requestBody: UpdateUserRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/operators/{operator_id}/users/{user_name}',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `SAM User not found.`,
            },
        });
    }
    /**
     * SAM ユーザーの認証キーの一覧を取得する
     * SAM ユーザーの認証キーの一覧を返す。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @returns AuthKeyResponse OK.
     * @throws ApiError
     */
    public static listUserAuthKeys(
        operatorId: string,
        userName: string,
    ): CancelablePromise<Array<AuthKeyResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/users/{user_name}/auth_keys',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
        });
    }
    /**
     * SAM ユーザーの認証キーを生成する
     * SAM ユーザーの認証キーを生成する。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @returns GenerateUserAuthKeyResponse OK.
     * @throws ApiError
     */
    public static generateUserAuthKey(
        operatorId: string,
        userName: string,
    ): CancelablePromise<GenerateUserAuthKeyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/users/{user_name}/auth_keys',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
        });
    }
    /**
     * SAM ユーザーの認証キーを削除する
     * SAM ユーザーの認証キーを削除する。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @param authKeyId auth_key_id
     * @returns void
     * @throws ApiError
     */
    public static deleteUserAuthKey(
        operatorId: string,
        userName: string,
        authKeyId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/users/{user_name}/auth_keys/{auth_key_id}',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
                'auth_key_id': authKeyId,
            },
            errors: {
                404: `認証キーが見つかりません。`,
            },
        });
    }
    /**
     * SAM ユーザーの認証キーを取得する
     * SAM ユーザーの認証キーを返す。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @param authKeyId auth_key_id
     * @returns AuthKeyResponse OK.
     * @throws ApiError
     */
    public static getUserAuthKey(
        operatorId: string,
        userName: string,
        authKeyId: string,
    ): CancelablePromise<AuthKeyResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/users/{user_name}/auth_keys/{auth_key_id}',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
                'auth_key_id': authKeyId,
            },
        });
    }
    /**
     * SAM ユーザーの MFA を無効にする
     * SAM ユーザーの MFA を無効にする
     * @param operatorId オペレーター ID
     * @param userName SAM ユーザー名
     * @returns void
     * @throws ApiError
     */
    public static revokeUserMfa(
        operatorId: string,
        userName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/users/{user_name}/mfa',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            errors: {
                400: `不正なリクエストです`,
            },
        });
    }
    /**
     * SAM ユーザーの MFA の使用状態を取得する
     * SAM ユーザーの MFA の使用状態を取得する
     * @param operatorId オペレーター ID
     * @param userName SAM ユーザー名
     * @returns MFAStatusOfUseResponse OK
     * @throws ApiError
     */
    public static getUserMfaStatus(
        operatorId: string,
        userName: string,
    ): CancelablePromise<MFAStatusOfUseResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/users/{user_name}/mfa',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            errors: {
                400: `不正なリクエストです`,
            },
        });
    }
    /**
     * SAM ユーザーの MFA を有効化する
     * SAM ユーザーの MFA を有効化します。
     * @param operatorId オペレーター ID
     * @param userName SAM ユーザー名
     * @returns EnableMFAOTPResponse OK
     * @throws ApiError
     */
    public static enableUserMfa(
        operatorId: string,
        userName: string,
    ): CancelablePromise<EnableMFAOTPResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/users/{user_name}/mfa',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            errors: {
                400: `不正なリクエストです`,
            },
        });
    }
    /**
     * SAM ユーザーの MFA を有効にした後に MFA OTP が正しく受理されるかを検証する
     * SAM ユーザーの MFA を有効にした後に MFA OTP が正しく受理されるかを検証する
     * @param operatorId オペレーター ID
     * @param userName SAM ユーザー名
     * @param requestBody request
     * @returns void
     * @throws ApiError
     */
    public static verifyUserMfa(
        operatorId: string,
        userName: string,
        requestBody: MFAAuthenticationRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/users/{user_name}/mfa/verify',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです`,
            },
        });
    }
    /**
     * SAM ユーザーのパスワードを削除する
     * ユーザーのパスワードを削除する。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @returns void
     * @throws ApiError
     */
    public static deleteUserPassword(
        operatorId: string,
        userName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/users/{user_name}/password',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            errors: {
                404: `パスワードが登録されていません。`,
            },
        });
    }
    /**
     * SAM ユーザーのパスワードの設定状態を取得する
     * SAM ユーザーのパスワードがセットされているかを取得する。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @returns GetUserPasswordResponse OK.
     * @throws ApiError
     */
    public static hasUserPassword(
        operatorId: string,
        userName: string,
    ): CancelablePromise<GetUserPasswordResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/users/{user_name}/password',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
        });
    }
    /**
     * SAM ユーザーのパスワードを作成する
     * SAM ユーザーのパスワードを作成する。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @param requestBody password
     * @returns any SAM ユーザーのパスワードが登録されました。
     * @throws ApiError
     */
    public static createUserPassword(
        operatorId: string,
        userName: string,
        requestBody: CreateUserPasswordRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/users/{user_name}/password',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAM ユーザーのパスワードを更新する
     * SAM ユーザーのパスワードを更新する。
     * @param operatorId オペレーター ID
     * @param userName user_name
     * @param requestBody password
     * @returns any OK
     * @throws ApiError
     */
    public static updateUserPassword(
        operatorId: string,
        userName: string,
        requestBody: UpdatePasswordRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/operators/{operator_id}/users/{user_name}/password',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAM ユーザーの権限を削除する
     * SAM ユーザーの権限を削除する。
     * @param operatorId オペレーター ID
     * @param userName SAM ユーザー名
     * @returns void
     * @throws ApiError
     */
    public static deleteUserPermission(
        operatorId: string,
        userName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/users/{user_name}/permission',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            errors: {
                400: `不正なオペレーター ID または SAM ユーザー名です。`,
            },
        });
    }
    /**
     * SAM ユーザーの権限を取得する
     * SAM ユーザーの権限を取得する。
     * @param operatorId オペレーター ID
     * @param userName SAM ユーザー名
     * @returns GetUserPermissionResponse OK.
     * @throws ApiError
     */
    public static getUserPermission(
        operatorId: string,
        userName: string,
    ): CancelablePromise<GetUserPermissionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/users/{user_name}/permission',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
        });
    }
    /**
     * SAM ユーザーの権限を更新する
     * SAM ユーザーの権限を更新する。
     * @param operatorId オペレーター ID
     * @param userName SAM ユーザー名
     * @param requestBody 権限
     * @returns any OK
     * @throws ApiError
     */
    public static updateUserPermission(
        operatorId: string,
        userName: string,
        requestBody: SetUserPermissionRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/operators/{operator_id}/users/{user_name}/permission',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 指定された SAM ユーザーに対して発行されたすべての API キーと API トークンを無効化する
     * 指定された SAM ユーザーに対して発行されたすべての API キーと API トークンを無効化します。無効化されたあとは、有効期間に関わらず API キーと API トークンを用いて SORACOM API を呼び出すことはできません。
     * @param operatorId オペレーター ID
     * @param userName SAM ユーザー名
     * @returns void
     * @throws ApiError
     */
    public static revokeUserAuthTokens(
        operatorId: string,
        userName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/users/{user_name}/tokens',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            errors: {
                400: `誤ったオペレーター ID または SAM ユーザー名が指定されました。`,
            },
        });
    }
    /**
     * 信頼ポリシーを削除する
     * SAM ユーザーに設定された信頼ポリシーを削除します。
     * @param operatorId オペレーター ID。
     * @param userName SAM ユーザー名。
     * @returns void
     * @throws ApiError
     */
    public static deleteUserTrustPolicy(
        operatorId: string,
        userName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/users/{user_name}/trust_policy',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * 信頼ポリシーを取得する
     * SAM ユーザーに設定された信頼ポリシーを取得します。
     * @param operatorId オペレーター ID。
     * @param userName SAM ユーザー名。
     * @returns GetUserTrustPolicyResponse 信頼ポリシーの取得に成功しました。
     * @throws ApiError
     */
    public static getUserTrustPolicy(
        operatorId: string,
        userName: string,
    ): CancelablePromise<GetUserTrustPolicyResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/users/{user_name}/trust_policy',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * 信頼ポリシーを更新する
     * `operator_id` と `user_name` で指定した SAM ユーザーに設定された信頼ポリシーを更新します。
     *
     * **Warning**: 信頼ポリシーを設定すると、リクエストボディで指定したルートユーザーまたは SAM ユーザー (元のユーザー) が、`operator_id` と `user_name` で指定した SAM ユーザー(スイッチ先のユーザー) にスイッチできるようになります。元のユーザーがスイッチしたときは、元のユーザーに、スイッチ先のユーザーと同じ権限が与えられ、権限によっては、セッション履歴、通信量履歴など、このオペレーターに関する機微な情報を参照できることがあります。
     *
     * @param operatorId オペレーター ID。
     * @param userName SAM ユーザー名。
     * @param requestBody 信頼ポリシーを指定します。
     * @returns void
     * @throws ApiError
     */
    public static updateUserTrustPolicy(
        operatorId: string,
        userName: string,
        requestBody: SetUserTrustPolicyRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/operators/{operator_id}/users/{user_name}/trust_policy',
            path: {
                'operator_id': operatorId,
                'user_name': userName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * すべての SAM ユーザーに適用されるデフォルト権限を削除する
     * すべての SAM ユーザーに適用されるデフォルト権限を削除する。
     * @param operatorId オペレーター ID
     * @returns void
     * @throws ApiError
     */
    public static deleteDefaultPermissions(
        operatorId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/users/default_permissions',
            path: {
                'operator_id': operatorId,
            },
            errors: {
                403: `許可されていません。`,
                404: `オペレーターが存在しません。`,
            },
        });
    }
    /**
     * すべての SAM ユーザーに適用されるデフォルト権限を取得する
     * すべての SAM ユーザーに適用されるデフォルト権限を取得する。
     * @param operatorId オペレーター ID
     * @returns GetDefaultPermissionsResponse OK
     * @throws ApiError
     */
    public static getDefaultPermissions(
        operatorId: string,
    ): CancelablePromise<GetDefaultPermissionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/users/default_permissions',
            path: {
                'operator_id': operatorId,
            },
            errors: {
                403: `許可されていません`,
                404: `オペレーターが存在しません`,
            },
        });
    }
    /**
     * すべての SAM ユーザーに適用されるデフォルト権限を更新する
     * すべての SAM ユーザーに適用されるデフォルト権限を更新します。
     * @param operatorId オペレーター ID
     * @param requestBody request
     * @returns any 受理されました
     * @throws ApiError
     */
    public static updateDefaultPermissions(
        operatorId: string,
        requestBody: UpdateDefaultPermissionsRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/operators/{operator_id}/users/default_permissions',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです`,
                403: `許可されていません`,
            },
        });
    }
}
