import styled from "styled-components";

export default function Products ({allProducts}) {
    function addOnCart(id){
        //to-do
    };
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
    width: 100%;
    height: auto;
    display: flex;  
`;
const List = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
const ProductBox = styled.div`
    width: 200px;
    height: 300px;
    background-color: #CF7500;
    position: relative;
    margin: 10px;
`;
const Button = styled.div`
    width: 140px;
    height: 30px;
    border: none;
    background-color: #F0A500;
    color: #1A1C20;
    font-size: 12px;
    position: absolute;
    bottom: 20px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Image = styled.div`
    width: 160px;
    height: 160px;
    top: -40px;
    left: 20px;
    background-color: #F0A500;
    position: absolute;
    img {
        width: 160px;
        height: 160px;
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
        color: #F4F4F4;
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