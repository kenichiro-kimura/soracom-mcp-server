/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IpAddressMapEntry = {
    hostId: string;
    ipAddress: string;
    key: string;
    lastUpdatedAt?: number;
    type: IpAddressMapEntry.type;
};
export namespace IpAddressMapEntry {
    export enum type {
        STATIC = 'static',
        DYNAMIC = 'dynamic',
        CUSTOMER_GATE_PEER = 'customerGatePeer',
        GATE_PEER = 'gatePeer',
    }
}

