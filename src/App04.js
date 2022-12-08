//App04.js

import {Component} from "react";
    
class App extends Component{
    state={
        isRun:false
    }
    render(){
        let isRun = false;const myName = "kim";
        const myP = <p>p2입니다.</p>

        return(
            <div className="container">
                <h1>jsx객체 활용하기</h1>
                {"kim"}
                <br />
                {myName}
                <br />
                <p>p1입니다.</p>
                {myP}
                {true? <p>달려요</p>:<p> 달리지 않아요.</p>}
                <h2>아래가 달려요인지 달리지 않아요인지 확인!</h2>
                {isRun? <p>달려요</p>:<p> 달리지 않아요.</p>}
                <h2>state 값 활용</h2>
                달리려면 체크 <input type="checkbox" checked = {this.state.isRun} onChange={this.handleChange} />
                {this.state.isRun? <p>달려요</p>:<p>달리지 않아요.</p>}
             </div>
        );
    }

    //체크박스에 체크 상태가 변했을 때 호출되는 함수
    handleChange = (e) => this.setState({isRun : e.target.checked});
    
}

export default App