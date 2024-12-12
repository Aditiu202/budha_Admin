import React,{useState} from 'react'
import style from "../Home/HomeMainContainer.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Home from './Home';

const HomeMainContainer = () => {
  

  return (
    <>
      <div className={style.extraPadding}>
        <h1>Home</h1>
        <hr />
        <div className="d-flex flex-row justify-content-between py-4">
          <div>
            <h3>Home</h3>
          </div>

          <div>
            <button className="btn btn-success">
              <AddCircleOutlineIcon className="pe-2" />
              Add a card
            </button>
          </div>
        </div>
        <div>
          <Home />
        </div>
      </div>
    </>
  );
}

export default HomeMainContainer