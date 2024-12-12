import  React,{useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import PopUpMessage from "../../component/delatepopup/PopUpMessage";
import FormPopUp from "../../component/FormPopUp/FormPopUp";
export default function News({ newsdata, setNews }) {

  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const [open, setOpen] = useState(false);

  const [EditFormPopUP, setEditFormPopUP] =useState(false);

  const [editnewsdata,seteditnewsdata]=useState(null);

  const handleNewsDelete = (articleid) => {
    setOpen(true);
    setSelectedArticleId(articleid);
  };

  const handleNewsPopUPClose = () => {
    setOpen(false);
    setSelectedArticleId(null);
  };

  const handleDeleteNews = (articleid) => {
    setNews((prevNew) =>
      prevNew.filter((news) => news._id !== articleid)
    );
  };

  const handleEditFormPopUpOpen=(newsdata)=>{
      setEditFormPopUP(true);
      seteditnewsdata(newsdata);
  }

   const handleEditFormPopUpClose=()=>{
      setEditFormPopUP(false);
      seteditnewsdata(null);
  }
  return (
    <div className="container">
      <div className="row">
        {newsdata && newsdata.length > 0 ? (
          newsdata.map((data, index) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4"
              key={index}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="Article Image"
                  height="270"
                  image={`http://localhost:3000${data.cover}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.tag}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    className="py-2"
                  >
                    {data.title}
                  </Typography>
                  <Link
                    to={data.link}
                    className="text-black text-decoration-none"
                  >
                    Know more <ArrowForwardSharpIcon className="ps-1" />
                  </Link>
                </CardContent>
                <CardActions>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditFormPopUpOpen(data)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleNewsDelete(data._id)}
                  >
                    Delete
                  </button>
                  {open && (
                    <PopUpMessage
                      open={open}
                      onClose={handleNewsPopUPClose}
                      articleId={selectedArticleId}
                      type={"news"}
                      onDelete={handleDeleteNews}
                    />
                  )}
                  <FormPopUp
                    open={EditFormPopUP}
                    onClose={handleEditFormPopUpClose}
                    type={"news"}
                    editnewsdata={editnewsdata}
                  />
                </CardActions>
              </Card>
            </div>
          ))
        ) : (
          <Typography>No News available.</Typography>
        )}
      </div>
    </div>
  );
}
