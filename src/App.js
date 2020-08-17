import React, {useState, useEffect} from 'react';
// import Modal from '@material-ui/core/Modal';
// import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import Post from './Post'
import {db} from './firebase'

function App() {
  // MATERIAL UI STYLING


  // Setting the State. State is a virtual memory
  const [posts, setPosts] = useState([]);
  // const [open, setOpen] = useState(false);

  // useEffect - Runs a piece of code based on a specific condition
  // runs everytime when app file is loaded(the code runs when the page refreshes) and also runs if a condition changes 

  useEffect(() =>{
    db.collection('posts').onSnapshot(snapshot =>{
    //everytime a new post is added in the database, this code fires
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post:doc.data()
      })))
    });
  }, []);
  return (
    <div className="app">

      {/* NAVBAR -> INSTAGRAM LOGO */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          />
      </div>
      <h1>Hey there from Instagram</h1>

      {/* BUTTON FOR LOGIN OR REGISTER */}
      {/* <Button></Button> */}
      {/* Posts */}
      {
        posts.map(({id, post}) =>(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
    </div>
  );
}

export default App;
