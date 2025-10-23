const WeatherCard=({data})=>{
    const {name,main,weather}=data;
    const icon=weather?.[0]?.icon;
    const desc=weather?.[0]?.description;

    return (
        <div className="bg-white/20 backdrop-blur-md p-6 rounder-2xl text-center shadow-lg text-white w-80">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
             alt={desc}
             className="mx-auto"
             />
             <p className="text-4xl font-bold"> {main.temp}</p>
             <p className="capitalize text-lg"> {desc}</p>
             <div className="mt-2">
                <p>Humidity:{main.humidity}%</p>
                <p>Feels:{main.feels_like}°C</p>
             </div>
<p></p>
        </div>
    )
}
export default WeatherCard;