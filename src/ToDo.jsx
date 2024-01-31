import React from "react";

import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    ListItemSecondaryAction,
    IconButton
} from "@material-ui/core"

import {
    DeleteOutlined
} from "@material-ui/icons"
// mui.com docs material icons에서 이름을 import 해서 사용


// react 에서 컴포넌트 클래스를 만들기 위해서 Component로 부터 상속을 받기
class ToDo extends React.Component {
    constructor(props){ // 생성자
        super(props);   // 상위 클래스에서 넘겨준 모든 props를 현재 클래스에 저장
        // props 는 수정이 안되서 state 로 변환
        this.state = {item:props.item}  // props의 데이터를 state의 데이터로 변환
        
        // App.js 에서 넘겨준 삭제 함수를 현재 클래스의 데이터로 변환
        this.delete = this.props.delete
    }

    // 삭제 버튼을 누를 때 호출될 이벤트 핸들러
    deleteEventHandler = (e) => {
        this.delete(this.state.item)
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

                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete ToDo" onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
                
            </ListItem>
        )
    }
}

export default ToDo;
