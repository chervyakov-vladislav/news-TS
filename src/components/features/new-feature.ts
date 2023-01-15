import { NewsResponse } from '../../types/response-types';

export class FilterFeature {
  public filter(data: NewsResponse) {
    data.articles = data.articles.sort((a, b) => {
      return Number(a.title.charCodeAt(0)) - Number(b.title[0].charCodeAt(0));
    });
    return data;
  }
}
