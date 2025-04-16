/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamPowerState = {
    /**
     * ソラカメ対応カメラの電源状態。
     *
     * - `on`: 電源オン
     * - `sleep`: スリープ
     *
     */
    powerState: SoraCamPowerState.powerState;
};
export namespace SoraCamPowerState {
    /**
     * ソラカメ対応カメラの電源状態。
     *
     * - `on`: 電源オン
     * - `sleep`: スリープ
     *
     */
    export enum powerState {
        ON = 'on',
        SLEEP = 'sleep',
    }
}

