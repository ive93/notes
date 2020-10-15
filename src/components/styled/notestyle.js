import  styled  from 'styled-components';

export const NotesApp = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Title = styled.h1`
    font-family: 'Commissioner', sans-serif;;
    font-size: 48px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 30px;
    margin-left: 30px;
    text-decoration: none;
    `

export const DeleteButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background-color: white;
    position: absolute;
    `;

export const Textarea = styled.textarea`
    font-family: 'Montserrat', sans-serif;
    border-radius: 25px;
    height: 250px;
    width: 1000px;
    outline: none;
    margin-top: 10px;
    margin-bottom: 10px;
    resize: none;
    padding: 15px 15px;
    /* overflow: hidden; */
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Notes = styled.div`
    height: auto;
    border-style: solid;
    width: 97%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
    transition: box-shadow .3s;
    margin-left: 10px;
    margin-top: 10px;


    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    `
export const List = styled.div`
    font-family: 'Commissioner', sans-serif;
    font-size: 18px; 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;


`

export const AddButton = styled.button`
    transition-duration: 0.4s;
    font-family: 'Commissioner', sans-serif;
    font-size: 18px;
    border-radius: 25px;
    padding: 10px 18px;
    outline: none;
    cursor: pointer;
    background-color: #28abb9;

    &:hover {
        background-color: white;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
`