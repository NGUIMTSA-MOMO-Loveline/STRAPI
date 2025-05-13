import React from "react";
import Posts from "./Components/Posts"
import PostPage from "./Components/PostPage"
import Container from '@mui/material/Container';
import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App(){
  return (
    <Container>    
      <div className='App'>
        
      <Router>
        <Routes>
          <Route path="/" element={<Posts/>} />
          <Route path="/post/:documentId" element={<PostPage/>} />
        </Routes>
      </Router>

      </div>
    </Container>)
}

export default App;