import React, { Component } from 'react'
import DemoLogin from './DemoLogin'
import BaiTapChonXe from './BaiTapChonXe'
import DemoChangeFontSize from './DemoChangeFontSize'
import DemoChangeColor from './DemoChangeColor'

export default class DemoState extends Component {
  render() {
    return (
      // ghi 500 hay 500px nó vẫn hiểu
      <div style={{marginBottom:500}}>
        <DemoLogin />
        <BaiTapChonXe />
        <DemoChangeFontSize />
        <hr/>
        <DemoChangeColor />
      </div>
    )
  }
}
