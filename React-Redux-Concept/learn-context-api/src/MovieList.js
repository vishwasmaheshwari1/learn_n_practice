import React, {useState, useContext} from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {


    //removing from here and adding it it to MovieContext.js in order to use contextApi hook
    // const [movies, setMovies] = useState([
    //     {
    //         name:'Harry Potter',
    //         price:'$10',
    //         id:'23124'
    //     },
    //     {
    //         name:'Game of Thrones',
    //         price:'$10',
    //         id:'2566124'
    //     },
    //     {
    //         name:'Inception',
    //         price:'$10',
    //         id:'23524'
    //     }
    // ]);



        //const value = useContext(MovieContext)

        const [movies, setMovies] = useContext(MovieContext)


        return (
            <div>
                { movies.map(movie => (

                    <Movie name={movie.name} price={movie.price} key={movie.id} />

                    //<li>{movie.name}</li>
                ))
                }
            </div>
            // <p>{value}</p>
            
        );


}

export default MovieList;