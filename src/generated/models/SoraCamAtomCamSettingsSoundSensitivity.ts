/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamAtomCamSettingsSoundSensitivity = {
    /**
     * サウンド検出の感度設定。感度が高いほど、小さな音を検出しやすくなります。
     *
     * - `high`: 高。
     * - `medium`: 中。
     * - `low`: 低。
     *
     */
    state: SoraCamAtomCamSettingsSoundSensitivity.state;
};
export namespace SoraCamAtomCamSettingsSoundSensitivity {
    /**
     * サウンド検出の感度設定。感度が高いほど、小さな音を検出しやすくなります。
     *
     * - `high`: 高。
     * - `medium`: 中。
     * - `low`: 低。
     *
     */
    export enum state {
        HIGH = 'high',
        MEDIUM = 'medium',
        LOW = 'low',
    }
}

