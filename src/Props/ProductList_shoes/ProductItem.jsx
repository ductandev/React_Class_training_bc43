import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    // Lấy giá trị từ pros name từ component cha truyền vào
    let {prodInfo} = this.props;



    return (
      <div className='card'>
        <img src={prodInfo.image} alt="..." />
        <div className="card-body">
            <h3>{prodInfo.name}</h3>
            <p>{prodInfo.price}</p>
            <button className="btn btn-dark">
                Add to cart <i className="fa fa-cart-plus"></i>
            </button>
        </div>
      </div>
    )
  }
}
