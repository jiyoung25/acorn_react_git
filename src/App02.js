//App02.js onMouseMove이벤트를 사용하면서 state사용법 익히기

import{Component} from "react";

class App02 extends Component{
    //상태값 state 정의하기
    state = {
        info:"x:0, y:0",
        info2:"x:0, y:0"
    };

    setState

    render(){

        const boxStyle={
            width:"100px",
            height:"100px",
            border:"1px solid red",
            backgroundColor:"yellow"
          };

        return(
            <div className="container">
                <h3>마우스 이벤트 처리</h3>
                {/*
                    이벤트 리스너 함수에 전달되는 이벤트 객체는 react가 넣어주는 이벤트 객체이다.
                    original이벤트 객체를 사용하고 싶다면 (e.nativeEvent)를 사용하면 된다.
                */}
                <div style={boxStyle} onMouseMove={(e)=>{
                    console.log(e);
                    //마우스의 좌표를 이용해서 문자열을 만들어낸 다음
                    let info=`x:${e.clientX}, y:${e.clientY}`
                    //state를 update한다. (state를 사용하는 UI는 자동으로 update된다.)
                    this.setState({info:info});
                }}>
                </div>
                {/* state값을 활용해서 x,y좌표 출력하기 */}
                <p>state info: {this.state.info}</p>

                {/* 이벤트 처리를 할 메소드를 만들어놓고 이벤트 리스너 함수로 등록하기 */}
                <div style={boxStyle} onMouseMove={this.handleMouseMove}>
                </div>
                <p>state info2: {this.state.info2}</p>
            </div>
        );
    } //여기까지 render();
    //여기는 class의 field

    //mosemove이벤트를 처리할 함수 (App2 Component를 참조하게 하기 위해 화살표 함수로 만든다.)
    handleMouseMove = (e) => {
        //마우스의 좌표를 이용해서 문자열을 만들어낸 다음
        let info=`x:${e.clientX}, y:${e.clientY}`
        //state를 update한다. (state를 사용하는 UI는 자동으로 update된다.)
        //여기서 this가 App2 Component를 참조하게 하려면 이 함수는 화살표 함수로 만들어져 있어야 한다.
        this.setState({info2:info});
    }

} //여기까지 class App02

export default App02;