import styled from "styled-components";

export default function Products ({allProducts}) {
    function addOnCart(id){
        //to-do
    };
    console.log(allProducts);
    return (
        <Body>
            <List>
                {allProducts.map((product)=>{
                    const { id, title, imageUrl, price } = product;
                    return (
                        <ProductBox>
                            <Image>
                                <img src={imageUrl}/>
                            </Image>
                            <Infos title={title} price={price} id={id} >
                                <h1>{title}</h1>
                                <h2>{price}</h2>
                            </Infos>
                            <Button onClick={()=>{addOnCart(id)}} >Adicionar ao carrinho</Button>
                        </ProductBox>
                    );
                })}
            </List>
        </Body>
    );
}

const Body = styled.div`
    width: 90%;
    height: auto;
    display: flex;
`;
const List = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const ProductBox = styled.div`
    width: 200px;
    height: 300px;
    background-color: #E8E2DB;
    box-shadow: 5px 10px 8px #888888;
    position: relative;
    margin: 50px 20px;
`;
const Button = styled.button`
    width: 140px;
    height: 30px;
    background-color: #FF9234;
    color: #1A1C20;
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    position: absolute;
    bottom: 20px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;


    :hover {
        background-color: #FA7D09;
        font-weight: bold;
    }
`;
const Image = styled.div`
    width: 160px;
    height: 160px;
    top: -40px;
    left: 20px;
    position: absolute;
    img {
        width: 160px;
        height: 160px;
        box-shadow: 5px 5px 2px #CACACA;
        
    }
`;
const Infos = styled.div`
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 170px;
    padding: 15px;
    h1 {
        color: #1A1C20;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
    } h2 {
        font-weight: 300;
        font-size: 18px;
        line-height: 32px;
        color: #1A1C20;
    }
`;