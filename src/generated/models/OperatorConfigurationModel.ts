/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperatorConfigurationOfEmail } from './OperatorConfigurationOfEmail';
import type { OperatorConfigurationOfSupport } from './OperatorConfigurationOfSupport';
import type { OperatorConfigurationOfUserConsole } from './OperatorConfigurationOfUserConsole';
export type OperatorConfigurationModel = {
    configuration?: (OperatorConfigurationOfEmail | OperatorConfigurationOfSupport | OperatorConfigurationOfUserConsole);
    /**
     * false の場合、コンフィグレーションを setOperatorConfigurationNamespace API で更新できません。
     */
    isModifiable?: boolean;
    /**
     * ネームスペースごとに異なる configuration を指定します。詳細は configuration プロパティを参照してください。
     */
    namespace?: OperatorConfigurationModel.namespace;
    /**
     * コンフィグレーションのバージョン。
     */
    version?: number;
};
export namespace OperatorConfigurationModel {
    /**
     * ネームスペースごとに異なる configuration を指定します。詳細は configuration プロパティを参照してください。
     */
    export enum namespace {
        SUPPORT = 'Support',
        EMAIL = 'Email',
    }
}

