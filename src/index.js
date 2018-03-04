import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Panel from './components/context/Panel';
import './styles/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { fetchTodos } from './actions';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
const store = configureStore();
store.dispatch(fetchTodos());

render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/context" component={Panel}/>
      </Switch>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
