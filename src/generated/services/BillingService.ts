/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingSummaryResponseOfBillItems } from '../models/BillingSummaryResponseOfBillItems';
import type { BillingSummaryResponseOfSims } from '../models/BillingSummaryResponseOfSims';
import type { DailyBillResponse } from '../models/DailyBillResponse';
import type { FileExportResponse } from '../models/FileExportResponse';
import type { GetBillingHistoryResponse } from '../models/GetBillingHistoryResponse';
import type { GetLatestBill } from '../models/GetLatestBill';
import type { MonthlyBill } from '../models/MonthlyBill';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BillingService {
    /**
     * 過去の確定した利用料金を月ごとに一括で取得する
     * 過去の確定した利用料金を月ごとに一括で取得します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @returns GetBillingHistoryResponse OK.
     * @throws ApiError
     */
    public static getBillingHistory(): CancelablePromise<GetBillingHistoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bills',
        });
    }
    /**
     * 過去の確定した利用料金を取得する
     * 指定した月の確定した利用料金を取得します。今月 (利用料金が未確定の月) を指定した場合は、速報値を取得します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @param yyyyMm 対象年月
     * @returns MonthlyBill OK.
     * @throws ApiError
     */
    public static getBilling(
        yyyyMm: string,
    ): CancelablePromise<MonthlyBill> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bills/{yyyyMM}',
            path: {
                'yyyyMM': yyyyMm,
            },
            errors: {
                404: `- 指定した月の利用料金が確定していません。
                - 指定した月の利用料金がありません。
                `,
            },
        });
    }
    /**
     * 日ごとの利用料金を取得する
     * 指定した月の、日ごとの利用料金を取得します。また、月額で課金される利用料金は取得できません。今月 (利用料金が未確定の月) を指定した場合は、速報値が返されます。
     *
     * **Warning**: 取得できる情報は、過去 18 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @param yyyyMm 対象年月
     * @returns DailyBillResponse OK.
     * @throws ApiError
     */
    public static getBillingPerDay(
        yyyyMm: string,
    ): CancelablePromise<DailyBillResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bills/{yyyyMM}/daily',
            path: {
                'yyyyMM': yyyyMm,
            },
            errors: {
                404: `利用料金が見つかりません。`,
            },
        });
    }
    /**
     * 過去の課金詳細情報 CSV を専用ストレージにエクスポートする
     * 過去の [課金詳細情報 CSV](/ja-jp/guides/accounting/check-usage/billing-csv/) を専用ストレージにエクスポートして、ダウンロードするための URL を発行します。
     *
     * **Warning**: 取得できる情報は、過去 18 か月までです。それ以前の情報が必要な場合は、[SORACOM サポート](/ja-jp/guides/support/) に問い合わせてください。
     *
     * @param yyyyMm 対象年月
     * @param exportMode 課金詳細情報 CSV をダウンロードするための URL を取得する方法を指定します。
     *
     * - `async`: SORACOM プラットフォームで URL が発行されるのを待たずに、`exportedFieldId` を取得します。この `exportedFieldId` を [Files:getExportedFile API](#/Files/getExportedFile) で指定すると、URL を取得できます。課金詳細情報 CSV のファイルサイズが大きい場合は、`async` を利用してください。
     * - `sync` (デフォルト): SORACOM プラットフォームで URL が発行されるのを待ちます。ただし、課金詳細情報 CSV のファイルサイズが大きい場合など、タイムアウトして URL を取得できないことがあります。タイムアウトする場合は、`async` を指定してください。
     *
     * @returns FileExportResponse OK.
     * @throws ApiError
     */
    public static exportBilling(
        yyyyMm: string,
        exportMode?: 'async' | 'sync',
    ): CancelablePromise<FileExportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bills/{yyyyMM}/export',
            path: {
                'yyyyMM': yyyyMm,
            },
            query: {
                'export_mode': exportMode,
            },
            errors: {
                404: `利用料金が見つかりません。`,
            },
        });
    }
    /**
     * 今月の利用料金を取得する
     * 今月 (利用料金が未確定の月) の利用料金の速報値を取得します。
     * @returns GetLatestBill OK
     * @throws ApiError
     */
    public static getLatestBilling(): CancelablePromise<GetLatestBill> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bills/latest',
        });
    }
    /**
     * 今月の課金詳細情報 CSV を専用ストレージにエクスポートする
     * 今月 (利用料金が未確定の月) の [課金詳細情報 CSV](/ja-jp/guides/accounting/check-usage/billing-csv/) を専用ストレージにエクスポートして、ダウンロードするための URL を発行します。利用料金は翌月の第 2 営業日後を目途に確定されます。この API を使用してエクスポートされた課金詳細情報 CSV には、速報値が出力されます。
     * @param exportMode 課金詳細情報 CSV をダウンロードするための URL を取得する方法を指定します。
     *
     * - `async`: SORACOM プラットフォームで URL が発行されるのを待たずに、`exportedFieldId` を取得します。この `exportedFieldId` を [Files:getExportedFile API](#/Files/getExportedFile) で指定すると、URL を取得できます。課金詳細情報 CSV のファイルサイズが大きい場合は、`async` を利用してください。
     * - `sync` (デフォルト): SORACOM プラットフォームで URL が発行されるのを待ちます。ただし、課金詳細情報 CSV のファイルサイズが大きい場合など、タイムアウトして URL を取得できないことがあります。タイムアウトする場合は、`async` を指定してください。
     *
     * @returns FileExportResponse OK.
     * @throws ApiError
     */
    public static exportLatestBilling(
        exportMode?: 'async' | 'sync',
    ): CancelablePromise<FileExportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bills/latest/export',
            query: {
                'export_mode': exportMode,
            },
        });
    }
    /**
     * 課金項目ごとの課金のサマリーを取得する
     * 過去 4 か月 (今月 〜 3 か月前) の課金項目ごとの課金のサマリーを取得します。新しい順にソートされます。
     *
     * この API で取得できるサマリーは、利用料金ダッシュボードの [サービス別の費用] パネルに表示される利用料金と同等です。詳しくは、[利用料金ダッシュボードを確認する](/ja-jp/guides/accounting/check-usage/billing-dashboard/) を参照してください。
     *
     * @returns BillingSummaryResponseOfBillItems OK.
     * @throws ApiError
     */
    public static getBillingSummaryOfBillItems(): CancelablePromise<Array<BillingSummaryResponseOfBillItems>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bills/summaries/bill_items',
        });
    }
    /**
     * IoT SIM ごとの課金のサマリーを取得する
     * 過去 4 か月 (今月 〜 3 か月前) の IoT SIM ごとの課金のサマリーを取得します。新しい順にソートされます。
     *
     * この API で取得できるサマリーは、利用料金ダッシュボードの [SIM ごとの料金 (トップ 100)] パネルに表示される利用料金と同等です。詳しくは、[利用料金ダッシュボードを確認する](/ja-jp/guides/accounting/check-usage/billing-dashboard/) を参照してください。
     *
     * @returns BillingSummaryResponseOfSims OK.
     * @throws ApiError
     */
    public static getBillingSummaryOfSims(): CancelablePromise<Array<BillingSummaryResponseOfSims>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bills/summaries/sims',
        });
    }
}
