//App.js class로 만들기

//boot strap css로딩하기
 // 방법1: index.html에 부트스트랩 css외부링크를 단다.
 // 방법2: bootstrap 폴더를 다운받아 여기서 import한다.

import { Component } from "react";

//class형 component 만들기
class App extends Component{

  //render() 메소드에서 리턴해주는 jsx 를 활용해서 화면이 구성된다.
  render(){

    let myName ="김구라";
    return(
      <div className="container">
      <h1>인덱스 페이지입니다.</h1>
      {/* myName이라는 변수 안에 있는 내용 사용하기 */}
      <p>내 이름은 <strong>{myName}</strong></p>
      {/*
      [이벤트 처리]

      onEventName = {화살표 함수}

      처럼 on 다음에 이벤트 명을 camel case로 작성한다.
      화살표 함수는 해당 이벤트가 발생하면 자동으로 호출된다.
      ex) onClick, onMouseOver, onChange, onInput, onKeyDown, onFocus...
      */}
      <button className='btn btn-primary' onClick={()=>{
        alert("눌렀다.");
      }}>눌러보셈</button>
      </div>
    );
  }
}

export default App;
