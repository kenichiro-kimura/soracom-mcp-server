/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthKeyResponse } from '../models/AuthKeyResponse';
import type { CompanyInformationModel } from '../models/CompanyInformationModel';
import type { ContractUpdatedResponse } from '../models/ContractUpdatedResponse';
import type { ContractUpdatingRequest } from '../models/ContractUpdatingRequest';
import type { EnableMFAOTPResponse } from '../models/EnableMFAOTPResponse';
import type { GenerateOperatorsAuthKeyResponse } from '../models/GenerateOperatorsAuthKeyResponse';
import type { GenerateTokenRequest } from '../models/GenerateTokenRequest';
import type { GenerateTokenResponse } from '../models/GenerateTokenResponse';
import type { GetOperatorResponse } from '../models/GetOperatorResponse';
import type { IndividualInformationModel } from '../models/IndividualInformationModel';
import type { MFAAuthenticationRequest } from '../models/MFAAuthenticationRequest';
import type { MFAIssueRevokingTokenRequest } from '../models/MFAIssueRevokingTokenRequest';
import type { MFARevokeRequest } from '../models/MFARevokeRequest';
import type { MFARevokingTokenVerifyRequest } from '../models/MFARevokingTokenVerifyRequest';
import type { MFAStatusOfUseResponse } from '../models/MFAStatusOfUseResponse';
import type { OperatorConfigurationModel } from '../models/OperatorConfigurationModel';
import type { OperatorMFAVerifyingResponse } from '../models/OperatorMFAVerifyingResponse';
import type { SetOperatorConfigurationNamespaceRequest } from '../models/SetOperatorConfigurationNamespaceRequest';
import type { SupportTokenResponse } from '../models/SupportTokenResponse';
import type { UpdatePasswordRequest } from '../models/UpdatePasswordRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OperatorService {
    /**
     * オペレーターの情報を取得する
     * Operator の情報を返す。
     * @param operatorId オペレーター ID。
     * @returns GetOperatorResponse OK.
     * @throws ApiError
     */
    public static getOperator(
        operatorId: string,
    ): CancelablePromise<GetOperatorResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}',
            path: {
                'operator_id': operatorId,
            },
            errors: {
                400: `誤ったオペレーター ID が指定されました。`,
            },
        });
    }
    /**
     * オペレーターの認証キーの一覧を取得する
     * オペレーターの認証キー一覧を返す。
     * @param operatorId オペレーター ID。
     * @returns AuthKeyResponse OK.
     * @throws ApiError
     */
    public static listOperatorAuthKeys(
        operatorId: string,
    ): CancelablePromise<Array<AuthKeyResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/auth_keys',
            path: {
                'operator_id': operatorId,
            },
        });
    }
    /**
     * オペレーターの認証キーを生成する
     * オペレーターの認証キーを生成する。
     * @param operatorId オペレーター ID。
     * @returns GenerateOperatorsAuthKeyResponse 認証キーが生成されました。
     * @throws ApiError
     */
    public static generateOperatorAuthKey(
        operatorId: string,
    ): CancelablePromise<GenerateOperatorsAuthKeyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/auth_keys',
            path: {
                'operator_id': operatorId,
            },
        });
    }
    /**
     * オペレーターの認証キーを削除する
     * オペレーターの認証キーを削除する。
     * @param operatorId オペレーター ID。
     * @param authKeyId 認証キー ID。
     * @returns void
     * @throws ApiError
     */
    public static deleteOperatorAuthKey(
        operatorId: string,
        authKeyId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/auth_keys/{auth_key_id}',
            path: {
                'operator_id': operatorId,
                'auth_key_id': authKeyId,
            },
        });
    }
    /**
     * オペレーターの契約者情報 (法人) を取得する
     * オペレーターの契約者情報 (法人) を返す。
     * @param operatorId オペレーター ID。
     * @returns CompanyInformationModel OK.
     * @throws ApiError
     */
    public static getCompanyInformation(
        operatorId: string,
    ): CancelablePromise<CompanyInformationModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/company_information',
            path: {
                'operator_id': operatorId,
            },
        });
    }
    /**
     * オペレーターの契約者情報 (法人) を作成する
     * オペレーターの契約者情報 (法人) を作成する。
     * @param operatorId オペレーター ID。
     * @param requestBody オペレーターの契約者情報 (法人)。
     * @returns any 作成されました。
     * @throws ApiError
     */
    public static createCompanyInformation(
        operatorId: string,
        requestBody: CompanyInformationModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/company_information',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * オペレーターの契約者情報 (法人) を更新する
     * オペレーターの契約者情報 (法人) を更新する。
     * @param operatorId オペレーター ID。
     * @param requestBody オペレーターの契約者情報 (法人)。
     * @returns any OK.
     * @throws ApiError
     */
    public static updateCompanyInformation(
        operatorId: string,
        requestBody: CompanyInformationModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/operators/{operator_id}/company_information',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * オペレーターに設定された指定のコンフィグレーションを削除する
     * オペレーターに設定された指定のコンフィグレーションを削除します。
     * @param operatorId オペレーター ID。
     * @param namespace コンフィグレーションの種別を示すネームスペース。
     * @returns void
     * @throws ApiError
     */
    public static deleteOperatorConfigurationNamespace(
        operatorId: string,
        namespace: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/configuration/{namespace}',
            path: {
                'operator_id': operatorId,
                'namespace': namespace,
            },
            errors: {
                400: `不正なリクエストです。`,
                404: `コンフィグレーションが存在しません。`,
            },
        });
    }
    /**
     * オペレーターに設定された指定のコンフィグレーションを返す
     * オペレーターに設定された指定のコンフィグレーションを返します。
     * @param operatorId オペレーター ID。
     * @param namespace コンフィグレーションの種別を示すネームスペース。
     * @returns OperatorConfigurationModel OK.
     * @throws ApiError
     */
    public static getOperatorConfigurationNamespace(
        operatorId: string,
        namespace: string,
    ): CancelablePromise<OperatorConfigurationModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/configuration/{namespace}',
            path: {
                'operator_id': operatorId,
                'namespace': namespace,
            },
            errors: {
                400: `不正なリクエストです。`,
                404: `コンフィグレーションが存在しません。`,
            },
        });
    }
    /**
     * オペレーターにコンフィグレーションを設定する
     * オペレーターにコンフィグレーションを設定します。
     * @param operatorId オペレーター ID
     * @param namespace コンフィグレーションの種別を示すネームスペース。
     * @param requestBody
     * @returns OperatorConfigurationModel OK.
     * @throws ApiError
     */
    public static setOperatorConfigurationNamespace(
        operatorId: string,
        namespace: string,
        requestBody: SetOperatorConfigurationNamespaceRequest,
    ): CancelablePromise<OperatorConfigurationModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/configuration/{namespace}',
            path: {
                'operator_id': operatorId,
                'namespace': namespace,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
                409: `コンフリクトが発生しました。最新のコンフィグレーションを取得して、再度更新してください。`,
            },
        });
    }
    /**
     * オペレーターのオプション契約を追加する
     * Operator のオプション契約を追加する。
     * @param operatorId オペレーター ID。
     * @param requestBody モデル。
     * @returns ContractUpdatedResponse OK.
     * @throws ApiError
     */
    public static addOperatorContract(
        operatorId: string,
        requestBody: ContractUpdatingRequest,
    ): CancelablePromise<ContractUpdatedResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/contracts',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * オペレーターのオプション契約を削除する
     * Opearator のオプション契約を解除する。
     * @param operatorId オペレーター ID。
     * @param contractName オプション契約の名前。
     * @returns void
     * @throws ApiError
     */
    public static deleteOperatorContract(
        operatorId: string,
        contractName: 'api_audit_log' | 'harvest' | 'napter' | 'support',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/contracts/{contract_name}',
            path: {
                'operator_id': operatorId,
                'contract_name': contractName,
            },
        });
    }
    /**
     * オペレーターにカバレッジタイプを追加する
     * Operator に新規のカバレッジタイプを追加する。
     * @param operatorId オペレーター ID。
     * @param coverageType カバレッジタイプ。
     * @returns any 追加されました。
     * @throws ApiError
     */
    public static addCoverageType(
        operatorId: string,
        coverageType: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/coverage_type/{coverage_type}',
            path: {
                'operator_id': operatorId,
                'coverage_type': coverageType,
            },
        });
    }
    /**
     * オペレーターの契約者情報 (個人) を取得する
     * オペレーターの契約者情報 (個人) を取得します。
     * @param operatorId オペレーター ID。
     * @returns IndividualInformationModel OK.
     * @throws ApiError
     */
    public static getIndividualInformation(
        operatorId: string,
    ): CancelablePromise<IndividualInformationModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/individual_information',
            path: {
                'operator_id': operatorId,
            },
        });
    }
    /**
     * オペレーターの契約者情報 (個人) を作成する
     * オペレーターの契約者情報 (個人) を作成する。
     * @param operatorId オペレーター ID。
     * @param requestBody オペレーターの契約者情報 (個人)。
     * @returns any 作成されました。
     * @throws ApiError
     */
    public static createIndividualInformation(
        operatorId: string,
        requestBody: IndividualInformationModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/individual_information',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * オペレーターの契約者情報 (個人) を更新する
     * オペレーターの契約者情報 (個人) を更新する。
     * @param operatorId オペレーター ID。
     * @param requestBody オペレーターの契約者情報 (個人)。
     * @returns any OK.
     * @throws ApiError
     */
    public static updateIndividualInformation(
        operatorId: string,
        requestBody: IndividualInformationModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/operators/{operator_id}/individual_information',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ルートユーザーの MFA を無効化する
     * ルートユーザーの MFA を無効化します。
     * @param operatorId オペレーター ID。
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static revokeMfa(
        operatorId: string,
        requestBody: MFARevokeRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/mfa',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * ルートユーザーの MFA の状態を取得する
     * ルートユーザーの MFA の状態を取得します。MFA の状態は `ACTIVE`, `INACTIVE` もしくは `UNCONFIRMED` のいずれかです。
     * @param operatorId オペレーター ID。
     * @returns MFAStatusOfUseResponse OK.
     * @throws ApiError
     */
    public static getMfaStatus(
        operatorId: string,
    ): CancelablePromise<MFAStatusOfUseResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/operators/{operator_id}/mfa',
            path: {
                'operator_id': operatorId,
            },
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * ルートユーザーの MFA を有効化する
     * ルートユーザーの MFA を有効化します。この API を呼んだ後に、`Operator:verifyMFA` API を用いて MFA OTP を検証する必要があります。
     * @param operatorId オペレーター ID。
     * @returns EnableMFAOTPResponse OK.
     * @throws ApiError
     */
    public static enableMfa(
        operatorId: string,
    ): CancelablePromise<EnableMFAOTPResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/mfa',
            path: {
                'operator_id': operatorId,
            },
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * ルートユーザーの MFA OTP コードを検証する
     * ルートユーザーの MFA OTP を検証します。`Operator:enableMFA` を呼んだ後に呼び出す必要があります。この API で正しく検証が行われるまで、MFA は有効になりません。この API のレスポンスとして返ってくるバックアップコードは必ず保管してください。
     * @param operatorId オペレーター ID。
     * @param requestBody リクエスト。
     * @returns OperatorMFAVerifyingResponse OK.
     * @throws ApiError
     */
    public static verifyMfa(
        operatorId: string,
        requestBody: MFAAuthenticationRequest,
    ): CancelablePromise<OperatorMFAVerifyingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/mfa/verify',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
            },
        });
    }
    /**
     * ルートユーザーのパスワードを更新する
     * ルートユーザーのパスワードを更新する。
     * @param operatorId オペレーター ID
     * @param requestBody 現在のパスワードと新しいパスワード。
     * @returns any OK.
     * @throws ApiError
     */
    public static updateOperatorPassword(
        operatorId: string,
        requestBody: UpdatePasswordRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/password',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なパスワードです。`,
            },
        });
    }
    /**
     * SORACOM サポートにアクセスするためのトークンを生成する
     * サポート画面アクセス用のトークンを返す。
     * @param operatorId オペレーター ID。
     * @returns SupportTokenResponse OK.
     * @throws ApiError
     */
    public static generateSupportToken(
        operatorId: string,
    ): CancelablePromise<SupportTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/support/token',
            path: {
                'operator_id': operatorId,
            },
            errors: {
                400: `誤ったオペレーター ID が指定されました。`,
                403: `不正なトークンです。`,
            },
        });
    }
    /**
     * 新しい API トークンを発行する
     * 新しい API トークンを発行する。現在の API トークンをヘッダーに入れてリクエストを行うと、新しい API トークンを含んだレスポンスを返す。以降のリクエスト時にはこの新しい API トークンを用いることができる。
     * @param operatorId オペレーター ID。
     * @param requestBody API トークンの有効期間 (秒)。
     * @returns GenerateTokenResponse OK.
     * @throws ApiError
     */
    public static generateAuthToken(
        operatorId: string,
        requestBody: GenerateTokenRequest,
    ): CancelablePromise<GenerateTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/{operator_id}/token',
            path: {
                'operator_id': operatorId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `リクエストに誤りがあるか、指定されたトークンがすでに無効になっている (後者の場合、/auth API で再度認証を行う必要がある)。`,
            },
        });
    }
    /**
     * ルートユーザーが発行したすべての API キーと API トークンを無効化する
     * ルートユーザーが発行したすべての API キーと API トークンを無効化します。無効化したあとは、有効期間に関わらず API キーと API トークンを用いて SORACOM API を呼び出すことはできません。
     * @param operatorId オペレーター ID。
     * @returns void
     * @throws ApiError
     */
    public static revokeOperatorAuthTokens(
        operatorId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/operators/{operator_id}/tokens',
            path: {
                'operator_id': operatorId,
            },
            errors: {
                400: `誤ったオペレーター ID が指定されました。`,
            },
        });
    }
    /**
     * ルートユーザーの MFA を無効化するためのトークンを発行する
     * ルートユーザーの MFA を無効化するためのトークンを発行します。この API が呼ばれた後、トークンはメールで送信されます。
     * @param requestBody リクエスト。
     * @returns any OK.
     * @throws ApiError
     */
    public static issueMfaRevokingToken(
        requestBody: MFAIssueRevokingTokenRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/mfa_revoke_token/issue',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
                404: `オペレーターが存在しません。`,
            },
        });
    }
    /**
     * ルートユーザーの MFA を無効化するためのトークンを検証して MFA を無効化する
     * MFA を無効化するためのワンタイムトークン、アカウントのメールアドレス、パスワードおよびバックアップコードの組み合わせによって MFA を無効化します。検証に成功すると、MFA が無効化されます。
     * @param requestBody リクエスト。
     * @returns any 無効化されました。
     * @throws ApiError
     */
    public static verifyMfaRevokingToken(
        requestBody: MFARevokingTokenVerifyRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/operators/mfa_revoke_token/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `不正なリクエストです。`,
                403: `メールアドレスまたはパスワードが誤っています。`,
            },
        });
    }
}
