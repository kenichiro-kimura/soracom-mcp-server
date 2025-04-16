/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamAtomCamSettingsRotation = {
    /**
     * 画像を 180° 回転させる設定。ソラカメ対応カメラを上下反対に設置した場合に `180` を設定します。
     *
     * - `0`: OFF (回転なし)。
     * - `180`: ON (180° 回転)。
     *
     */
    state: SoraCamAtomCamSettingsRotation.state;
};
export namespace SoraCamAtomCamSettingsRotation {
    /**
     * 画像を 180° 回転させる設定。ソラカメ対応カメラを上下反対に設置した場合に `180` を設定します。
     *
     * - `0`: OFF (回転なし)。
     * - `180`: ON (180° 回転)。
     *
     */
    export enum state {
        '_0' = 0,
        '_180' = 180,
    }
}

