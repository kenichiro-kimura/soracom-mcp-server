/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 公開鍵認証 (`"type": "publickey"`) を利用して SSH 接続する場合の設定。
 *
 */
export type SimDownlinkSshPublicKeyAuthentication = {
    /**
     * 公開鍵認証で利用する秘密鍵 (PEM)。`keyCredentialsId` が指定されている場合は無視されます。
     *
     */
    key?: string;
    /**
     * SORACOM の認証情報ストアに登録した認証情報の ID。認証情報は以下のように設定してください。
     *
     * - **[種別]**: 「秘密鍵 (PEM)」を選択します。
     * - **[秘密鍵 (PEM)]**: 公開鍵認証で利用する秘密鍵 (PEM) を入力します。
     *
     */
    keyCredentialsId?: string;
    /**
     * 公開鍵認証で利用する秘密鍵 (PEM) がパスフレーズで保護されている場合は、パスフレーズを指定します。
     *
     */
    passphrase?: string;
    type?: SimDownlinkSshPublicKeyAuthentication.type;
};
export namespace SimDownlinkSshPublicKeyAuthentication {
    export enum type {
        PUBLICKEY = 'publickey',
    }
}

