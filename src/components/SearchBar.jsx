const SearchBar=({city, setCity})=>{
    return (
        <div className="flex gap-2 mb-6">
            <input type="text"
            value={city}
            onChange={(e)=>setCity(e,EventTarget.value)}
            placeholder="Enter city name.."
            className="p-2 rounded-md text-gray-700 w-64" />
        </div>
    );
};
export default SearchBar;