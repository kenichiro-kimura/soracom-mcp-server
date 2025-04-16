/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LoraGateway = {
    address?: string;
    createdTime?: string;
    gatewayId?: string;
    lastModifiedTime?: string;
    networkSetId?: string;
    online?: boolean;
    operatorId?: string;
    owned?: boolean;
    status?: LoraGateway.status;
    tags?: Record<string, string>;
    terminationEnabled?: boolean;
};
export namespace LoraGateway {
    export enum status {
        ACTIVE = 'active',
        TERMINATED = 'terminated',
        READY = 'ready',
        INSTOCK = 'instock',
    }
}

