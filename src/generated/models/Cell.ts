/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * IoT SIM が接続する基地局の情報。バーチャル SIM/Subscriber の場合は出力されません。
 */
export type Cell = {
    /**
     * The Cell Identity (for 2G and 3G networks), a 16 bit value represented in decimal form as an integer. (See 3GPP TS 23.003 4.3)
     */
    ci?: number;
    /**
     * The E-UTRAN Cell Identifier (for LTE networks), a 28 bit value represented in decimal form as a long. (See 3GPP TS 23.003 19.6)
     */
    eci?: number;
    /**
     * The Location Area Code (for 2G and 3G networks), a 16 bit value represented in decimal form as an integer. (See 3GPP TS 23.003 4.1)
     */
    lac?: number;
    /**
     * The Mobile Country Code, a 3 digit number.
     */
    mcc?: number;
    /**
     * The Mobile Network Code, a 2 or 3 digit number. If the value returned is only 1 digit in length, then you should prepend the value with a leading zero.
     */
    mnc?: number;
    /**
     * The Routing Area Code (for 2G and 3G networks), an 8 bit value represented in decimal form as an integer. (See 3GPP TS 23.003 4.2)
     */
    rac?: number;
    /**
     * IoT SIM が接続されている無線アクセス技術またはネットワークの種類。
     *
     * **Warning**: 通信キャリアの設備によっては、実際に利用されている無線アクセス技術またはネットワークの種類と異なる情報が表示されることがあります。たとえば、LTE-M で接続されている場合でも LTE と表示されることがあります。
     *
     */
    radioType?: Cell.radioType;
    /**
     * The Service Area Code (for 2G and 3G networks), a 16 bit value represented in decimal form as an integer. (See 3GPP TS 23.003 12.5)
     */
    sac?: number;
    /**
     * The Tracking Area Code (for LTE networks), a 16 bit value represented in decimal form as an integer. (See 3GPP TS 23.003 19.4.2.3)
     */
    tac?: number;
};
export namespace Cell {
    /**
     * IoT SIM が接続されている無線アクセス技術またはネットワークの種類。
     *
     * **Warning**: 通信キャリアの設備によっては、実際に利用されている無線アクセス技術またはネットワークの種類と異なる情報が表示されることがあります。たとえば、LTE-M で接続されている場合でも LTE と表示されることがあります。
     *
     */
    export enum radioType {
        _3G = '3G',
        GSM = 'GSM',
        LTE = 'LTE',
        LTE_M = 'LTE-M',
        NB_IO_T = 'NB-IoT',
    }
}

