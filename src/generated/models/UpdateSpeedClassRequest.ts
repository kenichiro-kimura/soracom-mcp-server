/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateSpeedClassRequest = {
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
     *
     * **Warning**: plan-KM1 およびバーチャル SIM/Subscriber は、速度クラスが 1 種類のため変更できません。
     *
     */
    speedClass: UpdateSpeedClassRequest.speedClass;
};
export namespace UpdateSpeedClassRequest {
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
     *
     * **Warning**: plan-KM1 およびバーチャル SIM/Subscriber は、速度クラスが 1 種類のため変更できません。
     *
     */
    export enum speedClass {
        S1_MINIMUM = 's1.minimum',
        S1_SLOW = 's1.slow',
        S1_STANDARD = 's1.standard',
        S1_FAST = 's1.fast',
        S1_4XFAST = 's1.4xfast',
        S1_8XFAST = 's1.8xfast',
        U1_STANDARD = 'u1.standard',
        U1_SLOW = 'u1.slow',
    }
}

