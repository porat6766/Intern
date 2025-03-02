"use client";

import MovieCard from "@/app/Components/MovieCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("/api/movies");
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    const moveToMoviePage = (id: string) => {
        router.push(`/dashboard/movies/${id}`);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {movies.map((movie: { id: string; title: string; release_date: string; poster_path: string }) => (
                <div key={movie.id} onClick={() => moveToMoviePage(movie.id)} className="cursor-pointer">
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
};

export default MoviePage;
