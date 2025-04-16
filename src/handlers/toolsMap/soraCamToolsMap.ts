import { SoraCamService } from '../../generated/services/SoraCamService';

export const soraCamToolsMap = {
  listSoraCamDevices: {
    fn: SoraCamService.listSoraCamDevices,
    args: () => [],
  },
  getSoraCamDevice: {
    fn: SoraCamService.getSoraCamDevice,
    args: (args: any) => [args.deviceId],
  },
  getSoraCamDeviceAtomCamSettingsMotion: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsMotion,
    args: (args: any) => [args.deviceId],
  },
  getSoraCamDeviceAtomCamSettingsMotionSensitivity: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsMotionSensitivity,
    args: (args: any) => [args.deviceId],
  },
  getSoraCamDeviceAtomCamSettingsNightVision: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsNightVision,
    args: (args: any) => [args.deviceId],
  },
  getSoraCamDeviceAtomCamSettingsQuality: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsQuality,
    args: (args: any) => [args.deviceId],
  },
  getSoraCamDeviceAtomCamSettingsRotation: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsRotation,
    args: (args: any) => [args.deviceId],
  },
  getSoraCamDeviceAtomCamSettingsSound: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsSound,
    args: (args: any) => [args.deviceId],
  },
  getSoraCamDeviceAtomCamSettingsSoundSensitivity: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsSoundSensitivity,
    args: (args: any) => [args.deviceId],
  },
  getSoraCamDeviceAtomCamSettingsStatusLight: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsStatusLight,
    args: (args: any) => [args.deviceId],
  },
  getSoraCamDeviceAtomCamSettingsTimestamp: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsTimestamp,
    args: (args: any) => [args.deviceId],
  },
  listSoraCamDeviceEventsForDevice: {
    fn: SoraCamService.listSoraCamDeviceEventsForDevice,
    args: (args: any) => [args.deviceId, args.from, args.to, args.limit, args.lastEvaluatedKey],
  },
  getSoraCamDeviceExportUsage: {
    fn: SoraCamService.getSoraCamDeviceExportUsage,
    args: (args: any) => [args.deviceId],
  },
  listSoraCamDeviceImageExportsForDevice: {
    fn: SoraCamService.listSoraCamDeviceImageExportsForDevice,
    args: (args: any) => [args.deviceId, args.lastEvaluatedKey, args.limit],
  },
  exportSoraCamDeviceRecordedImage: {
    fn: SoraCamService.exportSoraCamDeviceRecordedImage,
    args: (args: any) => [args.deviceId, args.requestBody],
  },
  getSoraCamDeviceExportedImage: {
    fn: SoraCamService.getSoraCamDeviceExportedImage,
    args: (args: any) => [args.deviceId, args.exportId],
  },
  getSoraCamDeviceName: {
    fn: SoraCamService.getSoraCamDeviceName,
    args: (args: any) => [args.deviceId],
  },
  getSoraCamDevicePowerState: {
    fn: SoraCamService.getSoraCamDevicePowerState,
    args: (args: any) => [args.deviceId],
  },
  listSoraCamDeviceRecordingsAndEvents: {
    fn: SoraCamService.listSoraCamDeviceRecordingsAndEvents,
    args: (args: any) => [args.deviceId, args.from, args.to, args.sort],
  },
  getSoraCamDeviceStreamingVideo: {
    fn: SoraCamService.getSoraCamDeviceStreamingVideo,
    args: (args: any) => [args.deviceId, args.from, args.to],
  },
  listSoraCamDeviceVideoExportsForDevice: {
    fn: SoraCamService.listSoraCamDeviceVideoExportsForDevice,
    args: (args: any) => [args.deviceId, args.lastEvaluatedKey, args.limit],
  },
  getSoraCamDeviceExportedVideo: {
    fn: SoraCamService.getSoraCamDeviceExportedVideo,
    args: (args: any) => [args.deviceId, args.exportId],
  },
  exportSoraCamDeviceRecordedVideo: {
    fn: SoraCamService.exportSoraCamDeviceRecordedVideo,
    args: (args: any) => [args.deviceId, args.requestBody],
  },
  listSoraCamDeviceAtomCamFirmwareUpdates: {
    fn: SoraCamService.listSoraCamDeviceAtomCamFirmwareUpdates,
    args: () => [],
  },
  listSoraCamDeviceEvents: {
    fn: SoraCamService.listSoraCamDeviceEvents,
    args: (args: any) => [args.from, args.to, args.limit, args.lastEvaluatedKey],
  },
  listSoraCamDeviceImageExports: {
    fn: SoraCamService.listSoraCamDeviceImageExports,
    args: (args: any) => [args.lastEvaluatedKey, args.limit],
  },
  listSoraCamDeviceVideoExports: {
    fn: SoraCamService.listSoraCamDeviceVideoExports,
    args: (args: any) => [args.lastEvaluatedKey, args.limit],
  },
  listSoraCamLicensePacks: {
    fn: SoraCamService.listSoraCamLicensePacks,
    args: () => [],
  },
};
