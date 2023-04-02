import React, { Component } from 'react'

export default class DemoLogin extends Component {

    //state: là thuộc tính của component để quản lý các biến thay đổi trên giao diện của 1 component
    state = {   
        result: 'default value'
    }

    
    handleSubmit = (event) => {
        event.preventDefault();
        // this.state.result = 'Đăng nhập thành công !'; //Không được thay đổi state trực tiếp vì giao diện sẽ không render lại.
        let newState = {   
            result: 'đăng nhập thành công !'
        }
        /*
            this.setState: Là phương thức có sẵn của component. Dùng để thay đổi giá trị state, đồng thời làm giao diện render lại với giá trị state mới
        */
        this.setState(newState);
    }
    render() {
        return (
            <div className='container'>
                <form className='card w-25 mx-auto' onSubmit={this.handleSubmit}>
                    <div className='card-header bg-dark text-white text-center'>Login</div>
                    <div className='card-body'>
                        <p>Username</p>
                        <input className='form-control' id="username" />
                        <p>Password</p>
                        <input className='form-control' id="password" />
                    </div>
                    <div className='card-footer text-center'>
                        <button type='submit' className='btn btn-success'>Login</button>
                    </div>
                </form>
                <div className='alert alert-success mt-2 mx-auto w-25' id="result">
                    {this.state.result}
                </div>
            </div>
        )
    }
}
