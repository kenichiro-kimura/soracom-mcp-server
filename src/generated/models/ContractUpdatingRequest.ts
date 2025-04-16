/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContractDetailOfHarvest } from './ContractDetailOfHarvest';
import type { ContractDetailOfSupport } from './ContractDetailOfSupport';
export type ContractUpdatingRequest = {
    contractDetail?: (ContractDetailOfHarvest | ContractDetailOfSupport);
    contractName: ContractUpdatingRequest.contractName;
};
export namespace ContractUpdatingRequest {
    export enum contractName {
        API_AUDIT_LOG = 'api_audit_log',
        HARVEST = 'harvest',
        NAPTER = 'napter',
        SUPPORT = 'support',
    }
}

