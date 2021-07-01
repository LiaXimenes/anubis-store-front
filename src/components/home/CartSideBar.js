import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";

export default function CartSideBar({show, setShow, selectedProducts}){
    const totalPrice = 0;

    function mapOfProducts(){
        if(!selectedProducts.length){
            return(
                <Product>
                    <p>Seu carrinho está Vazio</p>
                </Product>
                
            );
        } else{
            {selectedProducts.map((product) => {
                return(
                    <Product>
                        <div>
                            <h1>{product.name}</h1>
                            <p>{product.price}</p>
                        </div>

                        <ImgAndTrash>
                            <img src={product.image}/>
                            <button onClick={removeFromCart()}>
                                <FiTrash2 size="1.5em" color="#000" />
                            </button>
                        </ImgAndTrash>
                        
                    </Product>
                )
            })}
        }
    }

    function confirmOrder(){

    }

    function removeFromCart(){
        alert("deu bom");

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
                    <p>{totalPrice}</p>
                </TotalPrice>

                <Button onClick={confirmOrder()}>
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

const Products = styled.ul`
    height:450px;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const Product = styled.li`
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