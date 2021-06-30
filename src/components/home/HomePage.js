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
            TESTE CARALHO
            <WelcomeBox></WelcomeBox>
            {printProducts()}
        </Body>
    );
};
const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F4F4F4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 165px;
`;
const WelcomeBox = styled.div`

`;