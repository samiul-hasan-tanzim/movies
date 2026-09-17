export default function MovieCard({ movie }) {
    const year = movie.premiered ? movie.premiered.split("-")[0] : "N/A";
    const rating = movie.rating?.average || "N/A";

    return (
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
                <p className="text-gray-400 text-sm mb-3">
                    ⭐ {rating} &nbsp;•&nbsp; 📅 {year}
                </p>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded-lg transition-colors">
                    See Details
                </button>
            </div>
        </div>
    );
}
