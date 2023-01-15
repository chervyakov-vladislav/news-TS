import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    const key = 'f5b2be16ed0c41db9fe99a915271293c';
    super('https://newsapi-redirect-production.up.railway.app/', {
      apiKey: key,
    });
  }
}

export default AppLoader;
