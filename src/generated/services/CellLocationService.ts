/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CellIdentifier } from '../models/CellIdentifier';
import type { CellLocation } from '../models/CellLocation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CellLocationService {
    /**
     * 基地局の位置情報を取得する
     * セル ID などの基地局情報から、その基地局の位置情報 (緯度経度) を取得します。
     *
     * - 3G の場合は MCC, MNC, LAC, CID を指定してください。CID がなくてもおおよその位置を取得することができますが、精度は高くありません。
     *
     * 3G の例
     * ```
     * $ curl -X GET 'https://api.soracom.io/v1/cell_locations?mcc=440&mnc=10&lac=195&cid=68485165' \
     * -H "X-Soracom-API-Key: $X_SORACOM_API_KEY" \
     * -H "X-Soracom-Token: $X_SORACOM_TOKEN"
     * ```
     *
     * - LTE (4G) の場合は MCC, MNC, TAC, ECID を指定してください。
     *
     * 4G の例
     * ```
     * $ curl -X GET 'https://api.soracom.io/v1/cell_locations?mcc=440&mnc=10&tac=5840&ecid=44668480' \
     * -H "X-Soracom-API-Key: $X_SORACOM_API_KEY" \
     * -H "X-Soracom-Token: $X_SORACOM_TOKEN"
     * ```
     *
     * 基地局情報から位置情報への変換には OpenCelliD Project のデータベースを利用しています。指定した基地局情報を元に、OpenCelliD Project のデータベースから対象の位置情報のみを抽出して返しますので、位置情報が存在していなかったり、実際の位置情報とは異なる場合があります。
     *
     * [![Creative Commons License](/images/ccbysa_4.0_80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/ "no-icon-external-link") <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"><a xmlns:cc="https://creativecommons.org/ns#" href="https://opencellid.org" property="cc:attributionName" rel="cc:attributionURL" target="_blank">OpenCelliD Project</a></span> is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>
     *
     * @param mcc MCC (Mobile Country Code) - 国コード。
     * @param mnc MNC (Mobile Network Code) - ネットワークコード。
     * @param lac LAC (Location Area Code) - エリアコード (3G 用)。
     * @param cid CID (Cell ID) - セル ID (3G 用)。
     * @param tac TAC (Tracking Area Code) - エリアコード (LTE 用)。
     * @param ecid ECID (Enhanced Cell ID) - セル ID (LTE 用) - `ecid` もしくは `eci` のいずれかを指定してください。どちらに値を指定しても結果は同一です。
     * @param eci ECID (Enhanced Cell ID) - セル ID (LTE 用) - `ecid` もしくは `eci` のいずれかを指定してください。どちらに値を指定しても結果は同一です。
     * @returns CellLocation 基地局の位置情報。
     * @throws ApiError
     */
    public static getCellLocation(
        mcc: string,
        mnc: string,
        lac?: string,
        cid?: string,
        tac?: string,
        ecid?: string,
        eci?: string,
    ): CancelablePromise<CellLocation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cell_locations',
            query: {
                'mcc': mcc,
                'mnc': mnc,
                'lac': lac,
                'cid': cid,
                'tac': tac,
                'ecid': ecid,
                'eci': eci,
            },
            errors: {
                404: `指定された基地局の位置情報が見つからない。`,
            },
        });
    }
    /**
     * 複数の基地局の位置情報を一度に取得する
     * 基地局情報のリストから、それらの基地局の位置情報 (緯度経度) のリストを取得します。3G の場合は MCC, MNC, LAC,
     * CID を指定してください。CID がなくてもおおよその位置を取得することができますが、精度は高くありません。 LTE (4G) の場合は MCC,
     * MNC, TAC, ECID を指定してください。基地局情報から位置情報への変換には OpenCelliD Project のデータベースを利用していますので、情報が存在していなかったり誤っている場合もあります。
     *
     * [![Creative Commons License](/images/ccbysa_4.0_80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/ "no-icon-external-link") <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"><a xmlns:cc="https://creativecommons.org/ns#" href="https://opencellid.org" property="cc:attributionName" rel="cc:attributionURL" target="_blank">OpenCelliD Project</a></span> is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>
     *
     * @param requestBody 基地局情報のリスト。
     * @returns CellLocation 指定された基地局に対応する位置情報のリスト。
     * @throws ApiError
     */
    public static batchGetCellLocations(
        requestBody: Array<CellIdentifier>,
    ): CancelablePromise<Array<CellLocation>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cell_locations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
