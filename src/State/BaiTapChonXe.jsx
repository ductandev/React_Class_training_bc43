import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        srcCar: './img/products/red-car.jpg'
    }

    // Cách 1: hàm này bất đồng bộ dùng async await
    // handleChangeColor = async (color) =>{
    //     await this.setState({
    //         srcCar: `./img/products/${color}-car.jpg`
    //     })

    //     console.log(this.state);
    // }

    // Cách 2: 
    handleChangeColor =  (color) => {
        this.setState({
           srcCar: `./img/products/${color}-car.jpg`
       }, ()=> {                          // call back function để trả đúng giá trị
           console.log(this.state);

       });
   }


  render() {
    return (
      <div className='container'>
        <h3>Bài tập chọn xe</h3>
        <div className='row'>
            <div className='col-6'>
                <img src={this.state.srcCar} className='w-100' />
            </div>
            <div className='col-6'>
                <button className='btn btn-dark mx-2' onClick={()=> {
                    this.handleChangeColor('black')
                }}>Black Car</button>
                <button className='btn btn-danger mx-2' onClick={()=>{
                    this.handleChangeColor('red')
                }}>Red Car</button>
                <button className='btn btn-light mx-2 border' onClick={()=>{
                    this.handleChangeColor('steel')
                }}>Steel Car</button>
                <button className='btn btn-secondary mx-2' onClick={()=>{
                    this.handleChangeColor('silver')
                }}>Silver Car</button>
            </div>
        </div>
      </div>
    )
  }
}
