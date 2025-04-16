/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelAWSIoTDestination = {
    payloadsOnly?: boolean;
    provider?: FunnelAWSIoTDestination.provider;
    resourceUrl?: string;
    sendPayloadsAsBinary?: boolean;
    service?: FunnelAWSIoTDestination.service;
};
export namespace FunnelAWSIoTDestination {
    export enum provider {
        AWS = 'aws',
    }
    export enum service {
        AWS_IOT = 'aws-iot',
    }
}

