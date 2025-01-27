import axios from "axios";
import {  createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import {food_list} from '../assets/assets'

export const AppContext = createContext()

export const AppContextProvider = (props)=>{
    axios.defaults.withCredentials = true;

    const backendUrl = process.env.REACT_APP_BACKEND_URL
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [userData, setUserData] = useState(false)


    const [cartItems, setCartItems] = useState({})
    console.log("cartitems", cartItems)

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]: 1}))
        }
        else{
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

        }

    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] -1}))

    }


    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    

    const getAuthState = async()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/auth/is-auth')
            if(data.success){
                setIsLoggedin(true)
                getUserData()
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }
    

    const getUserData = async()=>{

        try {
        const {data} = await axios.get(backendUrl + '/api/user/data')

        data.success ? setUserData(data.userData) : toast.error(data.message)
            
        }catch (error) {
            toast.error(error.message)
        }
        

    }

    
 
    useEffect(()=>{
        getAuthState()
    },[])


    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        getUserData,
        getAuthState,
        food_list,
        cartItems, setCartItems,
        addToCart,
        removeFromCart,
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

