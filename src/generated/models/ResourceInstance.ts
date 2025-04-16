/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ResourceInstance = {
    description?: string;
    id?: number;
    mandatory?: boolean;
    multiple?: boolean;
    name?: string;
    observed?: boolean;
    operations?: ResourceInstance.operations;
    rangeEnumeration?: string;
    type?: ResourceInstance.type;
    units?: string;
    value?: Record<string, any>;
    values?: Record<string, any>;
};
export namespace ResourceInstance {
    export enum operations {
        NONE = 'NONE',
        R = 'R',
        W = 'W',
        RW = 'RW',
        E = 'E',
        RE = 'RE',
        WE = 'WE',
        RWE = 'RWE',
    }
    export enum type {
        STRING = 'STRING',
        INTEGER = 'INTEGER',
        FLOAT = 'FLOAT',
        BOOLEAN = 'BOOLEAN',
        OPAQUE = 'OPAQUE',
        TIME = 'TIME',
        OBJLNK = 'OBJLNK',
    }
}

