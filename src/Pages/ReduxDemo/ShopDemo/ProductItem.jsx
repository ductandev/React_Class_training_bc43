import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCartAction } from '../../../redux/reducers/cartReducer';

class ProductItem extends Component {
  render() {
    //Nhận props từ component cha truyền vào
    let {product} = this.props;

    return (
      <div className='card'>
        <img src={product.image} alt='...' className='w-100' />
        <div className='card-body'>
            <h3>{product.name}</h3>
            <p>{product.price} $</p>
            <button className='btn btn-dark' onClick={() => {
                // const action = {
                //     type:'cartReducer/addToCartAction',
                //     payload:product
                // };

                // cách 2:
                const action = addToCartAction(product);
                //Dùng hàm this.props.dispatch 
                this.props.dispatch(action);
            }}>
                Add to cart <i className='fa fa-cart-plus'></i>
            </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(ProductItem)