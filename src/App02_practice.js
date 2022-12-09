import { Component } from "react";

class App02_practice extends Component{

    state={
        info:"x:0, y:0",
        info2:"x:0, y:0",
        msg:"msg:"
    }

    render(){
        let boxStyle = {
            border: "1px solid red",
            width: "100px",
            height: "100px",
            backgroundColor: "yellow"
        }

        return(
            <div className="container">
                <h3>이벤트 처리하기</h3>
                <div style={boxStyle} onMouseMove={(e)=>{
                    let info = `x:${e.clientX}, y:${e.clientY}`;
                    this.setState ({info: info});
                }}>
                    box1
                </div>
                <p>state info: {this.state.info}</p>

                <div style={boxStyle} onMouseMove={this.hadleMouseMove}>
                    box2
                </div>
                <p>state info2: {this.state.info2}</p>

                <div style={boxStyle} >
                    <p>{this.state.msg}</p>
                </div>
                <input type="text"/>
            </div>
        );
    }
    handleMouseMove = (e) => {
        let info = `x:${e.clientX}, y:${e.clientY}`;
        this.setState({info2:info});
    }
}

export default App02_practice;