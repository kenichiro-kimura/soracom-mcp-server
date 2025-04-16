/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionContainer } from './SubscriptionContainer';
export type SubscriptionContainerStatus = {
    containers?: Array<SubscriptionContainer>;
    countryMapping?: Record<string, {
        mappingRecord?: {
            containerId?: number;
            subscription?: string;
        };
        plmnCode?: string;
    }>;
};

