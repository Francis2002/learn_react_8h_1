import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";

import { Navbar, Feed, SearchFeed, ChannelDetail, VideoDetail, ProfileDetail, MovieCard , ContactsDetail, ForumDetail} from "./components";
import CourseDetail from "./components/CourseDetail";

const App = () => {

  const [profile, setProfile] = useState({name: "Me", created: "false", chars: []});
  const [selectedCategory, setSelectedCategory] = useState('Home');
  const [comments, setComments] = useState([]);

  return (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#212426', minHeight: '100vh'}}>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Feed selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>} />
            <Route path="/Home" exact element={<Feed selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>} />
            <Route path="/video/:id" element={<VideoDetail />}/>
            <Route path="/Contactos" element={<ContactsDetail selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>}/>
            <Route path="/Fórum" element={<ForumDetail selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}/>
            <Route path="/course/:id" element={<CourseDetail comments={comments} setComments={setComments}/>}/>
            <Route path="/Perfil" element={<ProfileDetail profile={profile} setProfile={setProfile}/>}/>
            <Route path="/channel/:id" element={<ChannelDetail />}/>
            <Route path="/search/:searchTerm" element={<SearchFeed selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>}/>
        </Routes>
    </Box>
  </BrowserRouter>
)}

export default App