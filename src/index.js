// import các thư viện react

import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './component/Demo';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Nội dung website sẽ được hứa toàn bộ trong hàm render
root.render(
  <div>
    <Demo />
    <Demo />
    <Demo />
    <Demo />
  </div>
);
