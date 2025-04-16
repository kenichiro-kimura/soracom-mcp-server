/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LastSeen } from './LastSeen';
export type LoraDevice = {
    device_id?: string;
    groupId?: string;
    lastModifiedTime?: string;
    lastSeen?: LastSeen;
    operatorId?: string;
    status?: LoraDevice.status;
    tags?: Record<string, string>;
    terminationEnabled?: boolean;
};
export namespace LoraDevice {
    export enum status {
        ACTIVE = 'active',
        READY = 'ready',
        TERMINATED = 'terminated',
        INSTOCK = 'instock',
    }
}

