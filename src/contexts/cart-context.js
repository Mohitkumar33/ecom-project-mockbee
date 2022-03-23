import { createContext, useContext, useReducer } from "react/cjs/react.production.min";

const cartContex = createContext(null)

const cartReducer = (cartState,cartAction) =>{
    switch(cartAction.type){
        case "ADD_TO_CART":
            return [...cartState,cartAction.payload]
        case "REMOVE_FROM_CART":
            return cartState.filter((item)=>item.temp_id!==cartAction.payload.temp_id)
        default:
            return cartState
    }
}

const CartProvider = ({children})=>{
    const [cartState,cartDispatch] = useReducer(cartReducer,[])
    return(
        <cartContex.Provider value = {{cartState,cartDispatch}}>
            {children}
        </cartContex.Provider>
        
    )
}

const useCart = ()=>useContext(cartContex)

export {useCart, CartProvider}