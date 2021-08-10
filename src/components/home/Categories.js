import axios from "axios";
import { useEffect, useState } from "react";
import styled from 'styled-components';

export default function Categories ({setCategoryToGo}) {
    const [categoriesList, setCategoriesList] = useState('');
    
    try {
        useEffect(()=>{
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories`).then((req)=>{
                setCategoriesList(req.data)
            });
        },[]);
        
        if (!categoriesList.length){
            return(<>
            </>);
        } else {
            return (
                <Body>
                    {categoriesList.map((c)=> {
                        return(
                            <Each onClick={()=>{
                                setCategoryToGo(`?category=${c.name}`);
                            }} >{c.name}</Each>
                        );
                    })}
                </Body>
            );
        }   
    } catch(e) {
        console.log(e);
    }   
}

const Body = styled.ul`
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

    @media (max-width: 500px){
        width: 300px;
    }
`;

const Each = styled.li`
    height: 40px;
    padding: 10px;

    :hover {
        background: #FA7D09;
        font-weight: bold;
        cursor: pointer;
    }
`;