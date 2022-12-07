//App03_es1.js[]

import {Component } from "react"

class App extends Component{
    state = {
        index:0,
        msgs:[]
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
                //this.state.msgs.push(<li>msg</li>); -> msgs객체에 추가만 될 뿐 ui가 알아서 업데이트 되지는 않는다.

                //setState를 이용해 출력해야 한다.
                let newArray = this.state.msgs.concat(<li key={this.state.index}>{msg}</li>);
                this.setState({
                    index:this.state.index+1,
                    msgs:newArray
                });
                e.target.value = "";
             }
        }
}

export default App;