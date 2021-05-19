import React, { lazy, Suspense }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PATHS from 'paths';
import Header from 'components/Header/Header';

const Home = lazy(() => import('pages/Home/Home'));


const RouteWithHeader = ({component: Component, ...rest}) => (<Route {...rest} render={props => <div> <Header /> <Component {...props} {...rest} /> </div> }/>);

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <RouteWithHeader exact path={PATHS.home} component={Home} />
                </Suspense>
            </Switch>
        </BrowserRouter>);
}

export default Routes;