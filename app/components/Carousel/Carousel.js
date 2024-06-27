"use client";

import { useRef } from "react";
import styles from "./carousel.module.scss";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import MovieCard from "../MovieCard/MovieCard";

const Carousel = ({ movie = [] }) => {
  const carouselRef = useRef();
  const movieCardRef = useRef();

  const handleArrowClick = (type) => {
    const movieCardWidth = movieCardRef.current?.offsetWidth;

    const value =
      type === "left"
        ? carouselRef.current.scrollLeft - movieCardWidth
        : carouselRef.current.scrollLeft + movieCardWidth;

    carouselRef.current.scroll({
      top: 0,
      left: value,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.arrowsContainer}>
        <IoIosArrowDropleftCircle
          className={styles.genericIcon}
          onClick={() => {
            handleArrowClick("left");
          }}
        />
        <IoIosArrowDroprightCircle
          className={styles.genericIcon}
          onClick={() => {
            handleArrowClick();
          }}
        />
      </div>
      <div ref={carouselRef} className={styles.carousel}>
        {movie.map((movie, index) => {
          return (
            <MovieCard key={index} refProp={movieCardRef} movie={movie} />
            /*             <MovieCard
              
              title={movie.original_title}
              imgUrl={movie.backdrop_path}
              movie={movie}
              key={index}
            /> */
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
