import React, { Component } from 'react'
import './style.css';

// Cách css chỉ xử lý trên component mà ta muốn thôi.
import objectStyle from './style.module.css'


export default class StyleDemo extends Component {
    
  render() {

    const bg = '#000';

    return (
      <div className='container'>
        {/* cách này tất cả các combonent đều bị ảnh hưởng */}
        <p className='color-red'>Lorem ipsum dolor sit amet.</p>
        {/* truy xuất đến thuộc tính cách 1 dùng "chấm" */}
        <p className={objectStyle.colorPrimary}>Lorem ipsum dolor sit amet.</p>
        {/* truy xuất đến thuộc tính cách 2 dùng ngoặc [] */}
        <p className={objectStyle['color-danger']}>Lorem ipsum dolor sit amet.</p>
        {/* truy xuất đến thuộc tính cách 2 và dùng cả bootstrap */}
        <p className={`${objectStyle['color-danger']} text-center p-3 bg-dark m-2`}>Lorem ipsum dolor sit amet.</p>

        {/* Cách này đưa giá trị bên ngoài vô */}
        <p style={{backgroundColor:bg}}> Lorem, ipsum dolor.</p>

      </div>
    )
  }
}
