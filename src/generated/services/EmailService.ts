/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailsModel } from '../models/EmailsModel';
import type { IssueAddEmailTokenRequest } from '../models/IssueAddEmailTokenRequest';
import type { VerifyAddEmailTokenRequest } from '../models/VerifyAddEmailTokenRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmailService {
    /**
     * メールアドレスの一覧を取得する
     * メールアドレスの一覧を返す。
     * @param operatorId オペレーター ID。
     * @returns EmailsModel OK.
     * @throws ApiError
     */
    public static listEmails(
        operatorId: string,
    ): CancelablePromise<Array<EmailsModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/emails',
            path: {
                'operator_id': operatorId,
            },
            errors: {
                400: `SAM ユーザーの認証情報を使用して呼び出しました。ルートユーザーの認証情報を使用して呼び出してください。
                `,
            },
        });
    }
    /**
     * メールアドレスを削除する
     * メールアドレスを削除する。
     * @param operatorId オペレーター ID。
     * @param emailId メールアドレス ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteEmail(
        operatorId: string,
        emailId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/emails/{email_id}',
            path: {
                'operator_id': operatorId,
                'email_id': emailId,
            },
        });
    }
    /**
     * メールアドレスの情報を取得する
     * メールアドレスの情報を取得する。
     * @param operatorId オペレーター ID。
     * @param emailId メールアドレス ID。
     * @returns EmailsModel OK.
     * @throws ApiError
     */
    public static getEmail(
        operatorId: string,
        emailId: string,
    ): CancelablePromise<EmailsModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/emails/{email_id}',
            path: {
                'operator_id': operatorId,
                'email_id': emailId,
            },
        });
    }
    /**
     * メールアドレス追加用のトークンを送付する
     * メールアドレス追加用のトークンをメールで送付する。
     * @param requestBody リクエスト。
     * @returns any OK.
     * @throws ApiError
     */
    public static issueAddEmailToken(
        requestBody: IssueAddEmailTokenRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/add_email_token/issue',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `メール登録数の最大を超過しました。`,
            },
        });
    }
    /**
     * メールアドレス追加用のトークンを検証する
     * メールアドレス追加用のトークンを確認して、メールアドレスを追加する。
     * @param requestBody リクエスト。
     * @returns any OK.
     * @throws ApiError
     */
    public static verifyAddEmailToken(
        requestBody: VerifyAddEmailTokenRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/add_email_token/verify',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
