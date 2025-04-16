/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IssueSubscriberTransferTokenRequest = {
    /**
     * 譲渡先のオペレーターのプライマリーメールアドレス。譲渡先のオペレーターに確認してください。
     */
    transferDestinationOperatorEmail: string;
    /**
     * 譲渡先のオペレーターのオペレーター ID。譲渡先のオペレーターに確認してください。
     */
    transferDestinationOperatorId: string;
    /**
     * 譲渡対象の IoT SIM の IMSI のリスト。IMSI は [Sim:listSims API](#/Sim/listSims) で取得できます。
     *
     * IoT SIM を 1 件ずつキャンセルする可能性がある場合は、IMSI を 1 件だけ指定してください。
     *
     */
    transferImsi: Array<string>;
};

