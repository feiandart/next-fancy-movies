import styles from "./moviecard.module.scss";


const MovieCard = ({  refProp }) => {
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
        <img src={`https://picsum.photos/1000/1000`} alt="movie-card-img" />
        <p>Titolo film</p>
      </div>
    </>
  );
};

export default MovieCard;
