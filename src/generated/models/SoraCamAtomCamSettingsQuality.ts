/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamAtomCamSettingsQuality = {
    /**
     * ライブ動画やクラウド録画の画質設定。なお、クラウド録画の場合は画質設定に関わらず、解像度は 1080p (1920 x 1080 ピクセル) です。
     *
     * - `low`: ATOM アプリで「360p」を選択したときと同じ画質。
     * - `medium`: ATOM アプリで「SD」を選択したときと同じ画質。
     * - `high`: ATOM アプリで「HD (1080p)」を選択したときと同じ画質。
     *
     */
    state: SoraCamAtomCamSettingsQuality.state;
};
export namespace SoraCamAtomCamSettingsQuality {
    /**
     * ライブ動画やクラウド録画の画質設定。なお、クラウド録画の場合は画質設定に関わらず、解像度は 1080p (1920 x 1080 ピクセル) です。
     *
     * - `low`: ATOM アプリで「360p」を選択したときと同じ画質。
     * - `medium`: ATOM アプリで「SD」を選択したときと同じ画質。
     * - `high`: ATOM アプリで「HD (1080p)」を選択したときと同じ画質。
     *
     */
    export enum state {
        LOW = 'low',
        MEDIUM = 'medium',
        HIGH = 'high',
    }
}

