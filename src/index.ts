import {Response} from './response'
import {Url, FetchOptions} from './types/index'
import {HummerRequest} from './hummer/index'

export {HummerRequest as Request, Response}

export function fetch(resource: Url | HummerRequest, _options?:FetchOptions):Promise<Response>{
  return new Promise((resolve, reject) => {
    let request = null
    if(resource instanceof HummerRequest){
      request = resource
    }else {
      request = new HummerRequest({
        url: resource,
        ..._options
      })
    }
    request.send().then((res:Response) => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}