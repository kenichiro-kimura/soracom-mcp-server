/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateSimRequest = {
    /**
     * バーチャル SIM/Subscriber を作成するには、`planArc01` を指定します。
     */
    subscription: CreateSimRequest.subscription;
    /**
     * バーチャル SIM/Subscriber を作成するには、`virtual` を指定します。
     */
    type: CreateSimRequest.type;
};
export namespace CreateSimRequest {
    /**
     * バーチャル SIM/Subscriber を作成するには、`planArc01` を指定します。
     */
    export enum subscription {
        PLAN_ARC01 = 'planArc01',
    }
    /**
     * バーチャル SIM/Subscriber を作成するには、`virtual` を指定します。
     */
    export enum type {
        VIRTUAL = 'virtual',
    }
}

