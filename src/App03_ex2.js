import {Component} from "react";

class App extends Component{
    state={
        index:0,
        msgs:[]
    }
    render(){
        
        return(
            <div className="container">
                <h1>동적으로 문서객체 만들기2</h1>
                {/*
                    input 요소가 초기화되는 시점에 ref={함수} 안에 있는 함수가 호출되면서
                    input요소의 참조값이 함수의 매개변수에 전달된다.
                    매개변수에 전달된 값을 필드에 저장하면 추후에 필요한 시점에 사용할 수 있다.
                */}
                <input type="text" placeholder="메시지 입력" ref={(ref)=>{
                    console.log(ref);
                    //ref에 담긴 참조값을 inputText라는 이름의 필드에 저장하기
                    this.inputText=ref; 
                }} />
                <button onClick={this.handleClick}>전송</button>
                <ul>
                    {this.state.msgs}
                </ul>
            </div>
        );
    }
    handleClick = (e) => {
        let msg = this.inputText.value;
        this.setState({
            msgs:this.state.msgs.concat(<li key={this.state.index}>{msg}</li>),
            index: this.state.index +1
        });
        this.inputText.value = "";
    }
}

export default App;