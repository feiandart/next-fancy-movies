import Carousel from "./components/Carousel/Carousel";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import styles from "./page.module.scss";
import { getHomeSection } from "./repository/home_repository";

export default async function Home() {
 
  const homeSection = await getHomeSection();

  return (
    <main className={styles.mainContainer}>
      <HeroComponent movie={homeSection.filmOfTheWeek} />
      <section className={styles.carouselSection}>
        <Carousel movie={homeSection.popMovies} />
      </section>
    </main>
  );
}