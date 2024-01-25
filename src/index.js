import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Helloword from "./component/Helloword";
import ListProjets from "./component/ListProjets";

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Helloword}/>
            <Route exact path="/hello" component={Helloword}/>
            <Route exact path="/articles" component={ListProjets}/>
            <Route exact path="*" component={Helloword}/>

        </Switch>
    </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




