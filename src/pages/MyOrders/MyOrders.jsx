import React, { useContext,useState } from "react";
import "./MyOrders.css"
import { AppContext } from '../../context/AppContext'

const MyOrders = () => {
    const {backendUrl, token}  =  useContext(AppContext);
    const [data, setState] = useState([])

  return (
    <div>MyOrders</div>
  )
}

export default MyOrders