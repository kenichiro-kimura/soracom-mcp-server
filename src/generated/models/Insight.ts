/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceUrl } from './ReferenceUrl';
export type Insight = {
    /**
     * 異常と思われる状況を検出した時間。フォーマットは category に関するイベントのタイムスタンプに依存します。(例：session の場合は UNIX 時間 (ミリ秒))
     */
    anomalyDetectedTimes?: Array<string>;
    category: Insight.category;
    insightId: string;
    message: string;
    /**
     * インサイトに関連のある参考情報の URL。
     */
    referenceUrls?: Array<ReferenceUrl>;
    severity: Insight.severity;
};
export namespace Insight {
    export enum category {
        DATA = 'data',
        SESSION = 'session',
        SIM = 'sim',
        OTHERS = 'others',
        UNKNOWN = 'unknown',
    }
    export enum severity {
        ERROR = 'error',
        WARNING = 'warning',
        INFO = 'info',
        NONE = 'none',
        UNKNOWN = 'unknown',
    }
}

