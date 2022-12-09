// App06.js

import { Component } from "react";

class App extends Component{

    state = {
        msg: ""
    }
    render(){
        return(
            <div className="container">
                <h1> form 요소들 사용해보기 </h1>
                {/* form 안에 있는 submit버튼을 누르면 submit event가 발생한다. */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="msg">메시지 입력</label>
                    <input type="text" id = "msg" onChange={ (e) => {
                        this.setState({
                            msg:e.target.value
                        })
                    } } value = { this.state.msg } />
                    <button type = "submit">전송</button>
                </form>
                <p>현재 입력한 내용: <strong>{this.state.msg}</strong></p>
            </div>
        );
    }

    //form에 submit event가 발생하면 호출되는 함수
    handleSubmit = (e) => {
        e.preventDefault(); //form의 제출을 막음
        alert(this.state.msg+"를 전송합니다.");
    }
}

export default App;