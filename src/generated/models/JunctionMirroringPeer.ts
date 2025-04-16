/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type JunctionMirroringPeer = {
    description?: string;
    enabled?: boolean;
    ipAddress?: string;
    protocol?: JunctionMirroringPeer.protocol;
};
export namespace JunctionMirroringPeer {
    export enum protocol {
        GRE = 'gre',
    }
}

