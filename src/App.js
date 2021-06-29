import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';
import GlobalStyle from './styles/GlobalStyles.js';
import UserContext from './UserContext.js';
import Homepage from './home/Homepage';

export default function App () {
    const [user, setUser] = useState('');
    return (
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <GlobalStyle/>
                <Switch>
                    <Route path='/' exact>
                        <Homepage/>
                    </Route>
                    <Route path='sign-up' exact>
                        {/* rota */}
                    </Route>
                    <Route path='sign-in' exact>
                        {/* rota */}
                    </Route>
                    <Route path='/cart' exact>
                        {/* rota */}
                    </Route>                    
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}