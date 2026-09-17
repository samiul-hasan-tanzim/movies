import { useEffect, useState } from "react";
import { AllMovies } from "../utils/FetchMovies";


const Movies = () => {
    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await AllMovies();
            setAllMovies(data);
        };
        getData();
    }, []);
    console.log(allMovies)


    return (
        <div>
            Movies
        </div>
    );
};

export default Movies;