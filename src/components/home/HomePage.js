import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { BsPersonDash, BsPersonPlus } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard, FaTelegramPlane, FaWhatsapp, FaFacebookSquare } from "react-icons/fa";

import Categories from './Categories';
import Products from './Products';
import CartSideBar from './CartSideBar';

import gato from "../../images/gato.png"


export default function Home () {
    const [allProducts, setAllProducts] = useState('');
    const [categoryToGo, setCategoryToGo] = useState('');
    const [selectedProducts, setSelectedProducts] = useState ("")
    const [show, setShow] = useState(false);

    let history = useHistory();

    try {
        useEffect(()=>{
            axios.get(`http://localhost:4000/homepage${categoryToGo}`).then((req)=>{
                setAllProducts(req.data);
                console.log(req.data);
            });
        },[categoryToGo]);
    } catch(e) {
        console.log(e);
    }

    function PrintProducts(){
        if (allProducts.length === 0){
            return(
                <p>Sem estoque no momento.</p>
            );
        } else {
            return <Products setSelectedProducts={setSelectedProducts} allProducts={allProducts} />
        }
    }

    function goToCart(){
        return  <CartSideBar selectedProducts={selectedProducts} show={show} setShow={setShow}/>
    }
    
    return(
        <>
            <Body>
                <Header>
                    <Name>
                        <p onClick={() => {setCategoryToGo('')}} >AnúbisS.</p>
                    </Name>
                    <Options>
                        <button onClick={() => {history.push("/sign-in")}}>
                            <BsPersonPlus size="2em" color="#fff" />
                        </button>
                        <button onClick={() => {localStorage.removeItem('list'); history.push("/sign-in")}}>
                            <BsPersonDash size="2em" color="#fff" />
                        </button>
                        <Cart onClick={() => {setShow(true)}}>
                            <BiCart size="2em" color="#fff"/> 
                        </Cart>
                    </Options>
                </Header>

                <WelcomeBox>

                    <ImgBox>
                        <img src={gato}/>
                    </ImgBox>
                   
                    <Spotlight>
                        <h1>AnúbisStore</h1>

                        <Announce>
                            <h2>FIQUE</h2> 
                            <h3>EM CASA</h3>
                        </Announce>

                        <p><span>Nós</span> vamos até <span>você</span></p>
                        <p>As entregas desse mês serão por nossa conta</p>
                    </Spotlight>

                </WelcomeBox>

                {goToCart()}

                <Categories categoryToGo={categoryToGo} setCategoryToGo={setCategoryToGo} />

                <PrintProducts />

            </Body>
            <Footer>
                <span>
                    <h1>Sobre nós</h1>
                    <p>FAG</p>
                    <p>Sobre os Nossos Produtos</p>
                    <p>Trocas e Devoluções</p>
                    <p>Entregas</p>
                    <p>Promoções</p>
                </span>

                <span>
                    <h1>Fale Conosco</h1>
                    <div>   
                        <FaFacebookSquare size="2em" color="#fff"/>
                        <FaWhatsapp size="2em" color="#fff"/>
                        <FaTelegramPlane size="2em" color="#fff"/>
                    </div>
                    
                </span>

                <span>
                    <h1>Formas de Pagamento</h1>
                    <div>
                        <FaCcVisa size="2em" color="#fff"/>
                        <FaCcMastercard size="2em" color="#fff"/>
                    </div>
                </span>
            </Footer>        
        </>
    );
};

const Header = styled.div`
    width: 100%;
    height: 80px;
    background: linear-gradient(#e7521e, #ee901b);
    position: fixed;
    top:0;
    z-index:5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 5px 5px 5px 2px #C8C2BC;
`;

const Name = styled.div`
    width: 100px;
    height: 75px;
    padding: 20px 15px;

    p{
        font-size:40px;
        font-family: 'Mountains of Christmas', cursive;
    }
`;

const Options = styled.div`
    width: auto;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    button{
        width: 50px;
        height: 40px;
        background: #FA7D09;
        border-left: solid 1px #444; 
        border-top: solid 1px #444; 
        display: flex;
        align-items: center;
        justify-content: center;

        :hover {
        background-color: #FF9234;
        }
    }
`;

const Cart = styled.button`
    border-right: solid 1px #444;
`;

const Body = styled.div`
    font-family: 'Raleway', sans-serif;
    width: 100%;
    height: 100%;
    background-color: #E8E2DB;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 200px 100px 0px 100px;
`;

const WelcomeBox = styled.div`
    width: calc(100vw/2);
    height: calc(100vw/4);
    background: hsla(33, 86%, 61%, 1);
    background: radial-gradient(circle, hsla(33, 86%, 61%, 1) 0%, hsla(16, 80%, 61%, 1) 100%);
    background: -moz-radial-gradient(circle, hsla(33, 86%, 61%, 1) 0%, hsla(16, 80%, 61%, 1) 100%);
    background: -webkit-radial-gradient(circle, hsla(33, 86%, 61%, 1) 0%, hsla(16, 80%, 61%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f1a648", endColorstr="#eb744a", GradientType=1 );
    margin-bottom: 80px;
    display: flex;
`;

const Spotlight = styled.div`
    width:500px;
    display: flex;
    flex-direction: column;
    align-items:center;

    h1{
        font-size: 40px;
        font-family: 'Mountains of Christmas', cursive;
        padding-top: 15px;
        margin-bottom: 80px;
    }

    p{
        font-size:20px;
    }

    span{
        font-weight: bold;
    }
`;

const Announce = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    h2{
        font-size: 40px;
    }

    h3{
        font-size: 40px;
    }
`;

const ImgBox = styled.div`
    display: flex;
    align-items: center;
    height: calc(100vw/4);

    img{
        width: 200px;
        height: 200px;

        :hover {
            transform: rotate(40deg);
            transition: 0.7s;
        }
    }
`;

const Footer = styled.div`
    width:100%;
    height: 200px;
    background: #AAAAAA;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: -5px 0px 5px 2px #C8C2BC;
    font-family: 'Raleway', sans-serif;
    padding: 15px;

    h1{
        font-size: 20px;
        padding-top:10px;
        padding-bottom: 15px;
    }

    p{
        margin-bottom: 5px;
    }

    span{
        display: flex;
        flex-direction: column;
    }

    div{
        display: flex;
        justify-content: space-around;
    }
`;