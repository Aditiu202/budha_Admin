import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import axios from "axios";
export default function ContactFormPop({ open, onClose, editcontactdata }) {
  const [contactuser, setcontactuser] = React.useState({
    name: "",
    phoneNo: "",
    email: "",
    industryName: "",
    howDidYouHear: "",
    queryRelated: "",
    query: "",
    maplink: "",
  });

  useEffect(() => {
    if (editcontactdata && editcontactdata._id !== contactuser._id) {
      setcontactuser({
        name: editcontactdata.name || "",
        phoneNo: editcontactdata.phoneNo || "",
        email: editcontactdata.email || "",
        industryName: editcontactdata.industryName || "",
        howDidYouHear: editcontactdata.howDidYouHear || "",
        queryRelated: editcontactdata.queryRelated || "",
        query: editcontactdata.query || "",
        maplink: editcontactdata.maplink || "",
      });
    }
  }, [editcontactdata]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcontactuser({...contactuser, [name]: value });
  
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(contactuser); 
    try {
       if(editcontactdata ){
        const response = await axios.post(
          "http://localhost:3000/admin/contact/create",
          contactuser
        );
        console.log("Contact created:", response.data);
        onClose();
       
       }
       else{
            const response = await axios.post(
            "http://localhost:3000/admin/contact/create",
             contactuser
           );
            console.log("Contact created:", response.data)
            onClose();
         }
    } 
    catch (error) {
      console.error("Error creating contact:", error.message);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form className="d-flex flex-column p-3" onSubmit={handleOnSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="link" className="form-label">
              Phone NO
            </label>
            <input
              type="text"
              name="phoneNo"
              onChange={handleChange}
              placeholder="Enter Phone No"
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Enter Email"
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="industryName" className="form-label">
              Industy
            </label>
            <input
              type="text"
              name="industryName"
              onChange={handleChange}
              placeholder="Enter Industry"
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="howDidYouHear" className="form-label">
              How did you get to know about us?
            </label>
            <input
              type="text"
              name="howDidYouHear"
              onChange={handleChange}
              placeholder="How did you get to know about us? "
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="queryRelated" className="form-label">
              Query Related to
            </label>
            <input
              type="text"
              name="queryRelated"
              onChange={handleChange}
              placeholder="Enter queryRelated "
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="query" className="form-label">
              Query
            </label>
            <input
              type="text"
              name="query"
              onChange={handleChange}
              placeholder="Enter query "
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="maplink" className="form-label">
              Map Link
            </label>
            <input
              type="text"
              name="maplink"
              onChange={handleChange}
              placeholder="Enter  maplink "
              className="form-control"
            />
          </div>

          <DialogActions className="d-flex justify-content-center pb-3">
            <button className="btn btn-danger" type="submit">
              Submit
            </button>
            <button className="btn btn-primary" onClick={onClose}>
              Cancel
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}





