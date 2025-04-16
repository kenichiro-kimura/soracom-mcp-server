/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEventHandlerRequest } from '../models/CreateEventHandlerRequest';
import type { EventHandlerModel } from '../models/EventHandlerModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EventHandlerService {
    /**
     * イベントハンドラーの一覧を取得する
     * イベントハンドラーの一覧を返す。
     * @param target 監視対象 (イベントを実行する対象)。
     * @returns EventHandlerModel OK.
     * @throws ApiError
     */
    public static listEventHandlers(
        target?: 'operator' | 'imsi' | 'sim' | 'group',
    ): CancelablePromise<Array<EventHandlerModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event_handlers',
            query: {
                'target': target,
            },
        });
    }
    /**
     * イベントハンドラーを作成する
     * イベントハンドラーを新規作成する。リクエストパラメータの指定方法については、イベントハンドラーの [SORACOM CLI / SORACOM API で作成する](/ja-jp/docs/event-handler/configure-with-api/) を参照してください。
     * @param requestBody イベントハンドラーの設定内容。
     * @returns EventHandlerModel イベントハンドラーが作成されました。
     * @throws ApiError
     */
    public static createEventHandler(
        requestBody: CreateEventHandlerRequest,
    ): CancelablePromise<EventHandlerModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event_handlers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * イベントハンドラーを削除する
     * 指定されたイベントハンドラーを削除する。
     * @param handlerId イベントハンドラー ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteEventHandler(
        handlerId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/event_handlers/{handler_id}',
            path: {
                'handler_id': handlerId,
            },
            errors: {
                404: `イベントハンドラーが見つかりません。`,
            },
        });
    }
    /**
     * イベントハンドラーの情報を取得する
     * 指定されたイベントハンドラーの情報を返す。
     * @param handlerId イベントハンドラー ID。
     * @returns EventHandlerModel OK.
     * @throws ApiError
     */
    public static getEventHandler(
        handlerId: string,
    ): CancelablePromise<EventHandlerModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event_handlers/{handler_id}',
            path: {
                'handler_id': handlerId,
            },
            errors: {
                404: `イベントハンドラーが見つかりません。`,
            },
        });
    }
    /**
     * イベントハンドラーの情報を更新する
     * 指定されたイベントハンドラーを更新する。リクエストパラメータの指定方法については、イベントハンドラーの [SORACOM CLI / SORACOM API で作成する](/ja-jp/docs/event-handler/configure-with-api/) を参照してください。
     * @param handlerId イベントハンドラー ID。
     * @param requestBody イベントハンドラーの設定内容。
     * @returns any OK.
     * @throws ApiError
     */
    public static updateEventHandler(
        handlerId: string,
        requestBody: CreateEventHandlerRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/event_handlers/{handler_id}',
            path: {
                'handler_id': handlerId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なイベントハンドラー ID が指定されました。`,
            },
        });
    }
    /**
     * イベントハンドラーを無視する設定を削除する
     * 指定の IMSI に対して、指定のイベントハンドラーを無視する設定を削除。
     * @param imsi IMSI。
     * @param handlerId イベントハンドラー ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteIgnoreEventHandler(
        imsi: string,
        handlerId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/event_handlers/{handler_id}/subscribers/{imsi}/ignore',
            path: {
                'imsi': imsi,
                'handler_id': handlerId,
            },
            errors: {
                404: `イベントハンドラーが見つかりません。`,
            },
        });
    }
    /**
     * イベントハンドラーを無視する設定を追加する
     * 指定の IMSI に対して、指定のイベントハンドラーを無視する設定を追加。
     * @param imsi IMSI。
     * @param handlerId イベントハンドラー ID。
     * @returns any OK.
     * @throws ApiError
     */
    public static setIgnoreEventHandler(
        imsi: string,
        handlerId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event_handlers/{handler_id}/subscribers/{imsi}/ignore',
            path: {
                'imsi': imsi,
                'handler_id': handlerId,
            },
        });
    }
    /**
     * IMSI に紐づくイベントハンドラーのリストを取得する
     * 対象 IMSI に紐づくイベントハンドラーのリストを返す。
     * @param imsi IMSI。
     * @returns EventHandlerModel OK.
     * @throws ApiError
     */
    public static listEventHandlersBySubscriber(
        imsi: string,
    ): CancelablePromise<Array<EventHandlerModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event_handlers/subscribers/{imsi}',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `イベントハンドラーが見つかりません。`,
            },
        });
    }
}
