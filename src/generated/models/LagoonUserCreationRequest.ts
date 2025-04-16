/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LagoonUserCreationRequest = {
    /**
     * 権限を表すロール。
     */
    role?: LagoonUserCreationRequest.role;
    userEmail?: string;
    userPassword?: string;
};
export namespace LagoonUserCreationRequest {
    /**
     * 権限を表すロール。
     */
    export enum role {
        VIEWER = 'Viewer',
        EDITOR = 'Editor',
    }
}

