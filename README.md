# Buổi 1_2: Component_databinding_handleEvent_state
+ <b>Component</b> <br>
--component là 1 thẻ do mình định nghĩa trong thẻ đó chứa các nội dung html do mình biên soạn. <br>
![image](https://user-images.githubusercontent.com/42485856/232502477-f7d783ab-a913-464b-b76f-076784659044.png)
![image](https://user-images.githubusercontent.com/42485856/232513558-df8be799-a23e-4d30-bc5c-479f3c15187b.png)
![image](https://user-images.githubusercontent.com/42485856/232513813-e068dc9a-8389-43c8-9b6e-dc3fd0cfe1b8.png)

--Cấu trúc files component <br>
![image](https://user-images.githubusercontent.com/42485856/232319945-5259da23-27e1-4679-a9ff-63f9469c68b9.png) <br>
![image](https://user-images.githubusercontent.com/42485856/232316710-c14ba10f-c486-4532-b240-d8adc80fc616.png) <br>

+ <b>databinding:</b> hai dấu '{}' gọi là databinding <br>
![image](https://user-images.githubusercontent.com/42485856/232319607-20ad3cb6-0348-40a5-aa31-f27dfd028e55.png) <br>

+ <b>handleEvent</b> <br>
![image](https://user-images.githubusercontent.com/42485856/232325824-d1f38d24-8dbe-40a3-81f4-26b579f2f390.png) <br><br>

+ <b>state, setState và rerender</b>
<p>
+ state: là thuộc tính của component để quản lý các biến thay đổi trên giao diện của 1 component <br>
+ Không được thay đổi state trực tiếp vì giao diện sẽ không render lại. <br>
+ this.setState: Là phương thức có sẵn của component. Dùng để thay đổi giá trị state, đồng thời làm giao diện render lại với giá trị state mới. <br>
+ this.setState : hàm này có 2 chức năng là gán lại giá trị mới cho stage và thay đổi trên giao diện --> gọi giao diện render lại. <br>
</p>

![image](https://user-images.githubusercontent.com/42485856/232519593-21ee2bcf-c09c-4863-ba11-c97c56de3216.png)


--Bt Page loggin <br>
![image](https://user-images.githubusercontent.com/42485856/232325610-0e426d1b-0893-4575-8333-d897d7df7bf2.png) <br><br>
--Btchọnxe <br>
![image](https://user-images.githubusercontent.com/42485856/232325548-fe4f582f-5a53-47ed-bec5-701fd98e616d.png) <br><br>
--Bt ChangeFontSize <br>
![image](https://user-images.githubusercontent.com/42485856/232327976-271d503d-230d-4266-9c62-ab519ec11873.png) <br><br>
--Bt DemoChangeColor <br>
![image](https://user-images.githubusercontent.com/42485856/232526833-5fa2a667-b40d-4d7e-a153-bd8d70d670b6.png) <br><br>
--Bt DemoPageLogin <br>
![image](https://user-images.githubusercontent.com/42485856/232703043-f85613c4-e60a-49f7-9eef-5fa2f98e040c.png)
![image](https://user-images.githubusercontent.com/42485856/232657238-30d1f919-6b61-48c6-8ad5-fa3bbf33dde0.png) <br><br>



![image](https://user-images.githubusercontent.com/42485856/232503459-415b0ae2-76e0-4cf1-ab14-28e3fa725977.png)
![image](https://user-images.githubusercontent.com/42485856/232504231-0bd26f94-8471-44cb-b0cb-d1d3b4b81935.png)
![image](https://user-images.githubusercontent.com/42485856/232508547-f6bf5751-9ed2-468d-b508-ff1419cfe5ad.png)
![image](https://user-images.githubusercontent.com/42485856/232948382-147ac905-fe6e-4f79-8c0b-10320f34ba2c.png)





# Buổi 3: react_renderWithMap_renderCondition_style
+ <b>style css:</b> <br>
![image](https://user-images.githubusercontent.com/42485856/232505628-00efaae9-6c35-491a-b4c0-103cb061cb2e.png)
```
-Cài thư viện để sử dụng sass
$ npm i node-sass sass-loader
hoặc
Cài đặt Dart Sass bằng lệnh "$ npm i sass". Sử dụng Dart Sass sẽ không cần cài thêm sass-loader, chỉ cần cài Dart Sart là nó tự compiler được.
```

--Có 3 cách sử dụng css: <br>
![image](https://user-images.githubusercontent.com/42485856/232504469-d6d21f14-3efd-46ec-909b-4af7bb34f9c8.png)
![image](https://user-images.githubusercontent.com/42485856/232515431-9142e0c8-ca4a-4919-af38-032b09592d0d.png)
![image](https://user-images.githubusercontent.com/42485856/232327529-13aabb13-5da6-4420-871b-97f18808ec8a.png)

+ <b>RenderWidthMap:</b> <br>
![image](https://user-images.githubusercontent.com/42485856/232656368-b77fd177-d6a8-46f5-ac9e-0dfb5ec713ea.png) <br>



# Buổi 4: Props
<ul>
    <li>
        Props là thuộc tính có sẵn của react class component (do kế thừa từ class Component) dùng để nhận giá trị từ component cha truyền vào (Component cha là nơi sử dụng thẻ). Props không thể gán lại giá trị mới.
        <br />
        Không thể dùng this.props.propName = 'Giá trị mới' => Sai cú pháp
    </li>
    <li>
        Props khác state ? 
        <p>
            Props và State đều là thuộc tính có sẵn của react class component để binding dữ liệu lên giao diện,
            Tuy nhiên: <br />
            + State : dùng để lưu các giá trị thay đổi trên chính component đó. State có thể được gán lại thông qua phương thức setState <br />
            + Props: dùng để chứa các giá trị từ component cha truyền vào. Props không thể gán lại giá trị.
        </p>
    </li>
</ul>

![image](https://user-images.githubusercontent.com/42485856/232710485-22bca63f-eaa7-4dff-9801-bf42e662f3f2.png) <br><br>


--BT DempProps
![image](https://user-images.githubusercontent.com/42485856/232713466-73b480dc-fa60-4a93-8838-77b13f717da5.png)
![image](https://user-images.githubusercontent.com/42485856/232714853-ad26b411-ebb5-49d1-be89-daaab579f7cf.png)
![image](https://user-images.githubusercontent.com/42485856/232760412-0a755891-f970-4e7b-becd-8d3601e3b033.png)
![image](https://user-images.githubusercontent.com/42485856/232792082-d3e9beca-5e80-4666-b63e-ed9cd5a41bae.png) <br><br>

--BT ProductList_shoes 
![image](https://user-images.githubusercontent.com/42485856/232823117-4311e9f4-5144-45e6-af0f-b22c16b07f88.png) <br><br>

--BT ProductDetail_phone <br>
![image](https://user-images.githubusercontent.com/42485856/233314329-fa10773e-55a4-40a4-ab19-e6bc5cca0edf.png)
```
1. Xây UI, hiển thị Danh sách sản phẩm, chi tiết sản phẩm
2. Dùng renderWidthMap ".map(phone)" để render ra Danh sách sản phẩm --> và đưa thông tin sản phẩm lên UI bằng {phone.hinhAnh}, {phone.tenSP}, {phone.giaBan}
3. Dùng state đặt mặc định thông tin 1 sản phẩm để hiện thị trên UI --> Đưa thông tin mặc định của 1 SP lên UI thông qua bóc tách ohần tử --> "let {maSP, tenSP,...} = this.state.spChiTiet;" --> "<p>{maSP}</p>"
4. Xử lý sự kiện setState khi nhấn nút "xem chi Tiết" và hiển thị chi tiết sản phẩm lên UI --> Đặt sự kiện onclik cho button --> Tạo hàm "xemChiTiet =(spClick) =>{ this.setStae({ spChiTiet: spClick }) }"
5. Tách phần Danh sách sản phẩm thành compoennt <Item phone={dienThoai} xemChiTiet={this.xemChiTiet} /> và truyền Props --> lấy Props bên Item --> let {phone, xemChiTiet} = this.props; --> onClick={() =>{xemChiTiet(phone)}}
```

# Buổi 5: Ôn tập Props và React router dom_p1
- **BT ProductDetail_phone tiếp theo** <br>
![image](https://user-images.githubusercontent.com/42485856/233352039-15ca84e2-a681-4af0-8e40-8fb156e13bd1.png)
```
6. Tạo component giỏ hàng <cart /> và xây dựng UI.
7. Xác định và đặt state thay đổi cho component giỏ hàng <Cart /> ở ProducDetail. Tạo arrayObject arrGioHang:[] trong state.
8. Truyền Props <Cart arrGioHang={this.state.arrGioHang} />  ---> tạo hàm renderGioHang = () =>{} ở <Cart />  --->  let {arrGioHang} = this.props; và databinfding thông số render ra UI table giỏ hàng
9. Truyền Props <Cart tangGiamSoLuong={this.tangGiamSoLuong} xoaSanpham={this.xoaSanpham} arrGioHang={this.state.arrGioHang} />  ---> renderGioHang = () =>{let {arrGioHang,xoaSanPham,tangGiamSoLuong} = this.props;}
10. Tạo hàm "themGioHang = (spClick) => {}" ở ProductDetail --> dùng ES6 gán thêm biến số lượng "spClick = {...spClick, soLuong:1}" ---> Nếu sp đã tồn tại thì tăng số lượng, nếu chưa thì cho vào mảng splick để render ra UI
11. Tạo hàm xoaSanpham = (maSP) =>{} ở ProductDetail --> truyền props xóa sản phầm vào <Cart xoaSanpham={this.xoaSanpham} arrGioHang={this.state.arrGioHang} /> --->  renderGioHang = () =>{let {arrGioHang,xoaSanPham,tangGiamSoLuong} = this.props;} ---> onClick={()=>{xoaSanPham(sp.maSP);}}
12. Tạo hàm tangGiamSoLuong = (maSP,soLuong) =>{} ---> truyền props <Cart tangGiamSoLuong={this.tangGiamSoLuong} xoaSanpham={this.xoaSanpham} arrGioHang={this.state.arrGioHang} /> ---> renderGioHang = () =>{let {arrGioHang,xoaSanPham,tangGiamSoLuong} = this.props;} ---> truyền onclick cho button tăng giảm.
```
![image](https://user-images.githubusercontent.com/42485856/232977465-7df836f3-5416-4282-ab16-7eb87133c6ae.png) <br><br><br>


# Routing React router dom Ver.6 <br>
![image](https://user-images.githubusercontent.com/42485856/233755569-fb43a4d1-3530-4054-b6ef-134ee138bc59.png) <br>
![image](https://user-images.githubusercontent.com/42485856/233355158-8f240e87-f379-44de-9a9e-6faf05401fb1.png)<br>
![image](https://user-images.githubusercontent.com/42485856/233358331-6e914aad-7d04-42ed-b7ba-5e72c025ab70.png)<br>

`Thẻ <navlink> dùng để chỉ  reload phần <main> khi refesh`
```
lệnh  cài thư viện
$ npm i react-router-dom

// Cấu hình react router dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
````
![image](https://user-images.githubusercontent.com/42485856/233406004-70b6d856-5229-4ffa-8ab9-ff81306b530c.png) <br><br>

# Buổi 6: React Form - Validation
`-- Thẻ <navigate> và <NavLink>` <br>
![image](https://user-images.githubusercontent.com/42485856/233759761-f0940a72-7397-42a8-b742-8cef4a1cb70d.png) <br>
![image](https://user-images.githubusercontent.com/42485856/233759559-54869a31-3722-4f7d-a11c-f108048f2ef8.png) <br><br>

-- <b>BT ReactFormDemo<b><br>
![image](https://user-images.githubusercontent.com/42485856/233755837-8b1105e0-2782-40e5-8b50-3cdd1f51d805.png) <br>
![image](https://user-images.githubusercontent.com/42485856/233582587-b8351c01-8e38-40a4-bd24-a119ec0afc15.png) <br><br>
![image](https://user-images.githubusercontent.com/42485856/233755925-c1af96da-f236-4a6c-a968-489e0f250614.png) <br><br>

# Buổi 7: React Form - Life Cycle - Validation 
![image](https://user-images.githubusercontent.com/42485856/233786306-3db32452-a977-4ecf-9768-7205e25032c1.png) <br>
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/28cc843b-1678-414c-bfa2-5b557fef2d83) <br>
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/8ff08013-646a-4079-9872-38bf41011e26) <br>
![image](https://user-images.githubusercontent.com/42485856/233784556-e448c8a1-3f0a-45d7-bbd0-93df5561157c.png) <br>
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/23db5886-09f5-4cb9-be8b-7341afbae855) <br><br>

    
# Buổi 8: Redux
```
Tham khảo thêm: https://viblo.asia/p/sau-2-nam-redux-da-thay-doi-qua-nhieu-924lJGmN5PM
    
Cài đặt thư viện 
$npm install @reduxjs/toolkit
$npm install react-redux
```
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/717a1100-0f61-4b3d-ae93-ccf68c905ae6)
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/7a81fa2e-3794-4632-93c1-fa48a45434cc)
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/bd33d4e9-6690-4b39-9edd-4e8a60cc48df)
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/8ea2e805-b048-4e3f-8986-594c4505d89a)
![ReduxDataFlowDiagram-](https://github.com/ductandev/React_training_bc43/assets/42485856/23d99f8f-aa0e-458c-9ad4-401b838af758)
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/18d62b95-126a-4b06-99e9-73abc256dfcf)
![ReduxDataFlowDiagram_1-](https://github.com/ductandev/React_training_bc43/assets/42485856/82f0ca9b-b6ae-4b69-bb15-b403e31e04d5)
<p> Middleware sẽ được dùng khi chúng ta muốn thực hiện các lời gọi bất đồng bộ trước khi cập nhật state. Hiện tại Redux có hỗ trợ middleware mặc định là Thunk, ko như phiên bản cách đây tầm 2 năm mình dùng, khi muốn thêm Thunk thì phải install package.
Về cơ bản thì kiến trúc và luồng hoạt động của Redux vẫn như vậy, không có gì thay đổi suốt vài năm qua.</p>
    
![image](https://user-images.githubusercontent.com/42485856/233815569-7ec2f9f8-ae2e-491e-a58c-7d0f7587992f.png)<br>

[--BT DemoTangGiamSoLuong]()
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/f3f14b53-7bfc-40bc-84a3-a4b5c73bcd8a) <br><br>
    
[--BT DemoBaiTapChonXe]()
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/dcebfe9a-9b24-4500-8498-30f11af981e7) <br><br>

[--BT DemoFormNhanVien]()
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/715298f7-0906-46ad-89eb-0f3321e38aee) <br><br>
    


# Buổi 9: Redux ôn tập
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/4beb70dd-19c9-4db9-9ad4-9227b2f14da1) <br>
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/bd4f8bcd-0759-490b-b10b-919d80095762)


    
# Buổi 10: Redux async action (call API trực tiếp && call API bằng redux)
[--Call API trực tiếp]()
![code](https://github.com/ductandev/React_training_bc43/assets/42485856/4c0bb386-8889-45a5-97b3-519776dd6d12)
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/1ca1d2f1-fa9f-45b1-801d-c3ee4286ce46) <br><br>
    
[--Call API Bằng Redux state]()
![code](https://github.com/ductandev/React_training_bc43/assets/42485856/2f2833c7-3038-4b0c-9036-3464b138e4f7) <br>
![code](https://github.com/ductandev/React_training_bc43/assets/42485856/cc86ed94-f9eb-43f9-b14d-4cb6ae5281fd) <br>
![image](https://github.com/ductandev/React_training_bc43/assets/42485856/1ca1d2f1-fa9f-45b1-801d-c3ee4286ce46) <br><br>





