/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetShippingAddressResponse = {
    addressLine1: string;
    addressLine2?: string;
    building?: string;
    city: string;
    companyName?: string;
    department?: string;
    fullName?: string;
    phoneNumber: string;
    /**
     * 配送先 ID。
     */
    shippingAddressId: string;
    /**
     * 配送先エリア。
     */
    shippingArea: string;
    state: string;
    zipCode: string;
};

