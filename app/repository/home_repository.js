import { v4 as uuidv4 } from "uuid";

const generateRandomCover = () => {
  const covers = [
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1000/1000",
  ];
  const randomCover = covers[Math.floor(Math.random() * covers.length)];
  return randomCover;
};

const generateRandomTitle = () => {
  const titles = [
    "Titanic",
    "Avatar",
    "Star Wars",
    "Eternal Sunshine of the Spotless Mind",
    "The Shawshank Redemption",
    "Inception",
    "The Godfather",
    "Pulp Fiction",
    "The Dark Knight",
    "The Matrix",
    "Fight Club",
    "Casablanca",
  ];
  const adjectives = [
    "Amazing",
    "Breathtaking",
    "Fantastic",
    "Incredible",
    "Magical",
    "Overwhelming",
    "Stunning",
    "Unforgettable",
    "Wonderful",
    "Awe-inspiring",
    "Enchanting",
    "Intriguing",
  ];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  return `${randomAdjective} ${randomTitle}`;
};

const generateRandomMovies = (count) => {
  const movies = [];
  for (let i = 0; i < count; i++) {
    const movie = {
      id: uuidv4(),
      title: generateRandomTitle(),
      imageUrl: generateRandomCover(),
    };

    movies.push(movie);
  }
  return count != 1 ? movies : movies[0];
};

 const homeData = {
   filmOfTheWeek: generateRandomMovies(1),
   popMovies: generateRandomMovies(10),
 };

export const getHomeSection = async () => {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve(homeData);
     }, 1000);
   });
 };