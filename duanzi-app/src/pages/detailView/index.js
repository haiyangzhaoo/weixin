import React, {Component} from 'react'
import {WebView} from '@tarojs/components'
import Taro from '@tarojs/taro'

// 可能是详情域名导致的不可访问
class DetailView extends Component {
  render() {
    const {url} = Taro.getCurrentInstance().router.params;

    return (
      <WebView url={url} />
    )
  }
}

export default DetailView
