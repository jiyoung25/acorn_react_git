// components/FriendComponent.js

import { Component } from "react";

class FriendComponent extends Component{
    render(){
        //부모 component에서 전달된 props
        const friends = this.props.friends;
        //배열에 저장된 아이템을 이용하여 jsx배열을 얻어낸다.
        const list = friends.map((item, index) => {
            return (<li key={index}>
                {item}
                <button onClick={ () => {
                    let newName = prompt(item+"의 새로운 이름을 입력하세요.");
                    //props로 전달된 updateClicked라는 함수를 호출하면서 수정할 index와 새 이름 전달하기
                    this.props.updateClicked({newName, index}); //object 형태로 전달 ({"newName":newName, "index":index})
                } }>수정</button>
                <button onClick={ () => {
                    //props로 전달된 deleteClicked라는 함수를 호출하면서 index값 전달하기
                    this.props.deleteClicked(index);
                    } }>삭제</button>
                </li>
            );
        })

        return(
            <ul>
                {list}
            </ul>
        );
    }
}

export default FriendComponent; //중요! 이 component를 import하면 FriendComponent(이 파일에서의 class)를 사용한다고 선언하는거임!