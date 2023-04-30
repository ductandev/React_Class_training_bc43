import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeInfo } from '../../redux/reducers/nhanVienReducer';

//Xoá export
class FormNhanVien extends Component {

    handleChangeInput = (e) => {
        let { id, value } = e.target;

        // --CÁCH 1: acction tạo tay ( tự code)
        // const action = {
        //     // type: 'CHANGE_INFO',
        //     // Mô hình redux slice
        //     type: 'nhanVienReducer/changeInfo',   // mặc định muốn chạy vô cái hàm này thì phải đặt tên nó như vầy
        //     payload: {
        //         id,
        //         value
        //     }

        // --CÁCH 2: truyển payload vào hàm
        const action = changeInfo({id,value});
        
        //Đưa object {id,value} lên redux 
        this.props.dispatch(action);

    }


    render() {
        return (
            <form>
                <h3>Thông tin nhân viên</h3>
                <div className='form-group mt-2'>
                    <input className='form-control' id="maNhanVien" onInput={this.handleChangeInput} />
                </div>
                <div className='form-group mt-2'>
                    <input className='form-control' id="tenNhanVien" onInput={this.handleChangeInput} />
                </div>
                <div className='form-group mt-2'>
                    <input className='form-control' id="luongCanBan" onInput={this.handleChangeInput} />
                </div>
                <div className='form-group mt-2'>
                    <button className='btn btn-success' type='submit'>Hiển thị</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(FormNhanVien)