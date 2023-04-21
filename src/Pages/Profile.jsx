import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Profile extends Component {




    render() {
        // Nếu local storage không có token => Navigate to login
        if (!localStorage.getItem('token')) {
            alert('Phải đăng nhập !')
            return <Navigate to="/login" />
        }
        
        return <div>
            Profile
        </div>
    }
}
