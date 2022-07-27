// 引入导航栏
const head = require('./config/head')

// 默认主题
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  lang: 'zh-CN',
  title: '知识库',
  description: '书山有路勤为径，学海无涯苦作舟。',
  head,
  // 默认主题配置
  theme: defaultTheme({
    home: '/',
    lastUpdated: true, // 是否启用最近更新时间戳
    lastUpdatedText: '上次更新', // 最后更新时间戳标签的文字
    backToHome: '返回首页！', // 404页面返回首页链接的文字
  })
}