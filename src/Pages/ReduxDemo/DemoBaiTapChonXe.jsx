//rcredux => ra component có kết nối sẵn với reudx
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Bỏ chữ export 
class DemoBaiTapChonXe extends Component {

    // state = {
    //     img: ''
    // }
  render() {
    console.log(this.props);
    return (
      <div className='container'> 
            <h1>Bài tập chọn xe</h1>
            <div className='row'>
                <div className='col-6'>
                    <img className='w-100' src={this.props.imgCar} alt='...' />
                </div>
                <div className='col-6'>
                    <button className='mx-2 btn text-white' style={{background:'red'}}  >Red</button>
                    <button className='mx-2 btn text-white' style={{background:'black'}} onClick={()=> {
                        //Gửi dữ liệu lên store
                        //Tạo ra action 
                        const action = {
                            type:'CHANGE_COLOR',
                            payload: './img/products/black-car.jpg'
                        }
                        //Dùng hàm dispatch đưa dữ liệu lên redux, có thể dủng 1 trong 2 cách bên dưới đều đc
                        this.props.dispatch(action);
                        // store.dispatch(action);

                    }} >Black</button>
                    <button className='mx-2 btn text-white' style={{background:'#EEE'}} >Steel</button>
                    <button className='mx-2 btn text-white' style={{background:'silver'}} >Silver</button>
                </div>
            </div>

      </div>
    )
  }
}
//Bỏ hàm mapDispatchToProps
//Hàm lấy state từ redux về biến thành props component
const mapStateToProps = (state) => {
    return state;
    // Nếu muốn lấy chỉ duy nhất 1 component nào đó
    return {
        imgCar: state.imgCar
    };
}
export default connect(mapStateToProps)(DemoBaiTapChonXe)