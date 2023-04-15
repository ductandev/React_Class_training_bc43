import React, { Component } from 'react'

export default class DemoPageLogin extends Component {

    state = {
        isLogin: false //false: mặc định chưa đăng nhập
    }

    renderLogin = ()=>{
        if(this.state.isLogin) {
            return <div>
                    <button className='btn btn-success'>Profile - Huy</button> 
                    <button className='btn btn-light mx-2' onClick={()=>{
                        this.setState({
                            isLogin:false
                        })
                    }}>Đăng xuất</button>
                </div>
        }
        return <div>
            <button className='btn btn-success' onClick={()=>{
                this.setState({
                    isLogin:true
                })
            }}>Login</button>
        </div>
    }


    render() {
        return (
            <div className='bg-dark text-white py-3'>
                <div className='d-flex'>
                    <div className='w-75 text-center'>
                        <a href='#' className='mx-2 text-decoration-none'>Home</a>
                        <a href='#' className='mx-2 text-decoration-none'>All shoes</a>
                        <a href='#' className='mx-2 text-decoration-none'>Cart</a>
                    </div>
                    <div className='text-end w-25 px-5'>
                        {/* {this.state.isLogin ? <button className='btn btn-success'>Profile - Huy</button> :  <button className='btn btn-success'>Login</button>} */}

                        {this.renderLogin()}

                       
                    </div>
                </div>


            </div>
        )
    }
}
