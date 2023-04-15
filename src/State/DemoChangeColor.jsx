import React, { Component } from 'react'

export default class DemoChangeColor extends Component {
  // Tên biến nên đặt danh từ, hàm thì đặt động từ.
    state = {
        colorHome : 'red'
    }


  render() {
    return (
      <div className='container'>
        <i style={{color:this.state.colorHome}} className='fa fa-home display-1'></i>
        <select className='mt-2 form-control w-25' onChange={(event)=>{
            // let value = event.target.value;
            let {value} = event.target;         // Viết kiểu rút gọn bóc tách phần tử
            this.setState({
                colorHome:value
            })
            console.log('value',value)
        }}>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
        </select>
      </div>
    )
  }
}
