import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Info extends Component {
  render() {
    console.log(this.props);
    let {nhanVienReducer} = this.props;
    return (
      <div className='card'>
        <img src='https://i.pravatar.cc?u=5' alt="..." />
        <div className='card-body'>
            <h3>Họ tên: {nhanVienReducer.tenNhanVien}</h3>
            <p>Mã nhân viên: {nhanVienReducer.maNhanVien}</p>
            <p>Lương Căn bản: {nhanVienReducer.luongCanBan}$ </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Info)