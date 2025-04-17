# SORACOM MCP Server

The SORACOM MCP Server is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server that provides seamless integration with SORACOM APIs(partially).

## Installation

### 1. Build the Docker image

```bash
git clone {THIS_REPOSITORY_URL}
cd soracom-mcp-server
docker build -t soracom-mcp-server:latest .
```

### 2. Setup VSCode

```json
{
  "mcp": {
    "inputs": [
        {
            "type": "promptString",
            "id": "soracom_auth_key",
            "description": "SORACOM Auth Key",
            "password": true
        },
        {
            "type": "promptString",
            "id": "soracom_auth_key_id",
            "description": "SORACOM Auth Key ID",
            "password": true
         }
    ],
    "servers": {
      "github": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e",
          "SORACOM_AUTH_KEY",
          "-e",
          "SORACOM_AUTH_KEY_ID",
          "soracom-mcp-server:latest"
        ],
        "env": {
          "SORACOM_AUTH_KEY": "${input:soracom_auth_key}",
          "SORACOM_AUTH_KEY_ID": "${input:soracom_auth_key_id}"
        }
      }
    }
  }
}
```

More about using MCP server tools in VS Code's [agent mode documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

## Tools

## Billing Tools

- **getBillingHistory**: Retrieve past confirmed billing history by month.
- **getBilling**: Retrieve confirmed billing for a specific month.
- **getBillingPerDay**: Retrieve daily billing for a specific month.
- **exportBilling**: Export past billing details CSV to storage.
- **getLatestBilling**: Retrieve the latest billing for the current month.
- **exportLatestBilling**: Export the latest billing details CSV to storage.
- **getBillingSummaryOfBillItems**: Retrieve billing summary by bill items for the past 4 months.
- **getBillingSummaryOfSims**: Retrieve billing summary by SIMs for the past 4 months.

## Log Tools

- **getLogs**: Get logs for a target.

## Order Tools

- **listOrders**: List all orders.
- **getOrder**: Get details of an order.
- **listOrderedSubscribers**: List subscribers ordered in a specific order.
- **listProducts**: Retrieve a list of available products.
- **listAvailableDiscounts**: Retrieve a list of available long-term discounts.

## SIM Tools

- **listSims**: List all SIMs.
- **getSim**: Get details of a SIM.

## Soralet Tools

- **listSoralets**: Retrieve a list of Soralets.
- **getSoralet**: Retrieve details of a Soralet.
- **getSoraletLogs**: Retrieve logs of a Soralet.
- **testSoralet**: Test a Soralet with arguments.
- **listSoraletVersions**: Retrieve a list of Soralet versions.

## Subscriber Tools

- **listSubscribers**: List all subscribers.
- **getSubscriber**: Get details of a subscriber.

## SoraCam Tools

- **listSoraCamDevices**: Retrieve a list of SoraCam devices.
- **getSoraCamDevice**: Retrieve details of a SoraCam device.
- **getSoraCamDeviceAtomCamSettingsMotion**: Retrieve motion detection settings.
- **getSoraCamDeviceAtomCamSettingsMotionSensitivity**: Retrieve motion detection sensitivity settings.
- **getSoraCamDeviceAtomCamSettingsNightVision**: Retrieve night vision mode settings.
- **getSoraCamDeviceAtomCamSettingsQuality**: Retrieve image quality settings.
- **getSoraCamDeviceAtomCamSettingsRotation**: Retrieve image rotation settings.
- **getSoraCamDeviceAtomCamSettingsSound**: Retrieve sound detection settings.
- **getSoraCamDeviceAtomCamSettingsSoundSensitivity**: Retrieve sound detection sensitivity settings.
- **getSoraCamDeviceAtomCamSettingsStatusLight**: Retrieve status light settings.
- **getSoraCamDeviceAtomCamSettingsTimestamp**: Retrieve timestamp display settings.
- **listSoraCamDeviceEventsForDevice**: Retrieve a list of events for a specific SoraCam device.
- **getSoraCamDeviceExportUsage**: Retrieve export usage for a SoraCam device.
- **listSoraCamDeviceImageExportsForDevice**: Retrieve a list of image export statuses for a specific SoraCam device.
- **exportSoraCamDeviceRecordedImage**: Export still images from recorded video for a SoraCam device.
- **getSoraCamDeviceExportedImage**: Retrieve the status of an image export for a SoraCam device.
- **getSoraCamDeviceName**: Retrieve the name of a SoraCam device.
- **getSoraCamDevicePowerState**: Retrieve the power state of a SoraCam device.
- **listSoraCamDeviceRecordingsAndEvents**: Retrieve a list of recording periods and events for a SoraCam device.
- **getSoraCamDeviceStreamingVideo**: Retrieve streaming video information for a SoraCam device.
- **listSoraCamDeviceVideoExportsForDevice**: Retrieve a list of video export statuses for a specific SoraCam device.
- **getSoraCamDeviceExportedVideo**: Retrieve the status of a video export for a SoraCam device.
- **exportSoraCamDeviceRecordedVideo**: Export recorded video for a SoraCam device.
- **listSoraCamDeviceAtomCamFirmwareUpdates**: Retrieve a list of SoraCam devices available for firmware update.
- **listSoraCamDeviceEvents**: Retrieve a list of events for all SoraCam devices.
- **listSoraCamDeviceImageExports**: Retrieve a list of image export statuses for all SoraCam devices.
- **listSoraCamDeviceVideoExports**: Retrieve a list of video export statuses for all SoraCam devices.
- **listSoraCamLicensePacks**: Retrieve a list of license packs for SoraCam.
