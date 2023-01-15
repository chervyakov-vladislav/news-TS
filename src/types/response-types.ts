export interface NewsData {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsResponse {
  totalResults: number;
  status: string;
  articles: NewsData[];
}

export interface SourcesData {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface SourcesResponse {
  status: string;
  sources: SourcesData[];
}

export interface TopHeadlinesResponse {
  status: string;
  totalResults: number;
  articles: NewsData[];
}
