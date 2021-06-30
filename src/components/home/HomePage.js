import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import Products from './Products';

export default function Home () {
    const [allProducts, setAllProducts] = useState('');
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
            return <Products allProducts={allProducts} />
        }
    }
    return(
        <Body>
            <WelcomeBox>CONTEÚDO</WelcomeBox>
            {printProducts()}
        </Body>
    );
};
const Body = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F4F4F4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 150px 150px 500px 150px;
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