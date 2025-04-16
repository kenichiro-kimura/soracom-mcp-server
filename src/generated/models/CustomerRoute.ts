/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CustomerRoute = {
    destinationCidr?: string;
    id?: string;
    target?: string;
    type?: CustomerRoute.type;
};
export namespace CustomerRoute {
    export enum type {
        STATIC = 'static',
        DYNAMIC = 'dynamic',
    }
}

