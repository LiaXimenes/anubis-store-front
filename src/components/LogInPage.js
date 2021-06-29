import styled from "styled-components";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';

import gato from "../images/gato.png"

import UserContext from '../context/UserContext';

export default function Login(){
    const {user, setUser} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    const body = {
        email,
        password
    }

    useEffect(() => {
        if (localStorage.length !== 0){
            const listString = localStorage.getItem("list");
            const list = JSON.parse(listString);
            setUser(list)
            console.log(list)
            //history.push("/main-page")
        }
    }, [])


    function loginCustomer(){
        const request = axios. post("http://localhost:4000/log-in", body);
        request.then((response) => {console.log(response.data)
            setUser(response.data);

            const tokenString = JSON.stringify(user);
            localStorage.setItem('list', tokenString);
            console.log(localStorage.getItem('list'))   
            //history.push("/main-page")
        });
        request.catch(errors)

        function errors(error){
            if(error.response.status === 401){
                alert("email ou senha incorretos")
            }

            setEmail("");
            setPassword("");
        }
    }


    return(
        <FrontPage>
            <Photo>
                <img src={gato}/>
            </Photo>
            

            <h1>AnúbisStore</h1>
            <h2>Everything your cat needs. By Kat Dee</h2>

            <input type="texte" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={loginCustomer}>Entrar</button>

            <Link to="/sign-up">
                <p>Ainda não tem cadastro? Faça agora!</p>
            </Link>
        </FrontPage>
    )
}

const FrontPage = styled.div`
    width: 100%;
    background: #F4F4F4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1{
        font-size: 70px;
        font-family: 'Mountains of Christmas', cursive;
        
    }

    h2{
        font-size: 14px;
        margin-bottom: 30px;
    }


    input{
        width: 340px;
        height: 45px;
        margin-bottom: 15px;
        border-radius: 5px;
        padding-left: 10px;

    }


    button{
        width: 350px;
        height: 45px;
        background: #F0A500;
        margin-bottom: 30px;
        border-radius: 5px;
    }

    p{
        margin-bottom: 30px;
        color: black;

    }

`;

const Photo = styled.div`
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    img{
        width: 400px;
        height: 500px;
    }

`;