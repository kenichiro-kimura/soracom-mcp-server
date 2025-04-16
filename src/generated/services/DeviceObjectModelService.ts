/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceObjectModel } from '../models/DeviceObjectModel';
import type { SetDeviceObjectModelScopeRequest } from '../models/SetDeviceObjectModelScopeRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DeviceObjectModelService {
    /**
     * デバイスオブジェクトモデルのリストを返す
     * デバイスオブジェクトモデルのリストを返します。
     * @param lastEvaluatedKey 前ページで取得した最後のデバイスオブジェクトモデルの ID。このパラメータを指定することで次のデバイスオブジェクトモデル以降のリストを取得できる。
     * @param limit 取得する結果の上限数
     * @returns DeviceObjectModel デバイスオブジェクトモデル定義のリスト
     * @throws ApiError
     */
    public static listDeviceObjectModels(
        lastEvaluatedKey?: string,
        limit: number = -1,
    ): CancelablePromise<Array<DeviceObjectModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/device_object_models',
            query: {
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
            },
        });
    }
    /**
     * 新しいデバイスオブジェクトモデルを作成する
     * 新しいデバイスオブジェクトモデルを作成します。
     * @param requestBody XML か JSON により表現されたデバイスオブジェクトモデルの表記。
     * @returns DeviceObjectModel デバイスオブジェクトモデルが作成されました
     * @throws ApiError
     */
    public static createDeviceObjectModel(
        requestBody: DeviceObjectModel,
    ): CancelablePromise<DeviceObjectModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device_object_models',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `デバイスオブジェクトモデル定義の解析に失敗しました`,
            },
        });
    }
    /**
     * 対象のデバイスオブジェクトモデルを削除する
     * 対象のデバイスオブジェクトモデルを削除します。
     * @param modelId 対象のデバイスオブジェクトモデルの ID
     * @returns void
     * @throws ApiError
     */
    public static deleteDeviceObjectModel(
        modelId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/device_object_models/{model_id}',
            path: {
                'model_id': modelId,
            },
            errors: {
                404: `デバイスオブジェクトモデルが見つかりません`,
            },
        });
    }
    /**
     * デバイスオブジェクトモデルを取得する
     * デバイスオブジェクトモデルを取得します。
     * @param modelId 対象のデバイスオブジェクトモデルの ID
     * @returns DeviceObjectModel 取得したデバイスオブジェクトモデル
     * @throws ApiError
     */
    public static getDeviceObjectModel(
        modelId: string,
    ): CancelablePromise<DeviceObjectModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/device_object_models/{model_id}',
            path: {
                'model_id': modelId,
            },
            errors: {
                404: `デバイスオブジェクトモデルが見つかりません`,
            },
        });
    }
    /**
     * デバイスオブジェクトモデルを更新する
     * デバイスオブジェクトモデルを更新します。
     * @param modelId 対象のデバイスオブジェクトモデルの ID
     * @param requestBody XML か JSON により表現されたデバイスオブジェクトモデルの表記。
     * @returns DeviceObjectModel デバイスオブジェクトモデルが更新されました
     * @throws ApiError
     */
    public static updateDeviceObjectModel(
        modelId: string,
        requestBody: DeviceObjectModel,
    ): CancelablePromise<DeviceObjectModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device_object_models/{model_id}',
            path: {
                'model_id': modelId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `デバイスオブジェクトモデル定義の解析に失敗しました`,
                404: `デバイスオブジェクトモデルが見つかりません`,
            },
        });
    }
    /**
     * 対象のデバイスオブジェクトモデルが適用される Scope をセットする
     * 対象のデバイスオブジェクトモデルが適用される Scope をセットします。
     * @param modelId 対象のデバイスオブジェクトモデルの ID
     * @param requestBody 対象のデバイスオブジェクトモデルにセットする Scope の値
     * @returns DeviceObjectModel デバイスオブジェクトモデルの Scope がセットされました
     * @throws ApiError
     */
    public static setDeviceObjectModelScope(
        modelId: string,
        requestBody: SetDeviceObjectModelScopeRequest,
    ): CancelablePromise<DeviceObjectModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device_object_models/{model_id}/set_scope',
            path: {
                'model_id': modelId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `デバイスオブジェクトモデルが見つかりません`,
            },
        });
    }
}
