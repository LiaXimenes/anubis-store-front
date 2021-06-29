import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';
import GlobalStyle from './styles/GlobalStyles.js';
import UserContext from './UserContext.js';
import Homepage from './home/Homepage';
import Login from "./components/LogInPage.js";
import Signup from "./components/SignUpPage.js"

export default function App () {
    const [user, setUser] = useState(localStorage.length!==0 ? JSON.parse(localStorage.getItem('list')) : [])
    return (
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <GlobalStyle/>
                <Switch>
                    <Route path='/' exact>
                        <Homepage/>
                    </Route>
                    <Route path='sign-up' exact>
                    <Login />
                    </Route>
                    <Route path='sign-in' exact>
                    <Signup />
                    </Route>
                    <Route path='/cart' exact>
                        {/* rota */}
                    </Route>                    
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}
