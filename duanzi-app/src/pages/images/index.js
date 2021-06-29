import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import axios from 'axios'
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
    // return axios({
    //   method: 'post',
    //   url: 'https://api.apiopen.top/getWangYiNews',
    //   params: {
    //     page: this.state.page,
    //     count: 10
    //   }
    // })
    return Taro.request({
        url: 'https://api.apiopen.top/getWangYiNews',
        method: 'POST',
        data: {
          page: this.state.page,
          count: 10
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

  handleClick(url) {
    window.location.href = url
    // Taro.redirectTo({url})
  }

  render () {
    console.log(1111, this.state.list)

    return (
      <View className="container">
        {this.state.list && this.state.list.map((item, key) => {
          return (
            <View className="container-item" key={item.image} onClick={this.handleClick.bind(null, item.path)}>
              <View className="title">{item.title}</View>
              <Text className="time">{item.passtime}</Text>
              <Image className="image" src={item.image}></Image>
            </View>
          )
        })}
      </View>
    )
  }
}

export default Index
