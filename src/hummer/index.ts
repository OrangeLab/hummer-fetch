import {Request} from '../request'
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
  header: Object,
  data: Object,
  error: HummerError
}


export class HummerRequest extends Request{
  private _request: any
  constructor(options:any){
    super(options)
    this._request = new _Request()
  }

  async send() {
    return new Promise((resolve, reject) => {
      this._request.send(function(resp: HummerResponse){
        resolve(resp)
      }) 
    })
  }
}