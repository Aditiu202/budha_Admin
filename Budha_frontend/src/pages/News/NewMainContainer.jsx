import React,{useEffect,useState} from 'react'
import News from './News'
import style from "../News/NewMainContainer.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from 'axios';
import FormPopUp from '../../component/FormPopUp/FormPopUp';
const NewMainContainer = () => {

  const [news, setNews] = useState([]);

  const [formOpen, setFormOpen] = useState(false);

  const handleAddClick=()=>{
     setFormOpen(true);
  }

  const handleAddClose=()=>{
     setFormOpen(false);
  }

  useEffect(()=>{

      const fetchNewDetails = async()=>{

        try{
          
          const response = await axios.get(
            "http://localhost:3000/new-article/news"
          );
          setNews(response.data);

        }
        catch(error){
          console.log("Some errors occured from frontend ", error.message);
        }
        
      }
      fetchNewDetails();
  },[])

  return (
    <>
      <div className={style.extraPadding}>
        <h1>News</h1>
        <hr />
        <div className="d-flex flex-row justify-content-between py-4">
          <div>
            <h3>News</h3>
          </div>

          <div>
            <button className="btn btn-success" onClick={handleAddClick}>
              <AddCircleOutlineIcon className="pe-2" />
              Add a card
            </button>
          </div>
        </div>
        <FormPopUp
          open={formOpen}
          onClose={handleAddClose}
          type={"news"}
          setNews={setNews}
        />
        <div>
          <News newsdata={news} setNews={setNews} />
        </div>
      </div>
    </>
  );
}

export default NewMainContainer