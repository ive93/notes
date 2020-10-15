import  styled  from 'styled-components';
import { Title } from './notestyle';

export const ToDoList = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`
export const DeleteButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background-color: white;`

export const TitleToDo = styled(Title)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 30px;
    margin-left: 30px;
    `
export const Todos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center;
    `

export const List = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;

`
export const Label = styled.label`
`
export const Input = styled.input`
    font-family: 'Montserrat', sans-serif;
    border-radius: 25px;
    padding: 15px 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    outline: none;
    cursor: pointer;

    &:checked + ${Label} {
        text-decoration: line-through;
    }
`
export const AddButton = styled.button`
    transition-duration: 0.4s;
    font-family: 'Commissioner', sans-serif;
    font-size: 18px;
    background-color: #28abb9;
    border-radius: 25px;
    padding: 10px 18px;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: white;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
`