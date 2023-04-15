import React, { Component } from 'react'

export default class Item extends Component {

    state = {
        
    }

    render() {
        //lấy từ propsName của component cha truyền vào
        let {phone,xemChiTiet} = this.props;

        return (
            <div className='card'>
                <img src={phone.hinhAnh} alt='...' height={'100%'} />
                <div className='card-body'>
                    <h3>{phone.tenSP}</h3>
                    <p>{phone.giaBan.toLocaleString()} VND</p>
                    <button className='btn btn-success' onClick={() => {
                        xemChiTiet(phone)
                    }}>Xem chi tiết</button>

                    <button className='btn btn-dark mx-2'><i className='fa fa-cart-plus'></i> Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
