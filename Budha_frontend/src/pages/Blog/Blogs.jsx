import  React,{useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import PopUpMessage from "../../component/delatepopup/PopUpMessage";
import FormPopUp from "../../component/FormPopUp/FormPopUp";
export default function Blogs({ blogsdata, setblogs }) {

  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const [open, setOpen] = useState(false);

  const [EditFormPopUP, setEditFormPopUP] = useState(false);

  const [editnewsdata, seteditnewsdata] = useState(null);

   const handleBlogsDelete = (articleid) => {
     setOpen(true);
     setSelectedArticleId(articleid);
   };

   const handleBlogsPopUPClose = () => {
     setOpen(false);
     setSelectedArticleId(null);
   };

    const handleDeleteBlogs = (articleid) => {
      setblogs((prevNew) => prevNew.filter((news) => news._id !== articleid));
    };

    const handleEditFormPopUpOpen = (newsdata) => {
      setEditFormPopUP(true);
      seteditnewsdata(newsdata);
    };

    const handleEditFormPopUpClose = () => {
      setEditFormPopUP(false);
      seteditnewsdata(null);
    };

  return (
    <>
      <div className="container">
        <div className="row">
          {blogsdata && blogsdata.length > 0 ? (
            blogsdata.map((blogsdatas, index) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4"
                key={index}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="Article Image"
                    height="270"
                    image={`http://localhost:3000${blogsdatas.cover}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {blogsdatas.tag}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                      className="py-2"
                    >
                      {blogsdatas.title}
                    </Typography>
                    <Link
                      to={blogsdatas.link}
                      className="text-black text-decoration-none"
                    >
                      Know more <ArrowForwardSharpIcon className="ps-1" />
                    </Link>
                  </CardContent>
                  <CardActions>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditFormPopUpOpen(blogsdatas)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleBlogsDelete(blogsdatas._id)}
                    >
                      Delete
                    </button>
                    {open && (
                      <PopUpMessage
                        open={open}
                        onClose={handleBlogsPopUPClose}
                        articleId={selectedArticleId}
                        type={"blogs"}
                        onDelete={handleDeleteBlogs}
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
    </>
  );
}
