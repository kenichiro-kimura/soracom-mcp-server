/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelAWSKinesisDestination = {
    payloadsOnly?: boolean;
    provider?: FunnelAWSKinesisDestination.provider;
    randomizePartitionKey?: boolean;
    resourceUrl?: string;
    service?: FunnelAWSKinesisDestination.service;
};
export namespace FunnelAWSKinesisDestination {
    export enum provider {
        AWS = 'aws',
    }
    export enum service {
        KINESIS = 'kinesis',
    }
}

