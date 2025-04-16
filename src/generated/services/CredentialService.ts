/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAndUpdateCredentialsModel } from '../models/CreateAndUpdateCredentialsModel';
import type { CredentialsModel } from '../models/CredentialsModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CredentialService {
    /**
     * 認証情報の表示
     * 認証情報の一覧を返す。
     * @returns CredentialsModel OK.
     * @throws ApiError
     */
    public static listCredentials(): CancelablePromise<Array<CredentialsModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/credentials',
        });
    }
    /**
     * 認証情報の削除
     * 認証情報を削除する。
     * @param credentialsId 認証情報 ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteCredential(
        credentialsId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/credentials/{credentials_id}',
            path: {
                'credentials_id': credentialsId,
            },
            errors: {
                404: `認証情報 ID が見つかりません。`,
            },
        });
    }
    /**
     * 認証情報の作成
     * 認証情報を新規作成する。
     * @param credentialsId 認証情報 ID。
     * @param requestBody 認証情報。
     * @returns CredentialsModel 認証情報が作成されました。
     * @throws ApiError
     */
    public static createCredential(
        credentialsId: string,
        requestBody: CreateAndUpdateCredentialsModel,
    ): CancelablePromise<CredentialsModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/credentials/{credentials_id}',
            path: {
                'credentials_id': credentialsId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 認証情報の更新
     * 認証情報を更新する。
     * @param credentialsId 認証情報 ID。
     * @param requestBody 認証情報。
     * @returns CredentialsModel OK.
     * @throws ApiError
     */
    public static updateCredential(
        credentialsId: string,
        requestBody: CreateAndUpdateCredentialsModel,
    ): CancelablePromise<CredentialsModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/credentials/{credentials_id}',
            path: {
                'credentials_id': credentialsId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `リクエストに誤りがあるか、指定されたトークンがすでに無効になっている（後者の場合、/auth API で再度認証を行う必要がある）`,
            },
        });
    }
}
