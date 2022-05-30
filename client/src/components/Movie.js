import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Movie(props) {
  return (
    <div className="movie">
      <Card key={props.id} sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            MovieName - {props.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Ratings - {props.rating}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            RealisedDate - {props.releaseDate}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
