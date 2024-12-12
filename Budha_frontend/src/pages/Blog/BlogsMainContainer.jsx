import React,{useState,useEffect} from 'react'
import style from "../Blog/BlogsMainContainer.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Blogs from './Blogs';
import FormPopUp from '../../component/FormPopUp/FormPopUp';
import axios from 'axios'
const BlogsMainContainer = () => {

  const [blogs,setblogs] = useState([]);

   const [formOpen, setFormOpen] = useState(false);

   const handleAddClick = () => {
     setFormOpen(true);
   };

   const handleAddClose = () => {
     setFormOpen(false);
   };

    useEffect(() => {
      const fetchBlogsDetails = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3000/admin/blogs/blogs"
          );
          setblogs(response.data);
        } catch (error) {
          console.log("Some errors occured from frontend ", error.message);
        }
      };
      fetchBlogsDetails();
    }, []);


  return (
    <>
      <div className={style.extraPadding}>
        <h1>Blogs</h1>
        <hr />
        <div className="d-flex flex-row justify-content-between py-4">
          <div>
            <h3>Blogs</h3>
          </div>

          <div>
            <button className="btn btn-success" onClick={handleAddClick}>
              <AddCircleOutlineIcon className="pe-2" />
              Add a card
            </button>
          </div>
        </div>
        <FormPopUp open={formOpen} onClose={handleAddClose}  type={"blogs"}/>
        <div>
          <Blogs blogsdata={blogs} setblogs={setblogs} />
        </div>
      </div>
    </>
  );
}

export default BlogsMainContainer