import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Helloword from "./component/Helloword";
import Articles from "./component/articles";
import DashInscription from "./component/DashInscription";
import DashLogin from "./component/DashLogin";

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={DashInscription}/>
            <Route exact path="/login" component={DashLogin}/>
            <Route exact path="/hello" component={Helloword}/>
            <Route exact path="/articles" component={Articles}/>
            <Route exact path="*" component={Helloword}/>

        </Switch>
    </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




