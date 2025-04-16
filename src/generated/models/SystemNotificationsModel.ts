/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SystemNotificationsModel = {
    emailIdList?: Array<string>;
    /**
     * メールアドレスの種類。
     */
    type?: SystemNotificationsModel.type;
    updateDateTime?: number;
};
export namespace SystemNotificationsModel {
    /**
     * メールアドレスの種類。
     */
    export enum type {
        PRIMARY = 'primary',
        RECOVERY = 'recovery',
        BILLING = 'billing',
        SUPPORT = 'support',
    }
}

