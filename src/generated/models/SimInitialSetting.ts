/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 指定のサブスクリプションに対する初期設定。
 */
export type SimInitialSetting = {
    /**
     * グループ ID。
     */
    groupId?: string;
    /**
     * 速度クラス。以下のいずれかを指定します。ただし、サブスクリプションにあわせた速度クラスを指定してください。
     *
     * - plan01s、plan01s - Low Data Volume、planX3 X3-5MB、planP1、plan-D (バンドルなし)、plan-D D-300MB、plan-K2 K2-300MB、plan-K の場合:
     * - `s1.minimum`
     * - `s1.slow`
     * - `s1.standard`
     * - `s1.fast`
     * - `s1.4xfast`
     * - plan-US の場合:
     * - `s1.minimum`
     * - `s1.slow`
     * - `s1.standard`
     * - `s1.fast`
     * - `s1.4xfast`
     * - `s1.8xfast`
     * - plan-DU の場合:
     * - `u1.standard`
     * - `u1.slow`
     * - plan-KM1 の場合:
     * - `t1.standard`
     *
     */
    speedClass?: string;
    /**
     * タグ。
     */
    tags?: Record<string, string>;
};

