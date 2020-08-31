import React from 'react'
import { Switch, Route } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage';
import RepositoryPage from '../pages/RepositoryPage';

const Routes: React.FC = () =>
    <Switch>
        <Route path="/" component={DashboardPage} exact />
        <Route path="/repositories/:repository+" component={RepositoryPage} />        
    </Switch>

export default Routes;

