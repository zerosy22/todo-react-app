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
    // this.state.item = {id:0, "title":"Hello React", "done":true}
    // App.js 에 this.state.item 이라는 이름으로 데이터를 생성
    // ToDo 에게 item 이라는 이름으로 데이터를 전달
    // 3개의 객체를 가진 배열을 생성
    this.state = {items:[{id:0, "title":"react", "done":true},
                         {id:1, "title":"vue", "done":true},
                         {id:2, "title":"angular", "done":true}]
                 }
  }

  render(){
    // 배열을 순회하면서 출력할 내용을 생성
    // item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스
    // 배열을 순회하면서 출력물을 만들 때는 key를 설정해주어야 합니다.
    // key를 설정하지 않으면 출력에는 문제가 없지만 콘솔에 에러가 출력됩니다.
    // javascript 변수 선언 중 아무것도 안 붙이면 전역 변수/ 
    // var을 붙이면 만들기 전에도 사용 가능 let을 붙이면 만들기 전에는 사용 불가능. let이 최근의 방식
    // const 는 상수
    var display = this.state.items.length > 0 && (  // 데이터가 없으면 안 하겠다.
      <Paper styple={{margin:16}}>
        <List>
          {this.state.items.map((item, idx) => (
            // <ToDo item={item} id={item.id}/>
            <ToDo item={item} id={idx}/>
            // <ToDo item={item} key={idx}/>
            // 둘이 같다
          ))}
        </List>
      </Paper>
    )

    return(
      <div className="App">
        <Container maxWidth="md">
          <AddToDo />
          {display}
        </Container>
      </div>
    )
  }
  
}

export default App;
