import { Card, CardContent, Container, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import {Check,Delete} from '@material-ui/icons';
const Todo = ({title,deleteTodo}) => {
    const delTodo =()=> deleteTodo()
    return (
        <div>
            <Container>
                <Card variant ="outlined" style={{marginTop: 35, background: "lightgray"} }>
                    <CardContent>
                        <Typography varient="h6" component="h3">
                            <IconButton>
                                <Check style ={{color: "green"}}/>
                            </IconButton>
                            {title}
                            <IconButton style={{ float:"right"}} onClick={delTodo}>
                                <Delete style ={{color: "red"}}/>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>    
            </Container>
        </div>
    );
};

export default Todo;
