import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieCard = ({ movie }) => {
    const [click, setClick] = useState(false);

    return (
        <div>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                    src={movie.image?.medium}
                    alt={movie.name}
                    className="w-full h-72 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-white font-semibold text-lg mb-2 truncate">
                        {movie.name}
                    </h3>
                    <button
                        onClick={() => setClick(true)}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded-lg transition-colors"
                    >
                        See Details
                    </button>
                </div>
            </div>

            {click && <MovieModal movie={movie} onClose={() => setClick(false)} />}
        </div>
    );
}

export default MovieCard