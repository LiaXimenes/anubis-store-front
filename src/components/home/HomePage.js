import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { BsPersonDash, BsPersonPlus } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard, FaTelegramPlane, FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

import Products from './Products';
import CartSideBar from './CartSideBar';

export default function Home () {
    const [allProducts, setAllProducts] = useState('');
    const [show, setShow] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState ("")

    let history = useHistory();
    
    try {
        axios.get('http://localhost:4000/').then((req)=>{
            setAllProducts(req.data);
        });
    } catch(e) {
        console.log(e);
    }

    function printProducts(){
        if (!allProducts.length){
            return(
                <p>Sem estoque no momento.</p>
            );
        } else {
            return <Products setSelectedProducts={setSelectedProducts} allProducts={allProducts} />
        }
    }

    function goToCart(){
        
        console.log(show)
        return  <CartSideBar selectedProducts={selectedProducts} show={show} setShow={setShow}/>
        
    }

    return(
        <>
            <Body>
                <Header>
                    <Name>
                        <p>AnúbisS.</p>


                    </Name>
                    <Options>
                        <button onClick={() => {history.push("/sign-in")}}>
                            <BsPersonPlus size="2em" color="#fff" />
                        </button>
                        <button onClick={() => {localStorage.removeItem('list'); history.push("/sign-in")}}>
                            <BsPersonDash size="2em" color="#fff" />
                        </button>
                        <Cart onClick={() => {setShow(true); goToCart()}}>
                            <BiCart size="2em" color="#fff"/> 
                        </Cart>
                    </Options>
                </Header>

                <WelcomeBox>CONTEÚDO</WelcomeBox>

                <Categories>
                    <Each>Inserir Categorias</Each>
                </Categories>

                {printProducts()}

                <CartSideBar></CartSideBar>

                
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
    background: #FA7D09;
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

const Categories = styled.ul`
    width: 90%;
    height: 70px;
    margin: 50px;
    background: #FF9234;
    display: flex;
    flex-direction: row;
    overflow: scroll;
    align-items: center;
    border-radius: 5px;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const Each = styled.li`
    width: 100px;
    height: 40px;
    padding: 10px;

    :hover {
        background: #FA7D09;
        font-weight: bold;
    }
`;

const Body = styled.div`
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
    background-color: beige;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = styled.div`
    width:100%;
    height: 150px;
    background: #AAAAAA;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: 'Raleway', sans-serif;
    box-shadow: -5px 0px 5px 2px #C8C2BC;

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