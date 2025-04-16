/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Insight } from './Insight';
export type DiagnosticResponse = {
    diagnosticId: string;
    /**
     * 診断対象期間の始まり (UNIX 時間 (ミリ秒))。
     */
    from: number;
    insights: Array<Insight>;
    /**
     * resourceType に応じた識別子。
     */
    resourceId: string;
    resourceType: DiagnosticResponse.resourceType;
    service: DiagnosticResponse.service;
    status: DiagnosticResponse.status;
    /**
     * 診断対象期間の終わり (UNIX 時間 (ミリ秒))。
     */
    to: number;
};
export namespace DiagnosticResponse {
    export enum resourceType {
        SIM = 'sim',
    }
    export enum service {
        AIR = 'Air',
    }
    export enum status {
        DIAGNOSING = 'diagnosing',
        DONE = 'done',
        FAILED = 'failed',
    }
}

