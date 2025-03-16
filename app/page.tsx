import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Navbar from "@/components/Navbar";
import MainBoard from "@/components/MainBoard";
import MovieRow from "@/components/MovieRow";
import Footer from "@/components/Footer";

const avengersMovies = [
  {
    title: "Avengers: Endgame (2019)",
    videoUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    genre: "Action/Sci-Fi",
  },
  {
    title: "Avengers: Infinity War (2018)",
    videoUrl: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    genre: "Action/Sci-Fi",
  },
  {
    title: "The Avengers (2012)",
    videoUrl: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: "Action/Sci-Fi",
  },
  {
    title: "Avengers: Age of Ultron (2015)",
    videoUrl: "https://www.youtube.com/watch?v=tmeOjFno6Do",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
    genre: "Action/Sci-Fi",
  },
  {
    title: "Spider-Man: No Way Home (2021)",
    videoUrl: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    genre: "Action/Adventure",
  },
  {
    title: "Black Panther (2018)",
    videoUrl: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
    genre: "Action/Fantasy",
  },
  {
    title: "Doctor Strange in the Multiverse of Madness (2022)",
    videoUrl: "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
    genre: "Fantasy/Adventure",
  },
  {
    title: "Thor: Love and Thunder (2022)",
    videoUrl: "https://www.youtube.com/watch?v=Go8nTmfrQd8",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genre: "Action/Comedy",
  },
];

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

  const [featuredMovie, ...moreMovies] = avengersMovies;

  return (
    <>
      <Navbar />
      <MainBoard movie={featuredMovie} />
      <MovieRow title="Marvel Cinematic Universe" movies={moreMovies} />
      <Footer />
    </>
  );
};

export default Home;
