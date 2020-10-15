import React from 'react';
import notes from '../assets/static/notebook.png';
import todo from '../assets/static/todos.png';
import { TitleToDo } from './styled/todostyle';
import { Title } from './styled/notestyle';
import { Link } from 'react-router-dom';
import * as style from './styled/link.css';
import  styled  from 'styled-components';

const ContentStyle = styled.div`
    display: flex;
    justify-content: center;     
`

const Content = () => {
    return(
        <>
            <ContentStyle>
                <Link to="/note" style={{ textDecoration: 'none' }}>
                    <Title>
                        <img src={notes} alt="delete" style={{height: '115px'}}></img>
                        Notes
                        
                    </Title>
                </Link>
                <Link to="/todo" style={{ textDecoration: 'none' }}>
                    <TitleToDo>
                        <img src={todo} alt="list" style={{height: '115px'}}></img>
                        To do list

                    </TitleToDo>
                </Link>
            </ContentStyle>
        </>
    )
}

export default Content;