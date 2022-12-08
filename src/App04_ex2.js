//App04_ex2.js

import { Component } from "react";

class App extends Component{
    state = {
        array : [],
        selectedList:[]
    }
    render(){
        let menu = [
            { id: 1, name: "김밥" },
            { id: 2, name: "라면" },
            { id: 3, name: "떡볶이" },
            { id: 4, name: "만두" },
            { id: 5, name: "우동" }
        ];

        //선택된 메뉴 목록을 업데이트하는 함수
        const updateList = (data) => {
            if(data.checked){
                this.state.array.push(data.name);
                console.log(this.state.array);
            } else{
                this.state.array = this.state.array.filter(item => item !== data.name );
                console.log(this.state.array);
            }

            this.state.selectedList = this.state.array.map((item, index)=>  <li key = {index}>{item}</li>);
            this.setState({
                selectedList:this.state.selectedList
            });
        };

        const newArray = menu.map((item) => { //item은 {id:x, name:x}의 object 이다.
            return (
                    <label key = {item.id} >
                        <input type="checkbox" value = {item.name} onChange={
                            (e) => {
                                const data = {
                                    checked: e.target.checked,
                                    name: e.target.value
                                }
                            updateList(data);
                            }
                        } />
                            {item.name}
                    </label>
            );
        });
        
        return(
            <div className="container">
                <h3>먹고 싶은 분식 메뉴를 체크하세요.</h3>
                {newArray}
                <h3>선택된 메뉴 목록입니다.</h3>
                <ul>
                    {this.state.selectedList}
                </ul>
            </div>
        );
    }
}

export default App;