/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TransitGatewayResourceSharedStatus = {
    /**
     * リソース共有の作成日時
     */
    createdTime?: number;
    /**
     * Soracom とリソースを共有している AWS アカウント ID
     */
    customerAwsAccountId?: string;
    /**
     * リソース共有の最終更新日時
     */
    lastModifiedTime?: number;
    /**
     * リソース共有の ARN
     */
    resourceShareArn?: string;
    /**
     * リソース共有のステータス。保留中のステータスは、ユーザーが自分の AWS アカウントで Soracom とのリソース共有をまだ受け入れていないことを意味します。
     */
    status?: string;
};

