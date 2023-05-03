//rcredux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
//Xoá export 
class RequestAPI extends Component {

    state = {
        arrProduct: []
    }
    getAllProduct = async () => {
        //gọi api tại đây
        let result = await axios({
            url:'https://shop.cyberlearn.vn/api/Product',
            method:'GET'
        });
        console.log('result',result.data); //result.data.content = [{},{},{}]
        //Đưa dữ liệu từ api về state
        this.setState({
            arrProduct:result.data.content
        })
    }

    render() {
        return (
            <div className='container'>
                <button className='btn btn-success' onClick={() => {
                    this.getAllProduct();
                }}>Get data api</button>
                <h3>Shoes shop</h3>
                <div className='row'>
                    {this.state.arrProduct.map((item) => {
                        return  <div className='col-4' key={item.id}>
                        <div className='card'>
                            <img src={item.image} alt="..." />
                            <div className='card-body'>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <button className='btn btn-dark'>
                                    <i className='fa fa-cart-plus'></i> Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    })}
                </div>

            </div>
        )
    }


    //lifecycle mouting : Chỉ chạy 1 lần đầu tiên sau khi hàm render chạy xong
    componentDidMount() {
        this.getAllProduct();
    }
  
}

const mapStateToProps = (state) => ({})

//Xoá mapdispatchtoprops
export default connect(mapStateToProps)(RequestAPI)


