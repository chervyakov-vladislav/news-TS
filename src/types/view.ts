import { SourcesResponse, NewsResponse, NewsData, SourcesData } from './response-types';

export interface View {
  drawNews: (data: NewsResponse) => void;
  drawSources: (data: SourcesResponse) => void;
}

export interface NewsInterface {
  draw: (data: NewsData[]) => void;
}

export interface SourcesInterface {
  draw: (data: SourcesData[]) => void;
}
