import React, { Component } from 'react'
import Item from './Item'
import Cart from './Cart'

const dataPhone = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg"},
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]


export default class ProductDetail extends Component {

    state = {
        spChiTiet: { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" },

        arrGioHang: [
            // Cái gì tính toán đc = cộng, trừ, nhân, chia, thì sẽ ko lưu trữ trong biến
            { maSP: 3, tenSP: "Iphone XS Max", giaBan: 27000000, hinhAnh: "./img/applephone.jpg", soLuong: 2 },
        ]
    }


    tangGiamSoLuong = (maSP,soLuong) =>{
        console.log(maSP,soLuong)
        // Tìm ra sản phẩm được click dựa vào mã
        let spGH = this.state.arrGioHang.find(item => item.maSP === maSP );
        if(spGH){
            spGH.soLuong += soLuong;

            if(spGH.soLuong < 1){
                if(window.confirm('Bạn có muốn xóa không')){
                    this.xoaSanpham(spGH.maSP);
                }else {
                    spGH.soLuong -= soLuong;
                }
            }
        }

        // cập nhật state
        this.setState({
            arrGioHang: this.state.arrGioHang,
        })
    }


    xoaSanpham = (maSP) =>{
        // Dựa vào mã tìm ra index của sản phẩm cần xóa trong arrGioHang
        let index = this.state.arrGioHang.findIndex(item => item.maSP === maSP);
        if(index !== -1){
            this.state.arrGioHang.splice(index,1);
        }

        // setStae để giao diện render lại
        this.setState({
            arrGioHang: this.state.arrGioHang,
        })
    }

    /* State đặt ở component nào thì hàm setState viết ở component đó */
     themGioHang = (spClick) => {
        spClick = {...spClick, soLuong:1}
        /* Kiểm tra sản phẩm đã có trong array giỏ hàng hay chưa ? Nếu có thì lấy ra tăng số lượng.Chưa có thì push vào.*/ 
        let gioHang = this.state.arrGioHang;
        let spGH = gioHang.find(item => item.maSP === spClick.maSP)
        if(spGH){
            spGH.soLuong += 1;
        }else{
            gioHang.push(spClick);
        }
        // Gán lại setState = state mới  
        this.setState({
            arrGioHang: gioHang
        })
     }

    renderProduct = () => {
        // let arrJSX
        // return arrJSX
        // -----------------------------------------------------------------
        // Viết trả trực tiếp return luôn cho nó ngắn thay vì phải viết như trên
        return dataPhone.map((dienThoai) => {
            return <div className='col-md-4 mt-2' key={dienThoai.maSP}>
                {/* xemChiTiet: call back function, truyền dưới dạng tham số */}
                <Item  themGioHang={this.themGioHang}  phone={dienThoai}  xemChiTiet={this.xemChiTiet} />   
            </div>
        })
    }

    xemChiTiet = (spClick) => {
        console.log(spClick);
        this.setState({
            spChiTiet: spClick
        })
    }

    render() {
        // Sử dụng bóc tách phần tử
        let { maSP, tenSP, hinhAnh, heDieuHanh, ram, rom, cameraSau, cameraTruoc, giaBan, manHinh } = this.state.spChiTiet;


        return (
            <div className='container'>
                <h3>Giỏ hàng</h3>
                <Cart tangGiamSoLuong={this.tangGiamSoLuong} xoaSanpham={this.xoaSanpham} arrGioHang={this.state.arrGioHang} />
                <h3>Danh sách sản phẩm</h3>
                <div className='row'>
                    {this.renderProduct()}
                </div> 
                <br />
                <br />
                <div className='row' style={{ minHeight: 400 }}>
                    <div className='col-3'>
                        <h3 className='text-center'>{tenSP}</h3>
                        <img src={hinhAnh} alt='...' className='w-100' />
                    </div>
                    <div className='col-9'>
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
