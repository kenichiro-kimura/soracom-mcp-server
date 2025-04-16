/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SetImeiLockRequest = {
    /**
     * 対象デバイスの IMEI。一時的に IMEI が報告されない場合でもセッションの確立を許可する場合は、`|ANONYMOUS` を追記します。
     *
     * たとえば、対象デバイスの IMEI が `123456789012345` の場合に `123456789012345|ANONYMOUS` を指定すると、一時的に IMEI が報告されない場合でもセッションの確立を許可します。
     *
     */
    imei?: string;
};

