import React, { Component } from 'react'
// Component này sẽ đại diện cho component được load trên url
// Outlet sẽ đại diện cho ~ component thay thế
// NavLink: thẻ này dùng để khi refesh lại trang chỉ refesh những thẻ này
import { Outlet, NavLink } from 'react-router-dom'

export default class HomeTemplates extends Component {
  render() {
    return (
      <div>
        <header className='header p-3 bg-dark text-white'>
          <nav className='d-flex'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Home</NavLink>
            <NavLink to='/cart' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Cart (Demo Props)</NavLink>
            <NavLink to='/cars' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Cars</NavLink>
            <NavLink to='/login' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Login</NavLink>
            <NavLink to='/react-form' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>ReactForm</NavLink>

            <NavLink to='/react-lifecycle' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>React Life Cycle</NavLink>

            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink class="dropdown-item nav-link" to="/redux-demo1">Demo Tăng giảm SL</NavLink>
                <NavLink class="dropdown-item nav-link" to="/redux-demo2">Demo Chọn xe</NavLink>
                <NavLink class="dropdown-item nav-link" to="/redux-demo3">Demo Form Nhân viên</NavLink>
              </div>
            </div>




          </nav>
        </header>
        <main style={{ minHeight: '650px' }}>
          <Outlet></Outlet>
        </main>
        <footer className='bg-dark text-white p-3 text-center '>
          <h1>Footer</h1>
        </footer>
      </div>
    )
  }
}
