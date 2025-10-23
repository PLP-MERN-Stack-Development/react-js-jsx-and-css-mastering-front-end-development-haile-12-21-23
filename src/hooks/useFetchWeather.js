/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react';

import { getWeatherData } from '../api/weatherApi';

export const userFetchWeather=(city)=>{
    const [data,setData]=useState(null);
    const [loading, setLoading]=useState(false);
    const [error,setError]=useState("");

    useEffect(()=>{
        if (!city) return ;
        setLoading(true);
        setError("");
        getWeatherData(city)
        .then((res)=>setData(res))
        .catch(()=>setError("City not found"))
        .finally(()=>setLoading(false));


    },[city]);
    return {data,loading,error};
}