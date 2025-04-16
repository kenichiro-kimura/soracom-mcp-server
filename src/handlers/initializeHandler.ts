import { subscriberToolsMap } from './toolsMap/subscriberToolsMap';
import { simToolsMap } from './toolsMap/simToolsMap';
import { groupToolsMap } from './toolsMap/groupToolsMap';
import { billingToolsMap } from './toolsMap/billingToolsMap';
import { logToolsMap } from './toolsMap/logToolsMap';
import { orderToolsMap } from './toolsMap/orderToolsMap';
import { soraCamToolsMap } from './toolsMap/soraCamToolsMap';
import { soraletToolsMap } from './toolsMap/soraletToolsMap';

type InitializeParams = {
  id: number;
};

const PROTOCOL_VERSION = '2024-11-05';

const handleInitialize = (params: InitializeParams, id: number) => {
    const response = {
        jsonrpc: '2.0',
        id: id,
        result: {
            protocolVersion: PROTOCOL_VERSION,
            serverInfo: {
                name: 'SoracomMCPServer',
                version: '1.0.0',
            },
            capabilities: {
                tools: {
                    listSubscribers: {
                        description: subscriberToolsMap.listSubscribers.description,
                        parameters: subscriberToolsMap.listSubscribers.parameters,
                    },
                    getSubscriber: {
                        description: subscriberToolsMap.getSubscriber.description,
                        parameters: subscriberToolsMap.getSubscriber.parameters,
                    },
                    listSims: {
                        description: simToolsMap.listSims.description,
                        parameters: simToolsMap.listSims.parameters,
                    },
                    getSim: {
                        description: simToolsMap.getSim.description,
                        parameters: simToolsMap.getSim.parameters,
                    },
                    listGroups: {
                        description: groupToolsMap.listGroups.description,
                        parameters: groupToolsMap.listGroups.parameters,
                    },
                    getGroup: {
                        description: groupToolsMap.getGroup.description,
                        parameters: groupToolsMap.getGroup.parameters,
                    },
                    getBillingHistory: {
                        description: billingToolsMap.getBillingHistory.description,
                        parameters: billingToolsMap.getBillingHistory.parameters,
                    },
                    getBilling: {
                        description: billingToolsMap.getBilling.description,
                        parameters: billingToolsMap.getBilling.parameters,
                    },
                    getBillingPerDay: {
                        description: billingToolsMap.getBillingPerDay.description,
                        parameters: billingToolsMap.getBillingPerDay.parameters,
                    },
                    exportBilling: {
                        description: billingToolsMap.exportBilling.description,
                        parameters: billingToolsMap.exportBilling.parameters,
                    },
                    getLatestBilling: {
                        description: billingToolsMap.getLatestBilling.description,
                        parameters: billingToolsMap.getLatestBilling.parameters,
                    },
                    exportLatestBilling: {
                        description: billingToolsMap.exportLatestBilling.description,
                        parameters: billingToolsMap.exportLatestBilling.parameters,
                    },
                    getBillingSummaryOfBillItems: {
                        description: billingToolsMap.getBillingSummaryOfBillItems.description,
                        parameters: billingToolsMap.getBillingSummaryOfBillItems.parameters,
                    },
                    getBillingSummaryOfSims: {
                        description: billingToolsMap.getBillingSummaryOfSims.description,
                        parameters: billingToolsMap.getBillingSummaryOfSims.parameters,
                    },
                    getLogs: {
                        description: logToolsMap.getLogs.description,
                        parameters: logToolsMap.getLogs.parameters,
                    },
                    listOrders: {
                        description: orderToolsMap.listOrders.description,
                        parameters: orderToolsMap.listOrders.parameters,
                    },
                    getOrder: {
                        description: orderToolsMap.getOrder.description,
                        parameters: orderToolsMap.getOrder.parameters,
                    },
                    listOrderedSubscribers: {
                        description: orderToolsMap.listOrderedSubscribers.description,
                        parameters: orderToolsMap.listOrderedSubscribers.parameters,
                    },
                    listProducts: {
                        description: orderToolsMap.listProducts.description,
                        parameters: orderToolsMap.listProducts.parameters,
                    },
                    listAvailableDiscounts: {
                        description: orderToolsMap.listAvailableDiscounts.description,
                        parameters: orderToolsMap.listAvailableDiscounts.parameters,
                    },
                    listSoraCamDevices: {
                        description: soraCamToolsMap.listSoraCamDevices.description,
                        parameters: soraCamToolsMap.listSoraCamDevices.parameters,
                    },
                    getSoraCamDevice: {
                        description: soraCamToolsMap.getSoraCamDevice.description,
                        parameters: soraCamToolsMap.getSoraCamDevice.parameters,
                    },
                    getSoraCamDeviceAtomCamSettingsMotion: {
                        description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsMotion.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsMotion.parameters,
                    },
                    getSoraCamDeviceAtomCamSettingsMotionSensitivity: {
                        description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsMotionSensitivity.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsMotionSensitivity.parameters,
                    },
                    getSoraCamDeviceAtomCamSettingsNightVision: {
                        description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsNightVision.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsNightVision.parameters,
                    },
                    getSoraCamDeviceAtomCamSettingsQuality: {
                        description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsQuality.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsQuality.parameters,
                    },
                    getSoraCamDeviceAtomCamSettingsRotation: {
                        description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsRotation.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsRotation.parameters,
                    },
                    getSoraCamDeviceAtomCamSettingsSound: {
                        description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsSound.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsSound.parameters,
                    },
                    getSoraCamDeviceAtomCamSettingsSoundSensitivity: {
                        description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsSoundSensitivity.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsSoundSensitivity.parameters,
                    },
                    getSoraCamDeviceAtomCamSettingsStatusLight: {
                        description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsStatusLight.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsStatusLight.parameters,
                    },
                    getSoraCamDeviceAtomCamSettingsTimestamp: {
                        description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsTimestamp.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsTimestamp.parameters,
                    },
                    listSoraCamDeviceEventsForDevice: {
                        description: soraCamToolsMap.listSoraCamDeviceEventsForDevice.description,
                        parameters: soraCamToolsMap.listSoraCamDeviceEventsForDevice.parameters,
                    },
                    getSoraCamDeviceExportUsage: {
                        description: soraCamToolsMap.getSoraCamDeviceExportUsage.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceExportUsage.parameters,
                    },
                    listSoraCamDeviceImageExportsForDevice: {
                        description: soraCamToolsMap.listSoraCamDeviceImageExportsForDevice.description,
                        parameters: soraCamToolsMap.listSoraCamDeviceImageExportsForDevice.parameters,
                    },
                    exportSoraCamDeviceRecordedImage: {
                        description: soraCamToolsMap.exportSoraCamDeviceRecordedImage.description,
                        parameters: soraCamToolsMap.exportSoraCamDeviceRecordedImage.parameters,
                    },
                    getSoraCamDeviceExportedImage: {
                        description: soraCamToolsMap.getSoraCamDeviceExportedImage.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceExportedImage.parameters,
                    },
                    getSoraCamDeviceName: {
                        description: soraCamToolsMap.getSoraCamDeviceName.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceName.parameters,
                    },
                    getSoraCamDevicePowerState: {
                        description: soraCamToolsMap.getSoraCamDevicePowerState.description,
                        parameters: soraCamToolsMap.getSoraCamDevicePowerState.parameters,
                    },
                    listSoraCamDeviceRecordingsAndEvents: {
                        description: soraCamToolsMap.listSoraCamDeviceRecordingsAndEvents.description,
                        parameters: soraCamToolsMap.listSoraCamDeviceRecordingsAndEvents.parameters,
                    },
                    getSoraCamDeviceStreamingVideo: {
                        description: soraCamToolsMap.getSoraCamDeviceStreamingVideo.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceStreamingVideo.parameters,
                    },
                    listSoraCamDeviceVideoExportsForDevice: {
                        description: soraCamToolsMap.listSoraCamDeviceVideoExportsForDevice.description,
                        parameters: soraCamToolsMap.listSoraCamDeviceVideoExportsForDevice.parameters,
                    },
                    getSoraCamDeviceExportedVideo: {
                        description: soraCamToolsMap.getSoraCamDeviceExportedVideo.description,
                        parameters: soraCamToolsMap.getSoraCamDeviceExportedVideo.parameters,
                    },
                    exportSoraCamDeviceRecordedVideo: {
                        description: soraCamToolsMap.exportSoraCamDeviceRecordedVideo.description,
                        parameters: soraCamToolsMap.exportSoraCamDeviceRecordedVideo.parameters,
                    },
                    listSoraCamDeviceAtomCamFirmwareUpdates: {
                        description: soraCamToolsMap.listSoraCamDeviceAtomCamFirmwareUpdates.description,
                        parameters: soraCamToolsMap.listSoraCamDeviceAtomCamFirmwareUpdates.parameters,
                    },
                    listSoraCamDeviceEvents: {
                        description: soraCamToolsMap.listSoraCamDeviceEvents.description,
                        parameters: soraCamToolsMap.listSoraCamDeviceEvents.parameters,
                    },
                    listSoraCamDeviceImageExports: {
                        description: soraCamToolsMap.listSoraCamDeviceImageExports.description,
                        parameters: soraCamToolsMap.listSoraCamDeviceImageExports.parameters,
                    },
                    listSoraCamDeviceVideoExports: {
                        description: soraCamToolsMap.listSoraCamDeviceVideoExports.description,
                        parameters: soraCamToolsMap.listSoraCamDeviceVideoExports.parameters,
                    },
                    listSoraCamLicensePacks: {
                        description: soraCamToolsMap.listSoraCamLicensePacks.description,
                        parameters: soraCamToolsMap.listSoraCamLicensePacks.parameters,
                    },
                    listSoralets: {
                        description: soraletToolsMap.listSoralets.description,
                        parameters: soraletToolsMap.listSoralets.parameters,
                    },
                    getSoralet: {
                        description: soraletToolsMap.getSoralet.description,
                        parameters: soraletToolsMap.getSoralet.parameters,
                    },
                    getSoraletLogs: {
                        description: soraletToolsMap.getSoraletLogs.description,
                        parameters: soraletToolsMap.getSoraletLogs.parameters,
                    },
                    testSoralet: {
                        description: soraletToolsMap.testSoralet.description,
                        parameters: soraletToolsMap.testSoralet.parameters,
                    },
                    listSoraletVersions: {
                        description: soraletToolsMap.listSoraletVersions.description,
                        parameters: soraletToolsMap.listSoraletVersions.parameters,
                    },
                    
                },
                resources: {},
            },
        },
    };
    return response;
};

export { handleInitialize };