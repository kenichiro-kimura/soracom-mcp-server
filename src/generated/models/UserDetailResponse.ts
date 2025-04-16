/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthKeyResponse } from './AuthKeyResponse';
import type { ListRolesResponse } from './ListRolesResponse';
export type UserDetailResponse = {
    /**
     * 認証キーのリスト。
     */
    authKeyList: Array<AuthKeyResponse>;
    /**
     * SAM ユーザーの作成日時 (UNIX 時間 (秒))。
     */
    createDateTime: number;
    /**
     * SAM ユーザーの説明。
     */
    description?: string;
    /**
     * SORACOM ユーザーコンソールのログインパスワードが設定されているかどうか。
     */
    hasPassword: boolean;
    /**
     * SAM ユーザーの権限。
     */
    permission?: string;
    /**
     * SAM ユーザーに割り当てられているロールのリスト。
     */
    roleList: Array<ListRolesResponse>;
    /**
     * SAM ユーザーの更新日時 (UNIX 時間 (秒))。
     */
    updateDateTime: number;
    /**
     * SAM ユーザーの名前。
     */
    userName: string;
};

