/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelAcroquestTorrentioDestination = {
    endpointId?: string;
    provider?: FunnelAcroquestTorrentioDestination.provider;
    resourceUrl?: string;
    service?: FunnelAcroquestTorrentioDestination.service;
    tenantId?: string;
};
export namespace FunnelAcroquestTorrentioDestination {
    export enum provider {
        ACROQUEST = 'acroquest',
    }
    export enum service {
        TORRENTIO = 'torrentio',
    }
}

