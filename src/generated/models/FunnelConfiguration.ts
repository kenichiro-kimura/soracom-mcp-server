/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelAcroquestTorrentioDestination } from './FunnelAcroquestTorrentioDestination';
import type { FunnelAppressoDataSpiderDestination } from './FunnelAppressoDataSpiderDestination';
import type { FunnelAWSFirehoseDestination } from './FunnelAWSFirehoseDestination';
import type { FunnelAWSIoTDestination } from './FunnelAWSIoTDestination';
import type { FunnelAWSKinesisDestination } from './FunnelAWSKinesisDestination';
import type { FunnelAzureEventHubDestination } from './FunnelAzureEventHubDestination';
import type { FunnelBrainsTechImpulseDestination } from './FunnelBrainsTechImpulseDestination';
import type { FunnelContentType } from './FunnelContentType';
import type { FunnelDestination } from './FunnelDestination';
import type { FunnelEsrijArcgisOnlineDestination } from './FunnelEsrijArcgisOnlineDestination';
import type { FunnelGooglePubSubDestination } from './FunnelGooglePubSubDestination';
import type { FunnelInfoteriaPlatioDestination } from './FunnelInfoteriaPlatioDestination';
import type { FunnelKiiThingifDestination } from './FunnelKiiThingifDestination';
import type { FunnelLandlogDestination } from './FunnelLandlogDestination';
import type { FunnelOptimCloudiotosDestination } from './FunnelOptimCloudiotosDestination';
import type { FunnelSensorCorpusDestination } from './FunnelSensorCorpusDestination';
import type { FunnelTeradataIntellicloudDestination } from './FunnelTeradataIntellicloudDestination';
import type { FunnelWingarcMotionboardDestination } from './FunnelWingarcMotionboardDestination';
import type { FunnelYaskawaMmcloudDestination } from './FunnelYaskawaMmcloudDestination';
export type FunnelConfiguration = {
    addSimId?: boolean;
    contentType?: FunnelContentType;
    credentialsId?: string;
    destination?: (FunnelDestination | FunnelAWSFirehoseDestination | FunnelAWSIoTDestination | FunnelAWSKinesisDestination | FunnelAzureEventHubDestination | FunnelGooglePubSubDestination | FunnelAcroquestTorrentioDestination | FunnelAppressoDataSpiderDestination | FunnelBrainsTechImpulseDestination | FunnelEsrijArcgisOnlineDestination | FunnelInfoteriaPlatioDestination | FunnelKiiThingifDestination | FunnelLandlogDestination | FunnelOptimCloudiotosDestination | FunnelTeradataIntellicloudDestination | FunnelWingarcMotionboardDestination | FunnelYaskawaMmcloudDestination | FunnelSensorCorpusDestination);
    enabled?: boolean;
};

