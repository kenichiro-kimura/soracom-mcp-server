/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelYaskawaMmcloudDestination = {
    desthost?: string;
    destport?: number;
    provider?: FunnelYaskawaMmcloudDestination.provider;
    resourceUrl?: string;
    service?: FunnelYaskawaMmcloudDestination.service;
};
export namespace FunnelYaskawaMmcloudDestination {
    export enum provider {
        YASKAWA = 'yaskawa',
    }
    export enum service {
        MMCLOUD = 'mmcloud',
    }
}

