import React, { Component } from 'react'

export default class Cart extends Component {

    renderGioHang = () =>{
        let {arrGioHang, xoaSanpham, tangGiamSoLuong} = this.props;
        
        return arrGioHang.map((sp)=>{
            return <tr key={sp.maSP}>
            <td>{sp.maSP}</td>
            <td>{sp.tenSP}</td>
            <td>
                <img src={sp.hinhAnh} alt="..." width={50} height={50} />
            </td>
            <td>{sp.giaBan}</td>
            <td>
                <button className='mx-2 btn btn-primary' onClick={()=>{
                    tangGiamSoLuong(sp.maSP, 1)
                }}>+</button>
                {sp.soLuong}
                <button className='mx-2 btn btn-primary' onClick={()=>{
                    tangGiamSoLuong(sp.maSP, -1)
                }}>-</button>
            </td>
            <td>{sp.giaBan * sp.SoLuong}</td>
            <td>
                <button className='btn btn-danger' onClick={()=>{
                    xoaSanpham(sp.maSP);
                }}>Xoá</button>
            </td>
        </tr>
        })
    }

    // state = ??
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sp</th>
                        <th>Tên sp</th>
                        <th>Hình ảnh</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderGioHang()}
                </tbody>
            </table>
        )
    }
}
