import React,{useState} from 'react'
import { FormControl, Container, TextField} from '@material-ui/core'

const TodoForm = ({addTodo}) => {
    const [text,setText]= useState ("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(text);
        setText ("");
    };
    return (
        <div>
        <Container >
        <h1>TODO APP</h1>
            <form onSubmit ={handleSubmit}>
                <FormControl>
                    <TextField label ="TODO" required ={true} value ={text} onChange={(e)=> setText(e.target.value)}/>
                    <button varient="standard" color ="primary" type="submit" style={{marginTop:10}}>
                        ADD HERE +</button>


                </FormControl>
            </form>
        </Container>
        </div>    
    );
};

export default TodoForm
