import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import searchReducer, {getSearchAction}  from './searchDuck';
import thunk from 'redux-thunk'; // to do backend request
//import charsReducer,{getCharactersAction} from  './charsDuck';

let rootReducer = combineReducers({        //combination of reducer in an object
    search : searchReducer      //se tiene un solo reducer que es combiancion de varios
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){ // crear store
    let store = createStore( //variable store
        rootReducer, 
        composeEnhancers( applyMiddleware(thunk))
    ); //crear store, recieves 3 params: reducer, initial_state and middlewares (apps extra que el store soportará)
    // primera llamada
    
    
    return store;
}