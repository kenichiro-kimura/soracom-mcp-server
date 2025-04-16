/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SmsForwardingRequest = {
    /**
     * メッセージ本体のエンコーディングタイプ。デフォルトは `2` (`DCS_UCS2`)。
     *
     * - `1`: 標準アルファベットをサポートする GSM 7 ビットで送信します。漢字やキリル文字、アラビア文字などは送信できません。最大 160 文字 (最大 140 バイト)。
     *
     * 例: `{"encodingType": 1, "payload": "Test message."}`
     * - `2`: 漢字やキリル文字、アラビア文字などをサポートする UCS-2 で送信します。最大 70 文字。
     *
     * 例: `{"encodingType": 2, "payload": "テストメッセージ"}`
     *
     */
    encodingType?: number;
    payload?: string;
};

