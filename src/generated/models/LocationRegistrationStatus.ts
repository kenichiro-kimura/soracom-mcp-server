/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationRegistrationStatusForNetwork } from './LocationRegistrationStatusForNetwork';
export type LocationRegistrationStatus = {
    /**
     * CS ネットワークへのネットワーク登録状況
     */
    cs?: LocationRegistrationStatusForNetwork;
    /**
     * EPS ネットワークへのネットワーク登録状況
     */
    eps?: LocationRegistrationStatusForNetwork;
    /**
     * PS ネットワークへのネットワーク登録状況
     */
    ps?: LocationRegistrationStatusForNetwork;
};

