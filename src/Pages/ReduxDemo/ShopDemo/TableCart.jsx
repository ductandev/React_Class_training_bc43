import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeQuantityAction, delProductAction } from '../../../redux/reducers/cartReducer';

class TableCart extends Component {
    
    render() {
        let {cart,number,dispatch} = this.props;
        console.log(this.props)
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    {cart.map(item=>{
                        return <tr key={item.id}>
                        <th>{item.id}</th>
                        <th><img src={item.image}  style={{width:50}} alt='...' /></th>
                        <th>{item.name}</th>
                        <th>{item.price}</th>
                        <th>
                            
                            <button className='btn btn-primary' onClick={()=>{ 
                                const action = changeQuantityAction({
                                    id:item.id,
                                    quantity: 1
                                });

                                this.props.dispatch(action);
                            }}>+</button>
                            {item.quantity}
                            <button className='btn btn-primary' onClick={()=>{ 
                                const action = changeQuantityAction({
                                    id:item.id,
                                    quantity: -1
                                });

                                this.props.dispatch(action);
                            }}>-</button>
                        
                        </th>
                        <th>{item.quantity * item.price}</th>
                        <th>
                            <button className='btn btn-danger' onClick={()=>{
                                //Gửi action chứa id lên để reducer xử lý
                                const action = delProductAction(item.id);
                                //action = {type:'cartReducer/delProductAction',payload: item.id}

                                this.props.dispatch(action);
                                
                            }}><i className='fa fa-close'></i></button>
                        </th>
                    </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    cart:state.cartReducer.cart,
    number:state.number
})



export default connect(mapStateToProps)(TableCart)