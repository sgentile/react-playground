
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { loadState, saveState } from './localStorage';
// const persistedState = loadState();

const loggerMiddleWare = createLogger();
const middleWare = applyMiddleware(thunkMiddleware, loggerMiddleWare);
const configureStore = () => {
  return createStore(
    reducers,
    compose(middleWare, window.devToolsExtension ? window.devToolsExtension() : f => f)
  );  
}


export default configureStore;