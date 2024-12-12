import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './component/sidebar/sidebar';
import ContactMainContainer from './pages/Contact/ContactMainContainer';
import NewMainContainer from './pages/News/NewMainContainer';
import BlogsMainContainer from './pages/Blog/BlogsMainContainer'
import HomeMainCOntainer from './pages/Home/HomeMainContainer';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<HomeMainCOntainer/>}/>
          <Route path="/blogs" element={<BlogsMainContainer />} />
           <Route path="/news" element={<NewMainContainer/>} />
          <Route path="/contact" element={<ContactMainContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
