import React, { Component } from "react";
import CreateProduct from "./CreateProduct";

export default class ReactFormDemo extends Component {


    state = {
        arrProduct: [
            { idProduct: '01', name: 'Iphone X', price: 1000, type: 'Phone', img: 'https://i.pravatar.cc?u=1', desc: 'Điện thoại iphonex' },
            { idProduct: '02', name: 'Iphone XS', price: 2000, type: 'Phone', img: 'https://i.pravatar.cc?u=2', desc: 'Điện thoại iphonexs' },
        ],
        productEdit: {
            idProduct: '',
            name: '',
            price: 0,
            type: '',
            img: '',
            desc: ''
        }
    }

    // Hàm render ra danh sách lên UI
    addProduct = (prodInfo) => {
        console.log(prodInfo);
        this.state.arrProduct.push(prodInfo)
        this.setState({
            arrProduct: this.state.arrProduct,
        })
    };


    delProduct = (idProductDel) => {
        console.log(idProductDel)
        let indexDel = this.state.arrProduct.findIndex(prod => prod.idProduct === idProductDel);
        if (indexDel !== -1) {
            this.state.arrProduct.splice(indexDel, 1);
        }
        //Cuối cùng setState
        this.setState({
            arrProduct: this.state.arrProduct   // gán lại array mới để render lại
        })
    }

    updateProduct = (newProduct) => {
        let prod = this.state.arrProduct.find(prod => prod.idProduct == newProduct.idProduct);
        if (prod) {
            for (let key in prod) {
                prod[key] = newProduct[key];
            }
        }
        //Set State sau khi cập nhật
        this.setState({
            arrProduct: this.state.arrProduct
        })
    }

    render() {
        return (
            <div className="container">
                <CreateProduct updateProduct={this.updateProduct} productEdit={this.state.productEdit} addProduct={this.addProduct} />


                <table className="table mt-2">
                    <thead className="bg-dark text-white fw-bold">
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>price</th>
                            <th>type</th>
                            <th>desc</th>
                            <th></th>
                        </tr>
                    </thead>

                    {/* LOAD CÁC PHẦN TỬ arrProduct LÊN UI */}
                    <tbody>
                        {this.state.arrProduct.map((prod) => {
                            return <tr key={prod.idProduct}>
                                <td>{prod.idProduct}</td>
                                <td>{prod.name}</td>
                                <td><img src={prod.img} width={50} height={50} alt={prod.name} /></td>
                                <td>{prod.price}</td>
                                <td>{prod.type}</td>
                                <td>{prod.desc}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={() => {
                                        this.setState({
                                            productEdit: prod
                                        })
                                    }}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => {
                                        this.delProduct(prod.idProduct);
                                    }}>Del</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
