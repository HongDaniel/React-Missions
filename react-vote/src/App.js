import React from 'react';
import Loginpage from './Loginpage';
import Signup from './Signup';
import Votingpage from './Votingpage';
import { Route, Switch } from 'react-router-dom';
function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Loginpage} />
                <Route path="/signup" component={Signup} />
                <Route path="/voting-page" component={Votingpage} />
            </Switch>
        </div>
    );
}

export default App;
