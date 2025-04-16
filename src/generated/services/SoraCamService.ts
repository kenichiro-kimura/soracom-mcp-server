/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SoraCamAtomCamSettings } from '../models/SoraCamAtomCamSettings';
import type { SoraCamAtomCamSettingsLogo } from '../models/SoraCamAtomCamSettingsLogo';
import type { SoraCamAtomCamSettingsMotion } from '../models/SoraCamAtomCamSettingsMotion';
import type { SoraCamAtomCamSettingsMotionSensitivity } from '../models/SoraCamAtomCamSettingsMotionSensitivity';
import type { SoraCamAtomCamSettingsMotionTagging } from '../models/SoraCamAtomCamSettingsMotionTagging';
import type { SoraCamAtomCamSettingsNightVision } from '../models/SoraCamAtomCamSettingsNightVision';
import type { SoraCamAtomCamSettingsQuality } from '../models/SoraCamAtomCamSettingsQuality';
import type { SoraCamAtomCamSettingsRotation } from '../models/SoraCamAtomCamSettingsRotation';
import type { SoraCamAtomCamSettingsSound } from '../models/SoraCamAtomCamSettingsSound';
import type { SoraCamAtomCamSettingsSoundSensitivity } from '../models/SoraCamAtomCamSettingsSoundSensitivity';
import type { SoraCamAtomCamSettingsStatusLight } from '../models/SoraCamAtomCamSettingsStatusLight';
import type { SoraCamAtomCamSettingsTimestamp } from '../models/SoraCamAtomCamSettingsTimestamp';
import type { SoraCamDevice } from '../models/SoraCamDevice';
import type { SoraCamDeviceLicenseUpdate } from '../models/SoraCamDeviceLicenseUpdate';
import type { SoraCamDeviceName } from '../models/SoraCamDeviceName';
import type { SoraCamDevicesFirmwareUpdate } from '../models/SoraCamDevicesFirmwareUpdate';
import type { SoraCamEvent } from '../models/SoraCamEvent';
import type { SoraCamExportUsage } from '../models/SoraCamExportUsage';
import type { SoraCamExportUsageLimitOverrideSpecification } from '../models/SoraCamExportUsageLimitOverrideSpecification';
import type { SoraCamImageExportInfo } from '../models/SoraCamImageExportInfo';
import type { SoraCamImageExportSpecification } from '../models/SoraCamImageExportSpecification';
import type { SoraCamLicensePackQuantityUpdatingRequest } from '../models/SoraCamLicensePackQuantityUpdatingRequest';
import type { SoraCamLicensePackResponse } from '../models/SoraCamLicensePackResponse';
import type { SoraCamPowerState } from '../models/SoraCamPowerState';
import type { SoraCamRecordingsAndEventsList } from '../models/SoraCamRecordingsAndEventsList';
import type { SoraCamStreamingVideo } from '../models/SoraCamStreamingVideo';
import type { SoraCamVideoExportInfo } from '../models/SoraCamVideoExportInfo';
import type { SoraCamVideoExportSpecification } from '../models/SoraCamVideoExportSpecification';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SoraCamService {
    /**
     * ソラカメ対応カメラの一覧を取得する
     * ソラカメ対応カメラの一覧を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @returns SoraCamDevice OK.
     * @throws ApiError
     */
    public static listSoraCamDevices(): CancelablePromise<Array<SoraCamDevice>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices',
        });
    }
    /**
     * ソラカメ対応カメラを削除する
     * ソラカメ対応カメラをオペレーターから削除します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns any OK.
     * @throws ApiError
     */
    public static handleDeleteSoraCamDevice(
        deviceId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sora_cam/devices/{device_id}',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラの情報を取得する
     * ソラカメ対応カメラの情報を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamDevice OK.
     * @throws ApiError
     */
    public static getSoraCamDevice(
        deviceId: string,
    ): CancelablePromise<SoraCamDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラで更新できるファームウェアバージョンを取得する
     * ソラカメ対応カメラで更新できるファームウェアバージョンを取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId
     * @returns SoraCamDevicesFirmwareUpdate OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamFirmwareUpdate(
        deviceId: string,
    ): CancelablePromise<Array<SoraCamDevicesFirmwareUpdate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/firmware/update',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラのファームウェアを更新する
     * 更新できるファームウェアバージョンが存在する場合、ソラカメ対応カメラのファームウェアを更新します。ファームウェアの更新中は、ソラカメ対応カメラはオフラインになります。
     *
     * **Warning**: ファームウェアの更新中は、ソラカメ対応カメラの電源を切らないでください。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId
     * @returns any OK.
     * @throws ApiError
     */
    public static updateSoraCamDeviceAtomCamFirmware(
        deviceId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/firmware/update',
            path: {
                'device_id': deviceId,
            },
            errors: {
                400: `更新できるファームウェアバージョンがありません。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラのライセンス割り当てを解除する
     * ソラカメ対応カメラのライセンス割り当てを解除します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Warning**: ライセンスが割り当てられていないデバイスは、その期間ソラカメサービスによるクラウド録画が行われません。
     *
     * **Warning**: すでにクラウドに録画されている映像を見るためにはライセンスが必要になります。すでにエクスポートされた動画/静止画については影響しません。
     *
     * **Warning**: ライセンスの割り当てを解除しただけでは課金は止まりません。課金を止めるには、割り当ての解除後に [SoraCam:listSoraCamLicensePacks API](#/SoraCam/listSoraCamLicensePacks) またはユーザーコンソールでライセンスを解約してください。
     *
     * @param deviceId
     * @returns void
     * @throws ApiError
     */
    public static unassignSoraCamDeviceAtomCamLicense(
        deviceId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sora_cam/devices/{device_id}/atom_cam/license',
            path: {
                'device_id': deviceId,
            },
            errors: {
                403: `ライセンスの割り当てを解除できません。以下のような原因が考えられます。
                - 実行権限が不足している。
                - ほかのオペレーターから共有されているデバイスである。
                `,
                404: `指定されたデバイスがオペレーターに見つからないか、デバイスにライセンスが割り当てられていません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラにライセンスを割り当てる
     * ソラカメ対応カメラにライセンスを割り当て、または割り当てられているライセンスの種類を変更します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId
     * @param requestBody
     * @returns SoraCamDeviceLicenseUpdate 割り当てライセンスが正常に更新されました。
     * @throws ApiError
     */
    public static assignSoraCamDeviceAtomCamLicense(
        deviceId: string,
        requestBody: SoraCamDeviceLicenseUpdate,
    ): CancelablePromise<SoraCamDeviceLicenseUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sora_cam/devices/{device_id}/atom_cam/license',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                304: `既存の割り当てライセンスに変更はありませんでした。`,
                400: `無効な入力データまたは無効なライセンスの種類が指定されました。`,
                403: `ライセンスを割り当てられません。以下のような原因が考えられます。
                - 実行権限が不足している。
                - 割り当て可能な購入済みライセンスが不足している。
                - ほかのオペレーターから共有されているデバイスである。
                `,
                404: `指定されたデバイスがオペレーターに見つかりませんでした。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラの各種設定を取得する
     * ソラカメ対応カメラの各種設定を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettings OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettings(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * 撮影画像左下に表示されるアトムテック株式会社のロゴの表示設定を取得する
     * 撮影画像左下に表示されるアトムテック株式会社のロゴの表示設定を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsLogo OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsLogo(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsLogo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/logo',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * 撮影画像左下に表示されるアトムテック株式会社のロゴの表示設定を変更する
     * 撮影画像左下に表示されるアトムテック株式会社のロゴの表示設定を変更します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsLogo(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsLogo,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/logo',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * モーション検知の設定を取得する
     * モーション検知の設定を取得します。モーション検知がオンの場合は、ソラカメ対応カメラが動いているものを検知したときに録画が開始されます。
     *
     * **Warning**: ソラカメ対応カメラにクラウドモーション検知 “無制限” 録画ライセンスを割り当てていても、モーション検知がオフの場合は、動いているものを検知しないため録画されません。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsMotion OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsMotion(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsMotion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/motion',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * モーション検知の設定を変更する
     * モーション検知の設定を変更します。モーション検知がオンの場合は、ソラカメ対応カメラが動いているものを検知したときに録画が開始されます。
     *
     * **Warning**: ソラカメ対応カメラにクラウドモーション検知 “無制限” 録画ライセンスを割り当てていても、モーション検知がオフの場合は、動いているものを検知しないため録画されません。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsMotion(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsMotion,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/motion',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * モーション検知の感度設定を取得する
     * モーション検知の感度設定を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsMotionSensitivity OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsMotionSensitivity(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsMotionSensitivity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/motion_sensitivity',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * モーション検知の感度設定を変更する
     * モーション検知の感度設定を変更します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsMotionSensitivity(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsMotionSensitivity,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/motion_sensitivity',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * モーションタグの表示設定を取得する
     * モーションタグの表示設定を取得します。モーションタグは、動いているものを検知したときに表⽰される緑の枠です。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsMotionTagging OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsMotionTagging(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsMotionTagging> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/motion_tagging',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * モーションタグの表示設定を変更する
     * モーションタグの表示設定を変更します。モーションタグは、動いているものを検知したときに表⽰される緑の枠です。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsMotionTagging(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsMotionTagging,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/motion_tagging',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ナイトビジョンモードの設定を取得する
     * ナイトビジョンモードの設定を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsNightVision OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsNightVision(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsNightVision> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/night_vision',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ナイトビジョンモードの設定を変更する
     * ナイトビジョンモードの設定を変更します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsNightVision(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsNightVision,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/night_vision',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * 画質設定を取得する
     * 画質設定を取得します。
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsQuality OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsQuality(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsQuality> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/quality',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * 画質設定を変更する
     * 画質設定を変更します。画質設定は、ソラカメ対応カメラで撮影するすべての動画および静止画に反映されます。なお、Wi-Fi の通信速度 (帯域) が不足した場合は、自動的に画質設定が変更される場合があります
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsQuality(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsQuality,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/quality',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * 画像を 180° 回転させる設定を取得する
     * 画像を 180° 回転させる設定を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsRotation OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsRotation(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsRotation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/rotation',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * 画像を 180° 回転させる設定を変更する
     * 画像を 180° 回転させる設定を変更します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsRotation(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsRotation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/rotation',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * サウンド検出の設定を取得する
     * サウンド検出の設定を取得します。サウンド検出がオンの場合は、ソラカメ対応カメラが音を検出したときに録画が開始されます。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Warning**: サウンド検出で録画された映像は、SORACOM ユーザーコンソール / SORACOM CLI / SORACOM API ではダウンロードできません。ただし、クラウド常時録画ライセンスを割り当てている場合は、サウンド検出された時間を [SoraCam:listSoraCamDeviceEventsForDevice API](#/SoraCam/listSoraCamDeviceEventsForDevice) で確認して、その時間の映像をダウンロードできます。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsSound OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsSound(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsSound> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/sound',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * サウンド検出の設定を変更する
     * サウンド検出の設定を変更します。サウンド検出がオンの場合は、ソラカメ対応カメラが音を検出したときに録画が開始されます。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Warning**: サウンド検出で録画された映像は、SORACOM ユーザーコンソール / SORACOM CLI / SORACOM API ではダウンロードできません。ただし、クラウド常時録画ライセンスを割り当てている場合は、サウンド検出された時間を [SoraCam:listSoraCamDeviceEventsForDevice API](#/SoraCam/listSoraCamDeviceEventsForDevice) で確認して、その時間の映像をダウンロードできます。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsSound(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsSound,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/sound',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * サウンド検出の感度設定を取得する
     * サウンド検出の感度設定を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsSoundSensitivity OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsSoundSensitivity(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsSoundSensitivity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/sound_sensitivity',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * サウンド検出の感度設定を変更する
     * サウンド検出の感度設定を変更します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsSoundSensitivity(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsSoundSensitivity,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/sound_sensitivity',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ステータスライト (カメラ本体の状態を示すランプ) の点灯設定を取得する
     * ステータスライト (カメラ本体の状態を示すランプ) の点灯設定を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsStatusLight OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsStatusLight(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsStatusLight> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/status_light',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ステータスライト (カメラ本体の状態を示すランプ) の点灯設定を変更する
     * ステータスライト (カメラ本体の状態を示すランプ) の点灯設定を変更します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsStatusLight(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsStatusLight,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/status_light',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * 撮影画像右下に表示されるタイムスタンプの表示設定を取得する
     * 撮影画像右下に表示されるタイムスタンプの表示設定を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamAtomCamSettingsTimestamp OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceAtomCamSettingsTimestamp(
        deviceId: string,
    ): CancelablePromise<SoraCamAtomCamSettingsTimestamp> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/timestamp',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * 撮影画像右下に表示されるタイムスタンプの表示設定を変更する
     * 撮影画像右下に表示されるタイムスタンプの表示設定を変更します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: この API は、[Public beta](/ja-jp/resources/glossary/#public-beta) です。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceAtomCamSettingsTimestamp(
        deviceId: string,
        requestBody?: SoraCamAtomCamSettingsTimestamp,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/atom_cam/settings/timestamp',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエスト。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * 任意のデータをソラカメ対応カメラに紐づけて Harvest Data に保存する
     * 指定したソラカメ対応カメラのデバイス ID (`device_id`) に紐づけて、Harvest Data に任意のデータを保存します。
     *
     * たとえば、JSON を保存する際は、ヘッダーに `Content-Type: application/json` を設定し、リクエストボディには `{ "person_count": 5 }` を指定します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: 保存したデータエントリを取得するには [DataEntry:getDataEntry API](#/DataEntry/getDataEntry) を、削除するには [DataEntry:deleteDataEntry API](#/DataEntry/deleteDataEntry) を使用します。
     *
     * **Info**: Harvest Data について詳しくは、 [SORACOM Harvest Data の特徴](/ja-jp/docs/harvest/feature-of-data/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody 保存するデータ。
     * @param contentType 保存するデータの Content-Type。
     *
     * - JSON を送信する場合は `application/json` を指定します。
     * - テキストを送信する場合は `text/plain` を指定します。
     * - バイナリを送信する場合は `application/octet-stream` を指定します。
     *
     * @returns any データが正常に Harvest Data に保存されました。
     * @throws ApiError
     */
    public static createSoraCamDeviceDataEntry(
        deviceId: string,
        requestBody: string,
        contentType?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/data',
            path: {
                'device_id': deviceId,
            },
            headers: {
                'content-type': contentType,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * 任意のデータをソラカメ対応カメラと時刻に紐づけて Harvest Data に保存する
     * 指定したソラカメ対応カメラのデバイス ID (`device_id`) に紐づけて、指定した時刻のデータとして、Harvest Data に任意のデータを保存します。
     *
     * - 指定した時刻のデータが存在しない場合は、新しくデータが作成されます。
     * - 指定した時刻のデータがすでに存在する場合は、Harvest Data の仕様に従い同時刻のデータが上書きされます。
     *
     * たとえば、JSON を保存する際は、ヘッダーに `Content-Type: application/json` を設定し、リクエストボディには `{ "person_count": 5 }` を指定します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: 保存したデータエントリを取得するには [DataEntry:getDataEntry API](#/DataEntry/getDataEntry) を、削除するには [DataEntry:deleteDataEntry API](#/DataEntry/deleteDataEntry) を使用します。
     *
     * **Info**: Harvest Data について詳しくは、 [SORACOM Harvest Data の特徴](/ja-jp/docs/harvest/feature-of-data/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param time 対象のデータエントリのタイムスタンプ (UNIX 時間 (ミリ秒))。
     * @param requestBody 保存するデータ。
     * @param contentType 保存するデータの Content-Type。
     *
     * - JSON を送信する場合は `application/json` を指定します。
     * - テキストを送信する場合は `text/plain` を指定します。
     * - バイナリを送信する場合は `application/octet-stream` を指定します。
     *
     * @returns any データが正常に Harvest Data に保存されました。
     * @throws ApiError
     */
    public static updateSoraCamDeviceDataEntry(
        deviceId: string,
        time: number,
        requestBody: string,
        contentType?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sora_cam/devices/{device_id}/data/{time}',
            path: {
                'device_id': deviceId,
                'time': time,
            },
            headers: {
                'content-type': contentType,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラのイベント一覧を取得する
     * ソラカメ対応カメラで検出されたイベントの一覧を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラの ID
     * @param lastEvaluatedKey 前回の listSoraCamDeviceEventsForDevice リクエストのレスポンスに含まれていた x-soracom-next-key ヘッダーの値。このパラメータを指定することで、前回のリクエストの続きからリストを取得できます。
     * @param limit 1 回のリクエストで取得するデータ数の上限 (1 〜 1000)。なお、レスポンスには、指定した最大値よりも少ないデータしか含まれないことがあります。
     * @param from イベントを取得する期間の開始時刻 (UNIX 時間 (ミリ秒))。省略した場合は、対象のソラカメ対応カメラで検出された最も古いイベントの発生時刻が設定されます。
     * @param to イベントを取得する期間の終了時刻 (UNIX 時間 (ミリ秒))。省略した場合は、現在時刻が設定されます。
     * @param sort イベント一覧のソート順。
     *
     * - `desc`: 降順 (対象のソラカメ対応カメラで検出された最新のイベントが先頭)
     * - `asc`: 昇順 (対象のソラカメ対応カメラで検出された最も古いイベントが先頭)
     *
     * @returns SoraCamEvent OK.
     * @throws ApiError
     */
    public static listSoraCamDeviceEventsForDevice(
        deviceId: string,
        lastEvaluatedKey?: string,
        limit: number = 10,
        from?: number,
        to?: number,
        sort: 'desc' | 'asc' = 'desc',
    ): CancelablePromise<Array<SoraCamEvent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/events',
            path: {
                'device_id': deviceId,
            },
            query: {
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
                'from': from,
                'to': to,
                'sort': sort,
            },
            errors: {
                400: `指定された引数が不正です。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラの静止画のエクスポート可能枚数や録画映像のエクスポート可能時間を取得する
     * 静止画の残りのエクスポート可能枚数や、録画映像の残りのエクスポート可能時間などを取得します。
     *
     * **Warning**: 静止画をエクスポートしても、録画映像をエクスポートしても、動画の視聴可能時間 (デフォルトでは 1 か月 72 時間) が消費されます。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamExportUsage OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceExportUsage(
        deviceId: string,
    ): CancelablePromise<SoraCamExportUsage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/exports/usage',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラの動画のエクスポート可能時間の上限をデフォルトに戻す
     * 動画のエクスポート可能時間の上限をデフォルトの値に戻します。デフォルトは、72 時間です。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteSoraCamDeviceExportUsageLimitOverride(
        deviceId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sora_cam/devices/{device_id}/exports/usage/limit_override',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラの動画のエクスポート可能時間の上限を変更する
     * 動画のエクスポート可能時間の上限を変更します。デフォルトは、72 時間です。最大で 1,500 時間まで設定できます。
     *
     * **Warning**: 動画のエクスポート可能時間の消費時間が 72 時間を超えると課金が発生します。上限を変更しただけでは、課金は発生しません。動画のエクスポート可能時間の上限の設定にかかわらず、消費時間が 72 時間を超えると課金が発生します。料金について詳しくは、Soracom Cloud Camera Services ソラカメの [料金について](https://soracom.jp/sora_cam/#pricing) を参照してください。
     *
     * **Warning**: 上限を 72 時間未満に設定することもできます。その場合でも、料金は変わりません。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns SoraCamExportUsage 設定が変更されました。
     * @throws ApiError
     */
    public static updateSoraCamDeviceExportUsageLimitOverride(
        deviceId: string,
        requestBody: SoraCamExportUsageLimitOverrideSpecification,
    ): CancelablePromise<SoraCamExportUsage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sora_cam/devices/{device_id}/exports/usage/limit_override',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正な上限値が指定されました。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラで撮影した録画映像から静止画をエクスポートする処理の現在の状況をリストで取得する
     * [SoraCam:exportSoraCamDeviceRecordedImage API](#/SoraCam/exportSoraCamDeviceRecordedImage) で開始した「録画映像から静止画をエクスポートする処理」の現在の状況をリストで取得します。この API では、対象を 1 台のソラカメ対応カメラに限定します。
     *
     * なお、対象を 1 台のソラカメ対応カメラに限定しないで、オペレーターが所有するすべてのソラカメ対応カメラにする場合は、[SoraCam:listSoraCamDeviceImageExports API](#/SoraCam/listSoraCamDeviceImageExports) を使用してください。
     *
     * **Warning**: エクスポートが完了してから 10 分が経過すると、URL は利用できなくなります。利用できなくなる時間は、`expiryTime` で確認できます。また、さらに時間が経過するとリストから削除されます。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param lastEvaluatedKey 前回の listSoraCamDeviceImageExportsForDevice リクエストのレスポンスに含まれていた x-soracom-next-key ヘッダーの値。このパラメータを指定することで、前回のリクエストの続きからリストを取得できます。
     * @param limit 1 回のリクエストで取得するデータ数の上限。なお、レスポンスには、指定した最大値よりも少ないデータしか含まれないことがあります。
     * @param sort ソート順。レスポンスに含まれるリストは、`requestedTime` の昇順 (`asc`) もしくは降順 (`desc`) にソートされます。デフォルトは降順 (`desc`) すなわち新しいアイテムほど先に来る順でソートされます。
     * @returns SoraCamImageExportInfo OK.
     * @throws ApiError
     */
    public static listSoraCamDeviceImageExportsForDevice(
        deviceId: string,
        lastEvaluatedKey?: string,
        limit: number = 10,
        sort: 'desc' | 'asc' = 'desc',
    ): CancelablePromise<Array<SoraCamImageExportInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/images/exports',
            path: {
                'device_id': deviceId,
            },
            query: {
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
                'sort': sort,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * クラウドに保存された録画映像から静止画をエクスポートする処理を開始する
     * クラウドに保存された録画映像から静止画を切り出してエクスポートする処理を開始します。エクスポート処理は非同期で処理されます。エクスポート処理の進捗や、エクスポートしたファイルの URL は、[SoraCam:listSoraCamDeviceImageExports API](#/SoraCam/listSoraCamDeviceImageExports) で取得できます。URL には有効期限が設定されています。
     *
     * - URL を取得した時点で、ダウンロードを開始したかどうかにかかわらず動画の視聴可能時間 (デフォルトでは 1 か月 72 時間) が消費されます。
     * - エクスポート処理の結果はキャッシュされません。同じ時間を 2 回エクスポートすると、動画の視聴可能時間 (デフォルトでは 1 か月 72 時間) は 2 回分が消費されます。
     * - Harvest Files にエクスポートする際は、Harvest Files の仕様に従った保存期間が設定されます。また、エクスポートした静止画のファイルサイズ (Harvest Files へ書き込んだファイルサイズ) に応じて、料金が発生します。詳しくは、[SORACOM Harvest Files の料金プラン](https://soracom.jp/services/harvest/#pricing_files) を参照してください。
     *
     * **Warning**: クラウド常時録画ライセンスもしくはクラウドモーション検知 “無制限” 録画ライセンスを割り当てていないソラカメ対応カメラの静止画はエクスポートできません。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。さらに、Harvest Files へのエクスポートする際は、[FileEntry:putFile API](#/FileEntry/putFile) を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * **Info**: エクスポートされる静止画の画像サイズは、1920 x 1080 ピクセルです。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns SoraCamImageExportInfo OK.
     * @throws ApiError
     */
    public static exportSoraCamDeviceRecordedImage(
        deviceId: string,
        requestBody: SoraCamImageExportSpecification,
    ): CancelablePromise<SoraCamImageExportInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/images/exports',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `\`time\` に指定した値が不適切です。`,
                403: `Harvest Files にエクスポートするために必要な権限 (FileEntry:putFile) がありません。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * クラウドに保存された録画映像から静止画をエクスポートする処理の現在の状況を取得する
     * [SoraCam:exportSoraCamDeviceRecordedImage API](#/SoraCam/exportSoraCamDeviceRecordedImage) で開始した「録画映像から静止画をエクスポートする処理」の現在の状況を取得します。この API では、対象を 1 つのエクスポート処理に限定します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param exportId 対象のエクスポート処理のエクスポート ID
     * @returns SoraCamImageExportInfo OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceExportedImage(
        deviceId: string,
        exportId: string,
    ): CancelablePromise<SoraCamImageExportInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/images/exports/{export_id}',
            path: {
                'device_id': deviceId,
                'export_id': exportId,
            },
            errors: {
                404: `指定したソラカメ対応カメラ、またはエクスポート処理が見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラの現在の名前を取得します
     * ソラカメ対応カメラの現在の名前を取得します。
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamDeviceName OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceName(
        deviceId: string,
    ): CancelablePromise<SoraCamDeviceName> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/name',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラの名前を変更します
     * ソラカメ対応カメラの名前を変更します。
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDeviceName(
        deviceId: string,
        requestBody?: SoraCamDeviceName,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/name',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なパラメーターが指定されました。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラの電源状態を取得します
     * ソラカメ対応カメラの電源状態を取得します。
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns SoraCamPowerState OK.
     * @throws ApiError
     */
    public static getSoraCamDevicePowerState(
        deviceId: string,
    ): CancelablePromise<SoraCamPowerState> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/power_state',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラの電源状態を変更します
     * ソラカメ対応カメラの電源状態を変更します。
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns any OK.
     * @throws ApiError
     */
    public static setSoraCamDevicePowerState(
        deviceId: string,
        requestBody?: SoraCamPowerState,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/power_state',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なパラメーターが指定されました。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラを再起動します
     * ソラカメ対応カメラを再起動します。
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @returns any OK.
     * @throws ApiError
     */
    public static rebootSoraCamDevice(
        deviceId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/reboot',
            path: {
                'device_id': deviceId,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラが録画した期間の一覧およびイベントの一覧を取得する
     * ソラカメ対応カメラがクラウドに映像を録画した期間の一覧、およびソラカメ対応カメラが検知したイベントの一覧を取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId ソラカメ対応カメラのデバイス ID。
     * @param lastEvaluatedKey 前回の listSoraCamDeviceRecordingsAndEvents リクエストのレスポンスに含まれていた x-soracom-next-key ヘッダーの値。このパラメータを指定することで、前回のリクエストの続きからリストを取得できます。
     * @param from リストの取得開始時刻 (UNIX 時間 (ミリ秒))。省略した場合は、対象のソラカメ対応カメラに割り当てられたライセンスの保存期間のうち最も古い時刻が指定されます。
     * @param to リストの所得終了時刻 (UNIX 時間 (ミリ秒))。省略した場合は、現在時刻が設定されます。
     * @param sort 録画期間およびイベント一覧のソート順。
     *
     * - `desc`: 降順 (最新のデータが先頭)。
     * - `asc`: 昇順 (最も古いデータが先頭)。
     *
     * @returns SoraCamRecordingsAndEventsList OK.
     * @throws ApiError
     */
    public static listSoraCamDeviceRecordingsAndEvents(
        deviceId: string,
        lastEvaluatedKey?: string,
        from?: number,
        to?: number,
        sort: 'desc' | 'asc' = 'desc',
    ): CancelablePromise<SoraCamRecordingsAndEventsList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/recordings_and_events',
            path: {
                'device_id': deviceId,
            },
            query: {
                'last_evaluated_key': lastEvaluatedKey,
                'from': from,
                'to': to,
                'sort': sort,
            },
            errors: {
                400: `不正なパラメーターが指定されました。`,
                404: `指定したソラカメ対応カメラ、または指定した期間の録画が見つかりませんでした。`,
            },
        });
    }
    /**
     * クラウドに録画した映像をストリーミング再生するための情報を取得する
     * クラウドに録画した映像をストリーミング再生するための情報を取得します。具体的には、MPEG-DASH (Dynamic Adaptive Streaming over HTTP) と呼ばれるストリーミング方式に対応した URL の配列を取得できます。URL には有効期限が設定されています。
     *
     * - 最新映像をストリーミング再生するには、`from` と `to` をどちらも省略します。その場合は、以下の点に注意してください。
     * - API を呼び出した時刻を基準に、300 秒 (5 分) の最新映像をストリーミング再生できる URL を取得できます。続きを視聴する場合は、もう一度 API を呼び出して、次の URL を取得してください。
     * - URL を取得した時点で、視聴状況にかかわらず動画の視聴可能時間 (デフォルトでは 1 か月 72 時間) が 5 分消費されます。
     * - 録画映像をストリーミング再生するには、`from` または `to` を指定します。その場合は、以下の点に注意してください。
     * - 最大 900 秒 (15 分) の録画映像をストリーミング再生できる URL を取得できます。
     * - URL を取得した時点で、視聴状況にかかわらず動画の視聴可能時間 (デフォルトでは 1 か月 72 時間) が消費されます。
     *
     * **Warning**: **最新映像**は、クラウドに保存された録画映像の最新の映像を指します。この API を利用しても、ATOM アプリで再生できる**「ライブ映像 (P2P)」**は再生できません。「ライブ映像 (P2P)」を再生するには、[ライブ視聴見放題 Limited Preview](/ja-jp/docs/soracom-cloud-camera-services/unlimited-live-streaming/) を利用してください。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param from 録画映像の開始時刻 (UNIX 時間 (ミリ秒))。
     *
     * - 最新映像をダウンロードするための情報を取得するには、`from` と `to` をどちらも省略します。
     *
     * @param to 録画映像の終了時刻 (UNIX 時間 (ミリ秒))。
     *
     * - 最新映像をダウンロードするための情報を取得するには、`from` と `to` をどちらも省略します。
     * - 一回の API 呼び出しで視聴できる時間は最大 900 秒 (15 分) です。`from` と `to` の差が、900 秒を超えないようにしてください。
     *
     * @returns SoraCamStreamingVideo OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceStreamingVideo(
        deviceId: string,
        from?: number,
        to?: number,
    ): CancelablePromise<SoraCamStreamingVideo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/stream',
            path: {
                'device_id': deviceId,
            },
            query: {
                'from': from,
                'to': to,
            },
            errors: {
                400: `\`from\` または \`to\` に指定した値が不適切です。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラで撮影した録画映像をエクスポートする処理の現在の状況をリストで取得する
     * [SoraCam:exportSoraCamDeviceRecordedVideo API](#/SoraCam/exportSoraCamDeviceRecordedVideo) で開始した「録画映像をエクスポートする処理」の現在の状況をリストで取得します。この API では、対象を 1 台のソラカメ対応カメラに限定します。
     *
     * なお、対象を 1 台のソラカメ対応カメラに限定しないで、オペレーターが所有するすべてのソラカメ対応カメラにする場合は、[SoraCam:listSoraCamDeviceVideoExports API](#/SoraCam/listSoraCamDeviceVideoExports) を使用してください。
     *
     * **Warning**: エクスポートが完了してから 10 分が経過すると、URL は利用できなくなります。利用できなくなる時間は、`expiryTime` で確認できます。また、さらに時間が経過するとリストから削除されます。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param lastEvaluatedKey 前回の listSoraCamDeviceVideoExportsForDevice リクエストのレスポンスに含まれていた x-soracom-next-key ヘッダーの値。このパラメータを指定することで、前回のリクエストの続きからリストを取得できます。
     * @param limit 1 回のリクエストで取得するデータ数の上限。なお、レスポンスには、指定した最大値よりも少ないデータしか含まれないことがあります。
     * @param sort ソート順。レスポンスに含まれるリストは、`requestedTime` の昇順 (`asc`) もしくは降順 (`desc`) にソートされます。デフォルトは降順 (`desc`) すなわち新しいアイテムほど先に来る順でソートされます。
     * @returns SoraCamVideoExportInfo OK.
     * @throws ApiError
     */
    public static listSoraCamDeviceVideoExportsForDevice(
        deviceId: string,
        lastEvaluatedKey?: string,
        limit: number = 10,
        sort: 'desc' | 'asc' = 'desc',
    ): CancelablePromise<Array<SoraCamVideoExportInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/videos/exports',
            path: {
                'device_id': deviceId,
            },
            query: {
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
                'sort': sort,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * クラウドに保存された録画映像をエクスポートする処理を開始する
     * クラウドに保存された録画映像を、ダウンロードできる方式 (mp4 ファイルを zip 形式で圧縮したファイル) でエクスポートする処理を開始します。エクスポート処理は非同期で処理されます。エクスポート処理の進捗や、エクスポートしたファイルの URL は、[SoraCam:listSoraCamDeviceVideoExports API](#/SoraCam/listSoraCamDeviceVideoExports) で取得できます。URL には有効期限が設定されています。
     *
     * - ひとつの URL でエクスポートできる時間は最大 900 秒 (15 分) です。
     * - URL を取得した時点で、ダウンロードを開始したかどうかにかかわらず動画の視聴可能時間 (デフォルトでは 1 か月 72 時間) が消費されます。
     * - エクスポート処理の結果はキャッシュされません。同じ時間を 2 回エクスポートすると、動画の視聴可能時間 (デフォルトでは 1 か月 72 時間) は 2 回分が消費されます。
     * - Harvest Files にエクスポートする際は、Harvest Files の仕様に従った保存期間が設定されます。また、エクスポートした動画のファイルサイズ (Harvest Files へ書き込んだファイルサイズ) に応じて、料金が発生します。詳しくは、[SORACOM Harvest Files の料金プラン](https://soracom.jp/services/harvest/#pricing_files) を参照してください。
     *
     * **Warning**: クラウド常時録画ライセンスもしくはクラウドモーション検知 “無制限” 録画ライセンスを割り当てていないソラカメ対応カメラの録画映像はエクスポートできません。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。さらに、Harvest Files へのエクスポートする際は、[FileEntry:putFile API](#/FileEntry/putFile) を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param requestBody
     * @returns SoraCamVideoExportInfo OK.
     * @throws ApiError
     */
    public static exportSoraCamDeviceRecordedVideo(
        deviceId: string,
        requestBody: SoraCamVideoExportSpecification,
    ): CancelablePromise<SoraCamVideoExportInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sora_cam/devices/{device_id}/videos/exports',
            path: {
                'device_id': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `- \`from\` または \`to\` に指定した値が不適切です。
                - 指定された時刻の範囲にはエクスポート可能な録画映像が見つかりません。
                - \`Content-Type: application/json\` ヘッダーが指定されていません。
                `,
                403: `Harvest Files にエクスポートするために必要な権限 (FileEntry:putFile) がありません。`,
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * クラウドに保存された録画映像をエクスポートする処理の現在の状況を取得する
     * [SoraCam:exportSoraCamDeviceRecordedVideo API](#/SoraCam/exportSoraCamDeviceRecordedVideo) で開始した「録画映像をエクスポートする処理」の現在の状況を取得します。この API では、対象を 1 つのエクスポート処理に限定します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。
     * @param exportId 対象のエクスポート処理のエクスポート ID
     * @returns SoraCamVideoExportInfo OK.
     * @throws ApiError
     */
    public static getSoraCamDeviceExportedVideo(
        deviceId: string,
        exportId: string,
    ): CancelablePromise<SoraCamVideoExportInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/{device_id}/videos/exports/{export_id}',
            path: {
                'device_id': deviceId,
                'export_id': exportId,
            },
            errors: {
                404: `指定したソラカメ対応カメラ、またはエクスポート処理が見つかりません。`,
            },
        });
    }
    /**
     * ファームウェアを更新できるソラカメ対応カメラをリストで取得する
     * ファームウェアを更新できるソラカメ対応カメラをリストで取得します。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @returns SoraCamDevicesFirmwareUpdate OK.
     * @throws ApiError
     */
    public static listSoraCamDeviceAtomCamFirmwareUpdates(): CancelablePromise<Array<SoraCamDevicesFirmwareUpdate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/atom_cam/firmware/updates',
        });
    }
    /**
     * ソラカメ対応カメラで検出されたイベントの一覧を取得する
     * ソラカメ対応カメラで検出されたイベントの一覧を取得します。
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。省略した場合は、オペレーターが所有するすべてのソラカメ対応デバイスのイベントが対象となります。
     * @param lastEvaluatedKey 前回の listSoraCamDeviceEvents リクエストのレスポンスに含まれていた x-soracom-next-key ヘッダーの値。このパラメータを指定することで、前回のリクエストの続きからリストを取得できます。
     * @param limit 1 回のリクエストで取得するデータ数の上限 (1 〜 1000)。なお、レスポンスには、指定した最大値よりも少ないデータしか含まれないことがあります。
     * @param from イベントを取得する期間の開始時刻 (UNIX 時間 (ミリ秒))。省略した場合は、ソラカメ対応カメラで検出された最も古いイベントの発生時刻が設定されます。
     * @param to イベントを取得する期間の終了時刻 (UNIX 時間 (ミリ秒))。省略した場合は、現在時刻が設定されます。
     * @param sort イベント一覧のソート順。
     *
     * - `desc`: 降順 (ソラカメ対応カメラで検出された最新のイベントが先頭)
     * - `asc`: 昇順 (ソラカメ対応カメラで検出された最も古いイベントが先頭)
     *
     * @returns SoraCamEvent OK.
     * @throws ApiError
     */
    public static listSoraCamDeviceEvents(
        deviceId?: string,
        lastEvaluatedKey?: number,
        limit: number = 10,
        from?: number,
        to?: number,
        sort: 'desc' | 'asc' = 'desc',
    ): CancelablePromise<Array<SoraCamEvent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/events',
            query: {
                'device_id': deviceId,
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
                'from': from,
                'to': to,
                'sort': sort,
            },
            errors: {
                400: `指定された引数が不正です。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラで撮影した録画映像から静止画をエクスポートする処理の現在の状況をリストで取得する
     * [SoraCam:exportSoraCamDeviceRecordedImage API](#/SoraCam/exportSoraCamDeviceRecordedImage) で開始した「録画映像から静止画をエクスポートする処理」の現在の状況をリストで取得します。この API では、対象をオペレーターが所有するすべてのデバイスにしたり、1 台のソラカメ対応カメラに限定したりできます。
     *
     * **Warning**: エクスポートが完了してから 10 分が経過すると、URL は利用できなくなります。利用できなくなる時間は、`expiryTime` で確認できます。また、さらに時間が経過するとリストから削除されます。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。省略した場合はオペレーターが所有するすべてのデバイスが対象となります。
     * @param lastEvaluatedKey 前回の listSoraCamDeviceImageExports リクエストのレスポンスに含まれていた x-soracom-next-key ヘッダーの値。このパラメータを指定することで、前回のリクエストの続きからリストを取得できます。
     * @param limit 1 回のリクエストで取得するデータ数の上限。なお、レスポンスには、指定した最大値よりも少ないデータしか含まれないことがあります。
     * @param sort ソート順。レスポンスに含まれるリストは、`requestedTime` の昇順 (`asc`) もしくは降順 (`desc`) にソートされます。デフォルトは降順 (`desc`) すなわち新しいデータほど先に来る順でソートされます。
     * @returns SoraCamImageExportInfo OK.
     * @throws ApiError
     */
    public static listSoraCamDeviceImageExports(
        deviceId?: string,
        lastEvaluatedKey?: string,
        limit: number = 10,
        sort: 'desc' | 'asc' = 'desc',
    ): CancelablePromise<Array<SoraCamImageExportInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/images/exports',
            query: {
                'device_id': deviceId,
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
                'sort': sort,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * ソラカメ対応カメラで撮影した録画映像をエクスポートする処理の現在の状況をリストで取得する
     * [SoraCam:exportSoraCamDeviceRecordedVideo API](#/SoraCam/exportSoraCamDeviceRecordedVideo) で開始した「録画映像をエクスポートする処理」の現在の状況をリストで取得します。この API では、対象をオペレーターが所有するすべてのデバイスにしたり、1 台のソラカメ対応カメラに限定したりできます。
     *
     * **Warning**: エクスポートが完了してから 10 分が経過すると、URL は利用できなくなります。利用できなくなる時間は、`expiryTime` で確認できます。また、さらに時間が経過するとリストから削除されます。
     *
     * **Warning**: この API を SAM ユーザーの API キーと API トークンで実行する場合は、SAM ユーザーに、この API を呼び出すために必要な権限 (例: `SoraCam:*`) に加えて、`OAuth2:authorize` を実行する権限を追加してください。権限設定について詳しくは、[SAM ユーザーの権限を設定する](/ja-jp/docs/sam/set-permissions/) を参照してください。
     *
     * @param deviceId 対象のソラカメ対応カメラのデバイス ID。省略した場合はオペレーターが所有するすべてのデバイスが対象となります。
     * @param lastEvaluatedKey 前回の listSoraCamDeviceVideoExports リクエストのレスポンスに含まれていた x-soracom-next-key ヘッダーの値。このパラメータを指定することで、前回のリクエストの続きからリストを取得できます。
     * @param limit 1 回のリクエストで取得するデータ数の上限。なお、レスポンスには、指定した最大値よりも少ないデータしか含まれないことがあります。
     * @param sort ソート順。レスポンスに含まれるリストは、`requestedTime` の昇順 (`asc`) もしくは降順 (`desc`) にソートされます。デフォルトは降順 (`desc`) すなわち新しいデータほど先に来る順でソートされます。
     * @returns SoraCamVideoExportInfo OK.
     * @throws ApiError
     */
    public static listSoraCamDeviceVideoExports(
        deviceId?: string,
        lastEvaluatedKey?: string,
        limit: number = 10,
        sort: 'desc' | 'asc' = 'desc',
    ): CancelablePromise<Array<SoraCamVideoExportInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/devices/videos/exports',
            query: {
                'device_id': deviceId,
                'last_evaluated_key': lastEvaluatedKey,
                'limit': limit,
                'sort': sort,
            },
            errors: {
                404: `指定したソラカメ対応カメラが見つかりません。`,
            },
        });
    }
    /**
     * Soracom Cloud Camera Services のライセンスパックの一覧を取得する
     * 利用可能なライセンスパックの一覧を取得します。 現在、この API は日本カバレッジでのみ利用可能です。
     * @returns SoraCamLicensePackResponse ライセンスパックの一覧を取得しました。
     * @throws ApiError
     */
    public static listSoraCamLicensePacks(): CancelablePromise<Array<SoraCamLicensePackResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sora_cam/license_packs',
            errors: {
                400: `リクエストが不正です。`,
            },
        });
    }
    /**
     * Soracom Cloud Camera Services のライセンス数を更新する
     * license_pack_id で指定されたライセンスパックのライセンス数を更新します。 ライセンス数に応じて月額費用が発生します。 現在、この API は日本カバレッジでのみ利用可能です。
     * @param licensePackId ライセンスパックの ID。
     * @param requestBody ライセンス数の更新内容。
     * @returns void
     * @throws ApiError
     */
    public static updateSoraCamLicensePackQuantity(
        licensePackId: string,
        requestBody: SoraCamLicensePackQuantityUpdatingRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sora_cam/license_packs/{license_pack_id}/quantity',
            path: {
                'license_pack_id': licensePackId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `更新リクエストが不正です。`,
            },
        });
    }
}
