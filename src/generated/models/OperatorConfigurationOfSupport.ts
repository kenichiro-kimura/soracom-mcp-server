/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoverageType } from './CoverageType';
import type { SupportTier } from './SupportTier';
export type OperatorConfigurationOfSupport = {
    /**
     * サポート費用を支払うカバレッジです。
     */
    paymentCoverage?: CoverageType;
    /**
     * 現在のサポートプランです。
     */
    tier?: SupportTier;
    /**
     * 来月に適用される予定のサポートプランです。この値が無い場合は、翌月も現在のサポートプランが継続されます。
     */
    upcomingTier?: SupportTier;
};

