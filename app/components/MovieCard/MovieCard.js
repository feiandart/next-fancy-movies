import styles from "./moviecard.module.scss";


const MovieCard = ({  movie, refProp }) => {
/*   const { setIsModalVisible, setMovieDetails } = useContext(globalContext); */

/*   const handleCardClick = () => {
    setIsModalVisible(true);
    setMovieDetails(movie);
  }; */

  return (
    <>
      <div
        ref={refProp}
        className={styles.movieCard} /* onClick={handleCardClick} */
      >
        <img src={movie.imageUrl} alt="movie-card-img" />
        <p>{movie.title}</p>
      </div>
    </>
  );
};

export default MovieCard;
