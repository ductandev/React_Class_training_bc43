import React, { Component } from 'react'

export default class TextDemo extends Component {


    render() {
        //this.props: là thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào (thẻ sử dụng thẻ này)
        // let {noiDung} = this.props.noiDung;
        // props không thể gán lai bằng giá trị khác (hằng số)
        let { name, price, img } = this.props; // Viết theo dạng bóc tách phần tử
        // this.props.name ='abc';      // props không thể gán lai bằng giá trị khác (hằng số)

        return (
            <div className='card'>
                <img src={img} alt='...' />
                <div className='card-body'>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
            </div>
        )
    }
}
