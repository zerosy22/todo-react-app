import React from "react"

import {TextField, Paper, Button, Grid} from "@material-ui/core"

class AddToDo extends React.Component{
    constructor(props){
        super(props);

        // App.js 파일에서 넘겨준 메서드를 add 에 저장
        this.add = props.add;

        // 입력한 문자열을 저장하기 위한 속성을 생성
        this.state = {item:{title:""}}
    }

    // TextField에서 값을 입력할 때 마다 호출되는 이벤트 리스너
    // 이벤트 처리하는 함수의 모양은 무조건 이와 같다. e 는 매개변수
    onInputChange = (e) => {
        // state.title 에 입력한 내용을 대입
        const thisItem = this.state.item
        thisItem.title = e.target.value;
        this.setState({item:thisItem});
        // 내용이 바뀌는 걸 console로 확인
        console.log(this.state.item.title)
    }

    // + 버튼을 눌렀을 때 호출되는 이벤트 리스너
    onButtonClick = (e) => {
        // 배열에 데이터를 삽입하는 함수를 호출
        this.add(this.state.item);
        // 텍스트 필드를 초기화
        this.setState({item:{title:""}})
    }

    // Enter를 누르면 호출되는 이벤트 리스너
    // 우리나라 사이트에서 특히 많이 만들었음
    enterKeyEventHandler = (e) => {
        if(e.key === "Enter"){
            this.onButtonClick();
        }
    }// 트리거 : 나에게 이벤트가 발생했는데 다른 이벤트를 리스너를 불러오는 것 DB에서 많이 사용


    render(){
        return(
            <Paper style={{margin:16, padding:16}}>
                <Grid container>   {/* 옆으로 */}
                    <Grid xs={11} md={11} item style={{paddingRight:16}}> {/* 기본 default 12 */}
                        <TextField placeholder="여기에 작성하시오!!!" fullWidth 
                        onChange={this.onInputChange} value={this.state.item.title}
                        onKeyPress={this.enterKeyEventHandler} />
                    </Grid> {/* 남은 1에 버튼을 만들고 싶어서 */}
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color="secondary" onClick={this.onButtonClick}>
                            +
                        </Button>
                    </Grid> 
                </Grid>
            </Paper>
        )
    }
}

export default AddToDo