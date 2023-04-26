import React from "react";
import ReactDOM from "react-dom/client";
import DemoClass from "./Components/DemoClass";
import Home from "./Components/HomeComponent/Home";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoLogin from "./State/DemoLogin";
import DemoState from "./State/DemoState";
import StyleDemo from "./StyleDemo/StyleDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoPageLogin from "./State/DemoPageLogin";

import "./assets/scss/index.scss";
import DemoProps from "./Props/DemoProps";
import ProductList from "./Props/ProductList_shoes/ProductList";
import ProductDetail from "./Props/ProductDetail_phone/ProductDetail";
// Cấu hình react router dom
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import HomeTemplate from './Templates/HomeTemplate';
import Cart from "./Props/ProductDetail_phone/Cart";
import BaiTapChonXe from './State/BaiTapChonXe';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ReactFormDemo from './ReactFormDemo/ReactFormDemo';
import ReactLifeCycle from './Pages/ReactLifeCycle/ReactLifeCycle';
// Cấu hình redux
import {Provider} from 'react-redux'
import { store } from './redux/configStore';
import DemoTangGiamSoLuong from './Pages/ReduxDemo/DemoTangGiamSoLuong';
import DemoBaiTapChonXe from './Pages/ReduxDemo/DemoBaiTapChonXe';
import DemoFormNhanVien from './Pages/ReduxDemo/DemoFormNhanVien';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path='' element={<HomeTemplate />}>
              <Route index element={<Home />}></Route>
              <Route path='cart' element={<ProductDetail />}></Route>
              <Route path='cars' element={<BaiTapChonXe />}></Route>
              <Route path='login' element={<Login />}></Route>
              <Route path='profile' element={<Profile />}></Route>
              <Route path='react-form' element={<ReactFormDemo />}></Route>
              <Route path='react-lifecycle' element={<ReactLifeCycle />}></Route>
              <Route path='redux-demo1' element={<DemoTangGiamSoLuong />}></Route>
              <Route path='redux-demo2' element={<DemoBaiTapChonXe />}></Route>
              <Route path='redux-demo3' element={<DemoFormNhanVien />}></Route>

              <Route path='*' element={<Navigate to={'/'} />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  </Provider>
);

{/* <Home />
<DataBinding />
<HandleEvent />
<DemoLogin />
<DemoState />
<StyleDemo />
<RenderWithMap />
<DemoPageLogin  />
<DemoProps />
<ProductList />
<ProductDetail /> */}