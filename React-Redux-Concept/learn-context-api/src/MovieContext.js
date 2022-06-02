import React, {useState, createContext} from 'react';

//creating context
export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name:'Harry Potter',
            price:'$10',
            id:'23124'
        },
        {
            name:'Game of Thrones',
            price:'$10',
            id:'2566124'
        },
        {
            name:'Inception',
            price:'$10',
            id:'23524'
        }
    ]);

    return (
        
        <MovieContext.Provider value={[movies, setMovies]} >
                {props.children}
        </MovieContext.Provider>

    );

}

// export default is ised when we need to only export single function or component
//won't be using below export
// export default MovieProvider