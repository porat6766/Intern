"use client"

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const MoviePageDetails = () => {
    const [movie, setMovie] = useState<any>(null);
    const { id } = useParams()

    useEffect(() => {
        if (!id) return;

        const fetchMovie = async () => {
            try {
                const response = await fetch(`/api/movies/${id}`);


                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }


                const text = await response.text();
                if (!text) {
                    throw new Error("Response is empty");
                }

                const data = JSON.parse(text);
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie:", error);
            }
        };


        fetchMovie();
    }, [id]);

    if (!movie) return <p className="text-center text-white">Loading...</p>;

    return (
        <div className="flex flex-col items-center p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-[300px] h-auto rounded-lg shadow-lg mb-6"
            />

            <div className="text-center max-w-2xl">
                <p className="text-lg mb-2"><strong>תאריך יציאה:</strong> {movie.release_date}</p>
                <p className="text-lg mb-2"><strong>דירוג:</strong> ⭐ {movie.vote_average}</p>
                <p className="text-lg mt-4">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MoviePageDetails;
