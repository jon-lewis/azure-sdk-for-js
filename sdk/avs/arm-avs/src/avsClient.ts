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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AvsClientContext } from "./avsClientContext";


class AvsClient extends AvsClientContext {
  // Operation groups
  operations: operations.Operations;
  locations: operations.Locations;
  privateClouds: operations.PrivateClouds;
  clusters: operations.Clusters;

  /**
   * Initializes a new instance of the AvsClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Unique identifier for the Azure subscription
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.AvsClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.locations = new operations.Locations(this);
    this.privateClouds = new operations.PrivateClouds(this);
    this.clusters = new operations.Clusters(this);
  }
}

// Operation Specifications

export {
  AvsClient,
  AvsClientContext,
  Models as AvsModels,
  Mappers as AvsMappers
};
export * from "./operations";
