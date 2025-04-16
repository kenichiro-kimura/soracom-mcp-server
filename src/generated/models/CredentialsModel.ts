/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CredentialsModel = {
    createDateTime: number;
    credentials: Record<string, any>;
    credentialsId: string;
    description?: string;
    lastUsedDateTime: number;
    type: CredentialsModel.type;
    updateDateTime: number;
};
export namespace CredentialsModel {
    export enum type {
        API_TOKEN_CREDENTIALS = 'api-token-credentials',
        AWS_CREDENTIALS = 'aws-credentials',
        AWS_IAM_ROLE_CREDENTIALS = 'aws-iam-role-credentials',
        AZURE_CREDENTIALS = 'azure-credentials',
        AZURE_IO_T_CREDENTIALS = 'azureIoT-credentials',
        ESRIJ_CREDENTIALS = 'esrij-credentials',
        GOOGLE_SERVICE_ACCOUNT_JSON = 'google-service-account-json',
        GOOGLE_IO_T_CREDENTIALS = 'googleIoT-credentials',
        INFOTERIA_PLATIO_CREDENTIALS = 'infoteria-platio-credentials',
        KII_THINGIF_CREDENTIALS = 'kii-thingif-credentials',
        LANDLOG_CREDENTIALS = 'landlog-credentials',
        MMCLOUD_CREDENTIALS = 'mmcloud-credentials',
        MOTIONBOARD_CREDENTIALS = 'motionboard-credentials',
        OPTIM_CLOUD_IO_T_OS_CREDENTIALS = 'optim-cloud-IoT-OS-credentials',
        PRIVATE_KEY_PEM = 'private-key-pem',
        PSK = 'psk',
        PUBNUB_CREDENTIALS = 'pubnub-credentials',
        SENSORCORPUS_CREDENTIALS = 'sensorcorpus-credentials',
        USERNAME_PASSWORD_CREDENTIALS = 'username-password-credentials',
        X509 = 'x509',
    }
}

