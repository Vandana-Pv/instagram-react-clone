import React, {useState} from 'react';
import './App.css';
import Post from './Post'

function App() {
  // Setting the State. State is a virtual memory
  const [posts, setPosts] = useState([
    {
      username: "VandanaPv",
      caption: "Hello World", 
      imageUrl: "https://images.pexels.com/photos/1072851/pexels-photo-1072851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      username: "Meghana", 
      caption: "This is cool", 
      imageUrl: "https://images.pexels.com/photos/4464377/pexels-photo-4464377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          />
      </div>
      <h1>Hey there from Instagram</h1>

      {/* Posts */}

      {
        posts.map((post) =>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
    </div>
  );
}

export default App;
