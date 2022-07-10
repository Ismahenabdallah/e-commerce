//import { createStore } from "redux";
import { legacy_createStore as createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Middleware from 'redux-thunk';

import Reducer from "./reducers";
import  throttle  from 'lodash.throttle';
import { combineReducers } from "redux";

  
// SAVE IN LOCALSTORAGE 
function loadState(){
    try {
        const state= localStorage.getItem(' cart ');
    if(state !== null ){
        return JSON.parse(state)
    }
    //JSON.parse tkou string ybadelhaaa  
    } catch (error) {
       console.error(error) 
    }
    
    return {
        cart :[]
    }
}
function saveState(state ){
 console.log('saveState ...')
   localStorage.setItem(' cart ',JSON.stringify(state)) 
//JSON.stringify ybadelhaaa string
}
const AppReducer =combineReducers({
    cart:Reducer

})
const store = createStore(AppReducer,loadState(),composeWithDevTools(applyMiddleware(Middleware)));
store.subscribe(throttle(()=>{
    // lehnaa ay changemment ya3mil talab l saveState ()
    //throttle ywa5er  fn saveState()
    // throttle ya3mil taleb mta3 fn mara wa7da kol 2 min 
    saveState(store.getState())
}),2000)
export default store ;