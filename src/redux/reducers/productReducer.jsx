import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
  // CÁCH GOM STATE ĐỂ DỄ QUẢN LÝ CODE
  arrProduct: [
    { id: 1, name: 'nike', price: 1000, image: 'https://picsum.photos/300/300' }
  ],
  productDetail: {}
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getDataProductAction: (state, action) => {
      state.arrProduct = action.payload;
    }
  }
});
export const { getDataProductAction } = productReducer.actions
export default productReducer.reducer


//------------------ action thunk (action 2 function) --------------
export const getAllProductActionApi = () => {

  return async (dispatch) => {
    let result = await axios({
      url: 'https://shop.cyberlearn.vn/api/Product',
      method: 'GET'
    })
    //Lấy dữ liệu tạo thành action và đưa lên redux
    let action = getDataProductAction(result.data.content);
    dispatch(action);
  }
}


//closure function: function trung gian nhận tham số cho function chính
// let funcTrungGian = (thamSo) => {

//   return function () {
//       console.log(thamSo)
//   }
// }

// funcTrungGian(); //=> functionCallback