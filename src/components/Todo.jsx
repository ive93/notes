import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import todo from '../assets/static/todo.png';
import binicon from '../assets/static/trashbin.png'; 
import { Form } from './styled/notestyle';   
import { ToDoList } from './styled/todostyle';
import { DeleteButton } from './styled/todostyle';
import { TitleToDo } from './styled/todostyle';
import { Todos } from './styled/todostyle';
import { List } from './styled/todostyle';
import { Label } from './styled/todostyle';
import { Input } from './styled/todostyle';
import { AddButton } from './styled/todostyle'; 

const Todo = () => {
    const [toDoList, setToDoList] = useState([
        {text: ''}
    ]);
    const [value, setValue] = useState('');

    useEffect(() => {
        const data = localStorage.getItem('todos');
        if (data != null) {
            setToDoList(JSON.parse(data));
        } else {
            setToDoList([])
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(toDoList))
    }, [toDoList]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(value);
        setValue('');
    }

    const addToDo = (text) => {
        const updatedToDoList = [...toDoList, { text }];
        setToDoList(updatedToDoList);
    }

    const handleDelete = (todo) => {
        const filterToDo = toDoList.filter(currentToDoListValue => ( 
        currentToDoListValue !== todo ));
        setToDoList(filterToDo);
    }

    return (
        <ToDoList>
                <TitleToDo>
                    To do list
                    <img src={todo} alt="list" style={{height: '25px'}}></img>
                </TitleToDo>
            <List>
                {
                    toDoList.map((todo, index) => (
                        <Todos key={index}>
                            <DeleteButton onClick={() => handleDelete(todo)}>
                                <img src={binicon} alt="delete" style={{height: '17px'}}></img>
                            </DeleteButton>
                            <Input
                                id="input"
                                type="checkbox"
                            ></Input>
                            <Label for="input"
                            >{todo.text}</Label>
                        </Todos>
                    ))
                }
            </List>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder='Type to do here'
                    value={value}
                    onChange={key => setValue(key.target.value)}
                />
                <AddButton
                    type='submit'
                >Add</AddButton>
            </Form>
        </ToDoList>
    )
}

export default Todo;