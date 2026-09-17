import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AllMovies } from "../utils/FetchMovies";
import MovieCard from "../components/MovieCard";

const Movies = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            const data = await AllMovies();
            setAllMovies(data);
        };
        getData();
    }, []);



    const handleSearch = () => {
        if (search.trim()) {
            navigate(`/search/${search}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-3 mb-8">
                    <input
                        type="text"
                        placeholder="🔍 Search for a movie..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        className="flex-1 bg-gray-800 text-white placeholder-gray-400 px-5 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                        Search
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {allMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Movies;
