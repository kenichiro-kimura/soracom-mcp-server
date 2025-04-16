import { subscriberToolsMap } from './toolsMap/subscriberToolsMap';
import { simToolsMap } from './toolsMap/simToolsMap';
import { groupToolsMap } from './toolsMap/groupToolsMap';
import { billingToolsMap } from './toolsMap/billingToolsMap';
import { soraletToolsMap } from './toolsMap/soraletToolsMap';
import { logToolsMap } from './toolsMap/logToolsMap';
import { orderToolsMap } from './toolsMap/orderToolsMap';
import { soraCamToolsMap } from './toolsMap/soraCamToolsMap';

const handleToolsList = (params: any) => {
  const response = {
    jsonrpc: '2.0',
    id: params.id,
    result: {
      tools: [
        {
          name: 'listSubscribers',
          description: subscriberToolsMap.listSubscribers.description,
          inputSchema: subscriberToolsMap.listSubscribers.parameters,
        },
        {
          name: 'getSubscriber',
          description: subscriberToolsMap.getSubscriber.description,
          inputSchema: subscriberToolsMap.getSubscriber.parameters,
        },
        {
          name: 'listSims',
          description: simToolsMap.listSims.description,
          inputSchema: simToolsMap.listSims.parameters,
        },
        {
          name: 'getSim',
          description: simToolsMap.getSim.description,
          inputSchema: simToolsMap.getSim.parameters,
        },
        {
          name: 'listGroups',
          description: groupToolsMap.listGroups.description,
          inputSchema: groupToolsMap.listGroups.parameters,
        },
        {
          name: 'getGroup',
          description: groupToolsMap.getGroup.description,
          inputSchema: groupToolsMap.getGroup.parameters,
        },
        {
          name: 'getBillingHistory',
          description: billingToolsMap.getBillingHistory.description,
          inputSchema: billingToolsMap.getBillingHistory.parameters,
        },
        {
          name: 'getBilling',
          description: billingToolsMap.getBilling.description,
          inputSchema: billingToolsMap.getBilling.parameters,
        },
        {
          name: 'getBillingPerDay',
          description: billingToolsMap.getBillingPerDay.description,
          inputSchema: billingToolsMap.getBillingPerDay.parameters,
        },
        {
          name: 'exportBilling',
          description: billingToolsMap.exportBilling.description,
          inputSchema: billingToolsMap.exportBilling.parameters,
        },
        {
          name: 'getLatestBilling',
          description: billingToolsMap.getLatestBilling.description,
          inputSchema: billingToolsMap.getLatestBilling.parameters,
        },
        {
          name: 'exportLatestBilling',
          description: billingToolsMap.exportLatestBilling.description,
          inputSchema: billingToolsMap.exportLatestBilling.parameters,
        },
        {
          name: 'getBillingSummaryOfBillItems',
          description: billingToolsMap.getBillingSummaryOfBillItems.description,
          inputSchema: billingToolsMap.getBillingSummaryOfBillItems.parameters,
        },
        {
          name: 'getBillingSummaryOfSims',
          description: billingToolsMap.getBillingSummaryOfSims.description,
          inputSchema: billingToolsMap.getBillingSummaryOfSims.parameters,
        },
        {
          name: 'listSoralets',
          description: soraletToolsMap.listSoralets.description,
          inputSchema: soraletToolsMap.listSoralets.parameters,
        },
        {
          name: 'getSoralet',
          description: soraletToolsMap.getSoralet.description,
          inputSchema: soraletToolsMap.getSoralet.parameters,
        },
        {
          name: 'getSoraletLogs',
          description: soraletToolsMap.getSoraletLogs.description,
          inputSchema: soraletToolsMap.getSoraletLogs.parameters,
        },
        {
          name: 'testSoralet',
          description: soraletToolsMap.testSoralet.description,
          inputSchema: soraletToolsMap.testSoralet.parameters,
        },
        {
          name: 'listSoraletVersions',
          description: soraletToolsMap.listSoraletVersions.description,
          inputSchema: soraletToolsMap.listSoraletVersions.parameters,
        },
        {
          name: 'getLogs',
          description: logToolsMap.getLogs.description,
          inputSchema: logToolsMap.getLogs.parameters,
        },
        {
          name: 'listOrders',
          description: orderToolsMap.listOrders.description,
          inputSchema: orderToolsMap.listOrders.parameters,
        },
        {
          name: 'getOrder',
          description: orderToolsMap.getOrder.description,
          inputSchema: orderToolsMap.getOrder.parameters,
        },
        {
          name: 'listOrderedSubscribers',
          description: orderToolsMap.listOrderedSubscribers.description,
          inputSchema: orderToolsMap.listOrderedSubscribers.parameters,
        },
        {
          name: 'listProducts',
          description: orderToolsMap.listProducts.description,
          inputSchema: orderToolsMap.listProducts.parameters,
        },
        {
          name: 'listAvailableDiscounts',
          description: orderToolsMap.listAvailableDiscounts.description,
          inputSchema: orderToolsMap.listAvailableDiscounts.parameters,
        },
        {
          name: 'listSoraCamDevices',
          description: soraCamToolsMap.listSoraCamDevices.description,
          inputSchema: soraCamToolsMap.listSoraCamDevices.parameters,
        },
        {
          name: 'getSoraCamDevice',
          description: soraCamToolsMap.getSoraCamDevice.description,
          inputSchema: soraCamToolsMap.getSoraCamDevice.parameters,
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsMotion',
          description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsMotion.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsMotion.parameters,
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsMotionSensitivity',
          description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsMotionSensitivity.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsMotionSensitivity.parameters,
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsNightVision',
          description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsNightVision.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsNightVision.parameters,
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsQuality',
          description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsQuality.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsQuality.parameters,
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsRotation',
          description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsRotation.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsRotation.parameters,
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsSound',
          description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsSound.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsSound.parameters,
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsSoundSensitivity',
          description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsSoundSensitivity.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsSoundSensitivity.parameters,
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsStatusLight',
          description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsStatusLight.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsStatusLight.parameters,
        },
        {
          name: 'getSoraCamDeviceAtomCamSettingsTimestamp',
          description: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsTimestamp.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceAtomCamSettingsTimestamp.parameters,
        },
        {
          name: 'listSoraCamDeviceEventsForDevice',
          description: soraCamToolsMap.listSoraCamDeviceEventsForDevice.description,
          inputSchema: soraCamToolsMap.listSoraCamDeviceEventsForDevice.parameters,
        },
        {
          name: 'getSoraCamDeviceExportUsage',
          description: soraCamToolsMap.getSoraCamDeviceExportUsage.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceExportUsage.parameters,
        },
        {
          name: 'listSoraCamDeviceImageExportsForDevice',
          description: soraCamToolsMap.listSoraCamDeviceImageExportsForDevice.description,
          inputSchema: soraCamToolsMap.listSoraCamDeviceImageExportsForDevice.parameters,
        },
        {
          name: 'exportSoraCamDeviceRecordedImage',
          description: soraCamToolsMap.exportSoraCamDeviceRecordedImage.description,
          inputSchema: soraCamToolsMap.exportSoraCamDeviceRecordedImage.parameters,
        },
        {
          name: 'getSoraCamDeviceExportedImage',
          description: soraCamToolsMap.getSoraCamDeviceExportedImage.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceExportedImage.parameters,
        },
        {
          name: 'getSoraCamDeviceName',
          description: soraCamToolsMap.getSoraCamDeviceName.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceName.parameters,
        },
        {
          name: 'getSoraCamDevicePowerState',
          description: soraCamToolsMap.getSoraCamDevicePowerState.description,
          inputSchema: soraCamToolsMap.getSoraCamDevicePowerState.parameters,
        },
        {
          name: 'listSoraCamDeviceRecordingsAndEvents',
          description: soraCamToolsMap.listSoraCamDeviceRecordingsAndEvents.description,
          inputSchema: soraCamToolsMap.listSoraCamDeviceRecordingsAndEvents.parameters,
        },
        {
          name: 'getSoraCamDeviceStreamingVideo',
          description: soraCamToolsMap.getSoraCamDeviceStreamingVideo.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceStreamingVideo.parameters,
        },
        {
          name: 'listSoraCamDeviceVideoExportsForDevice',
          description: soraCamToolsMap.listSoraCamDeviceVideoExportsForDevice.description,
          inputSchema: soraCamToolsMap.listSoraCamDeviceVideoExportsForDevice.parameters,
        },
        {
          name: 'getSoraCamDeviceExportedVideo',
          description: soraCamToolsMap.getSoraCamDeviceExportedVideo.description,
          inputSchema: soraCamToolsMap.getSoraCamDeviceExportedVideo.parameters,
        },
        {
          name: 'exportSoraCamDeviceRecordedVideo',
          description: soraCamToolsMap.exportSoraCamDeviceRecordedVideo.description,
          inputSchema: soraCamToolsMap.exportSoraCamDeviceRecordedVideo.parameters,
        },
        {
          name: 'listSoraCamDeviceAtomCamFirmwareUpdates',
          description: soraCamToolsMap.listSoraCamDeviceAtomCamFirmwareUpdates.description,
          inputSchema: soraCamToolsMap.listSoraCamDeviceAtomCamFirmwareUpdates.parameters,
        },
        {
          name: 'listSoraCamDeviceEvents',
          description: soraCamToolsMap.listSoraCamDeviceEvents.description,
          inputSchema: soraCamToolsMap.listSoraCamDeviceEvents.parameters,
        },
        {
          name: 'listSoraCamDeviceImageExports',
          description: soraCamToolsMap.listSoraCamDeviceImageExports.description,
          inputSchema: soraCamToolsMap.listSoraCamDeviceImageExports.parameters,
        },
        {
          name: 'listSoraCamDeviceVideoExports',
          description: soraCamToolsMap.listSoraCamDeviceVideoExports.description,
          inputSchema: soraCamToolsMap.listSoraCamDeviceVideoExports.parameters,
        },
        {
          name: 'listSoraCamLicensePacks',
          description: soraCamToolsMap.listSoraCamLicensePacks.description,
          inputSchema: soraCamToolsMap.listSoraCamLicensePacks.parameters,
        },
      ],
    },
  };
  return response;
};

export { handleToolsList };