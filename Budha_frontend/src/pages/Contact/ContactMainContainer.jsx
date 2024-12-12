import React, { useState, useEffect } from "react";
import style from "../Contact/ContactMainContainer.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Contact from "./Contact";
import ContactFormPop from "../../component/contactFormPopUp/ContactFormPop";
import axios from "axios";

const ContactMainContainer = () => {
  const [contact, setcontact] = useState([]);
  const [FormOpen, setFormOpen] = useState(false);

  const formClickOpens = () => {
    setFormOpen(true);
  };

  const formSubmits = () => {
    setFormOpen(false);
  };

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/contact/index"
        );
        setcontact(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchContactDetails();
  }, []);

  return (
    <>
      <div className={style.extraPadding}>
        <div>
          <h3 className="py-3">Contact</h3>
          <hr />
          <div className="d-flex flex-row justify-content-between py-4">
            <div>
              <h3>Contact</h3>
            </div>
            <div>
              <button className="btn btn-success" onClick={formClickOpens}>
                <AddCircleOutlineIcon className="pe-2" />
                Add a card
              </button>
            </div>
          </div>
          <ContactFormPop
            open={FormOpen}
            onClose={formSubmits}
          />
        </div>
        <Contact contactdata={contact} setcontact={setcontact} />
      </div>
    </>
  );
};

export default ContactMainContainer;
