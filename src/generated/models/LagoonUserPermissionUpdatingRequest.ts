/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LagoonUserPermissionUpdatingRequest = {
    /**
     * 権限を表すロール。
     */
    role?: LagoonUserPermissionUpdatingRequest.role;
};
export namespace LagoonUserPermissionUpdatingRequest {
    /**
     * 権限を表すロール。
     */
    export enum role {
        VIEWER = 'Viewer',
        EDITOR = 'Editor',
    }
}

