import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { SearchMovies } from "../utils/FetchMovies";
import MovieCard from "../components/MovieCard";

const SearchResults = () => {
    const { query } = useParams();
    console.log(query)
    const [results, setResults] = useState([]);



    useEffect(() => {
        const getData = async () => {
            const data = await SearchMovies(query);
            setResults(data);
        };
        getData();
    }, [query]);



    return (
        <div className="min-h-screen bg-gray-900 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <Link
                    to="/movies"
                    className="text-yellow-500 hover:underline mb-6 inline-block"
                >
                    ← Back to Movies
                </Link>
                <h2 className="text-white text-2xl font-bold mb-6">
                    Results for "{query}"
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {results.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
