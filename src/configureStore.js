
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { loadState, saveState } from './localStorage';
// const persistedState = loadState();
//import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux';

//CUSTOM MIDDLEWARE EXAMPLE... reactcasts...
const confirmationMiddleware = store => next => action => {
  if(action.shouldConfirm){
    if(window.confirm(action.confirmationMessage || 'Are you sure ?')){
      next(action);
    }
  } else {
    next(action);
  }
}

const promiseMiddleware = store => next => action => {
  if(action.promise) {
    //dispatch the original action type but adding the response...
    action.promise.then(response => store.dispatch({type:action.type, payload: response}))
  } else {
    next(action);
  }
  
}


const routerWare = routerMiddleware();
const loggerMiddleWare = createLogger();
const middleWare = applyMiddleware(thunkMiddleware, loggerMiddleWare, routerWare, confirmationMiddleware, promiseMiddleware);
const configureStore = () => {
  return createStore(
    reducers,
    compose(middleWare, window.devToolsExtension ? window.devToolsExtension() : f => f)
  );  
}




export default configureStore;