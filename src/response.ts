const INTERNAL_KEY = 'INTERNAL_RESPONSE'

export enum ResponseCode {
  SUCCESS = 200
}

export interface ResponseOptions {
  status: number,
  statusText?: string,
  url: string,
  headers: any
}

export class Response{
  private [INTERNAL_KEY]: any
  private body:any
  constructor(body: any, options:ResponseOptions){
    let status = ResponseCode.SUCCESS
    let url = options.url

    this.body = body
    this[INTERNAL_KEY] = {
      status,
      statusText: options.statusText || '',
      headers: options.headers,
      url: url
    }
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
  
  protected transformResponseBody(body:any){
    return body
  }

  json(){
    return new Promise((resolve, reject) => {
      try{
        let data = this.transformResponseBody(this.body)
        resolve(data)
      }catch(err){
        reject(err)
      }
    })
  }
}