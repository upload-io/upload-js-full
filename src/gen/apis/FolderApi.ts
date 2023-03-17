/* tslint:disable */
/* eslint-disable */
/**
 * upload-api
 * Upload API
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: hello@upload.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// @ts-ignore
import * as runtime from "../runtime";
import type {
  // @ts-ignore
  AsyncResponse,
  // @ts-ignore
  DeleteFolderBatchRequest,
  // @ts-ignore
  DeleteFolderRequest,
  // @ts-ignore
  ErrorResponse,
  // @ts-ignore
  FolderDetails,
  // @ts-ignore
  ListFolderResponse,
  // @ts-ignore
  PutFolderRequest
} from "../models";

export interface DeleteFolderOperationParams {
  accountId: string;
  deleteFolderRequest: DeleteFolderRequest;
}

export interface DeleteFolderBatchOperationParams {
  accountId: string;
  deleteFolderBatchRequest: DeleteFolderBatchRequest;
}

export interface GetFolderDetailsParams {
  accountId: string;
  folderPath: string;
}

export interface ListFolderParams {
  accountId: string;
  folderPath: string;
  cursor?: string;
  includeExternal?: boolean;
  includeFiles?: boolean;
  includePhysicalFolders?: boolean;
  includeVirtualFolders?: boolean;
  limit?: number;
  recursive?: boolean;
}

export interface PutFolderOperationParams {
  accountId: string;
  putFolderRequest: PutFolderRequest;
}

/**
 *
 */
export class FolderApi extends runtime.BaseAPI {
  /**
   * Asynchronously deletes a folder.
   */
  private async deleteFolderWithHttpInfo(
    requestParameters: DeleteFolderOperationParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<AsyncResponse>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling deleteFolder."
      );
    }

    if (requestParameters.deleteFolderRequest === null || requestParameters.deleteFolderRequest === undefined) {
      throw new runtime.RequiredError(
        "deleteFolderRequest",
        "Required parameter requestParameters.deleteFolderRequest was null or undefined when calling deleteFolder."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/folders`.replace(
          `{${"accountId"}}`,
          // @ts-ignore
          "accountId" === "filePath"
            ? String(requestParameters.accountId)
            : encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.deleteFolderRequest
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Asynchronously deletes a folder.
   */
  async deleteFolder(
    requestParameters: DeleteFolderOperationParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<AsyncResponse> {
    const response = await this.deleteFolderWithHttpInfo(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Asynchronously deletes multiple folders.
   */
  private async deleteFolderBatchWithHttpInfo(
    requestParameters: DeleteFolderBatchOperationParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<AsyncResponse>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling deleteFolderBatch."
      );
    }

    if (
      requestParameters.deleteFolderBatchRequest === null ||
      requestParameters.deleteFolderBatchRequest === undefined
    ) {
      throw new runtime.RequiredError(
        "deleteFolderBatchRequest",
        "Required parameter requestParameters.deleteFolderBatchRequest was null or undefined when calling deleteFolderBatch."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/folders/batch`.replace(
          `{${"accountId"}}`,
          // @ts-ignore
          "accountId" === "filePath"
            ? String(requestParameters.accountId)
            : encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.deleteFolderBatchRequest
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Asynchronously deletes multiple folders.
   */
  async deleteFolderBatch(
    requestParameters: DeleteFolderBatchOperationParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<AsyncResponse> {
    const response = await this.deleteFolderBatchWithHttpInfo(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Gets the full details (e.g. permission, storage layer, etc.) for a folder.  Returns an empty object if no settings have been configured for this folder.
   */
  private async getFolderDetailsWithHttpInfo(
    requestParameters: GetFolderDetailsParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<FolderDetails>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling getFolderDetails."
      );
    }

    if (requestParameters.folderPath === null || requestParameters.folderPath === undefined) {
      throw new runtime.RequiredError(
        "folderPath",
        "Required parameter requestParameters.folderPath was null or undefined when calling getFolderDetails."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.folderPath !== undefined) {
      queryParameters["folderPath"] = requestParameters.folderPath;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/folders`.replace(
          `{${"accountId"}}`,
          // @ts-ignore
          "accountId" === "filePath"
            ? String(requestParameters.accountId)
            : encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Gets the full details (e.g. permission, storage layer, etc.) for a folder.  Returns an empty object if no settings have been configured for this folder.
   */
  async getFolderDetails(
    requestParameters: GetFolderDetailsParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<FolderDetails> {
    const response = await this.getFolderDetailsWithHttpInfo(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Lists the folder\'s contents.  Pagination is complete when the response `cursor` is `null` or matches the request `cursor`.
   */
  private async listFolderWithHttpInfo(
    requestParameters: ListFolderParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ListFolderResponse>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling listFolder."
      );
    }

    if (requestParameters.folderPath === null || requestParameters.folderPath === undefined) {
      throw new runtime.RequiredError(
        "folderPath",
        "Required parameter requestParameters.folderPath was null or undefined when calling listFolder."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.cursor !== undefined) {
      queryParameters["cursor"] = requestParameters.cursor;
    }

    if (requestParameters.folderPath !== undefined) {
      queryParameters["folderPath"] = requestParameters.folderPath;
    }

    if (requestParameters.includeExternal !== undefined) {
      queryParameters["includeExternal"] = requestParameters.includeExternal;
    }

    if (requestParameters.includeFiles !== undefined) {
      queryParameters["includeFiles"] = requestParameters.includeFiles;
    }

    if (requestParameters.includePhysicalFolders !== undefined) {
      queryParameters["includePhysicalFolders"] = requestParameters.includePhysicalFolders;
    }

    if (requestParameters.includeVirtualFolders !== undefined) {
      queryParameters["includeVirtualFolders"] = requestParameters.includeVirtualFolders;
    }

    if (requestParameters.limit !== undefined) {
      queryParameters["limit"] = requestParameters.limit;
    }

    if (requestParameters.recursive !== undefined) {
      queryParameters["recursive"] = requestParameters.recursive;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/folders/list`.replace(
          `{${"accountId"}}`,
          // @ts-ignore
          "accountId" === "filePath"
            ? String(requestParameters.accountId)
            : encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Lists the folder\'s contents.  Pagination is complete when the response `cursor` is `null` or matches the request `cursor`.
   */
  async listFolder(
    requestParameters: ListFolderParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ListFolderResponse> {
    const response = await this.listFolderWithHttpInfo(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Creates or updates the folder specified by the `folderPath`.  If the folder\'s ancestors do not exist, they will be created automatically (with empty FolderSettings).  Note: you don\'t need to create folders before uploading files to them.
   */
  private async putFolderWithHttpInfo(
    requestParameters: PutFolderOperationParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<FolderDetails>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling putFolder."
      );
    }

    if (requestParameters.putFolderRequest === null || requestParameters.putFolderRequest === undefined) {
      throw new runtime.RequiredError(
        "putFolderRequest",
        "Required parameter requestParameters.putFolderRequest was null or undefined when calling putFolder."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/folders`.replace(
          `{${"accountId"}}`,
          // @ts-ignore
          "accountId" === "filePath"
            ? String(requestParameters.accountId)
            : encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.putFolderRequest
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Creates or updates the folder specified by the `folderPath`.  If the folder\'s ancestors do not exist, they will be created automatically (with empty FolderSettings).  Note: you don\'t need to create folders before uploading files to them.
   */
  async putFolder(
    requestParameters: PutFolderOperationParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<FolderDetails> {
    const response = await this.putFolderWithHttpInfo(requestParameters, initOverrides);
    return await response.value();
  }
}
