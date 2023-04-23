import React, { Component } from 'react'
import ReactFormDemo from './ReactFormDemo';

export default class CreateProduct extends Component {

    state = {
        values: {
            idProduct: '',
            name: '',
            price: '',
            img: '',
            type: 'phone',
            desc: ''
        },
        errors: {
            idProduct: '(*)',
            name: '(*)',
            price: '(*)',
            img: '(*)',
            desc: '(*)'
        }
    }

     

    // Hàm gọi sự kiện khi nhấn button Create
    handleSubmit = (e) => {
        e.preventDefault();  // chặn sự kiện reload trang 
        //Kiểm tra nếu this.state.values hợp lệ thì mới addproduct
        //Duyệt this.state.errors
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '') {
                alert('Dữ liệu nhập chưa hợp lệ');
                return;
            }
        }

        // CAll API ...
        console.log(this.state.values)
        let { addProduct } = this.props;

        // -----VALIDATION TRƯỚC KHI THÊM---------
        // Gửi đi dữ liệu nhập vào trên form input
        addProduct(this.state.values);
    }





    handleChangeInput = (e) => {
        let { value, id } = e.target;  //e.target: chính là thẻ input đang diễn ra sự kiện oninput
        let dataType = e.target.getAttribute('data-type');
        let minLength = e.target.getAttribute('data-minlength');
        let maxLength = e.target.getAttribute('data-maxlength');


        // ------**XỬ LÝ this.state.values**------
        let newValue = { ...this.state.values }; //{...this.state.values}: lấy hết tất cả thuộc tính của state.values
        newValue[id] = value;

        // ------**XỬ LÝ Error - this.state.errors**---------
        let newError = { ...this.state.errors }
        let messError = '';
        if (value.trim() === '') {
            messError = id + ' không được bỏ trống !';
        } else {
            // VALIDATION - datatype
            if (dataType) {
                switch (dataType) {
                    case 'number': {
                        let regexNumber = /^\d+$/;
                        if (!regexNumber.test(value)) {
                            messError = id + ' phải là số !'
                        }; break;
                    }
                    case 'string': {
                        let regexString = /^[a-z A-Z0-9]+$/;
                        if (!regexString.test(value)) {
                            messError = id + ' phải là ký tự !'
                        }; break;
                    }

                }
            }
        }
        newError[id] = messError;
        // --------------------------------------------------
        // CẬP NHẬT LẠI state của VALUE và ERROR sau khi xử lý
        this.setState({
            values: newValue,
            errors: newError
        }, () => {
            console.log(this.state)
        })
    }


    //Can thiệp trước khi props mới truyền vào và render ra giao diện thì đem props gắn vào state 
    // static getDerivedStateFromProps(newProps,currentState) {
    //     if(newProps.productEdit.idProduct !== currentState.values.idProduct) {
    //         //Bấm sửa
    //         currentState.values = {...newProps.productEdit}
    //         return currentState;
    //     }
    //     return null;
    //   }

    //Chỉ chạy khi props thay đổi và trước khi render (thường dùng cho việc gán props vào state )
    componentWillReceiveProps(newProps) {
        this.setState({
            values: newProps.productEdit
        })
    }




    render() {
        // Bóc tách phần tử của productEdit
        let { idProduct, name, price, img, type, desc } = this.state.values;

        return (
            <form className='card' onSubmit={(this.handleSubmit)}>
                <div className="card-header bg-dark text-white">ProductInfo</div>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Id</p>
                                <input data-type="number" className='form-control' id="idProduct" name="idProduct" onInput={this.handleChangeInput} value={idProduct} />
                                <p className='text text-danger'>{this.state.errors.idProduct}</p>
                            </div>
                            <div className='form-group'>
                                <p>name</p>
                                <input data-type="string" className='form-control' id="name" name="name" onInput={this.handleChangeInput} value={name} />
                                <p className='text text-danger'>{this.state.errors.name}</p>
                            </div>
                            <div className='form-group'>
                                <p>price</p>
                                <input data-type="number" className='form-control' id="price" name='price' onInput={this.handleChangeInput} value={price} />
                                <p className='text text-danger'>{this.state.errors.price}</p>
                            </div>
                        </div> 
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>img</p>
                                <input className='form-control' id="img" name='img' onInput={this.handleChangeInput} value={img} />
                                <p className='text text-danger'>{this.state.errors.img}</p>
                            </div>
                            <div className='form-group'>
                                <p>type</p>
                                <select id="type" name='type' className='form-control' onInput={this.handleChangeInput}  value={type}>
                                    <option value="phone">Phone</option>
                                    <option value="tablet">Tablet</option>
                                    <option value="laptop">Laptop</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <p>desc</p>
                                <input data-minlength='6' data-maxlength='32' className='form-control' id="desc" name='desc' onInput={this.handleChangeInput} value={desc} />
                                <p className='text text-danger'>{this.state.errors.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success' type='submit'>Create</button>
                    <button className='btn btn-success' type='button' onClick={()=>{
                        //Lấy hàm update state từ component cha truyền vào
                        let{updateProduct} = this.props;
                        //Gửi ra dữ liệu sau khi thay đổi product
                        updateProduct({...this.state.values});
                        
                    }}>Update</button>
                </div>
            </form>
        )
    }
}
