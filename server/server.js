var express = require("express");
var cors = require("cors");
var app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json())


var MovieDetails = [
  {
    id: 1,
    name: "OneHello",
    rating: "6",
    releaseDate: "25.5.2022",
  },
  {
    id: 2,
    name: "Two",
    rating: "7",
    releaseDate: "25.4.2022",
  },
  {
    id: 3,
    name: "Three",
    rating: "8",
    releaseDate: "2.5.2021",
  },
  {
    id: 4,
    name: "Four",
    rating: "6",
    releaseDate: "24.5.2019",
  },
  {
    id: 5,
    name: "Five",
    rating: "9",
    releaseDate: "17.5.2012",
  },
  {
    id: 6,
    name: "Six",
    rating: "9",
    releaseDate: "31.12.2010",
  },
  {
    id: 7,
    name: "OneHello",
    rating: "6",
    releaseDate: "25.5.2022",
  },
  {
    id: 8,
    name: "Two",
    rating: "7",
    releaseDate: "25.4.2022",
  },
  {
    id: 9,
    name: "Three",
    rating: "8",
    releaseDate: "2.5.2021",
  },
  {
    id: 10,
    name: "Four",
    rating: "6",
    releaseDate: "24.5.2019",
  },
  {
    id: 11,
    name: "Five",
    rating: "9",
    releaseDate: "17.5.2012",
  },
  {
    id: 12,
    name: "Six",
    rating: "9",
    releaseDate: "31.12.2010",
  },
  {
    id: 13,
    name: "OneHello",
    rating: "6",
    releaseDate: "25.5.2022",
  },
  {
    id: 14,
    name: "Two",
    rating: "7",
    releaseDate: "25.4.2022",
  },
  {
    id: 15,
    name: "Three",
    rating: "8",
    releaseDate: "2.5.2021",
  },
  {
    id: 16,
    name: "Four",
    rating: "6",
    releaseDate: "24.5.2019",
  },
  {
    id: 17,
    name: "Five",
    rating: "9",
    releaseDate: "17.5.2012",
  },
  {
    id: 18,
    name: "Six",
    rating: "9",
    releaseDate: "31.12.2010",
  },
  {
    id: 19,
    name: "OneHello",
    rating: "6",
    releaseDate: "25.5.2022",
  },
  {
    id: 20,
    name: "Two",
    rating: "7",
    releaseDate: "25.4.2022",
  }
];


//ROUTE DEFINE
app.post("/", async function (req, res) {
  try {
   
    let newMovie = {
      id: MovieDetails.length + 1,
      name: req.body.name,
      rating: req.body.rating,
      releaseDate: req.body.releaseDate
    }
    MovieDetails = [...MovieDetails, newMovie]

    res.status(200).send({
      data: MovieDetails,
      message: "POST request!",
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/", async function (req, res) {
  try {
    res.status(200).send({
      data: MovieDetails,
      message: "GET request!",
    });
  } catch (error) {
    res.send("ERROR");
  }
});

var PORT = 3001;
app.listen(PORT, function () {
  console.log("Server is running on PORT:", PORT);
});
