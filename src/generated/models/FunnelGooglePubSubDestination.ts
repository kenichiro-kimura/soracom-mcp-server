/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelGooglePubSubDestination = {
    payloadsOnly?: boolean;
    provider?: FunnelGooglePubSubDestination.provider;
    resourceUrl?: string;
    service?: FunnelGooglePubSubDestination.service;
};
export namespace FunnelGooglePubSubDestination {
    export enum provider {
        GOOGLE = 'google',
    }
    export enum service {
        PUBSUB = 'pubsub',
    }
}

