// const baseHttp = 'http://192.168.0.156:8080'
const baseHttp = 'http://221.12.4.52:18080/dc-500-web-shop'
export default {
    login: {
        descript: '普通登录',
        url: baseHttp+'/api/user/login.do',
        method: 'get',
    },
    msgCode: {
        descript: '短信验证码',
        url: baseHttp+'/api/sms/send.do',
        method: 'post',
    },
    loginByPhone: {
        descript: '手机号登录',
        url: baseHttp+'/api/user/loginByPhone.do',
        method: 'get',
    },
    wechatCallback: {
        descript: '影楼注册',
        url: baseHttp+'/api/user/wechatCallback.do',
        method: 'get',
    },
    logout: {
        descript: '登出',
        url: baseHttp+'/api/user/logout.do',
        method: 'get',
    },
}