import React, { Component } from 'react'

const TITLE = 'CYBERSOFT';

const renderInfo = (name, age) => {
    //Nội dung của hàm trả về trong jsx là primitive value (string, boolean, number, jsx)
    return <span>{`Xin chào ${name} - ${age} tuổi`}</span>

}

export default class DataBinding extends Component {

    user = {
        userName: 'khai',
        password: 123
    }


    render() {
        return (
            <div className='container'>
                <h3 id="title">{TITLE}</h3>
                <p>{renderInfo('Tùng', 18)}</p>

                <div className='card w-25'>
                    <h3 className='card-header text-center bg-dark text-white'>User info</h3>
                    <div className='card-body'>
                        <p>Username</p>
                        <input className='form-control' value={this.user.userName} />
                        <p>Password</p>
                        <input className='form-control' type="password" value={this.user.password} />
                    </div>

                </div>


            </div>
        )
    }
}
