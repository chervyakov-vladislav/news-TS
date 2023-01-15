import AppLoader from './appLoader';
import { Callback } from '../../types/controller';
import { SourcesResponse, NewsResponse } from '../../types/response-types';

class AppController extends AppLoader {
  public store: NewsResponse | null = null;

  public getSources(callback: Callback<SourcesResponse>) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  public getNews(e: Event, callback: Callback<NewsResponse>) {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            (data?: NewsResponse) => {
              this.store = data!;
              callback(data);
            }
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
