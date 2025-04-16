/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * eSIM プロファイルの発注リクエスト。
 */
export type CreateSimProfileOrderRequest = {
    /**
     * 発注する eSIM プロファイルのバンドル。以下のいずれかを指定します。ただし、サブスクリプションにあわせたバンドルを 1 つ指定してください。
     *
     * - planX3 の場合:
     * - `X3-5MB`
     * - plan-US の場合:
     * - `US-1MB`
     * - `US-3MB`
     * - `US-10MB`
     * - `US-20MB`
     * - `US-50MB`
     * - `US-100MB`
     * - `US-300MB`
     * - `US-500MB`
     * - `US-1GB`
     * - `US-3GB`
     * - `US-5GB`
     * - `US-10GB`
     *
     */
    bundles?: Array<'X3-5MB' | 'US-1MB' | 'US-3MB' | 'US-10MB' | 'US-20MB' | 'US-50MB' | 'US-100MB' | 'US-300MB' | 'US-500MB' | 'US-1GB' | 'US-3GB' | 'US-5GB' | 'US-10GB'>;
    /**
     * 発注の説明。注文履歴を識別するために使用できます。
     */
    description?: string;
    /**
     * 発注する eSIM プロファイルの数量。
     *
     * **Info**: 1 回の注文で発行できる eSIM プロファイル数の上限は、20 点です。より多くの eSIM プロファイルを 1 回の注文で発行するには、SORACOM サポートに上限緩和を申請してください。詳しくは、[eSIM プロファイルを注文する](/ja-jp/docs/air/issue-esim-profile/#esim-プロファイルを注文する) を参照してください。
     *
     */
    quantity: number;
    /**
     * 発注する eSIM プロファイルの速度クラス。以下のいずれかを指定します。ただし、サブスクリプションにあわせた速度クラスを指定してください。
     *
     * - plan01s、planP1、planX1、planX2、planX3 の場合:
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
     *
     */
    speedClass?: CreateSimProfileOrderRequest.speedClass;
    /**
     * 発注する eSIM プロファイルのサブスクリプション。以下のいずれかです。
     *
     * - `plan01s`
     * - `planP1`
     * - `planX1`
     * - `planX2`
     * - `planX3`: EU および英国のお客様のみ購入できます。
     * - `plan-US`: 米国およびカナダのお客様のみ購入できます。
     *
     */
    subscription: string;
};
export namespace CreateSimProfileOrderRequest {
    /**
     * 発注する eSIM プロファイルの速度クラス。以下のいずれかを指定します。ただし、サブスクリプションにあわせた速度クラスを指定してください。
     *
     * - plan01s、planP1、planX1、planX2、planX3 の場合:
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
     *
     */
    export enum speedClass {
        S1_MINIMUM = 's1.minimum',
        S1_SLOW = 's1.slow',
        S1_STANDARD = 's1.standard',
        S1_FAST = 's1.fast',
        S1_4XFAST = 's1.4xfast',
        S1_8XFAST = 's1.8xfast',
    }
}

