import { SourcesResponse, NewsResponse } from './response-types';

export interface Controller {
  drawNews: (data: NewsResponse) => void;
  drawSources: (data: SourcesResponse) => void;
}

export type Options = Record<string, string>;
export type Endpoint = 'sources' | 'everything';
export type Method = 'GET';

export enum ErrorStatus {
  notFound = 404,
  unauthorized = 401,
}

export interface GetRespParam {
  endpoint: Endpoint;
  options?: Options;
}

export type Callback<T> = (data?: T) => void;
