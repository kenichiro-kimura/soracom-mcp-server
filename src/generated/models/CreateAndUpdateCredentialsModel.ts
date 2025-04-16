/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateAndUpdateCredentialsModel = {
    credentials?: Record<string, any>;
    description?: string;
    type?: CreateAndUpdateCredentialsModel.type;
};
export namespace CreateAndUpdateCredentialsModel {
    export enum type {
        AWS_CREDENTIALS = 'aws-credentials',
        AZURE_CREDENTIALS = 'azure-credentials',
        PSK = 'psk',
        X509 = 'x509',
    }
}

