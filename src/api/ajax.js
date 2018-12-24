/*
  ajax请求模块
 */


import axios from 'axios'

export default function async(url, data={}, type='GET') {
  return new Promise(function (resolve, reject) {
    let promise;
    //执行异步ajax请求
    if(type==='GET'){
      promise = axios.get(url, {parma: data})
    }else{
      promise = axios.post(url, data)
    };
    promise.then((resolve) => {
      //请求成功
      resolve(resolve.data)
    }).catch((err) => {
      //请求失败
      alert('请求失败'+err.message)
    })
  })
}

// async function getAddress() {
//   const result = await ajax('/address')
//   if(result.code === 0){
//
//   }else{
//
//   }
// }
