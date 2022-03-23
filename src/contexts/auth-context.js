import {createContext} from "react"
import { useReducer } from "react"
import { useContext } from "react/cjs/react.production.min"

const authContext = createContext(null)

// const authReducer = (authState,authAction)=>{
//     switch(authAction.type){
//         default:
//             return authState
//     }
// }

// const [authState,authDispatch] = useReducer(authReducer,{

// })

const AuthProvider =({children})=>{
    const [authState,setAuthState] = useState({isAuth:false,userInfo:null})
    return(
        <authContext.Provider value={{authState,setAuthState}}>
            {children}
        </authContext.Provider>
    )
}

const useAuth = ()=>useContext(authContext)

export {useAuth,AuthProvider}