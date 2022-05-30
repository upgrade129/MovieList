import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";
import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';


function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [movieRatings, setMovieRatings] = useState("");
  const [movieReleaseDate, setMovieReleaseDate] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let getRes = await axios.get("http://localhost:3001");
    console.log("getResponse", getRes);
    setMovieList(getRes.data.data);
  };

  const movies = movieList.map((movie) => (
    <Movie
      id={movie.id}
      name={movie.name}
      rating={movie.rating}
      releaseDate={movie.releaseDate}
    />
  ));

  const resetForm = () => {
    setMovieName("");
    setMovieRatings("");
    setMovieReleaseDate("");
  };

  const addMovie = (e) => {
    let movieDetail = {
      name: movieName,
      rating: movieRatings,
      releaseDate: movieReleaseDate,
    };
    axios
      .post("http://localhost:3001", movieDetail)
      .then((response) => {
        setMovieList(response.data.data);
        alert("Movie Details added sucessfully")
      })
    resetForm();
  };

  return (
    <div className="container">
      <h1> Movies </h1>
      <TextField
        className="TextField"
        id="outlined-basic"
        label="Movie Name"
        variant="outlined"
        type="text"
        placeholder="Movie Name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <br></br>
      <TextField
        className="TextField"
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        type="text"
        placeholder="Rating"
        value={movieRatings}
        onChange={(e) => setMovieRatings(e.target.value)}
      />
      <br></br>

      <TextField
        className="TextField"
        id="outlined-basic"
        label="Release Data"
        variant="outlined"
        type="text"
        placeholder="Release Data"
        value={movieReleaseDate}
        onChange={(e) => setMovieReleaseDate(e.target.value)}
      />
      <br></br>
      <Button variant="contained" onClick={(e) => addMovie()}>
        ADD
      </Button>

      {movies}
    </div>
  );
}

export default App;
