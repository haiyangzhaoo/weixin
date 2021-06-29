export default {
  pages: [
    'pages/index/index',
    'pages/images/index',
    'pages/video/index'
  ],
  tabBar: {
    list: [
      {
        'iconPath': 'assets/images/wb_1.png',
        'selectedIconPath': 'assets/images/wb_0.png',
        pagePath: 'pages/index/index',
        text: '文本'
      }, {
        'iconPath': 'assets/images/pic_1.png',
        'selectedIconPath': 'assets/images/pic_0.png',
        pagePath: 'pages/images/index',
        text: '新闻'
      }, {
        'iconPath': 'assets/images/video_1.png',
        'selectedIconPath': 'assets/images/video_0.png',
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
