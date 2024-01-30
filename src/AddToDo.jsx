import React from "react"

import {TextField, Paper, Button, Grid} from "@material-ui/core"

class AddToDo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Paper style={{margin:16, padding:16}}>
                <Grid container>   {/* 옆으로 */}
                    <Grid xs={11} md={11} item style={{paddingRight:16}}> {/* 기본 default 12 */}
                        <TextField placeholder="여기에 작성하시오!!!" fullWidth />
                    </Grid> {/* 남은 1에 버튼을 만들고 싶어서 */}
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color="secondary">
                            +
                        </Button>
                    </Grid> 
                </Grid>
            </Paper>
        )
    }
}

export default AddToDo