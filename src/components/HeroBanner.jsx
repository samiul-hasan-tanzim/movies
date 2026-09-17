import { useState, useEffect } from "react";
import { Link } from "react-router";
import heroImg1 from "../assets/heroimg1.jpeg";
import heroImg2 from "../assets/heroimg2.jpeg";
import heroImg3 from "../assets/heroimg3.jpeg";

const images = [heroImg1, heroImg2, heroImg3];

export default function HeroBanner() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative text-white overflow-hidden">
            {images.map((img, index) => (
                <div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                    style={{
                        backgroundImage: `url(${img})`,
                        opacity: index === current ? 1 : 0,
                    }}
                />
            ))}

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    DISCOVER MOVIES
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
                    Explore and discover your favorite movies from around the world.
                </p>
                <Link
                    to="/movies"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-lg text-lg transition-colors"
                >
                    Explore Now
                </Link>
            </div>
        </section>
    );
}
