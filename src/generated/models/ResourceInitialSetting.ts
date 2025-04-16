/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SimInitialSetting } from './SimInitialSetting';
/**
 * リソースに対する初期設定。
 */
export type ResourceInitialSetting = {
    /**
     * IoT SIM のサブスクリプションごとの初期設定です。キーにサブスクリプションを表す文字列を指定します。
     *
     * - `plan01s`
     * - `plan01s-low_data_volume` (plan01s - Low Data Volume)
     * - `planX3` (planX3 X3-5MB)
     * - `planP1`
     * - `plan-D` (plan-D (バンドルなし)、plan-D D-300MB)
     * - `plan-K2` (plan-K2 K2-300MB)
     * - `plan-DU`
     * - `plan-KM1`
     * - `plan-K`
     * - `plan-US`
     * - `plan-NA1-package` (plan-NA1)
     *
     */
    simInitialSettings?: Record<string, SimInitialSetting>;
};

