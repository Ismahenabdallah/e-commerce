import { ADD, CLEAR, REMOVE } from "../types";

export default function cartReduer(state, action){

    switch(action.type){
        
        case ADD: { 
           
            return  [
                ...state,
                {
                    product: action.prod_info,
                    
                }
            ]
            }
           
        
        case REMOVE: {
            const item_index = action.index;
            const new_state = [...state];

            /*
            reload page yetfsa5 kol chy
            delete new_state.cart[item_index];
            */
           // save in localstorage 
           new_state.splice(item_index,1);
           /// heka yetfsa5 el 3onser w index mta3ou 
              return new_state;
        }
       

        case CLEAR: {
            let new_state = [...state];
          
            // eslint-disable-next-line no-const-assign
            new_state = [];
            return new_state;
        }

        default: {
            if(state===undefined)
                return [];
                return state;
          
        }
           
    }
}