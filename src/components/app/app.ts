import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { FilterFeature } from '../features/new-feature';
import { NewsResponse } from '../../types/response-types';

class App {
  private controller: AppController;
  private view: AppView;
  private filterFeature: FilterFeature;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.filterFeature = new FilterFeature();
  }

  public start() {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
      this.controller.getNews(e, (data) => {
        if (data) {
          this.view.drawNews(data);
        }
      })
    );

    this.controller.getSources((data) => {
      if (data) {
        this.view.drawSources(data);
      }
    });

    (document.querySelector('.filter') as HTMLElement).addEventListener('click', () => {
      const filteredNews: NewsResponse | null =
        this.controller.store === null ? null : this.filterFeature.filter(this.controller.store);
      if (filteredNews) this.view.drawNews(filteredNews);
    });
  }
}

export default App;
