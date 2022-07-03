import api from "./request"

const AppId = 'wxd9f1d7d25401aabc'

export interface LoginParam {
    username: string
    phone: string
    code: string
    type: number
}

export const login = async (params:LoginParam) => { 
    const resp = await api(
        {
            url: '/wx/user/bind',
            method: "POST",
            data: params,
        }
    )
    return resp
}

export const getValidCode = async (params: LoginParam) => {
    const resp = await api({
        url: 'account/code',
        method: 'post',
        data: params
    })
    return resp
}

export const getInfoByCode = async (data) => {
    return api({
      url: '/wx/code',
      method: 'post',
      data
    })
  }
  

export const getWxCode = async() => {
    const redirectURL = encodeURIComponent("http://ehdzwd.natappfree.cc" + '/')
    const base = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=`
    window.location.href = base + AppId +
        `&redirect_uri=` + redirectURL +
        `&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
}

