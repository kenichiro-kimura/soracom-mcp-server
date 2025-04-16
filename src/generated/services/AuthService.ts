/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthRequest } from '../models/AuthRequest';
import type { AuthResponse } from '../models/AuthResponse';
import type { IssuePasswordResetTokenRequest } from '../models/IssuePasswordResetTokenRequest';
import type { SwitchUserRequest } from '../models/SwitchUserRequest';
import type { VerifyPasswordResetTokenRequest } from '../models/VerifyPasswordResetTokenRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * API アクセスの認証を行い、API キーと API トークンを発行する
     * API アクセスの認証を行います。以下の情報をリクエストに含めてください。
     *
     * - ルートユーザーで認証する場合: email と password
     * - ルートユーザーまたは SAM ユーザーの認証キーで認証する場合: authKeyId と authKey
     * - SAM ユーザー認証の場合: operatorId, userName, password
     *
     * 認証が成功した場合は、API キーと API トークンが返されます。以降の認証が必要なリクエスト時にはこの API キーと API トークンをヘッダーに付与してリクエストを行ってください。
     *
     * @param requestBody 認証リクエスト
     * @returns AuthResponse 認証に成功しました。
     * @throws ApiError
     */
    
    static apiKey?: string = '';
    static token?: string = '';

    public static setApiKey(apiKey?: string): void  {
        AuthService.apiKey = apiKey;
    }

    public static setToken(token?: string): void  {
        AuthService.token = token;
    }

    public static getApiKey(): string | undefined {
        return AuthService.apiKey;
    }

    public static getToken(): string | undefined { 
        return AuthService.token;
    }

    public static auth(
        requestBody: AuthRequest,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',            url: '/auth',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `認証に失敗しました。`,
            },
        });
    }
    /**
     * SORACOM API にアクセスするための API キーと API トークンを無効化する
     * この API を呼び出すときに指定された API キーと API トークンを無効化します。無効化したあとは、有効期間に関わらず API キーと API トークンを用いて SORACOM API を呼び出すことはできません。この API は、権限設定に関わらず呼び出すことができます。
     * @returns void
     * @throws ApiError
     */
    public static logout(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/logout',
        });
    }
    /**
     * パスワードリセット用のトークンを発行する
     * パスワードをリセットするためのワンタイムトークンを生成して、オペレーターのメールアドレスに送付します。メールに記載されているトークンを取得し、/v1/auth/password_reset_token/verify API を呼び出して新しいパスワードを設定します。
     * @param requestBody email address
     * @returns any OK.
     * @throws ApiError
     */
    public static issuePasswordResetToken(
        requestBody: IssuePasswordResetTokenRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/password_reset_token/issue',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `メールアドレスが正しくありません。`,
            },
        });
    }
    /**
     * パスワードリセット用のトークンを検証し、パスワードを更新する
     * パスワードリセット用のトークンを検証し、検証に成功した場合オペレーターのパスワードを更新します。
     * @param requestBody token, password
     * @returns any OK.
     * @throws ApiError
     */
    public static verifyPasswordResetToken(
        requestBody: VerifyPasswordResetTokenRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/password_reset_token/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なトークンが指定されました。`,
                404: `トークンの有効期限が切れています。`,
            },
        });
    }
    /**
     * ほかのユーザーとして SORACOM API を呼び出すための API キーと API トークンを発行する
     * 元のユーザーの API キーと API トークンを利用して、この API を呼び出し、スイッチ先のユーザーの API キーと API トークンを発行します。あらかじめスイッチ先のユーザーの信頼ポリシーに、元のユーザーを登録してください。信頼ポリシーの更新については、[User:updateUserTrustPolicy](#/User/updateUserTrustPolicy) を参照してください。
     * @param requestBody スイッチ先のユーザーと、発行する API トークンの有効期間を指定します。
     * @returns AuthResponse 認証に成功しました。
     * @throws ApiError
     */
    public static switchUser(
        requestBody: SwitchUserRequest,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/switch_user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `許可されていません。`,
            },
        });
    }
}
