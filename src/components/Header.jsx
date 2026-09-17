import { Link } from "react-router";

export default function Header() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold">
                    <span>🎬</span>
                    <span>MovieExplorer</span>
                </Link>

                <Link
                    to="/movies"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-5 py-2 rounded-lg transition-colors"
                >
                    Movies
                </Link>
            </div>
        </nav>
    );
}
