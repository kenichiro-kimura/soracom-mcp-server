/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelAWSFirehoseDestination = {
    payloadsOnly?: boolean;
    provider?: FunnelAWSFirehoseDestination.provider;
    resourceUrl?: string;
    service?: FunnelAWSFirehoseDestination.service;
};
export namespace FunnelAWSFirehoseDestination {
    export enum provider {
        AWS = 'aws',
    }
    export enum service {
        FIREHOSE = 'firehose',
    }
}

