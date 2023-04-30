import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableCart from './TableCart'

class CartPage extends Component {
    render() {
        return (
            <div className='container'>
                <h3>cart</h3>
                <TableCart />
                <div className="text-end">
                    <button className='btn btn-danger'>Thanh Toán</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state


export default connect(mapStateToProps)(CartPage)