import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from '../../context/UserContext';

export default function CartSideBar({show, goToCart, setShow, selectedProducts}){
    const {user, setUser} = useContext(UserContext);
    const [totalPrice, setTotalPrice] = useState([]);
    let total = 0;
    const arrayOfPrice = [];

    useEffect(() => {
        if(selectedProducts.length){
            for(let i of selectedProducts){
                console.log(i);
                let value = i.price.replace("R$ ", "");
                console.log(value);
                value = value.replace(",",".");
                console.log(value);
                arrayOfPrice.push(value);
            }

            for(let i = 0; i < arrayOfPrice.length; i++){
                let amount = parseInt(arrayOfPrice[i])
                total += amount;
            }
            setTotalPrice(total)
            console.log(selectedProducts)
        }
    }, [selectedProducts]);

    function mapOfProducts(){
        if(!selectedProducts.length){
            return(
                <Product>
                    <p>Seu carrinho está Vazio</p>
                </Product>                
            );
        } else {
            return (selectedProducts.map((product) => {
                return(
                    <Product>
                        <div>
                            <h1>{product.title}</h1>
                            <p>{product.price}</p>
                        </div>
                        <ImgAndTrash >
                            <img src={product.imageUrl}/>
                            <button onClick={()=>{removeFromCart(product.cartId)}}>
                                <FiTrash2 size="1.5em" color="#000" />
                            </button>
                        </ImgAndTrash>
                    </Product>
                );
            }));
        }
    }
    function confirmOrder(){
        alert("Muito obrigada por comprar com a gente!! Confirmação de pedido enviada para o seu email!")

        const config = {headers: {'authorization': `bearer ${user}`}}
        axios.get('http://localhost:4000/confirm', config)
    
    }
    function removeFromCart(cartId){
        const config = {headers: {
            'cartId': cartId
        }};
        axios.delete(`http://localhost:4000/cart`, config).then(goToCart);
    }
    return(
        <Body show={show}>
            <SideBar >
                <Header>
                    <h1>Carrinho</h1>
                    <button onClick={() => setShow(false)}>X</button>
                </Header>
                <Products>
                    {mapOfProducts()}                 
                </Products>            
                <TotalPrice>
                    <h1>Preço total:</h1>
                    <p>{`R$ ${totalPrice}`}</p>
                </TotalPrice>
                <Button onClick={confirmOrder}>
                    <p>Confirmar Pedido</p>
                </Button>
            </SideBar>
        </Body>
    )
}

const Body = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left: 0;
    z-index: 19;
    display: ${(props) => (props.show ? "flex" : "none")};    
`;

const SideBar = styled.div`
    width: 500px;
    height: 100vh;
    background: #E8E2DB;
    z-index: 20;
    position: fixed;
    right: 0;
    top:0;
    box-shadow: 0px 0px 20px 5px #1A1C2077;
    display: flex;
    flex-direction:column;
`;

const Header = styled.div`
    padding:10px;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #444;

    h1{
        font-size: 25px;
    }

    button{
        background: #FF9234;
        border-radius: 5px;

        :hover {
            background-color: #FA7D09;
            font-weight: bold;
        }
    }
`;

const Products = styled.div`
    height:450px;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const Product = styled.div`
    height: 80px;
    border-bottom: solid 1px #444;
    padding:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-size: 20px;
        padding-bottom: 5px;
    }

    p{
        font-size: 15px;
    }
`;

const ImgAndTrash = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;

    img{
        width: 70px;
        height: 70px;
    }

    button{
        background: #E8E2DB;
    }
`;

const TotalPrice = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-size: 25px;

    }

    p{
        font-size: 22px;
    }
`;

const Button = styled.button`
    width: 250px;
    height: 50px;
    background: #FF9234;
    border-radius: 5px;
    margin-left: 140px;

    :hover {
        background-color: #FA7D09;
        font-weight: bold;
    }
`;