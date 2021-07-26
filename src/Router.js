import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClothingApp from './main_components/ClothingApp';
import './assets/base.scss';

const Initial = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ClothingApp} />
                <Route exact path="/search/:name" component={ClothingApp} />
                <Route path='*' component={NoMatch} />
            </Switch>
        </BrowserRouter>
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