//App03_ex3.js

import FriendComponent from "./components/FriendComponent";
import { Component } from "react";

class App extends Component{
    state={
        friends:["김구라","해골","원숭이"]
    }
    render(){

        return(
            <div className="container">
                <h1>자식 component 사용하기 예제</h1>
                <FriendComponent
                    friends = {this.state.friends}
                    deleteClicked = {this.deleteClicked}
                    updateClicked = {this.updateClicked}
                />
            </div>
        );
    }
    deleteClicked = (idx) => {
        console.log(idx+"번방 아이템을 삭제합니다.");
         let newArray = this.state.friends.filter( (item, index) => {
            return index !== idx;
        } );
        this.setState({friends:newArray});
    }
    updateClicked = (data) => {
        //data는 {index:xxx, newName:xxx} 모양의 object이다.
        console.log(data.index+"번 방 아이템을 수정합니다.");
        console.log("새 이름"+data.newName);
        //let newArray = this.state.friends.map((item,index)=> {data.index === index ? data.newName : item}); 람다식에서 중괄호 넣으면 오류난다.
        let newArray = this.state.friends.map((item, index) => data.index === index ? data.newName : item);
        this.setState({friends:newArray});
        //this.state.friends.splice(data.index, 1, data.newName);
        //this.setState({friends:this.state.friends});
    }
}

export default App;