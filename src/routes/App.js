import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Todo from '../components/Todo';
import Note from '../components/Note';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

const App = () => (
    <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/todo" component={Todo}/>
                <Route exact path="/note" component={Note}/>
                <Route component={NotFound}/>
            </Switch>
    </BrowserRouter>
);

export default App;