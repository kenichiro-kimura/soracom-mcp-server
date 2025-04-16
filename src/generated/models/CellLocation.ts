/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CellLocation = {
    /**
     * セルで観測された平均の信号強度。dBm 単位の整数値。
     */
    avg_strength?: number;
    /**
     * このレコードが最初に作られたときのタイムスタンプ (UTC)。
     */
    created?: string;
    /**
     * セルの位置情報が測定値から推定されたもので今後予告なく変わる可能性のあるもの (`0`) か、信頼できる情報源から得られた確定した情報か (`1`)。
     */
    exact?: number;
    /**
     * リクエストとそれに対する結果を結びつけるための識別子。
     */
    identifier?: string;
    /**
     * 推定座標の緯度。
     */
    lat?: number;
    /**
     * 推定座標の経度。
     */
    lon?: number;
    /**
     * 基地局のエリアの範囲 (推定座標からの半径。メートル単位)。測定値から推定された値の場合と、信頼できる情報源から得た値の場合がある。
     */
    range?: number;
    /**
     * 推定座標、範囲、平均信号強度を計算するために使われた測定値の総数。
     */
    samples?: number;
    /**
     * このレコードが最後に更新されたときのタイムスタンプ (UTC)。
     */
    updated?: string;
};

