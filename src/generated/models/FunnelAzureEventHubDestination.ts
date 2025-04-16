/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelAzureEventHubDestination = {
    payloadsOnly?: boolean;
    provider?: FunnelAzureEventHubDestination.provider;
    resourceUrl?: string;
    service?: FunnelAzureEventHubDestination.service;
};
export namespace FunnelAzureEventHubDestination {
    export enum provider {
        AZURE = 'azure',
    }
    export enum service {
        EVENTHUBS = 'eventhubs',
    }
}

