# hummer-fetch
Fetch Api For Hummer Env。适用于 Hummer Env 环境的 Fetch API 实现。
## API
整体是 [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) 的子集。

> Warning: 由于 Native Request 特性导致，现有的 fetch 只支持基础的 get、post 请求，不支持其它类型。

> Warning: 现在只支持普通的 JSON(文本) 格式请求，不支持流式数据。
## 如何使用
### 安装
安装 hummer-fecth 包，执行命令 `npm install @hummer/hummer-fetch --save`

### 使用
#### 全局引入
> 原则上只要保证在使用 fetch api的前面进行 `hummer-fetch`库的引入即可。推荐在 entry.js 头部进行引用。
```
// entry.js

import '@hummer/hummer-fetch';
import * as Tenon from '@hummer/tenon-vue';
import app from './app';

Tenon.render(app);
```
业务中直接使用
```
  fetch('xxx/test/hummer.node?a=1&b=2', {
    method: 'POST',
    body: JSON.stringify({
      name: 'name'
    })
  }).then(resp => resp.json()).then(data => {
    console.log('data')
  }).catch(err => {
    console.log('err:', err)
  })
```
