const MovieModal = ({ movie, onClose }) => {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/60 backdrop-blur-sm">
            <div className="z-10 bg-gray-900 rounded-lg overflow-hidden max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <img src={movie.image?.original} alt={movie.name} className="w-full h-64 object-cover" />

                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-white text-2xl font-bold">{movie.name}</h2>
                        <span onClick={onClose} className="text-red-500 cursor-pointer text-xl font-bold ml-4">✕</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                        ⭐ Rating: {movie.rating?.average || "N/A"} &nbsp;|&nbsp; 📅 Release: {movie.premiered?.split("-")[0] || "N/A"}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                        🎬 Genre: {movie.genres?.join(", ") || "N/A"}
                    </p>
                    <div>
                        <h3 className="text-white font-semibold mb-2">Overview:</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {movie.summary?.replace(/<[^>]*>/g, "") || "No description available."}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded-lg transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
            <div onClick={onClose} className="absolute inset-0"></div>
        </div>
    );
}

export default MovieModal