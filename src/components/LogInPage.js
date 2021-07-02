import styled from "styled-components";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';

import gato from "../images/gato2.png"

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
            history.push("/")
        }
    }, [])


    function loginCustomer(){
        const request = axios.post("http://localhost:4000/log-in", body);
        request.then((response) => {console.log(response.data)
            setUser(response.data);

            const tokenString = JSON.stringify(user);
            localStorage.setItem('list', tokenString);
            console.log(localStorage.getItem('list'))   
            history.push("/")
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
            <Entrance>
                <Photo>
                    <img src={gato}/>
                </Photo>
                
                <Name>
                    <h1>AnúbisStore</h1>
                    <h2>Everything your cat needs. By Kat Dee</h2>
                </Name>
            </Entrance>

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
        font-family: 'Raleway', sans-serif;
        font-size: 15px;
    }

    p{
        margin-bottom: 30px;
        color: black;
        font-family: 'Raleway', sans-serif;
        font-size: 15px;
    }
`;

const Photo = styled.div`
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    img{
        width: 500px;
        height: 500px;

        @media (max-width: 500px){
            width: 400px;
            height: 400px;

        }

    }
`;

const Entrance = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Name = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 70px;
        font-family: 'Mountains of Christmas', cursive;

        @media (max-width: 500px){
            font-size: 50px;

        }
    }

    h2{
        font-size: 14px;
        margin-left: 40px;
    }
`;