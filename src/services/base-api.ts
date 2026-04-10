import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";

interface IResponseData {
  [key: string]: any;
}

type StringOrArrayPath = string | (string | number)[];

export abstract class BaseApi {
  protected http: AxiosInstance;

  private parseUrlPath = (path: StringOrArrayPath): string => {
    if (Array.isArray(path)) {
      return path.map(path => path.toString()).join("/") + "/";
    }

    return path + "/";
  };

  constructor(baseURL: string, interceptorConfig: Partial<InternalAxiosRequestConfig> = {}) {
    this.http = axios.create({
      baseURL
    });

    this.http.interceptors.request.use(config => ({
      ...config,
      ...interceptorConfig
    }));
  }

  protected async get<T = IResponseData>(
    endpoint: StringOrArrayPath,
    params?: object,
    requestConfig: AxiosRequestConfig | undefined = {}
  ): Promise<AxiosResponse<T>> {
    return this.http.get<T>(this.parseUrlPath(endpoint), { params, ...requestConfig });
  }

  protected async post<T = IResponseData>(
    endpoint: StringOrArrayPath,
    body?: object,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.http.post<T>(this.parseUrlPath(endpoint), body, requestConfig);
  }

  protected async put<T = IResponseData>(
    endpoint: StringOrArrayPath,
    body?: object,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.http.put<T>(this.parseUrlPath(endpoint), body, requestConfig);
  }

  protected async patch<T = IResponseData>(
    endpoint: StringOrArrayPath,
    body?: object,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.http.patch<T>(this.parseUrlPath(endpoint), body, requestConfig);
  }

  protected async delete<T = IResponseData>(
    endpoint: StringOrArrayPath,
    body?: object,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.http.delete<T>(this.parseUrlPath(endpoint), { data: body, ...requestConfig });
  }
}
