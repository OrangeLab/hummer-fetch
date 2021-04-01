import {Url} from './types/index'

const INTERNAL_KEY = 'INTERNAL_REQUEST'

export interface RequestOptions {
  headers: any,
  method: string,
  url: string
}

export class Request{
  constructor(options:RequestOptions){
    let method = options.method || 'GET'
    let headers = options.headers
    let url = options.url
    this[INTERNAL_KEY] = {
      headers: headers,
      method: method,
      url: url
    }
  }

  set [INTERNAL_KEY](object: any){
    this[INTERNAL_KEY] = object
  }

  get url(){
    return this[INTERNAL_KEY].url
  }

  get method(){
    return this[INTERNAL_KEY].method
  }

  get headers(){
    return this[INTERNAL_KEY].headers
  }

  clone(){
    return new Request(this)
  }
}

export function getRequestOptions(resource: Url, options: any):RequestOptions{
  return {
    url: resource,
    ...options
  }
}