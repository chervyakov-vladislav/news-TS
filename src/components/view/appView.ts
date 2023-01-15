import News from './news/news';
import Sources from './sources/sources';
import { SourcesResponse, NewsResponse } from '../../types/response-types';
import { View } from '../../types/view';

export class AppView implements View {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: NewsResponse): void {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: SourcesResponse): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
