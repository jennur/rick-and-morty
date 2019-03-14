import './styles/app.scss';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import App from './components/App/App.jsx';
import Home from './pages/Home';
import CharacterSpecific from './pages/CharacterSpecific';

const routes = (
    <HashRouter>
        <Switch>
            <App>
                <Route path="/" exact component={ Home } />
                <Route path="/character/:id" exact component={ CharacterSpecific } />
            </App>
        </Switch>
    </HashRouter>
);

const outlet = document.getElementById('app')

const render = () => {
    ReactDOM.render(
        <AppContainer>
                { routes }
        </AppContainer>,
        outlet
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(render);
}
