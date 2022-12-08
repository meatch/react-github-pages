import React from 'react';
import styled from 'styled-components';

const App = () => {
    return (
        <AppStyled className='App'>
            <h1>React Github Pages</h1>
            <p>
                Another change
            </p>
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    text-align: center;
`;