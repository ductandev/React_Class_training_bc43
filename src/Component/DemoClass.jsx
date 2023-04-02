import React, { Component } from 'react';


export default class DemoClass extends Component {


    phuongThucA() {

    }

    //Phương thức hiển thị giao diện của component
    render() {


        //Nội dung component sẽ chứa trong 1 thẻ bất kì
        return (
            <div>
                <button className='btn btn-success'> Nội dung component </button>

                <div className="card text-left">
                    <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>

            </div>
        )
    }
}