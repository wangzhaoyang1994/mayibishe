import request from '@/utils/request'
export function login(params,data) {
  return request({
    url: '/api/login/login',
    method:'post',
    params:params,
    data:data
  })
}