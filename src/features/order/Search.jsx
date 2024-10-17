import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    function handleSearch(e) {
        e.preventDefault()

        if(!query) return
        navigate(`/order/${query}`)
        setQuery("")

    }
    return (
        <form onSubmit={handleSearch}>

        <input placeholder="Search for Order #" value={query} onChange={(e) => setQuery(e.target.value)} 
        className="px-4 py-2 rounded-full text-sm placeholder:text-stone-400 w-28 sm:w-64
        focus:outline-none focus:ring focus:ring-yellow-400 bg-yellow-300
        sm:focus:w-72
        focus:ring-opacity-50 transition-all duration-300" />
        </form>
    );
};

export default Search;