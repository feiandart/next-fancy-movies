
import styles from "./herocomponent.module.scss";

const HeroComponent = ({movie}) => {

/*   const handleButtonClick = () => {
      setIsModalVisible(true);
      setMovieDetails(movie);
  }; */

  return (
    <div className={styles.heroContainer}>
      <h2>{movie.title}</h2>
      <img src={movie.imageUrl} alt="hero-img" />
      <button /* onClick={handleButtonClick} */ className={styles.heroBtn}>
        Discover more
      </button>
    </div>
  );
};

export default HeroComponent;
