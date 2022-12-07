//App.js - 함수로 만들기

//boot strap css로딩하기
 // 방법1: index.html에 부트스트랩 css외부링크를 단다.
 // 방법2: bootstrap 폴더를 다운받아 여기서 import한다.

function App() {
  
  let myName = "김구라";
  return (
    <div className='container'>
      <h1>인덱스 페이지입니다.</h1>
      {/* myName이라는 변수 안에 있는 내용 사용하기 */}
      <p>내 이름은 <strong>{myName}</strong></p>
      <button className='btn btn-primary'>눌러보셈</button>
    </div>
  );
}

export default App;
