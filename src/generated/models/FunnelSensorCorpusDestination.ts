/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunnelSensorCorpusDestination = {
    additionalData?: string;
    provider?: FunnelSensorCorpusDestination.provider;
    resourceUrl?: string;
    service?: FunnelSensorCorpusDestination.service;
};
export namespace FunnelSensorCorpusDestination {
    export enum provider {
        INFOCORPUS = 'infocorpus',
    }
    export enum service {
        SENSORCORPUS = 'sensorcorpus',
    }
}

