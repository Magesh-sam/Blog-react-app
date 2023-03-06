import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/Blog.css'

export default function Blog({posts, setPosts, editid, seteditid}) {
  const nav =useNavigate();

    const handleDeletePost = (event) => {

      const updatedposts = [...posts]
       const newposts = updatedposts.filter(post => post.id !== event.target.value)
       
      setPosts(newposts)

  }

  const handleModify = (event) => {
    
   
    
   const editindex = posts.findIndex(post => post.id === event.target.value)
    
    seteditid(editindex)
    console.log(editindex+1)
    nav('/modify')
    
   
  }


  return (
    <main className='blogapp'>
    <h1 className='allpost'>All Posts</h1>
    <button className='createnewpost' onClick={ ()=> { nav('/newpost')}}  >Create New Post</button>

      {posts.length<=0 ? (
        <div> 
          <h1>There are no posts yet!...</h1>
        </div>
      ) :
      (posts.map((post,index) =>(
   
        <div className='post' key={post.id}>
          <h2>{post.title}</h2>
          <h5>{post.content}</h5>
          <p> <span> Author:</span> {post.author}</p>
          <div id='btngrp' className='btngrp'>
            <button value={index} onClick={handleModify} className='modifybtn'>Modify</button>
            <button value={post.id} onClick={handleDeletePost} className='deletebtn'>Delete</button>
          </div>
        </div>


      )))}

    </main>
  )
}
