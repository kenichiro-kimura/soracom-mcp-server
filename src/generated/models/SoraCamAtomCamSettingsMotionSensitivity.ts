/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamAtomCamSettingsMotionSensitivity = {
    /**
     * モーション検知の感度設定。感度が高いほど、小さな画像の変化を検出できます。
     *
     * - `high`: 高。
     * - `medium`: 中。
     * - `low`: 低。
     *
     */
    state: SoraCamAtomCamSettingsMotionSensitivity.state;
};
export namespace SoraCamAtomCamSettingsMotionSensitivity {
    /**
     * モーション検知の感度設定。感度が高いほど、小さな画像の変化を検出できます。
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

