import { CLEAR,ADD, REMOVE   } from "../types";

export function clearCart(){
    return {
        type: CLEAR
    }
}
export function AddToCart(prod_info){
    return{
        type:ADD,
        prod_info,
        


    }
   
}
export function RemoveCart(index){
    return {
        type: REMOVE,
        index
    }
}