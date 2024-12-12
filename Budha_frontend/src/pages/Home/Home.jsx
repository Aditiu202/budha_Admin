import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="270"
                image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  hhvgcf
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  njjgbhfgtdc
                </Typography>
              </CardContent>
              <CardActions>
                <button className="btn btn-danger">Edit</button>
                <button className="btn btn-primary">Delete</button>
              </CardActions>
            </Card>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="270"
                image="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  jkhjv
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  hgff
                </Typography>
              </CardContent>
              <CardActions>
                <button className="btn btn-danger">Edit</button>
                <button className="btn btn-primary">Delete</button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
