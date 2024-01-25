import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Helloword from "./component/Helloword";
import Articles from "./component/articles";

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Helloword}/>
            <Route exact path="/hello" component={Helloword}/>
            <Route exact path="/articles" component={Articles}/>
            <Route exact path="*" component={Helloword}/>

        </Switch>
    </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));




