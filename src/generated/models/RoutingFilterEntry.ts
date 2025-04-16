/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RoutingFilterEntry = {
    /**
     * Whether to allow or deny the outbound packets with a destination in the specified range
     */
    action: RoutingFilterEntry.action;
    /**
     * IPv4 address range in CIDR format, e.g. a.b.c.d/x
     */
    ipRange: string;
};
export namespace RoutingFilterEntry {
    /**
     * Whether to allow or deny the outbound packets with a destination in the specified range
     */
    export enum action {
        ALLOW = 'allow',
        DENY = 'deny',
    }
}

