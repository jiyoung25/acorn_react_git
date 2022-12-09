// components/FriendComponent.js

import { Component } from "react";

class FriendComponent extends Component{

    render(){
        let friends = this.props.friends;
        let list = friends.map((item, index) => {
            return (
                <li key = {index}>
                    {item}
                    <button type = "button" onClick={this.props.handleUpdate({
                        item:{item},
                        index:{index}
                    })}>수정</button>
                </li>
            )
        });
        return(
            <div className="container">
                <h1>친구 목록</h1>
                <ul>
                    {list} 
                </ul>
            </div>
        );
    }
}

export default FriendComponent;