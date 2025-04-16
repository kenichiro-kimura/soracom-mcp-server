/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelOptimCloudiotosDestination = {
    channel_id?: string;
    data_format?: string;
    provider?: FunnelOptimCloudiotosDestination.provider;
    resourceUrl?: string;
    service?: FunnelOptimCloudiotosDestination.service;
};
export namespace FunnelOptimCloudiotosDestination {
    export enum provider {
        OPTIM = 'optim',
    }
    export enum service {
        CLOUDIOTOS = 'cloudiotos',
    }
}

