import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useState} from "react";

import UserContext from './context/UserContext';

import Login from "./components/LogInPage.js"
import Signup from "./components/SignUpPage.js"


function App(){
    const [user, setUser] = useState(localStorage.length!==0 ? JSON.parse(localStorage.getItem('list')) : [])

    return(
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter> 
			<Switch>
				<Route path="/" exact>
                    <Login />
				</Route>

                <Route path="/sign-up" exact>
                    <Signup />
				</Route>
            
			</Switch>
		    </BrowserRouter>
        </UserContext.Provider>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));