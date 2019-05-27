// 购物模块
const baseHttp = 'http://221.12.4.52:18080/dc-500-web-shop'
export default {
  goodsList: {
      descript: '购物车商品列表',
      url: baseHttp + '/api/cart/list.do',
      method: 'post',
  }
} 