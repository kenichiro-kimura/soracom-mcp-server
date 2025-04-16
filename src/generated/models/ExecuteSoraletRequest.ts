/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SoraletDataSource } from './SoraletDataSource';
export type ExecuteSoraletRequest = {
    contentType: string;
    direction: ExecuteSoraletRequest.direction;
    encodingType?: ExecuteSoraletRequest.encodingType;
    payload: string;
    source: Record<string, SoraletDataSource>;
    userdata?: string;
    version: string;
};
export namespace ExecuteSoraletRequest {
    export enum direction {
        UPLINK = 'uplink',
        DOWNLINK = 'downlink',
    }
    export enum encodingType {
        TEXT = 'text',
        BINARY = 'binary',
    }
}

