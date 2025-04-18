/* eslint-disable @typescript-eslint/no-explicit-any */
import { SoraCamService } from '../../generated/services/SoraCamService';
import { ToolDefinition } from './index';

export const soraCamToolsMap: Record<string, ToolDefinition>  = {
  listSoraCamDevices: {
    fn: SoraCamService.listSoraCamDevices,
    args: () => [],
    description: 'Retrieve a list of SoraCam devices',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
  getSoraCamDevice: {
    fn: SoraCamService.getSoraCamDevice,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve details of a SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceAtomCamSettingsMotion: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsMotion,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve motion detection settings',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceAtomCamSettingsMotionSensitivity: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsMotionSensitivity,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve motion detection sensitivity settings',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceAtomCamSettingsNightVision: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsNightVision,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve night vision mode settings',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceAtomCamSettingsQuality: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsQuality,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve image quality settings',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceAtomCamSettingsRotation: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsRotation,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve image rotation settings',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceAtomCamSettingsSound: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsSound,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve sound detection settings',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceAtomCamSettingsSoundSensitivity: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsSoundSensitivity,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve sound detection sensitivity settings',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceAtomCamSettingsStatusLight: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsStatusLight,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve status light settings',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceAtomCamSettingsTimestamp: {
    fn: SoraCamService.getSoraCamDeviceAtomCamSettingsTimestamp,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve timestamp display settings',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID' },
      },
      required: ['deviceId'],
    },
  },
  listSoraCamDeviceEventsForDevice: {
    fn: SoraCamService.listSoraCamDeviceEventsForDevice,
    args: (args: any) => [args.deviceId, args.lastEvaluatedKey, args.limit, args.from, args.to, args.sort],
    description: 'Retrieve a list of events for a specific SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
        limit: { type: 'number', description: 'Maximum number of events to retrieve' },
        from: { type: 'number', description: 'Start time (UNIX timestamp in ms)' },
        to: { type: 'number', description: 'End time (UNIX timestamp in ms)' },
        sort: { type: 'string', description: 'Sort order (desc or asc)' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceExportUsage: {
    fn: SoraCamService.getSoraCamDeviceExportUsage,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve export usage for a SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
      },
      required: ['deviceId'],
    },
  },
  listSoraCamDeviceImageExportsForDevice: {
    fn: SoraCamService.listSoraCamDeviceImageExportsForDevice,
    args: (args: any) => [args.deviceId, args.lastEvaluatedKey, args.limit, args.sort],
    description: 'Retrieve a list of image export statuses for a specific SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
        limit: { type: 'number', description: 'Maximum number of image exports to retrieve' },
        sort: { type: 'string', description: 'Sort order (desc or asc)' },
      },
      required: ['deviceId'],
    },
  },
  exportSoraCamDeviceRecordedImage: {
    fn: SoraCamService.exportSoraCamDeviceRecordedImage,
    args: (args: any) => [args.deviceId, { 'time': args.time } ],
    description: 'Export still images from recorded video for a SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
        time: { type: 'number', description: 'Time to export (UNIX timestamp in ms)' },
      },
      required: ['deviceId', 'time'],
    },
  },
  getSoraCamDeviceExportedImage: {
    fn: SoraCamService.getSoraCamDeviceExportedImage,
    args: (args: any) => [args.deviceId, args.exportId],
    description: 'Retrieve the status of an image export for a SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
        exportId: { type: 'string', description: 'Export ID' },
      },
      required: ['deviceId', 'exportId'],
    },
  },
  getSoraCamDeviceName: {
    fn: SoraCamService.getSoraCamDeviceName,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve the name of a SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDevicePowerState: {
    fn: SoraCamService.getSoraCamDevicePowerState,
    args: (args: any) => [args.deviceId],
    description: 'Retrieve the power state of a SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
      },
      required: ['deviceId'],
    },
  },
  listSoraCamDeviceRecordingsAndEvents: {
    fn: SoraCamService.listSoraCamDeviceRecordingsAndEvents,
    args: (args: any) => [args.deviceId, args.lastEvaluatedKey, args.from, args.to, args.sort],
    description: 'Retrieve a list of recording periods and events for a SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
        from: { type: 'number', description: 'Start time (UNIX timestamp in ms)' },
        to: { type: 'number', description: 'End time (UNIX timestamp in ms)' },
        sort: { type: 'string', description: 'Sort order (desc or asc)' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceStreamingVideo: {
    fn: SoraCamService.getSoraCamDeviceStreamingVideo,
    args: (args: any) => [args.deviceId, args.from, args.to],
    description: 'Retrieve streaming video information for a SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
        from: { type: 'number', description: 'Start time (UNIX timestamp in ms)' },
        to: { type: 'number', description: 'End time (UNIX timestamp in ms)' },
      },
      required: ['deviceId'],
    },
  },
  listSoraCamDeviceVideoExportsForDevice: {
    fn: SoraCamService.listSoraCamDeviceVideoExportsForDevice,
    args: (args: any) => [args.deviceId, args.lastEvaluatedKey, args.limit, args.sort],
    description: 'Retrieve a list of video export statuses for a specific SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
        limit: { type: 'number', description: 'Maximum number of video exports to retrieve' },
        sort: { type: 'string', description: 'Sort order (desc or asc)' },
      },
      required: ['deviceId'],
    },
  },
  getSoraCamDeviceExportedVideo: {
    fn: SoraCamService.getSoraCamDeviceExportedVideo,
    args: (args: any) => [args.deviceId, args.exportId],
    description: 'Retrieve the status of a video export for a SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
        exportId: { type: 'string', description: 'Export ID' },
      },
      required: ['deviceId', 'exportId'],
    },
  },
  exportSoraCamDeviceRecordedVideo: {
    fn: SoraCamService.exportSoraCamDeviceRecordedVideo,
    args: (args: any) => [args.deviceId, {"from":args.from, "to": args.to}],
    description: 'Export recorded video for a SoraCam device',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device' },
        from: { type: 'number', description: 'Start time (UNIX timestamp in ms)' },
        to: { type: 'number', description: 'End time (UNIX timestamp in ms)' },
      },
      required: ['deviceId', 'from', 'to'],
    },
  },
  listSoraCamDeviceAtomCamFirmwareUpdates: {
    fn: SoraCamService.listSoraCamDeviceAtomCamFirmwareUpdates,
    args: () => [],
    description: 'Retrieve a list of SoraCam devices available for firmware update',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
  listSoraCamDeviceEvents: {
    fn: SoraCamService.listSoraCamDeviceEvents,
    args: (args: any) => [args.deviceId, args.lastEvaluatedKey, args.limit, args.from, args.to, args.sort],
    description: 'Retrieve a list of events for all SoraCam devices',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device (optional)' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
        limit: { type: 'number', description: 'Maximum number of events to retrieve' },
        from: { type: 'number', description: 'Start time (UNIX timestamp in ms)' },
        to: { type: 'number', description: 'End time (UNIX timestamp in ms)' },
        sort: { type: 'string', description: 'Sort order (desc or asc)' },
      },
      required: [],
    },
  },
  listSoraCamDeviceImageExports: {
    fn: SoraCamService.listSoraCamDeviceImageExports,
    args: (args: any) => [args.deviceId, args.lastEvaluatedKey, args.limit, args.sort],
    description: 'Retrieve a list of image export statuses for all SoraCam devices',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device (optional)' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
        limit: { type: 'number', description: 'Maximum number of image exports to retrieve' },
        sort: { type: 'string', description: 'Sort order (desc or asc)' },
      },
      required: [],
    },
  },
  listSoraCamDeviceVideoExports: {
    fn: SoraCamService.listSoraCamDeviceVideoExports,
    args: (args: any) => [args.deviceId, args.lastEvaluatedKey, args.limit, args.sort],
    description: 'Retrieve a list of video export statuses for all SoraCam devices',
    parameters: {
      type: 'object',
      properties: {
        deviceId: { type: 'string', description: 'Device ID of the SoraCam device (optional)' },
        lastEvaluatedKey: { type: 'string', description: 'Pagination key' },
        limit: { type: 'number', description: 'Maximum number of video exports to retrieve' },
        sort: { type: 'string', description: 'Sort order (desc or asc)' },
      },
      required: [],
    },
  },
  listSoraCamLicensePacks: {
    fn: SoraCamService.listSoraCamLicensePacks,
    args: () => [],
    description: 'Retrieve a list of license packs for SoraCam',
    parameters: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
};
