const INTERNAL_KEY = 'INTERNAL_RESPONSE'

export enum ResponseCode {
  SUCCESS = 200
}

export interface ResponseOptions {
  status: number,
  statusText: string,
  url: string,
  headers: any
}

export class Response{
  constructor(options:ResponseOptions){
    let status = ResponseCode.SUCCESS
    let url = options.url

    this[INTERNAL_KEY] = {
      status,
      statusText: options.statusText || '',
      headers: options.headers,
      url: url
    }
  }

  set [INTERNAL_KEY](object: any){
    this[INTERNAL_KEY] = object
  }

  get url(){
    return this[INTERNAL_KEY].url
  }

  get status(){
    return this[INTERNAL_KEY].method
  }

  get ok(){
    return this[INTERNAL_KEY].status >= 200 && this[INTERNAL_KEY].status < 300;
  }

  get headers(){
    return this[INTERNAL_KEY].headers
  }

  get statusText(){
    return this[INTERNAL_KEY].statusText
  }
  
  clone(){
    return new Response(this)
  }

  async json(){

  }
}