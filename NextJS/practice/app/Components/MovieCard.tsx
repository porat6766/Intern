import React from 'react'

const MovieCard = ({ movie }: { movie: { id: string, title: string, release_date: string, poster_path: string } }) => {
    return (
        <div
            key={movie.id}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-lg"
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
            <p className="text-sm opacity-75">{movie.release_date}</p>
        </div>
    )
}

export default MovieCard
