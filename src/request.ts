const INTERNAL_KEY = 'INTERNAL_REQUEST'

export interface RequestOptions {
  headers: any,
  method: string,
  url: string,
  body: any
}

export class Request{
  private [INTERNAL_KEY]: any
  constructor(options:RequestOptions){
    let method = options.method || 'GET'
    let headers = {
      "Content-Type": "application/json",
      ...options.headers
    }
    let url = options.url
    let body = options.body || {}
    this[INTERNAL_KEY] = {
      headers: headers,
      method: method,
      url: url,
      body: body
    }
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

  get body(){
    let body = this[INTERNAL_KEY].body
    // TODO iOS 这边要求传递对象，后期 iOS 重构后进行改造
    return typeof body === 'string'? JSON.parse(body) : body
  }

  clone(){
    return new Request(this)
  }

}
