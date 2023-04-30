//rcredux (Xoá chữ export và hàm mapdispatchtoprops)
import React, { Component } from 'react'
import { connect } from 'react-redux'
//import danh sách sản phẩm
import { arrProduct } from '../../../assets/data/data';
import ProductItem from './ProductItem';

class HomePage extends Component {

    renderProduct = () => {
        return arrProduct.map((item)=>{
            return <div className='col-4 mt-2' key={item.id}>
                <ProductItem  product={item}/>
            </div>
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className='display-4 text-center'>Product list</h3>
                <div className='row'>
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(HomePage)