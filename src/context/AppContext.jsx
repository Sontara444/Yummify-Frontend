import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  axios.defaults.withCredentials = true;

  const backendUrl = "https://yummify-backend.onrender.com";
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);

  const [cartItems, setCartItems] = useState({});
  const [food_list, setFood_list] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  // console.log(token)

  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get(`${backendUrl}/api/product/get-product`);

  //     if (response.data.success) {
  //       setFood_list(response.data.products);
  //     } else {
  //       toast.error("Error");
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  const fetchProducts = async () => {
    const response = await axios.get(`${backendUrl}/api/product/get-product`);
    setFood_list(response.data.products);
  };

  const loadCartData = async(token)=>{
    const response = await axios.get(`${backendUrl}/api/cart/get`, {}, {withCredentials: true})
    setCartItems(response.data.cartData || {})

  }

  useEffect(() => {
    async function loadData() {
      await fetchProducts();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
         await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData()
  }, []);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(
        `${backendUrl}/api/cart/add`,
        { itemId },
        { withCredentials: true }
      );
    }
  };

  

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (token) {
      await axios.post(
        `${backendUrl}/api/cart/remove`,
        { itemId },
        { withCredentials: true }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);

        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/auth/is-auth");
      if (data.success) {
        setIsLoggedin(true);
        getUserData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/data");

      data.success ? setUserData(data.userData) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getAuthState();
  }, []);

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
    getAuthState,
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    token,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
