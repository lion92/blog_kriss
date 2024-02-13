import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Helloword from "./component/Helloword";
import DashInscription from "./component/DashInscription";
import DashLogin from "./component/DashLogin";
import DashTache from "./component/DashTache";
import DashShowArticles from "./component/DashShowArticles";
import DashConfirmationShowArticles from "./component/DashConfirmationShowArticles";
import DashUser from "./component/DashUser";

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={DashInscription}/>
            <Route exact path="/login" component={DashLogin}/>
            <Route exact path="/hello" component={Helloword}/>
            <Route exact path="/form" component={DashTache}/>
            <Route exact path="/inscription" component={DashInscription}/>
            <Route exact path="/showArticles" component={DashShowArticles}/>
            <Route exact path="/confirm" component={DashConfirmationShowArticles}/>
            <Route exact path="/users" component={DashUser}/>
            <Route exact path="*" component={Helloword}/>

        </Switch>
    </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




