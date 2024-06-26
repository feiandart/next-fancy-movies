
import styles from "./herocomponent.module.scss";

const HeroComponent = () => {

/*   const handleButtonClick = () => {
      setIsModalVisible(true);
      setMovieDetails(movie);
  }; */

  return (
    <div className={styles.heroContainer}>
      <h2>Titolo film</h2>
      <img src={`https://picsum.photos/1000/300`} alt="hero-img" />
      <button /* onClick={handleButtonClick} */ className={styles.heroBtn}>
        Discover more
      </button>
    </div>
  );
};

export default HeroComponent;
