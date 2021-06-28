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
    // return reqwest({
    //   url: 'https://api.apiopen.top/getJoke',
    //   method: 'get',
    //   data: {
    //     page: this.state.page,
    //     type: 'video',
    //     count: 10
    //   }
    // })
    // 没写return直接没结果
    return axios.post('https://api.apiopen.top/getImages', {
      params: {
        page: this.state.page,
        count: 20
      }
    })
    .then(data => {
      this.setState({
        list: this.state.list.concat(data.data.result),
        page: this.state.page + 1
      })
    })
    .catch(err => {
      console.error(err.message)
      Taro.showToast({title: '最后一页了～'})
      })
  }

  async componentDidMount()
  {
    const res = await this.getData()
    console.log(this.state.list)
  }

  async onReachBottom()
  {
      const res = await this.getData()
      console.log(this.state.list)
  }

  render () {
    return (
      <View className="container">
       {this.state.list && this.state.list.map((item, index) => {
         return (
           <View key={item.id}>
            <View className="header">
             <Image src={Awater} style={{height:30}} />
             <View className="user-time">
               <Text>{item.name}</Text>
               <Text>{item.passtime}</Text>
             </View>
            </View>
            <Image className="content-big" src={item.img} />
            <View className="footer">
               <View>评论: {item.comment ?? 0}</View>
               <View>点咋: {item.up ?? 0}</View>
               <View>下载: {item.down ?? 0}</View>
            </View>
           </View>
         )
       })}
      </View>
    )
  }
}

export default Index