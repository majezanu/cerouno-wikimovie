import React from 'react';
import { BrowserRouter as Router, Route, Switch} 
  from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import Home from '../../pages/Home/Home';
import MovieDetail from '../../molecules/MovieDetail/MovieDetail';

const RouterSwitch = (props) => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movie/:id' component={MovieDetail} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default RouterSwitch