import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { Link } from "react-router-dom";
import PopUpMessage from "../../component/delatepopup/PopUpMessage";
import ContactFormPop from "../../component/contactFormPopUp/ContactFormPop";
const Contact = ({ contactdata, setcontact }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedArticleId, setSelectedArticleId] = React.useState(null);
 const [openEditForm, setOpenEditForm] = React.useState(false);
const [editcontactdata, seteditcontactdata] = useState(null);

  const handleClickOpen = (articleId) => {
    setSelectedArticleId(articleId);
    setOpen(true);
  };

  const handleDeleteContact = (articleId) => {
    setcontact((prevContacts) =>
      prevContacts.filter((contact) => contact._id !== articleId)
    );
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedArticleId(null);
  };

  const handleEdit = (data) => {
    setOpenEditForm(true);
    seteditcontactdata(data);
  };

 const handleEditClose=()=>{
   setOpenEditForm(false);
   seteditcontactdata(null);
 }

  return (
    <div className="container py-3">
      <div className="row">
        {contactdata && contactdata.length > 0 ? (
          contactdata.map((data) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
              key={data._id}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <p>{data.name}</p>
                  <p>{data.phoneNo}</p>
                  <p>{data.email}</p>
                  <p>{data.industryName}</p>
                  <p>{data.howDidYouHear}</p>
                  <p>{data.queryRelated}</p>
                  <p>{data.query}</p>
                  <Link
                    to={data.maplink}
                    className="text-black text-decoration-none"
                  >
                    Map <ArrowForwardSharpIcon className="ps-1" />
                  </Link>
                </CardContent>
                <CardActions>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(data)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleClickOpen(data._id)}
                  >
                    Delete
                  </button>
                </CardActions>
              </Card>
            </div>
          ))
        ) : (
          <p>No Contact Details Available</p>
        )}
      </div>
      {open && (
        <PopUpMessage
          open={open}
          onClose={handleClose}
          articleId={selectedArticleId}
          onDelete={handleDeleteContact}
          type="contact"
        />
      )}
      <ContactFormPop
        open={openEditForm}
        onClose={handleEditClose}
        editcontactdata={editcontactdata}
      />
    </div>
  );
};

export default Contact;
