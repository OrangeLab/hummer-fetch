import {Request, getRequestOptions} from './request'
import {Response} from './response'
import {Url, FetchOptions} from './types/index'
import {HummerRequest} from './hummer/index'

export {Request, Response}


export async function fetch(resource: Url | HummerRequest, _options?:FetchOptions):Promise<Response>{
  return new Promise((resolve, reject) => {

    let request = null
    if(resource instanceof Request){
      request = resource
    }else {
      let requestOptions = getRequestOptions(resource, _options)
      request = new HummerRequest(requestOptions)
    }

    request.send().then((res:Response) => {
      resolve(res)
    })
  })
}