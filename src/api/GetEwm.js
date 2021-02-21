import request from '@/utils/request'
export function getEwm(params) {
    return request({
      url: '/pic/picList',
      method:'get',
      params
    })
}