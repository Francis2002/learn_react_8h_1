import { useNavigate } from "react-router";

const MovieCard = ({movie}) => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        navigate(`/course/${movie.Title}`);
    }
    return (
        <div className="movie" onClick={handleClick}>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.placeholder.com/400'} alt={movie.Title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;