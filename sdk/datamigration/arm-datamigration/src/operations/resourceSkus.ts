/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/resourceSkusMappers";
import * as Parameters from "../models/parameters";
import { DataMigrationServiceClientContext } from "../dataMigrationServiceClientContext";

/** Class representing a ResourceSkus. */
export class ResourceSkus {
  private readonly client: DataMigrationServiceClientContext;

  /**
   * Create a ResourceSkus.
   * @param {DataMigrationServiceClientContext} client Reference to the service client.
   */
  constructor(client: DataMigrationServiceClientContext) {
    this.client = client;
  }

  /**
   * The skus action returns the list of SKUs that DMS supports.
   * @summary Get supported SKUs
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceSkusListSkusResponse>
   */
  listSkus(options?: coreHttp.RequestOptionsBase): Promise<Models.ResourceSkusListSkusResponse>;
  /**
   * @param callback The callback
   */
  listSkus(callback: coreHttp.ServiceCallback<Models.ResourceSkusResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listSkus(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.ResourceSkusResult>): void;
  listSkus(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.ResourceSkusResult>, callback?: coreHttp.ServiceCallback<Models.ResourceSkusResult>): Promise<Models.ResourceSkusListSkusResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listSkusOperationSpec,
      callback) as Promise<Models.ResourceSkusListSkusResponse>;
  }

  /**
   * The skus action returns the list of SKUs that DMS supports.
   * @summary Get supported SKUs
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceSkusListSkusNextResponse>
   */
  listSkusNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase): Promise<Models.ResourceSkusListSkusNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listSkusNext(nextPageLink: string, callback: coreHttp.ServiceCallback<Models.ResourceSkusResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listSkusNext(nextPageLink: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.ResourceSkusResult>): void;
  listSkusNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.ResourceSkusResult>, callback?: coreHttp.ServiceCallback<Models.ResourceSkusResult>): Promise<Models.ResourceSkusListSkusNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listSkusNextOperationSpec,
      callback) as Promise<Models.ResourceSkusListSkusNextResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const listSkusOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/skus",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listSkusNextOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};