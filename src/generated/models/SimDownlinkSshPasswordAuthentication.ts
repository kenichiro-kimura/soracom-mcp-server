/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * パスワード認証 (`"type": "password"`) を利用して SSH 接続する場合の設定。`password` または `passwordCredentialsId` のいずれかを指定します。
 *
 */
export type SimDownlinkSshPasswordAuthentication = {
    /**
     * SSH 接続のパスワード。`passwordCredentialsId` が指定されている場合は無視されます。
     */
    password?: string;
    /**
     * SORACOM の認証情報ストアに登録した認証情報の ID。認証情報は以下のように設定してください。
     *
     * - **[種別]**: 「事前共有鍵」を選択します。
     * - **[事前共有鍵]**: SSH 接続のパスワードを入力します。
     *
     */
    passwordCredentialsId?: string;
    type?: SimDownlinkSshPasswordAuthentication.type;
};
export namespace SimDownlinkSshPasswordAuthentication {
    export enum type {
        PASSWORD = 'password',
    }
}

