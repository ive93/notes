import React from 'react';
import  styled  from 'styled-components';
import { Title } from './styled/notestyle';
import { Link } from 'react-router-dom';

const Head = styled(Title)`
    font-size: 60px;`;

const Header = () => {
    return(
        <>
            <Link to="/" className='rouLink'>
                <Head>To do's and notes</Head>
            </Link>
        </>
    )
}

export default Header;