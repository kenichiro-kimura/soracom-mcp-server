/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';
import { AuthService } from '../services/AuthService'; // Ensure AuthService is defined in this file

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | Resolver<string> | undefined;
    USERNAME?: string | Resolver<string> | undefined;
    PASSWORD?: string | Resolver<string> | undefined;
    HEADERS?: Headers | Resolver<Headers> | undefined;
    ENCODE_PATH?: ((path: string) => string) | undefined;
};

export const OpenAPI: OpenAPIConfig = {
    BASE: 'https://api.soracom.io/v1',
    VERSION: '20250314-063957',
    WITH_CREDENTIALS: false,
    CREDENTIALS: 'include',
    TOKEN: undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: async (): Promise<Headers> => {
        const apiKey = AuthService.getApiKey() || '';
        const token = AuthService.getToken() || '';
 
        return {
            'X-Soracom-API-Key': apiKey,
            'X-Soracom-Token': token,
        };
    },
    ENCODE_PATH: undefined,
};
