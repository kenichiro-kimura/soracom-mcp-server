/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SetSystemNotificationsRequest } from '../models/SetSystemNotificationsRequest';
import type { SystemNotificationsModel } from '../models/SystemNotificationsModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SystemNotificationService {
    /**
     * メールアドレス設定の一覧を取得する
     * メールアドレス設定の一覧を返す。
     * @param operatorId オペレーター ID
     * @returns SystemNotificationsModel OK.
     * @throws ApiError
     */
    public static listSystemNotifications(
        operatorId: string,
    ): CancelablePromise<Array<SystemNotificationsModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/system_notifications',
            path: {
                'operator_id': operatorId,
            },
        });
    }
    /**
     * メールアドレス設定からメールアドレスを削除する
     * メールアドレス設定からメールアドレスを削除する。
     * @param operatorId オペレーター ID。
     * @param type メールアドレスの種類。
     * @returns void
     * @throws ApiError
     */
    public static deleteSystemNotification(
        operatorId: string,
        type: 'recovery' | 'billing' | 'support',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/system_notifications/{type}',
            path: {
                'operator_id': operatorId,
                'type': type,
            },
        });
    }
    /**
     * メールアドレス設定の情報を取得する
     * メールアドレス設定を返す。
     * @param operatorId オペレーター ID。
     * @param type メールアドレスの種類。
     * @returns SystemNotificationsModel OK.
     * @throws ApiError
     */
    public static getSystemNotification(
        operatorId: string,
        type: 'primary' | 'recovery' | 'billing' | 'support',
    ): CancelablePromise<SystemNotificationsModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/system_notifications/{type}',
            path: {
                'operator_id': operatorId,
                'type': type,
            },
        });
    }
    /**
     * メールアドレス設定にメールアドレスを設定する
     * メールアドレス設定にメールアドレスを設定する。
     * @param operatorId オペレーター ID
     * @param type メールアドレスの種類。
     * @param requestBody リクエスト。
     * @returns SystemNotificationsModel OK.
     * @throws ApiError
     */
    public static setSystemNotification(
        operatorId: string,
        type: 'primary' | 'recovery' | 'billing' | 'support',
        requestBody: SetSystemNotificationsRequest,
    ): CancelablePromise<SystemNotificationsModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/system_notifications/{type}',
            path: {
                'operator_id': operatorId,
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
