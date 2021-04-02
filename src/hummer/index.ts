import {Request} from '../request'
import {Response} from '../response'

declare var __GLOBAL__: any

const {Request: _Request} = __GLOBAL__

export type ErrorCode = number
export type StatusCode = number

export interface HummerError {
  code: ErrorCode,
  msg: string
}

export type HummerResponse = {
  status: StatusCode,
  header: Record<string, string>,
  data: Object,
  error: HummerError
}


export class HummerRequest extends Request{
  private _request: any
  constructor(options:any){
    super(options)
    this._request = new _Request()
    this._request.url = this.url
    this._request.method = this.method
    this._request.param = this.body
    this._request.header = this.headers
  }

  send() {
    let _this = this
    return new Promise((resolve, reject) => {
      this._request.send(function(resp: HummerResponse){
        let staticResp = makeResponse(resp)
        let response = new Response(staticResp.data, {
          url: _this.url,
          headers: staticResp.header,
          status: staticResp.status
        })
        if(staticResp.error && staticResp.error.code !== 0){
          reject(staticResp.error)
        }
        resolve(response)
      }) 
    })
  }
}

export const makeResponse = (resp:HummerResponse) => {
  let {status, header, data, error} = resp
  return {
    status,
    header,
    data,
    error
  }
}