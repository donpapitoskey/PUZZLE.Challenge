import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
//import userReducer, {restoreSessionAction} from './userDuck';
import thunk from 'redux-thunk';
//import charsReducer,{getCharactersAction} from  './charsDuck';

let rootReducer = combineReducers({        //combination of reducer in an object
    user : userReducer,      //se tiene un solo reducer que es combiancion de varios
    characters : charsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    let store = createStore(
        rootReducer, 
        composeEnhancers( applyMiddleware(thunk))
    ); //crear store, recieves 3 params: reducer, initial_state and middlewares (apps extra que el store soportará)
    // primera llamada
    //getCharactersAction()(store.dispatch, store.getState);    //ejecutar acción devuelve funcion que necesita dispatch y getstate
    //restoreSessionAction()(store.dispatch);
    return store;
}