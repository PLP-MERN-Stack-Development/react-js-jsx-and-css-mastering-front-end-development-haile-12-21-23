const API_KEY='42fcfccc4a83dfb53879e9a06393e17b';

export const getWeatherData=async(city)=>{
    const response=await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
       throw new Error ("City not found")
    }
     return response.json();
}