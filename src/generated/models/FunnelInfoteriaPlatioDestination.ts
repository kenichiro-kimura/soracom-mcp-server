/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelInfoteriaPlatioDestination = {
    applicationId?: string;
    collectionId?: string;
    passAll?: boolean;
    provider?: FunnelInfoteriaPlatioDestination.provider;
    resourceUrl?: string;
    service?: FunnelInfoteriaPlatioDestination.service;
    values?: string;
};
export namespace FunnelInfoteriaPlatioDestination {
    export enum provider {
        INFOTERIA = 'infoteria',
    }
    export enum service {
        PLATIO = 'platio',
    }
}

