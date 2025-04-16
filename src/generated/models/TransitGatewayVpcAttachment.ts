/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TransitGatewayVpcAttachment = {
    /**
     * VPC attachment の作成日時
     */
    createdTime?: number;
    /**
     * アタッチされる VPC の AWS アカウント ID
     */
    customerAwsAccountId?: string;
    /**
     * AWS Transit Gateway VPC アタッチメント ID。Transit Gateway VPC アタッチメントの一意の ID です。
     */
    customerTransitGatewayVpcAttachmentId?: string;
    /**
     * アタッチされる VPC の ID
     */
    customerVpcId?: string;
    /**
     * AWS Transit Gateway VPC アタッチメント ID。Transit Gateway VPC アタッチメントの一意の ID です。
     */
    id?: string;
    /**
     * VPC attachment の最終更新日時
     */
    lastModifiedTime?: number;
    /**
     * Transit Gateway VPC アタッチメントのユーザー定義名
     */
    name?: string;
    /**
     * Transit Gateway VPC アタッチメントの現在のステータス。 `vpcAttachmentPending`のステータスは、ピア AWS アカウントでまだ VPC アタッチメントが作成されていないことを意味します。
     */
    status?: TransitGatewayVpcAttachment.status;
};
export namespace TransitGatewayVpcAttachment {
    /**
     * Transit Gateway VPC アタッチメントの現在のステータス。 `vpcAttachmentPending`のステータスは、ピア AWS アカウントでまだ VPC アタッチメントが作成されていないことを意味します。
     */
    export enum status {
        VPC_ATTACHMENT_PENDING = 'vpcAttachmentPending',
        ACCEPTANCE_PENDING = 'acceptancePending',
        ACTIVE = 'active',
        FAILED = 'failed',
    }
}

