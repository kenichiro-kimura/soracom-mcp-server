/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SoraCamDevicesFirmwareUpdate = {
    /**
     * ソラカメ対応カメラのデバイス ID。
     *
     */
    deviceId: string;
    /**
     * ソラカメ対応カメラで更新できるファームウェアバージョン。
     *
     */
    firmwareVersion: string;
    /**
     * ファームウェア更新のタイムアウト時間 (秒)。ファームウェアの更新を開始してから、この時間内に更新が完了しない場合、更新は失敗したと見なされます。
     *
     */
    timeout: number;
};

