import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';
import GlobalStyle from './styles/GlobalStyles.js';
import UserContext from './context/UserContext.js';
import Homepage from './components/home/HomePage';
import LogInPage from "./components/LogInPage.js";
import SignUpPage from "./components/SignUpPage.js";

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
                    <Route path='/sign-up' exact>
                        <SignUpPage />
                    </Route>
                    <Route path='/sign-in' exact>
                        <LogInPage />
                    </Route>                    
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}
