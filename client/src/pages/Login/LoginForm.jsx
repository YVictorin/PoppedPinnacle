import { useState, useEffect, useRef, useReducer } from 'react';
import useFetchData from "../../hooks/useFetchData"
import Form from '../../components/ui/Form/Form';

const LoginForm = () => {
    const URLS = {
        LOGIN: "https://poppedpinnacle-1.onrender.com/login",
      };

      const [ 
        data, 
        isLoading, 
        isError, 
        error, 
        postedData, 
        setPostedData
    ] = useFetchData({ url: URLS.LOGIN, method: "POST" });

    return (
        <Form/>
    );
}

export default LoginForm;
