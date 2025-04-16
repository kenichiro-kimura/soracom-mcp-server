/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetUserTrustPolicyResponse = {
    /**
     * この SAM ユーザーにスイッチできるルートユーザーまたは SAM ユーザーを指定する信頼ポリシー。以下の情報が含まれます。
     *
     * - この SAM ユーザーにスイッチできる別のアカウントのユーザーを表す SRN (Soracom Resource Name)。
     * - スイッチできる条件。
     *
     * 詳しくは、[信頼ポリシー構文](/ja-jp/docs/switch-user/trust-policy/) を参照してください。
     *
     */
    trustPolicy?: string;
};

