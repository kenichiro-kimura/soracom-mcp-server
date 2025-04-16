/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionConfigProperty } from './ActionConfigProperty';
export type ActionConfig = {
    properties: ActionConfigProperty;
    /**
     * アクションの種類。以下のいずれかを設定します。種類によって、`properties` で指定できる値は異なります。
     *
     * - `SendMailAction`: メールを送る。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `to`
     * - `title`
     * - `message`
     * - `SendMailToOperatorAction`: オペレーターのプライマリメールアドレスにメールを送る。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `title`
     * - `message`
     * - `ChangeSpeedClassAction`: IoT SIM の速度クラスを変更する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `speedClass`
     * - `ActivationAction`、`DeactivationAction`、`StandbyAction`、`SuspendAction`: 使用中 (active)、休止中 (inactive)、利用開始待ち (standby)、利用中断中 (suspended) に変更する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `ExecuteWebRequestAction`: 指定の URL にリクエストを送る。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `url` (必須)
     * - `httpMethod` (必須)
     * - `contentType` (必須)
     * - `headers` (必須)
     * - `body`
     * - `InvokeAWSLambdaAction`: AWS Lambda を呼び出す。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `endpoint` (必須)
     * - `functionName` (必須)
     * - `credentialsId` (必須)
     * - `parameter1`、`parameter2`、`parameter3`、`parameter4`、`parameter5`
     *
     * **Warning**: `accessKey` および `secretAccessKey` は非推奨のプロパティです。`credentialsId` を利用してください。
     *
     */
    type: ActionConfig.type;
};
export namespace ActionConfig {
    /**
     * アクションの種類。以下のいずれかを設定します。種類によって、`properties` で指定できる値は異なります。
     *
     * - `SendMailAction`: メールを送る。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `to`
     * - `title`
     * - `message`
     * - `SendMailToOperatorAction`: オペレーターのプライマリメールアドレスにメールを送る。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `title`
     * - `message`
     * - `ChangeSpeedClassAction`: IoT SIM の速度クラスを変更する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `speedClass`
     * - `ActivationAction`、`DeactivationAction`、`StandbyAction`、`SuspendAction`: 使用中 (active)、休止中 (inactive)、利用開始待ち (standby)、利用中断中 (suspended) に変更する。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `ExecuteWebRequestAction`: 指定の URL にリクエストを送る。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `url` (必須)
     * - `httpMethod` (必須)
     * - `contentType` (必須)
     * - `headers` (必須)
     * - `body`
     * - `InvokeAWSLambdaAction`: AWS Lambda を呼び出す。
     *
     * なお、`properties` に設定できるプロパティは、以下のとおりです。
     * - `executionDateTimeConst` (必須)
     * - `executionOffsetMinutes`
     * - `endpoint` (必須)
     * - `functionName` (必須)
     * - `credentialsId` (必須)
     * - `parameter1`、`parameter2`、`parameter3`、`parameter4`、`parameter5`
     *
     * **Warning**: `accessKey` および `secretAccessKey` は非推奨のプロパティです。`credentialsId` を利用してください。
     *
     */
    export enum type {
        CHANGE_SPEED_CLASS_ACTION = 'ChangeSpeedClassAction',
        INVOKE_AWSLAMBDA_ACTION = 'InvokeAWSLambdaAction',
        EXECUTE_WEB_REQUEST_ACTION = 'ExecuteWebRequestAction',
        SEND_MAIL_ACTION = 'SendMailAction',
        SEND_MAIL_TO_OPERATOR_ACTION = 'SendMailToOperatorAction',
        ACTIVATION_ACTION = 'ActivationAction',
        DEACTIVATION_ACTION = 'DeactivationAction',
        STANDBY_ACTION = 'StandbyAction',
        SUSPEND_ACTION = 'SuspendAction',
    }
}

