export const SearchMovies = async (query) => {
    try {
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        if (!res.ok) {
            throw new Error("Something went wrong!!");
        }
        const data = await res.json();
        return data.map((item) => item.show);
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export const AllMovies = async () => {
    try {
        const res = await fetch("https://api.tvmaze.com/shows");
        if (!res.ok) {
            throw new Error("Something went wrong!!");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
        return [];
    }
};
