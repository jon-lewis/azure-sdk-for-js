/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/imagesMappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClientContext } from "../customerInsightsManagementClientContext";

/** Class representing a Images. */
export class Images {
  private readonly client: CustomerInsightsManagementClientContext;

  /**
   * Create a Images.
   * @param {CustomerInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: CustomerInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets entity type (profile or interaction) image upload URL.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param parameters Parameters supplied to the GetUploadUrlForEntityType operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ImagesGetUploadUrlForEntityTypeResponse>
   */
  getUploadUrlForEntityType(resourceGroupName: string, hubName: string, parameters: Models.GetImageUploadUrlInput, options?: msRest.RequestOptionsBase): Promise<Models.ImagesGetUploadUrlForEntityTypeResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param parameters Parameters supplied to the GetUploadUrlForEntityType operation.
   * @param callback The callback
   */
  getUploadUrlForEntityType(resourceGroupName: string, hubName: string, parameters: Models.GetImageUploadUrlInput, callback: msRest.ServiceCallback<Models.ImageDefinition>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param parameters Parameters supplied to the GetUploadUrlForEntityType operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getUploadUrlForEntityType(resourceGroupName: string, hubName: string, parameters: Models.GetImageUploadUrlInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageDefinition>): void;
  getUploadUrlForEntityType(resourceGroupName: string, hubName: string, parameters: Models.GetImageUploadUrlInput, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ImageDefinition>, callback?: msRest.ServiceCallback<Models.ImageDefinition>): Promise<Models.ImagesGetUploadUrlForEntityTypeResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        parameters,
        options
      },
      getUploadUrlForEntityTypeOperationSpec,
      callback) as Promise<Models.ImagesGetUploadUrlForEntityTypeResponse>;
  }

  /**
   * Gets data image upload URL.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param parameters Parameters supplied to the GetUploadUrlForData operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ImagesGetUploadUrlForDataResponse>
   */
  getUploadUrlForData(resourceGroupName: string, hubName: string, parameters: Models.GetImageUploadUrlInput, options?: msRest.RequestOptionsBase): Promise<Models.ImagesGetUploadUrlForDataResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param parameters Parameters supplied to the GetUploadUrlForData operation.
   * @param callback The callback
   */
  getUploadUrlForData(resourceGroupName: string, hubName: string, parameters: Models.GetImageUploadUrlInput, callback: msRest.ServiceCallback<Models.ImageDefinition>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param parameters Parameters supplied to the GetUploadUrlForData operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getUploadUrlForData(resourceGroupName: string, hubName: string, parameters: Models.GetImageUploadUrlInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageDefinition>): void;
  getUploadUrlForData(resourceGroupName: string, hubName: string, parameters: Models.GetImageUploadUrlInput, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ImageDefinition>, callback?: msRest.ServiceCallback<Models.ImageDefinition>): Promise<Models.ImagesGetUploadUrlForDataResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        parameters,
        options
      },
      getUploadUrlForDataOperationSpec,
      callback) as Promise<Models.ImagesGetUploadUrlForDataResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getUploadUrlForEntityTypeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/images/getEntityTypeImageUploadUrl",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.GetImageUploadUrlInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ImageDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getUploadUrlForDataOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/images/getDataImageUploadUrl",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.GetImageUploadUrlInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ImageDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
