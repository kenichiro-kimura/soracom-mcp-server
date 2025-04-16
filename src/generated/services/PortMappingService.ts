/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePortMappingRequest } from '../models/CreatePortMappingRequest';
import type { PortMapping } from '../models/PortMapping';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PortMappingService {
    /**
     * Napter のオンデマンドリモートアクセスのリストを取得する
     * Napter のオンデマンドリモートアクセスのリストを返します。
     * @param limit 取得結果のページごとの最大表示件数。
     * @param lastEvaluatedKey 前ページで取得した最後のオンデマンドリモートアクセスの ID。このパラメータを指定することで次のオンデマンドリモートアクセスから始まるリストを取得できる。
     * @returns PortMapping オンデマンドリモートアクセスのリスト。
     * @throws ApiError
     */
    public static listPortMappings(
        limit?: number,
        lastEvaluatedKey?: string,
    ): CancelablePromise<Array<PortMapping>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/port_mappings',
            query: {
                'limit': limit,
                'last_evaluated_key': lastEvaluatedKey,
            },
        });
    }
    /**
     * Napter のオンデマンドリモートアクセスを作成する
     * Napter のオンデマンドリモートアクセスを新規作成します。
     * @param requestBody 作成するオンデマンドリモートアクセスの設定。
     * @returns PortMapping オンデマンドリモートアクセスが作成された。
     * @throws ApiError
     */
    public static createPortMapping(
        requestBody: CreatePortMappingRequest,
    ): CancelablePromise<PortMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/port_mappings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Napter のオンデマンドリモートアクセスを削除する
     * Napter のオンデマンドリモートアクセスを削除します。
     * @param ipAddress 削除するオンデマンドリモートアクセスの IP アドレス。
     * @param port 削除するオンデマンドリモートアクセスのポート番号。
     * @returns void
     * @throws ApiError
     */
    public static deletePortMapping(
        ipAddress: string,
        port: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/port_mappings/{ip_address}/{port}',
            path: {
                'ip_address': ipAddress,
                'port': port,
            },
            errors: {
                404: `指定したオンデマンドリモートアクセスは存在しない。`,
            },
        });
    }
    /**
     * Napter のオンデマンドリモートアクセス (SIM ID を指定して作成されたもの) のリストを取得する
     * Napter のオンデマンドリモートアクセス (SIM ID を指定して作成されたもの) のリストを取得します。
     * @param simId 対象の IoT SIM の SIM ID。
     * @returns PortMapping オンデマンドリモートアクセス (SIM ID を指定して作成されたもの) のリスト。
     * @throws ApiError
     */
    public static listPortMappingsForSim(
        simId: string,
    ): CancelablePromise<Array<PortMapping>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/port_mappings/sims/{sim_id}',
            path: {
                'sim_id': simId,
            },
            errors: {
                404: `指定した IoT SIM に紐づくオンデマンドリモートアクセスは存在しない。`,
            },
        });
    }
    /**
     * Napter のオンデマンドリモートアクセス (IMSI を指定して作成されたもの) のリストを取得する
     * `destinationChoosingStrategy` が `IMSI_PRIORITIZED` のオンデマンドリモートアクセス (IMSI を指定して作成されたもの) のリストを取得します。
     *
     * @param imsi 対象の IMSI。
     * @returns PortMapping `destinationChoosingStrategy` が `IMSI_PRIORITIZED` のオンデマンドリモートアクセス (IMSI を指定して作成されたもの) のリスト。
     *
     * @throws ApiError
     */
    public static listPortMappingsForSubscriber(
        imsi: string,
    ): CancelablePromise<Array<PortMapping>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/port_mappings/subscribers/{imsi}',
            path: {
                'imsi': imsi,
            },
            errors: {
                404: `指定した IMSI に紐づくオンデマンドリモートアクセスは存在しない。`,
            },
        });
    }
}
