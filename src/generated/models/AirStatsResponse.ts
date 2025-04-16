/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataTrafficStats } from './DataTrafficStats';
export type AirStatsResponse = {
    dataTrafficStatsMap?: Record<string, DataTrafficStats>;
    /**
     * 日時 (協定世界時 (UTC))
     */
    date?: string;
    unixtime?: number;
};

