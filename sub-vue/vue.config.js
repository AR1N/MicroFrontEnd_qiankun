const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host:'127.0.0.1',
    port: 8888,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  },
})
