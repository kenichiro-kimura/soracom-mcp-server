/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NapterAuditLogDirection } from './NapterAuditLogDirection';
export type NapterAuditLogEntry = {
    connectionId?: string;
    createdAt?: number;
    direction?: NapterAuditLogDirection;
    imsi?: string;
    operatorId?: string;
    tls?: boolean;
    type?: NapterAuditLogEntry.type;
};
export namespace NapterAuditLogEntry {
    export enum type {
        ACCESS = 'ACCESS',
        DENIED = 'DENIED',
        CONNECTED = 'CONNECTED',
        CLOSED = 'CLOSED',
        REFUSED = 'REFUSED',
        CREATED = 'CREATED',
        DELETED = 'DELETED',
        EXPIRED = 'EXPIRED',
    }
}

