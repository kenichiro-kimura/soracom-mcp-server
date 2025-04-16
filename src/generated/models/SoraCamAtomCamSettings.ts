/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamAtomCamSettings = {
    /**
     * 撮影画像左下に表示されるアトムテック株式会社のロゴの表示設定。
     *
     * - `on`: 表示。
     * - `off`: 非表示。
     *
     */
    logo: SoraCamAtomCamSettings.logo;
    /**
     * モーション検知の設定。
     *
     * - `on`: 有効。
     * - `off`: 無効。
     *
     */
    motion: SoraCamAtomCamSettings.motion;
    /**
     * モーション検知の感度設定。感度が高いほど、小さな画像の変化を検出できます。
     *
     * - `high`: 高。
     * - `medium`: 中。
     * - `low`: 低。
     *
     */
    motionSensitivity: SoraCamAtomCamSettings.motionSensitivity;
    /**
     * モーションタグの表示設定。モーションタグは、動いているものを検知したときに表⽰される緑の枠です。
     *
     * - `on`: 表示。
     * - `off`: 非表示。
     *
     */
    motionTagging: SoraCamAtomCamSettings.motionTagging;
    /**
     * ナイトビションモードの設定。
     *
     * - `on`: ナイトビジョンモード。
     * - `off`: 通常モード。
     * - `auto`: 自動切り替え。
     *
     */
    nightVision: SoraCamAtomCamSettings.nightVision;
    /**
     * ライブ動画やクラウド録画の画質設定。なお、クラウド録画の場合は画質設定に関わらず、解像度は 1080p (1920 x 1080 ピクセル) です。
     *
     * - `low`: ATOM アプリで「360p」を選択したときと同じ画質。
     * - `medium`: ATOM アプリで「SD」を選択したときと同じ画質。
     * - `high`: ATOM アプリで「HD (1080p)」を選択したときと同じ画質。
     *
     */
    quality: SoraCamAtomCamSettings.quality;
    /**
     * 画像を 180° 回転させる設定。ソラカメ対応カメラを上下反対に設置した場合に `180` を設定します。
     *
     * - `0`: OFF (回転なし)。
     * - `180`: ON (180° 回転)。
     *
     */
    rotation?: SoraCamAtomCamSettings.rotation;
    /**
     * サウンドの検出設定。
     *
     * - `on`: 有効。
     * - `off`: 無効。
     *
     */
    sound: SoraCamAtomCamSettings.sound;
    /**
     * サウンド検出の感度設定。感度が高いほど、小さな音を検出しやすくなります。
     *
     * - `high`: 高。
     * - `medium`: 中。
     * - `low`: 低。
     *
     */
    soundSensitivity: SoraCamAtomCamSettings.soundSensitivity;
    /**
     * ステータスライト (カメラ本体の状態を示すランプ) の点灯設定。
     *
     * - `on`: 点灯。
     * - `off`: 消灯。
     *
     */
    statusLight: SoraCamAtomCamSettings.statusLight;
    /**
     * 撮影画像右下に表示されるタイムスタンプの表示設定。
     *
     * - `on`: 表示。
     * - `off`: 非表示。
     *
     */
    timestamp: SoraCamAtomCamSettings.timestamp;
};
export namespace SoraCamAtomCamSettings {
    /**
     * 撮影画像左下に表示されるアトムテック株式会社のロゴの表示設定。
     *
     * - `on`: 表示。
     * - `off`: 非表示。
     *
     */
    export enum logo {
        ON = 'on',
        OFF = 'off',
    }
    /**
     * モーション検知の設定。
     *
     * - `on`: 有効。
     * - `off`: 無効。
     *
     */
    export enum motion {
        ON = 'on',
        OFF = 'off',
    }
    /**
     * モーション検知の感度設定。感度が高いほど、小さな画像の変化を検出できます。
     *
     * - `high`: 高。
     * - `medium`: 中。
     * - `low`: 低。
     *
     */
    export enum motionSensitivity {
        HIGH = 'high',
        MEDIUM = 'medium',
        LOW = 'low',
    }
    /**
     * モーションタグの表示設定。モーションタグは、動いているものを検知したときに表⽰される緑の枠です。
     *
     * - `on`: 表示。
     * - `off`: 非表示。
     *
     */
    export enum motionTagging {
        ON = 'on',
        OFF = 'off',
    }
    /**
     * ナイトビションモードの設定。
     *
     * - `on`: ナイトビジョンモード。
     * - `off`: 通常モード。
     * - `auto`: 自動切り替え。
     *
     */
    export enum nightVision {
        ON = 'on',
        OFF = 'off',
        AUTO = 'auto',
    }
    /**
     * ライブ動画やクラウド録画の画質設定。なお、クラウド録画の場合は画質設定に関わらず、解像度は 1080p (1920 x 1080 ピクセル) です。
     *
     * - `low`: ATOM アプリで「360p」を選択したときと同じ画質。
     * - `medium`: ATOM アプリで「SD」を選択したときと同じ画質。
     * - `high`: ATOM アプリで「HD (1080p)」を選択したときと同じ画質。
     *
     */
    export enum quality {
        LOW = 'low',
        MEDIUM = 'medium',
        HIGH = 'high',
    }
    /**
     * 画像を 180° 回転させる設定。ソラカメ対応カメラを上下反対に設置した場合に `180` を設定します。
     *
     * - `0`: OFF (回転なし)。
     * - `180`: ON (180° 回転)。
     *
     */
    export enum rotation {
        '_0' = 0,
        '_180' = 180,
    }
    /**
     * サウンドの検出設定。
     *
     * - `on`: 有効。
     * - `off`: 無効。
     *
     */
    export enum sound {
        ON = 'on',
        OFF = 'off',
    }
    /**
     * サウンド検出の感度設定。感度が高いほど、小さな音を検出しやすくなります。
     *
     * - `high`: 高。
     * - `medium`: 中。
     * - `low`: 低。
     *
     */
    export enum soundSensitivity {
        HIGH = 'high',
        MEDIUM = 'medium',
        LOW = 'low',
    }
    /**
     * ステータスライト (カメラ本体の状態を示すランプ) の点灯設定。
     *
     * - `on`: 点灯。
     * - `off`: 消灯。
     *
     */
    export enum statusLight {
        ON = 'on',
        OFF = 'off',
    }
    /**
     * 撮影画像右下に表示されるタイムスタンプの表示設定。
     *
     * - `on`: 表示。
     * - `off`: 非表示。
     *
     */
    export enum timestamp {
        ON = 'on',
        OFF = 'off',
    }
}

