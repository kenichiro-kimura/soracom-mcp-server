/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamDeviceLicenseUpdate = {
    /**
     * 割り当てるライセンスの種類。
     *
     * - `CR7-SC`: クラウド常時録画ライセンス (7 日間)。
     * - `CR14-SC`: クラウド常時録画ライセンス (14 日間)。
     * - `CR30-SC`: クラウド常時録画ライセンス (30 日間)。
     * - `MR7-SC`: クラウドモーション検知無制限録画ライセンス (7 日間)。
     * - `MR14-SC`: クラウドモーション検知無制限録画ライセンス (14 日間)。
     *
     */
    type?: SoraCamDeviceLicenseUpdate.type;
};
export namespace SoraCamDeviceLicenseUpdate {
    /**
     * 割り当てるライセンスの種類。
     *
     * - `CR7-SC`: クラウド常時録画ライセンス (7 日間)。
     * - `CR14-SC`: クラウド常時録画ライセンス (14 日間)。
     * - `CR30-SC`: クラウド常時録画ライセンス (30 日間)。
     * - `MR7-SC`: クラウドモーション検知無制限録画ライセンス (7 日間)。
     * - `MR14-SC`: クラウドモーション検知無制限録画ライセンス (14 日間)。
     *
     */
    export enum type {
        CR7_SC = 'CR7-SC',
        CR14_SC = 'CR14-SC',
        CR30_SC = 'CR30-SC',
        MR7_SC = 'MR7-SC',
        MR14_SC = 'MR14-SC',
    }
}

