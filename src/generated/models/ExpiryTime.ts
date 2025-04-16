/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExpiryTime = {
    /**
     * 期限切れ時のアクション。以下のいずれかを指定します。各設定について詳しくは、[IoT SIM の有効期限とアクションを設定する](/ja-jp/docs/air/set-expiry/) を参照してください。なお、`terminate` を指定する場合は、あらかじめ解約プロテクションを解除してください。
     *
     * 省略した場合は、null 値が設定されます。
     * - `doNothing` : 保留
     * - `deleteSession` : セッション切断
     * - `deactivate` : 休止
     * - `suspend` : 利用中断
     * - `terminate` : 解約
     * - null 値 : (なし) (`doNothing` と同じ動作です)
     *
     */
    expiryAction?: ExpiryTime.expiryAction | null;
    /**
     * 有効期限として設定された日付のタイムスタンプ (UNIX 時間 (ミリ秒))
     */
    expiryTime: number;
};
export namespace ExpiryTime {
    /**
     * 期限切れ時のアクション。以下のいずれかを指定します。各設定について詳しくは、[IoT SIM の有効期限とアクションを設定する](/ja-jp/docs/air/set-expiry/) を参照してください。なお、`terminate` を指定する場合は、あらかじめ解約プロテクションを解除してください。
     *
     * 省略した場合は、null 値が設定されます。
     * - `doNothing` : 保留
     * - `deleteSession` : セッション切断
     * - `deactivate` : 休止
     * - `suspend` : 利用中断
     * - `terminate` : 解約
     * - null 値 : (なし) (`doNothing` と同じ動作です)
     *
     */
    export enum expiryAction {
        DO_NOTHING = 'doNothing',
        DELETE_SESSION = 'deleteSession',
        DEACTIVATE = 'deactivate',
        SUSPEND = 'suspend',
        TERMINATE = 'terminate',
        _NULL_VALUE_ = '(null value)',
    }
}

