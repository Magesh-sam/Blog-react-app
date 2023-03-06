import React, {useState} from 'react'
import '../Styles/CreateNewPost.css'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate} from 'react-router-dom'


export default function CreateNewPost({posts, setPosts, initialState}) {

  const [newpost, setNewpost] = useState({title:'',content:'',author:''})

  const nav= useNavigate();

  const handlenewpostinput = (event) => {
 
    const {name, value}  = event.target;
    setNewpost((prev)=> {
      return {
        ...prev,
        [name]: value,
        id: uuidv4()
      }
    })
    
  }
  const handlesubmitpost = (e) => {
    e.preventDefault();
    
    setPosts([...posts,newpost])
    setNewpost({title:'',content:'',author:''})
    nav('/')
  }

  return (
    <main className='newpost'>
        <h2>Create New Blog Post</h2>
        <form onSubmit={handlesubmitpost} className='newpostform'>
          <div>
            <label htmlFor='Title'>Title</label>
            <input
            name='title'
            value={newpost.title}
            autoFocus={true}
            type='text'
            placeholder='Blog Title'
            required={true}
            onChange={handlenewpostinput}
            />
            </div>
            <div>
            <label htmlFor='Content'>Content</label>
            <textarea
            name='content'
            value={newpost.content}
            
            type='textarea'
            rows="15"
            cols="60"
            placeholder='Blog Content'
            required={true}
            onChange={handlenewpostinput}
            
            />
            </div>
            <div>
            <label htmlFor='author'>Author</label>
            <input
            name='author'
            value={newpost.author}
          
            type='text'
            placeholder='Author name'
            required={true}
            onChange={handlenewpostinput}

            />
            </div>
            <div className='btngrp'>
            <button className='newpostsubmitbtn' type='submit'>Submit</button>
            <button className='cancelbtn' onClick={()=> (nav('/'))}>Cancel</button>
            </div>
        </form>
    </main>
  )
}
