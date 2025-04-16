/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LagoonUser = {
    /**
     * Lagoon ユーザーのメールアドレス。
     */
    email?: string;
    id?: number;
    /**
     * 最終ログイン日時。
     */
    lastSeenAt?: string;
    /**
     * 最終ログインからの経過日数。
     */
    lastSeenAtAge?: string;
    /**
     * 権限を表すロール。
     */
    role?: LagoonUser.role;
};
export namespace LagoonUser {
    /**
     * 権限を表すロール。
     */
    export enum role {
        VIEWER = 'Viewer',
        EDITOR = 'Editor',
    }
}

