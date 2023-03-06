import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Modify({posts, setPosts, editid, seteditid}) {

    const nav = useNavigate();  

    let title = posts[editid+1].title
    let content = posts[editid+1].content
    let author = posts[editid+1].author

    const handleModify = (e) =>{
        e.preventDefault()
        posts[editid+1].title =title
        posts[editid+1].content =content
        posts[editid+1].author =author
       nav('/')
    }
    
  return (
    <main className='newpost'>
    <h2>Modify post {` "${posts[editid+1].title}"`}</h2>
    <form onSubmit={handleModify} className='newpostform'>
      <div>
        <label htmlFor='Title'>Title</label>
        <input
        name='title'
        defaultValue={title}
        autoFocus={true}
        type='text'
        placeholder='Blog Title'
        required={true}
        onChange={ (e) => title = e.target.value }
        />
        </div>
        <div>
        <label htmlFor='Content'>Content</label>
        <textarea
        name='content'
        defaultValue={content}
        
        type='textarea'
        rows="15"
        cols="60"
        placeholder='Blog Content'
        required={true}
        onChange = { (e) => content = e.target.value}
        
        />
        </div>
        <div>
        <label htmlFor='author'>Author</label>
        <input
        name='author'
        defaultValue={author}
      
        type='text'
        placeholder='Author name'
        required={true}
        
        onChange = { (e) => author = e.target.value}

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
