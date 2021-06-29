import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Image,Video } from '@tarojs/components'
import axios from 'axios'
// import reqwest from 'reqwest'
import Taro from '@tarojs/taro'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'
import Awater from '../../assets/images/awater.png'


/**
 * 这里是装饰类语法，和使用connent(mapStateToProps, mapDispatchToProps)(MyApp)是一样的
 * @param  {[type]} ({       counter       }) [description]
 * @param  {[type]} (dispatch [description]
 * @return {[type]}           [description]
 */
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  state = {
    list: [],
    page: 1
  }

  getData()
  {
    // return reqwest({
    //   url: 'http://poetry.apiopen.top/poetryFull',
    //   method: 'get',
    //   data: {
    //     page: this.state.page,
    //     count: 2
    //   }
    // })
    // return axios({
    //   method: 'get',
    //   url: 'http://poetry.apiopen.top/poetryFull',
    //   params: {
    //     page: this.state.page,
    //     count: 2
    //   }
    // })

    return Taro.request({
        url: 'http://poetry.apiopen.top/poetryFull',
        method: 'GET',
        data: {
          page: this.state.page,
          count: 2
        }

    })
  }

  async componentDidMount()
  {
    const res = await this.getData()
    this.setState({
      list: this.state.list.concat(res.data.result),
      page: this.state.page + 1
    })
  }

  async onReachBottom()
  {
      const res = await this.getData()
      this.setState({
        list: this.state.list.concat(res.data.result),
        page: this.state.page + 1
      })
  }

  render () {
    console.log(1111, this.state.list)

    if (this.state.list.length == 0) {
      return <View className="load">加载中...</View>
    }

    return (
      <View className="container">
       {this.state.list && this.state.list.map((item, index) => {
         return (
          <View className="container-item" key={`${item.writer}-${item.title}`}>
            <View className="title">{item.title}</View>
            <View className="user">
              <Text className="user-dy">{item.dynasty}</Text>
              <Text className="user-name">{item.writer}</Text>
            </View>
            <View className="types">
              {item.type && item.type.split(',').map((name, key) => <Text className="type" key={key}>{name}</Text>)}
            </View>
            <View className="article">
              {item.content}
            </View>
            <View className="remark">
              {item.remark}
            </View>
            <View className="appreciation">
              {item.appreciation}
            </View>
          </View>
         )
       })}
      </View>
    )
  }
}

export default Index
