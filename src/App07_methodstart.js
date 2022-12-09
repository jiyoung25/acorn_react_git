//App07.js
//함수 기반으로 component를 만드는 방법

// 1번 방법
const App = () => {
    return(
        <div className="container">
            <h1>함수 기반 component</h1>

        </div>
    );
}

export default App;


/* 2번 방법
export default () => {
    return(
        <div className="container">
            <h1>함수 기반 component</h1>
        </div>
    );
};
*/

//2번은 주석을 풀었을때 경고가 엄ㅊ~ㅓㅇ 뜨므로 보통 1번을 사용한다.