import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
            obLike: {
                like: 1
            }
        }

        console.log('constructor');
    }

    // Hàm này dùng để thay đổi State trước khi render
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null

        // return {
        //     number: 2
        // };

    }

    // tự chạy sau getDerivedStateFromProps và trước render => chạy khi props hoặc state thay đổi. Lifecycle này trả về giá trị true hoặc false (true cho phép component render lại false => không render) thường dùng thay thế cho pureComponent.
    shouldComponentUpdate() {
        return true;
    }

    // Hàm render dữ liệu ra giao diện.
    render() {
        console.log('render');
        return (
            <div className='container'>
                Component life cycle:
                <h3>Number: {this.state.number}</h3>
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
                <Child obLike={this.state.obLike} />

                <i onClick={() => {
                    let newObLike = this.state.obLike;
                    newObLike.like += 1;

                    this.setState({
                        obLike: { ...newObLike }
                    })
                }} className='fa fa-heart text-danger display-4' style={{ cursor: 'pointer' }}></i>
            </div>
        )
    }

    timeout = {}
    // Hàm thực thi sau hàm render. Thường dùng để các hàm ajax DOM, hoặc update state khi được thực thi.
    componentDidMount() {
        this.timeout = setInterval(() => {
            console.log('server response');

        }, 1000);

        //CALL API tại đây
        console.log('componentDidMount chỉ chạy 1 lần sau render')
    }


    // Thực thi sau khi render nhận vào prop cũ trước render và state cũ trước khi render thương sử dụng để gán props vào state.
    componentDidUpdate(prevProps, prevState) {
        //Tuyệt đối không setState khi không có điều kiện --> vì nó sẽ tạo thành vòng lặp vô tận(infinitive)
        // this.setState({
        //     number:this.state.number + 1
        // })
        console.log('componentDidUpdate chạy sau render mỗi lần state hoặc props thay đổi');
    }

    // Dùng để bắt log component bị lỗi
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    componentWillUnmount() {
        //clear đi các hàm chạy ngầm của component trước khi component mất khỏi giao diện
        clearInterval(this.timeout);

    }

}


