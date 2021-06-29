import styled from "styled-components";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';

import gato from "../images/gato2.png"

export default function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let history = useHistory()

    const body ={
        name,
        email,
        password
    }

    function registerCostumer(){
        if(name === "" || email === "" || password === "" || password !== confirmPassword){
            alert("Preencha todos os dados corretamente");
            setName(""); 
            setPassword("");
            setConfirmPassword(""); 
            setEmail("");

        } else{
            const request = axios.post("http://localhost:4000/sign-up", body);
            request.then(() => history.push("/"))
            request.catch(errors);

            function errors(error){
                if(error.response.status === 403){
                    alert("Esse email já foi cadastrado")
                }
    
                setName(""); 
                setPassword(""); 
                setConfirmPassword("");
                setEmail("");
            }
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


            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="texte" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

            <button onClick={registerCostumer}>Cadastrar</button>


            <Link to="/">
                <p>Já tem cadastro? Entre agora!</p>
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
        width: 500px;
        height: 500px;
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
    }

    h2{
        font-size: 14px;
        margin-left: 40px;
    }
`;