import { configureStore } from '@reduxjs/toolkit';
import nhanVienReducer from './reducers/nhanVienReducer';

export const store = configureStore({
    // reducer: giống như thuộc tính this.state, có thể hiểu nó là 1 cái state tổng của ứng dụng
    reducer: {
        // tên_State( Biến mặc định, action)
        number: (state = 15, action) => {
            if (action.type === 'TANG_GIAM_SOLUONG') {
                state = state + action.payload;
            }
            return state; // 16
        },

        color: (state = 'red', action) => {
            return state;
        },

        imgCar: (state = './img/products/red-car.jpg', action) => {
            if (action.type === 'CHANGE_COLOR') {
                // lấy dữ liệu mới gửi lên gán vào state
                state = action.payload;
            }
            return state;
        },

        // state = 00xxx
        nhanVienReducer: nhanVienReducer,

        // nhanVienReducer: (state = { maNhanVien: '0001', tenNhanVien: 'Nguyễn Văn A', luongCanBan: '1000' }, action) => {
        //     switch (action.type) {
        //         case 'CHANGE_INFO': {
        //             // lấy dữ liệu mới gửi lên gán vào state
        //             let { id, value } = action.payload;
        //             state[id] = value


        //             const temp = { ...state }
        //             temp[id] = value;
        //             return temp

        //         }; break;
        //     }

        //     // imutable -> tính bất biến (do object lưu địa chỉ)
        //     return { ...state };
        // }
    },
    preloadedState: {
        number: 15,
        color: "red",
        imgCar: "",
        nhanVienReducer: { maNhanVien: '0001', tenNhanVien: 'Nguyễn Văn A', luongCanBan: '1000' }
    }
});
