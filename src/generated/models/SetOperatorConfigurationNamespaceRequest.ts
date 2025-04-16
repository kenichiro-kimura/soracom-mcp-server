/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperatorConfigurationOfEmail } from './OperatorConfigurationOfEmail';
import type { OperatorConfigurationOfSupport } from './OperatorConfigurationOfSupport';
import type { OperatorConfigurationOfUserConsole } from './OperatorConfigurationOfUserConsole';
export type SetOperatorConfigurationNamespaceRequest = {
    configuration: (OperatorConfigurationOfSupport | OperatorConfigurationOfEmail | OperatorConfigurationOfUserConsole);
    /**
     * このプロパティは、更新時のコンフリクトを避けるために利用します。利用する場合、getOperatorConfigurationNamespace API で 取得した version の値をここに指定します。 もし expectedVersion を指定しなかった場合は、更新時にコンフリクトの確認をしません。
     */
    expectedVersion?: number;
};

