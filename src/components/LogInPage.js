import styled from "styled-components";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';

import gato from "../images/gato.png"

export default function Login(){
    return(
        <>
            <FrontPage>
                <Photo>
                    <img src={gato}/>
                </Photo>
                

                <h1>AnúbisStore</h1>
                <p>Everything your cat needs. By Kat Dee</p>

                <input/>
                <input/>

                <button>Entrar</button>
                <Link to="/sign-up">
                    <p>Ainda não tem cadastro? Faça agora!</p>
                </Link>
            </FrontPage>
        </>
    )
}

const FrontPage = styled.div`
    width: 100%;
    background: #F4F4F4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1{
        font-size: 40px;
        font-family: 'Mountains of Christmas', cursive;
    }

    input{

    }


    button{
        width: 100px;
        height: 25px;
    }
`;

const Photo = styled.div`
    background: black;
    display: flex;
    justify-content: center;

    img{
        width: 400px;
        height: 500px;
    }

`