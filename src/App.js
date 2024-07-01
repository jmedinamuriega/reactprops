import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', details: 'A mind-bending thriller by Christopher Nolan.' },
        { title: 'The Matrix', genre: 'Action', details: 'A hacker discovers the true nature of reality.' },
        { title: 'Interstellar', genre: 'Sci-Fi', details: 'A journey to save mankind through space and time.' }
    ]);


    const [visibleDetails, setVisibleDetails] = useState({});


    const [showAction, setShowAction] = useState(false);


    const toggleDetails = (index) => {
        setVisibleDetails((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };


    const removeMovie = (index) => {
        setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
    };


    const toggleView = () => {
        setShowAction((prevShowAction) => !prevShowAction);
    };

    return (
        <div>
            <h1>Favorite Movies</h1>
            <button onClick={toggleView}>
                {showAction ? 'Show All Movies' : 'Show Action Movies'}
            </button>
            <ul>
                {movies
                    .filter((movie) => !showAction || movie.genre === 'Action')
                    .map((movie, index) => (
                        <li key={index}>
                            <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                                {movie.title}
                            </span>
                            {visibleDetails[index] && <p>{movie.details}</p>}
                            <button onClick={() => removeMovie(index)}>Remove</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MoviesList;
