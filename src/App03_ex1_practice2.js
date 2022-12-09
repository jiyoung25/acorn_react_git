//App03_es1.js[]

import {Component } from "react"

class App extends Component{
    state = {
        msgs:[],
        index:0
    }

    render(){
        return(
            <div className="container">
                <h1>문서 객체를 동적으로만들기</h1>
                <input type="text" onKeyUp={this.handleKeyUp} />
                <ul>
                    {this.state.msgs}
                </ul>
            </div>
        );
    }
        //input요소에 입력할 때마다 호출되는 함수
        handleKeyUp = (e) => {
             console.log(e);
             if(e.keyCode===13){
                let msg = e.target.value;
                let newArray = this.state.msgs.concat(<li key = {this.state.index}>{msg}</li>);
                console.log(this.state.msgs);
                this.setState({
                    msgs:newArray,
                    index: this.state.index + 1
                });
                e.target.value = "";
                e.target.focus();
             }
        }
}

export default App;