import logo from './logo.svg';
import './App.css';

import React from 'react';
import ToDo from "./ToDo";
import AddToDo from './AddToDo';

import {Paper, List, Container} from "@material-ui/core"

import Sample from './Sample';

// import 클래스이름(export 한 것) from 파일이름 - 이름 맞추면 편해요
// ./ 안 써도 되는 데 파일이름인 것을 강조하기 위해서

class App extends React.Component {
  // 데이터를 만들기 위한 생성자
  constructor(props){
    super(props)
    // App.js 에 this.state.item 이라는 이름으로 데이터를 생성
    this.state = {items:[]}
  }


  // 화면이 보여질 때 마다 호출되는 수명주기 함수
  componentDidMount(){
    // ajax 요청 객체 생성
    let request = new XMLHttpRequest();
    // 요청 준비
    request.open('GET', "http://127.0.0.1/todo/?userid=adam3");
    // 요청
    request.send('');
    // 응답 처리
    request.addEventListener('load', () => {
      // json 데이터 출력
      // console.log(request.responseText)

      // JSON 문자열을 데이터로 변환 parsing
      let data = JSON.parse(request.responseText);
      console.log(data)
      // 서버에서 받아온 데이터를 state에 대입해서 화면에 출력
      this.setState({items:data.list})
    })
  }


  // 데이터를 추가하는 함수
  add = (item) => {
    // 배열에 데이터를 추가하기 위해서 state의 배열을 복사
    const thisItems = this.state.items;

    // item의 id와 done 값을 설정 - title만 입력하기 때문
    item.id = "ID_" + thisItems.length;
    item.done = false;

    // 복사한 데이터에 데이터를 추가
    thisItems.push(item)
    // 복사한 데이터를 다시 state에 적용
    this.setState({items:thisItems});
  }


  // 삭제를 위한 메서드
  delete = (item) => {  // delete(이름), item(매개변수)
    // state나 props의 데이터는 직접 편집이 안됩니다.
    const thisItems = this.state.items;   // 복사

    // 복사본에서 item을 제거
    const newItems = thisItems.filter((e) => e.id !== item.id);
    
    // 원본에 다시 복사
    this.setState({items:newItems})
  }


  render(){
    var display = this.state.items.length > 0 && (  // 데이터가 없으면 안 하겠다.
      <Paper styple={{margin:16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <ToDo item={item} key={idx} delete={this.delete} />
            
          ))}
        </List>
      </Paper>
    )

    return(
      <div className="App">
        <Container maxWidth="md">
          <AddToDo add={this.add}/>   {/* add메서드를 AddToDo에 넘겨줌 */}
          {display}
        </Container>
      </div>
    )
  }
  
}

export default App;
