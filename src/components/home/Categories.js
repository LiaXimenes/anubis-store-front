import axios from "axios";

export default function Categories ({categoriesList}) {
    const [categoriesList, setCategoriesList] = useState('');
    try {
        axios.get('http://localhost:4000/categories').then((req)=>{
            setCategoriesList(req.data)
        })
        if (!categoriesList.length){
            return;
        } else {
            return (
                <Categories>
                    {categoriesList.map((c)=> {
                        return(
                            <Each>{c.name}</Each>
                        )
                    })}
                </Categories>
            );
        }   
    } catch {
        console.log(e);
    }
   
}

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