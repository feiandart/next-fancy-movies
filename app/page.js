import Carousel from "./components/Carousel/Carousel";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import styles from "./page.module.scss";
import { v4 as uuidv4 } from "uuid";

  const popMovies = Array.from({ length: 10 }, (_, i) => {
  return {
    id: uuidv4(),
    title: "Robe",
    imageUrl: "nomi",
  };
  });
  
  const homeData = {
    filmOfTheWeek: {
      id: 1,
      title: "Titanic",
      imageUrl: "https://picsum.photos/1000/1000",
    },
    popMovies: popMovies
  };

export default function Home() {



  return (
    <main className={styles.mainContainer}>
      <HeroComponent movie={homeData.filmOfTheWeek} />
      <section className={styles.carouselSection}>
        <Carousel movie={homeData.popMovies} />
      </section>
    </main>
  );
}
