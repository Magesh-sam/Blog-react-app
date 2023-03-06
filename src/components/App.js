import React,{useState} from 'react';
import '../Styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateNewPost from './CreateNewPost';
import Blog from './Blog';
import Modify from './Modify';


const initialState = [
  {
    id:"1",
    title: 'Web Developement',
    content:'Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.',
    author:'google'
  },
  {
    id:"2",
    title:'Front-End Development',
    content:'A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.',
    author:'google'
  },
  {
    id:"3",
    title:'Back-End Development',
    content:'In software engineering, the terms frontend and backend (or sometimes referred to as back end or back-end) refer to the separation of concerns between the presentation layer (frontend), and the data access layer (backend) of a piece of software, or the physical infrastructure or hardware.',
    author:'google'
  }
]

function App() {

  const [posts, setPosts] = useState([...initialState])
  const [editid ,seteditid] = useState(0)


  return (
      <>
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Blog posts={posts} setPosts={setPosts} editid={editid} seteditid={seteditid} />}></Route>
        <Route path='/newpost' element={<CreateNewPost posts={posts} setPosts={setPosts} initialState />} ></Route>
        <Route path='/modify' element={<Modify posts={posts} setPosts={setPosts} editid={editid} seteditid={seteditid} /> }></Route>
      </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
