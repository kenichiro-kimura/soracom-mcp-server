/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateTransitGatewayVpcAttachmentRequest = {
    /**
     * アタッチされる VPC の AWS アカウント ID
     */
    customerAwsAccountId: string;
    /**
     * アタッチされる VPC の AWS VPC ID
     */
    customerVpcId: string;
    /**
     * VPC アタッチメントを識別するために使用される名前
     */
    name?: string;
};

