import styles from './styles.module.css'
import MovieLike from "../MovieLike/MovieLike.jsx";
const MovieList = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.movies.map((movie, index) => (
        <div key={index}>
          {`${index + 1}. ${movie.name}`}
          <div className={styles.buttonsWrapper}>


            <MovieLike movie={movie} toggleLike={()=> props.like(index)} toggleDislike={()=>props.dislike(index)}></MovieLike>


            <input type={'checkbox'} onChange={() => props.toggleWatched(movie.Indexx)} checked={movie.watched}/>
            <button className={styles.editButton} onClick={() => props.handleEditMovie(index)}>Edit</button>
            <button className={styles.deleteButton} onClick={() => props.handleDeleteMovie(index)}>Delete</button>


          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;