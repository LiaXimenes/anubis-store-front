import styled from "styled-components";

export default function CartSideBar({show, setShow, selectedProducts}){

    // function mapOfProducts(){
    //     if(!selectedProducts.length){
    //         return(
    //             <p>Seu carrinho está Vazio</p>
    //         );
    //     } else{
    //         {selectedProducts.map((product) => {
    //             return(
    //                 <Products>
    //                     <div>
    //                         <h1>{product.name}</h1>
    //                         <p>{product.price}</p>
    //                     </div>

    //                     <img src={product.image}/>
    //                 </Products>
    //             )
    //         })}
    //     }
    // }


    return(
        <SideBar show={show}>
            <Header>
                <h1>Seus Produtos Selecionados</h1>
                <button onClick={() => setShow(false)}>X</button>
            </Header>
  
            <Products>
                <div>
                    <h1>Nome</h1>
                    <p>Preço</p>
                </div>
                
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJNZuV-Rr0lfWpTC8K3gu4k1fCCXAaqzLHFUrRvRZ6k67t9uNsXB_M77gP_H5efqL98lUb-13L&usqp=CAc"/>

            </Products>
            <Products>
                <div>
                    <h1>Nome</h1>
                    <p>Preço</p>
                </div>
                
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJNZuV-Rr0lfWpTC8K3gu4k1fCCXAaqzLHFUrRvRZ6k67t9uNsXB_M77gP_H5efqL98lUb-13L&usqp=CAc"/>

            </Products>
            <Products>
                <div>
                    <h1>Nome:</h1>
                    <p>Preço:</p>
                </div>
                
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJNZuV-Rr0lfWpTC8K3gu4k1fCCXAaqzLHFUrRvRZ6k67t9uNsXB_M77gP_H5efqL98lUb-13L&usqp=CAc"/>

            </Products>
            
            <TotalPrice>
                <h1>Preço total:</h1>
                <p>10.000,00</p>
            </TotalPrice>

        </SideBar>
     

    )
}

const SideBar = styled.div`
    width: 500px;
    height: 100vh;
    background: white;
    z-index: 20;
    position: fixed;
    right: 0;
    top:0;
    box-shadow: 0px 0px 20px 5px #aaa;
   // display: ${(props) => (props.show ? "flex" : "none")};
`;

const Header = styled.div`
    padding:10px;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #444;

    h1{
        font-size: 25px;
    }
`;

const Products = styled.div`
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

    img{
        width: 60px;
        height: 60px;
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

`