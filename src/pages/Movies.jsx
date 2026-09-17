import { useEffect, useState } from "react";
import { AllMovies } from "../utils/FetchMovies";
import MovieCard from "../components/MovieCard";

const Movies = () => {
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await AllMovies();
            setAllMovies(data);
        };
        getData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 py-10 px-6">
            <div className="max-w-7xl mx-auto">
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
