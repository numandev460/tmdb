import {ApiResponse, create} from 'apisauce';
import {toCamel} from 'convert-keys';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_READ_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODgyMDg5NjgwMTJmMDdjZmE3ODg0ODM1MjgwNTc0ZSIsInN1YiI6IjY1ZTg5YThkOTYzODY0MDE4MWNhMmZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DG9LHtU3lH3eAVLUJZPTQ9ubNYGKW36nn3H5pZxpSu4';

const instance = create({
  baseURL: BASE_URL,
});

instance.addResponseTransform(response => {
  if (response.data) {
    response.data = toCamel(response.data);
  }
  return response;
});

interface Request {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: object | FormData;
  params?: object;
  withToken?: boolean;
  convertKeys?: boolean;
  onUploadProgress?: (progressEvent: ProgressEvent) => void;
}

export async function request({
  url,
  method = 'GET',
  data,
  params,
  convertKeys = true,
  onUploadProgress,
}: Request) {
  const options: any = {
    method,
    url,
    params,
    onUploadProgress,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
    },
  };

  if (data) {
    if (data instanceof FormData) {
      options.headers['Content-Type'] = 'multipart/form-data';
      options.data = data;
    } else if (convertKeys) {
      options.data = toCamel(data);
    } else {
      options.data = data;
    }
  }

  const fetchResponse: ApiResponse<any> = await instance.any(options);

  if (fetchResponse.problem) {
    console.log('API error =>', fetchResponse.data);
    return Promise.reject(fetchResponse);
  }

  return fetchResponse.data;
}
