import React from "react";

import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox
} from "@material-ui/core"

// react 에서 컴포넌트 클래스를 만들기 위해서 Component로 부터 상속을 받기
class ToDo extends React.Component {
    // 생성자
    constructor(props){
        // App.js 에서 넘겨준 속성들을 자신의 props 에 저장
        // this.props.item 이라는 속성에 앞에서 전달한 데이터를 저장
        super(props);   // 상위 클래스에서 넘겨준 모든 props를 현재 클래스에 저장
        
        // state 생성
        // item 이라는 이름으로 props 중에서 item 이라는 값을 state로 저장 ( from App.js )
        // props는 상위 컴포넌트에서 전달한 데이터라서 읽기는 가능하지만 수정이나 삭제가 안되므로 
        // 수정이나 삭제를 하고자 하는 경우는 state로 변환
        this.state = {item:props.item}  // props의 데이터를 state의 데이터로 변환
        // 출력만 할 거였으면 바꿀 필요 X
    }

    // 화면에 출력할 내용을 리턴하는 메서드
    render(){
        // 자주 사용하는 데이터를 짧게 사용하기 위해서 다른 변수에 대입
        const item = this.state.item;
        return(
            <ListItem>
                <Checkbox check={item.done} />
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label":"naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
            </ListItem>
        )
    }
}

export default ToDo;
