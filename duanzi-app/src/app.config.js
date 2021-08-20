export default {
  pages: [
    'pages/index/index',
    'pages/images/index',
    'pages/video/index',
    'pages/detailView/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '文本'
      }, {
        pagePath: 'pages/images/index',
        text: '新闻'
      }, {
        pagePath: 'pages/video/index',
        text: '诗词'
      }
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
