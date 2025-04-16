/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ActionConfigProperty = {
    /**
     * (非推奨)。
     * @deprecated
     */
    accessKey?: string;
    /**
     * HTTP リクエストメッセージボディ。`httpMethod` が `POST` または `PUT` のときのみ有効です。
     *
     * - 変数を利用できます。詳しくは、[アクションで利用できる変数](/ja-jp/docs/event-handler/actions/#variables-that-can-be-used-for-actions) を参照してください。
     *
     */
    body?: string;
    /**
     * Content-Type。
     */
    contentType?: string;
    /**
     * AWS Lambda の認証情報 ID。あらかじめ、[認証情報ストア](/ja-jp/docs/credentials-store/) で「AWS 認証情報」または「AWS IAM ロール認証情報」を登録してください。
     *
     */
    credentialsId?: string;
    /**
     * AWS Lambda のサービスエンドポイント。
     */
    endpoint?: string;
    /**
     * アクションを実行するタイミング。
     *
     * - `IMMEDIATELY`: すぐに実行します。
     * - `BEGINNING_OF_NEXT_MONTH`: 翌月の 1 日 0:00 (*1) に実行します。
     * - `BEGINNING_OF_NEXT_DAY`: 翌日の 0:00 (*1) に実行します。
     * - `AFTER_ONE_DAY`: 1 日後 (24 時間後) に実行します。
     * - `NEVER`: 実行しません。
     *
     * (*1) アクションの実行は、UTC (協定世界時) を基準に行われます。たとえば `BEGINNING_OF_NEXT_DAY` を指定した場合は、日本時間ではなく UTC で日付が変わったときに実行されます。
     *
     */
    executionDateTimeConst: ActionConfigProperty.executionDateTimeConst;
    /**
     * アクションのオフセット (分)。デフォルトは `0` です。`0`～`525600` の整数を String 型で指定します。`executionDateTimeConst` で指定したタイミングから、実際にアクションを実行する時間をずらすことができます。詳しくは、[アクションのオフセット (分)](/ja-jp/docs/event-handler/how-it-works/#アクションのオフセット-分) を参照してください。
     *
     */
    executionOffsetMinutes?: string;
    /**
     * AWS Lambda のファンクション名。バージョンやエイリアスも指定できます。
     */
    functionName?: string;
    /**
     * HTTP リクエストヘッダー。キーと値を、エスケープした JSON オブジェクトで指定します。
     *
     * 例: `"{\"key1\":\"value1\"},{\"key2\":\"value2\"}"`
     *
     * - 変数を利用できます。詳しくは、[アクションで利用できる変数](/ja-jp/docs/event-handler/actions/#variables-that-can-be-used-for-actions) を参照してください。
     *
     */
    headers?: Record<string, any>;
    /**
     * HTTP リクエストメソッド。
     */
    httpMethod?: ActionConfigProperty.httpMethod;
    /**
     * 本文。
     *
     * - 変数を利用できます。詳しくは、[アクションで利用できる変数](/ja-jp/docs/event-handler/actions/#variables-that-can-be-used-for-actions) を参照してください。
     *
     */
    message?: string;
    /**
     * AWS Lambda に渡すパラメーターの値。
     *
     * - `parameter1` を複数指定するなど、同じキーを繰り返し指定しないでください。
     * - 変数を利用できます。詳しくは、[アクションで利用できる変数](/ja-jp/docs/event-handler/actions/#variables-that-can-be-used-for-actions) を参照してください。
     *
     */
    parameter1?: string;
    /**
     * `parameter1` と同様。
     *
     */
    parameter2?: string;
    /**
     * `parameter1` と同様。
     *
     */
    parameter3?: string;
    /**
     * `parameter1` と同様。
     *
     */
    parameter4?: string;
    /**
     * `parameter1` と同様。
     *
     */
    parameter5?: string;
    /**
     * (非推奨)。
     * @deprecated
     */
    secretAccessKey?: string;
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
    speedClass?: ActionConfigProperty.speedClass;
    /**
     * 件名。
     *
     * - 変数を利用できます。詳しくは、[アクションで利用できる変数](/ja-jp/docs/event-handler/actions/#variables-that-can-be-used-for-actions) を参照してください。
     *
     */
    title?: string;
    /**
     * 宛先のメールアドレス。複数のメールアドレスは指定できません。
     *
     */
    to?: string;
    /**
     * 接続先 URL とクエリパラメーター。
     *
     * - 変数を利用できます。詳しくは、[アクションで利用できる変数](/ja-jp/docs/event-handler/actions/#variables-that-can-be-used-for-actions) を参照してください。
     *
     */
    url?: string;
};
export namespace ActionConfigProperty {
    /**
     * アクションを実行するタイミング。
     *
     * - `IMMEDIATELY`: すぐに実行します。
     * - `BEGINNING_OF_NEXT_MONTH`: 翌月の 1 日 0:00 (*1) に実行します。
     * - `BEGINNING_OF_NEXT_DAY`: 翌日の 0:00 (*1) に実行します。
     * - `AFTER_ONE_DAY`: 1 日後 (24 時間後) に実行します。
     * - `NEVER`: 実行しません。
     *
     * (*1) アクションの実行は、UTC (協定世界時) を基準に行われます。たとえば `BEGINNING_OF_NEXT_DAY` を指定した場合は、日本時間ではなく UTC で日付が変わったときに実行されます。
     *
     */
    export enum executionDateTimeConst {
        IMMEDIATELY = 'IMMEDIATELY',
        BEGINNING_OF_NEXT_MONTH = 'BEGINNING_OF_NEXT_MONTH',
        BEGINNING_OF_NEXT_DAY = 'BEGINNING_OF_NEXT_DAY',
        AFTER_ONE_DAY = 'AFTER_ONE_DAY',
        NEVER = 'NEVER',
    }
    /**
     * HTTP リクエストメソッド。
     */
    export enum httpMethod {
        GET = 'GET',
        POST = 'POST',
        PUT = 'PUT',
        DELETE = 'DELETE',
    }
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

