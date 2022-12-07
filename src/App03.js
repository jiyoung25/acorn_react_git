//App03.js for문

import {Component} from 'react';

class App03 extends Component{
    render(){
        /*
            배열에 jsx객체를 여러개 넣기
        */
        const names = [];
        names.push(<li key={0}>김구라</li>);
        names.push(<li key={1}>해골</li>);
        names.push(<li key={2}>원숭이</li>);

        // jsx객체를 만들어낼 아이템이 배열에 준비되어 있다고 가정하자.
        const animals=["강아지", "코끼리", "고양이"];
        //우리가 만들어낼 jsx객체를 저장할 빈 배열을 만든다.
        const result = [];
        for(let i=0; i<animals.length; i++){
            //동물 이름이 출력된 jsx객체를 만들어서
            let tmp = <li key = {i}>{animals[i]}</li>;
            //미리 준비된 배열에 누적시키기
            result.push(tmp);
        }

        //배열의 map() 함수를 활용해서 jsx객체가 들어있는 새로운 배열을 얻어내기
        const lunch = ["김밥","떡볶이","순대"];
        const result2 = lunch.map((item, index)=>{
            return <li key={index}>{item}</li>
        });

        return(
            <div className='container'>
                <h2>반복문을 돌면서 문서 객체 만들기</h2>
                <h3>1. names</h3>
                <ul>
                    {names} {/* 알아서 배열 돌면서 만들어줌 */}
                </ul>
                <h3>2. animals</h3>
                <ul>
                    {result}
                </ul>
                <h3>lunch</h3>
                <ul>
                    {result2}
                </ul>
            </div>
        );
    }
}

export default App03