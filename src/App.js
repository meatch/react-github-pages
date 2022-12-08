import React from 'react';
import styled from 'styled-components';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';

const App = () => {
    return (
        <AppStyled className='App'>
            <h1>React Github Pages</h1>
            <p>
                Another change 4
            </p>

            <HashRouter>
                <nav>
                    <ul>
                        <li><NavLink to=''>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                    </ul>
                </nav>
                <Routes>
                    <Route element={ <Home /> } path='' />
                    <Route element={ <About /> } path='/about' />
                </Routes>
            </HashRouter>
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`

`;