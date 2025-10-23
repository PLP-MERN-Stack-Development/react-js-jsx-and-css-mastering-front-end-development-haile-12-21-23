import {useState} from 'react';
import { userFetchWeather} from '../hooks/useFetchWeather';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Loader from '../components/Loader';

const Home=()=>{
    const [city, setCity]=useState("Addis Ababa");
    const {data, loading,error}=userFetchWeather(city);

    return(
<div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-white p-6'>
    <h1 className='text-3xl font-semibold mb-4'>🌥️ Weather Dashboard</h1>
    <SearchBar city={city} setCity={setCity} />
    {loading && <Loader />}
    {error && <p className='text-red-300'> {error}</p>}
    {data && !loading && !error && <WeatherCard data={data} />}
</div>
    );
};
export default Home;