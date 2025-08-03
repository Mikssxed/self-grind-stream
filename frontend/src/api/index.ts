import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
});

export function get<TResponseData = any, TPayload = any>(
  url: string,
  config?: AxiosRequestConfig<TPayload>
) {
  return api.get<
    TResponseData,
    AxiosResponse<TResponseData, TPayload>,
    TPayload
  >(url, config);
}
