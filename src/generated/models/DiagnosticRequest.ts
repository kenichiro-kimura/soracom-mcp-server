/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DiagnosticRequest = {
    /**
     * 診断対象期間の始まり (UNIX 時間 (ミリ秒))。
     */
    from?: number;
    /**
     * resourceType に応じた識別子。
     *
     * - resourceType が `sim` の場合は、SIM ID を指定します。
     *
     */
    resourceId: string;
    resourceType: DiagnosticRequest.resourceType;
    service: DiagnosticRequest.service;
    /**
     * 診断対象期間の終わり (UNIX 時間 (ミリ秒))。
     */
    to?: number;
};
export namespace DiagnosticRequest {
    export enum resourceType {
        SIM = 'sim',
    }
    export enum service {
        AIR = 'Air',
    }
}

