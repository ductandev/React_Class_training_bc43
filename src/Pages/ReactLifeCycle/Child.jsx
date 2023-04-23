import React, { Component, PureComponent } from 'react'

/*
  PureComponent là 1 class tương tự Component tuy nhiên sẽ không có lifeCycle shouldComponentUpdate.
  Thay vào đó PureComponent sẽ tự nhận biết props khi có thay đổi thì sẽ render, còn không thay đổi thì không render.
  Tuy nhiên sự so sánh props có thay đổi hay không chỉ là shallow compare (so sánh được những giá trị primitive value string,boolean,number, undefined, null).

*/


export default class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }

    console.log('constructor child');
  }
  static getDerivedStateFromProps(newProps,currentState) {
    console.log('getDerivedStateFromProps child');
    return null;
  }

  // shouldComponentUpdate(newProps,newState) {
  //   console.log('this.props.like',this.props.like);
  //   console.log('newProps.like',newProps.like);
  //   if(newProps.like !== this.props.like) {
  //       return true;
  //   }
  //   return false;
  // }

  render() {
    console.log('child + 20 component con');
    let {obLike} = this.props;
    return (
      <div className='bg-dark text-white p-3 display-4 mt-2'>
        Child: render 
        <br />
        Render 20 component con
        <br />
        {obLike.like} <i className='fa fa-heart text-white'></i>
      </div>
    )
  }
  
  componentDidMount(){
    console.log('componentDidMount child')
  }

  componentDidUpdate() {
    //Tuyệt đối không setState khi không có điều kiện
    console.log('componentDidUpdate child');
  }


  
}
