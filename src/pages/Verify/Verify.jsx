import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { backendUrl } = useContext(AppContext);
  console.log(backendUrl)

  const navigate = useNavigate()

  const verifyPayment = async()=>{
    const response = await axios.post(`${backendUrl}/api/order/verify`, {success, orderId})
    if(response.data.success){
        navigate('/myorders')
    }
    else{
        navigate("/")
    }
  }

  useEffect(()=>{
    verifyPayment()
  }, [])

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
