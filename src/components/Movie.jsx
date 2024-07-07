import React, { useEffect, useState } from "react";

export default function Movie() {
  const [movieList, setMovielist] = useState([]);
  const getMovie = () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=a0c0d7e484a0f4517fc23ec04df1361b";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovielist(data.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>Movies</h1>
      {movieList.map((movie) => (
        <div
          style={{
            display: "inline-block",
            padding: "30px 10px",
            width: "250px",
            minHeight: "300px",
            background: "black",
            color: "white",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <p>{movie.title}</p>
          <small
            style={{
              background: "deepskyblue",
              padding: "5px 20px",
              color: "black",
              borderRadius: "30px",
            }}
          >
            View
          </small>
        </div>
      ))}
    </div>
  );
}
