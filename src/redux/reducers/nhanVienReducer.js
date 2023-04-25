//redux toolkit => reduxslice
//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {          //state mặc định (thay vì khai báo bên dưới thì viết riêng ra)
    maNhanVien: '0001',
    tenNhanVien: 'Nguyễn Văn A',
    luongCanBan: '1000'
}

const nhanVienReducer = createSlice({
    name: 'nhanVienReducer',    //tên reducer
    initialState,               //state mặc định
    reducers: {                 //các hàm xử lý action 
        changeInfo: (state,action) => {
            let {id,value} = action.payload;
            state[id] = value;

            // return {...state} // xử lý ngầm và vẫn trả về nên khỏi ghi
        }
    }
});

// export const { } = nhanVienReducer.actions
export const { changeInfo} = nhanVienReducer.actions

export default nhanVienReducer.reducer