module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/css/base.scss";
          `
        }
      }
    },
    devServer: {
        proxy: {
          '/api': {
            target: 'http://www.easwift.com:8002/api',   //代理接口
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''    //代理的路径
            }
          }
        }
      }
  }
  