import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClothingApp from './main_components/ClothingApp';
import {Provider} from 'react-redux';
import store from './redux/store'

import './assets/base.scss';

const Initial = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ClothingApp} />
                    <Route exact path='/search/' component={ClothingApp} />
                    <Route exact path="/search/:name" component={ClothingApp} />
                    <Route exact path="/cart" component={ClothingApp} />
                    <Route path='*' component={NoMatch} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

const NoMatch = () => {
    return (
        <>
            <h1>404 error</h1>
        </>
    );
}

export default Initial;