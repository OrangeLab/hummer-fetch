import {Headers} from '../headers'

export type Url = string

export type Body = string

export enum Method{
  GET = 'get',
  POST = 'post'
}

export enum Mode{
  CORS = 'cors',
  NO_CORS = 'no-cors',
  SAME_ORIGIN = 'same-origin'
}

export interface FetchOptions{
  method: Method,
  headers: Headers,
  body: Body,
  // mode: Mode,
  // credentials: any
}
