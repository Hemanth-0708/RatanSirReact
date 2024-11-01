import MovieCard from "./MovieCard"

function MovieGrid()
{
    const movies = [
        {title : "THE 100" , description : "100 people go to earth after 10000years before that they are staying in space ",year :2000},
        {title : "GOT" , description : "There are several kingdoms they fight for the Irone throne so they can rule all other kingdoms ",year :2002},
        {title : "Stranger Things" , description :  "upside down world",year :2007},
        {title : "X-men" , description :  "he is a Mutant he got powers",year :2007},
        {title : "MEN IN BLACK" , description :  "AGENTS",year :2008},
    ]
       
        const res = movies.map((movie,index)=>
       <li key = {index}>title:{movie.title} description:{movie.description} year:{movie.year}</li>);

        return(
           <>
            <MovieCard movieobj = {res} />
           </> 
            
        )

    
    }
    export default MovieGrid;
