import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// https://dog.ceo/api/breeds/image/random

const Api = () => {

    const [dogImg, dogImgUpdate] = useState();

    const fetchDog = async () => {
        const resp = await axios.get('https://dog.ceo/api/breeds/image/random');
        dogImgUpdate(resp.data.message);
    }

    useEffect(() => {
        fetchDog();
    }, []);

    return (
        <ApiStyled className='Api'>
            <h2>API Call</h2>
            {
                !dogImg
                ? <div>Loading...</div>
                : <img src={ dogImg } alt='dog' />
            }
        </ApiStyled>
    );
}

export default Api;

const ApiStyled = styled.div`
    img {
        max-width: 300px;
    }
`;