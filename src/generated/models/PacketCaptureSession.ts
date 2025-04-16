/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PacketCaptureSession = {
    createdTime?: string;
    duration?: number;
    endedTime?: string;
    failedReason?: string;
    prefix?: string;
    sessionId?: string;
    startedTime?: string;
    status?: PacketCaptureSession.status;
    url?: string;
};
export namespace PacketCaptureSession {
    export enum status {
        REQUESTED = 'REQUESTED',
        ACCEPTED = 'ACCEPTED',
        CAPTURING = 'CAPTURING',
        POST_PROCESSING = 'POST_PROCESSING',
        DONE = 'DONE',
        FAILED = 'FAILED',
        STOPPED = 'STOPPED',
    }
}

