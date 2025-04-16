/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelLandlogDestination = {
    channel_id?: string;
    data_format?: FunnelLandlogDestination.data_format;
    provider?: FunnelLandlogDestination.provider;
    resourceUrl?: string;
    service?: FunnelLandlogDestination.service;
};
export namespace FunnelLandlogDestination {
    export enum data_format {
        JSON = 'json',
        TEXT = 'text',
        XML = 'xml',
    }
    export enum provider {
        LANDLOG = 'landlog',
    }
    export enum service {
        LANDLOG = 'landlog',
    }
}

