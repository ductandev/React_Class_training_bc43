## Buổi 1_2: component_databinding_handleEvent_state
+ <b>Component</b> <br>
--component là 1 thẻ do mình định nghĩa trong thẻ đó chứa các nội dung html do mình biên soạn.
![image](https://user-images.githubusercontent.com/42485856/232502477-f7d783ab-a913-464b-b76f-076784659044.png)

![image](https://user-images.githubusercontent.com/42485856/232319945-5259da23-27e1-4679-a9ff-63f9469c68b9.png) <br>
![image](https://user-images.githubusercontent.com/42485856/232316710-c14ba10f-c486-4532-b240-d8adc80fc616.png) <br>

+ <b>databinding:</b> hai dấu '{}' gọi là databinding <br>
![image](https://user-images.githubusercontent.com/42485856/232319607-20ad3cb6-0348-40a5-aa31-f27dfd028e55.png) <br>

+ <b>handleEvent</b> <br>
![image](https://user-images.githubusercontent.com/42485856/232325824-d1f38d24-8dbe-40a3-81f4-26b579f2f390.png) <br><br>

+ <b>state, setState và rerender</b> <br>
<p>
+ state: là thuộc tính của component để quản lý các biến thay đổi trên giao diện của 1 component <br>
+ Không được thay đổi state trực tiếp vì giao diện sẽ không render lại. <br>
+ this.setState: Là phương thức có sẵn của component. Dùng để thay đổi giá trị state, đồng thời làm giao diện render lại với giá trị state mới. <br>
+ this.setState : hàm này có 2 chức năng là gán lại giá trị mới cho stage và thay đổi trên giao diện --> gọi giao diện render lại. <br>
</p>


 --page loggin <br>
![image](https://user-images.githubusercontent.com/42485856/232325610-0e426d1b-0893-4575-8333-d897d7df7bf2.png) <br><br>
 --Btchọnxe <br>
![image](https://user-images.githubusercontent.com/42485856/232325548-fe4f582f-5a53-47ed-bec5-701fd98e616d.png) <br><br>
 --Bt ChangeFontSize <br>
![image](https://user-images.githubusercontent.com/42485856/232327976-271d503d-230d-4266-9c62-ab519ec11873.png) <br>
![image](https://user-images.githubusercontent.com/42485856/232503459-415b0ae2-76e0-4cf1-ab14-28e3fa725977.png)
![image](https://user-images.githubusercontent.com/42485856/232504231-0bd26f94-8471-44cb-b0cb-d1d3b4b81935.png)
![image](https://user-images.githubusercontent.com/42485856/232508547-f6bf5751-9ed2-468d-b508-ff1419cfe5ad.png)
![image](https://user-images.githubusercontent.com/42485856/232505361-cc69e513-68ea-4e7a-ba2d-a37c583059b3.png)




## Buổi 3: react_renderWithMap_renderCondition_style
+ <b>style css</b> <br>
![image](https://user-images.githubusercontent.com/42485856/232505628-00efaae9-6c35-491a-b4c0-103cb061cb2e.png)

--Có 3 cách sử dụng css:
![image](https://user-images.githubusercontent.com/42485856/232504469-d6d21f14-3efd-46ec-909b-4af7bb34f9c8.png)
![image](https://user-images.githubusercontent.com/42485856/232327529-13aabb13-5da6-4420-871b-97f18808ec8a.png)




## Buổi 4: Props
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

## buoi5_on_tap_prop_react_router_dom_p1
