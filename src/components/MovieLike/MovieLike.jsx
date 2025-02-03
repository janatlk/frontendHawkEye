import React from 'react';
import { BiDislike, BiLike } from "react-icons/bi";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import './MovieLike.css'
function MovieLike({ movie, toggleLike, toggleDislike }) {
  return (
    <div>
      {movie.watched && (
        <div>
          <i
            onClick={toggleLike}
            className={'like'}
          >
            {movie.liked === 'like' ? <BiSolidLike size={20}/> : <BiLike size={20}/>}
          </i>

          <i
              className={'dislike'}
            onClick={toggleDislike}
          >
            {movie.liked === 'dislike' ? <BiSolidDislike size={20}/> : <BiDislike size={20} />}
          </i>
        </div>
      )}
    </div>
  );
}

export default MovieLike;
