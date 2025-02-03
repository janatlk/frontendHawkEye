import { useState } from 'react'
import './App.css'
import MovieInput from './components/MovieInput/MovieInput.jsx';
import MovieList from './components/MovieList/MovieList.jsx';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [filter, setFilter] = useState('notWatched');
  const handleAddOrEditMovie = () => {
    if (movieName.trim() === "") return;
    if (editingIndex !== null) {
      const updatedMovies = [...movies];
      updatedMovies[editingIndex].name = movieName;
      setMovies(updatedMovies);
      setEditingIndex(null);
      } else {
        const Index = movies.length
        setMovies([...movies, {Indexx: Index,name: movieName, watched: false, liked: null}]);
      }
      setMovieName("");
    };

  const handleDeleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const handleEditMovie = (index) => {
    setMovieName(movies[index].name);
    setEditingIndex(index);
  };

  const handleCancelEditing = () => {
    setEditingIndex(null)
    setMovieName("");
  }

    const toggleWatched = (index) => {
      const updatedMovies = [...movies]
      updatedMovies[index].watched = !updatedMovies[index].watched;
      setMovies(updatedMovies)
    }
  const like = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].liked = updatedMovies[index].liked === 'like' ? null : 'like';
    setMovies(updatedMovies);
  };

  const dislike = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].liked = updatedMovies[index].liked === 'dislike' ? null : 'dislike';
    setMovies(updatedMovies);
  };

  return (
    <div className="container">
      <h1>Movie Tracker</h1>
    <MovieInput
      movieName={movieName}
      setMovieName={setMovieName}
      handleAddOrEditMovie={handleAddOrEditMovie}
      editingIndex={editingIndex}
      handleCancelEditing={handleCancelEditing}
      setFilter={setFilter}
      filter={filter}
    />
      <MovieList
        movies={movies.filter(movie => (filter === 'notWatched' ? !movie.watched : movie.watched))}
        handleEditMovie={handleEditMovie}  
        handleDeleteMovie={handleDeleteMovie} 
        toggleWatched={toggleWatched}
        like={like}
        dislike={dislike}/>
    </div>
  );
}
