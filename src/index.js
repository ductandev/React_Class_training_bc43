// import các thư viện react

import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoClass from './Component/DemoClass';
import Home from './Component/HomeComponent/Home';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoLogin from './State/DemoLogin';
import DemoState from './State/DemoState';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Nội dung website sẽ được hứa toàn bộ trong hàm render
root.render(
  <div>
    {/* <Home /> */}
    {/* <DataBinding/> */}
    {/* <HandleEvent/> */}
    {/* <DemoLogin/> */}
    <DemoState/>
  </div>
);


