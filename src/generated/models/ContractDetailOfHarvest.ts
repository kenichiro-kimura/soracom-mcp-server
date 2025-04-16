/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ContractDetailOfHarvest = {
    /**
     * 契約種別。現在は、"extended"のみ指定できます。
     */
    plan?: ContractDetailOfHarvest.plan;
    /**
     * データの保存期間（日にち）。現在は 731 のみ指定できます。
     */
    ttl?: number;
};
export namespace ContractDetailOfHarvest {
    /**
     * 契約種別。現在は、"extended"のみ指定できます。
     */
    export enum plan {
        EXTENDED = 'extended',
    }
}

