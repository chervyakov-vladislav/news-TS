import { Options, Endpoint, Method, ErrorStatus, GetRespParam, Callback } from '../../types/controller';

class Loader {
  private baseLink: string;
  private options?: Options | undefined;

  constructor(baseLink: string, options?: Options) {
    this.baseLink = baseLink;
    if (options) {
      this.options = options;
    }
  }

  public getResp(
    { endpoint, options = {} }: GetRespParam,
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === ErrorStatus.unauthorized || res.status === ErrorStatus.notFound)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: Options, endpoint: Endpoint): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: Method, endpoint: Endpoint, callback: Callback<Response>, options: Options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: Response) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
