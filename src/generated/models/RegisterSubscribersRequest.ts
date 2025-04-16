/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagSet } from './TagSet';
export type RegisterSubscribersRequest = {
    groupId?: string;
    /**
     * IoT SIM の PUK または PASSCODE
     */
    registrationSecret: string;
    tags?: TagSet;
};

