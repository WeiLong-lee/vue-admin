import fetch from 'src/fetch'
import * as userUrl from '../constant/user'
import {sessionStorage} from 'src/common/storage'
const scope = 'server'

// 登录
export const login = (username, password) => {
  // eslint-disable-next-line camelcase
  const grant_type = 'password'
  return fetch({
    url: userUrl.login,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic Y2xpZW50MToxMjM0NTY='
    },
    method: 'post',
    data: {grant_type, username, password, scope}
  })
}

// 登出
export const logout = () => {
  let accessToken = sessionStorage.get('user_info').access_token
  return fetch({
    url: userUrl.logout,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + accessToken
    },
    method: 'post'
  })
}
