import axios from 'axios'
import qs from 'qs'
const service = axios.create({
    //baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 50000, // request timeout
    transformRequest: [function (data) {
      if (data instanceof FormData) {
        return data
      }
      data = qs.stringify(data)
      return data
    }]
  })
export default service