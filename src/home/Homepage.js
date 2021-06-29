import styled from 'styled-components';

export default function Home () {

    function allProducts(){
        
    }
    return(
        <Body>
            <Product>
                <Image >photo</Image>
                <Infos>
                    <h1>nome completo do produto</h1>
                    <h2>R$ 25,80</h2>
                </Infos>
            </Product>
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
const Product = styled.div`
    width: 200px;
    height: 300px;
    background-color: #CF7500;
    position: relative;
    margin-right: 20px;
`;
const Image = styled.div`
    width: 160px;
    height: 160px;
    top: -40px;
    left: 20px;
    background-color: #F0A500;
    position: absolute;
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