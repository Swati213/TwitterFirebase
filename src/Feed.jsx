import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./feed.css";
import Post from "./Post";
import Sdata from "./Sdata";

import TweetBox from "./TweetBox";
import TwitterLogo from "./TwitterLogo.png";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("PostSort")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
        {posts.map((post) => {
          return (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              timestamp={post.timestamp}
              avatar={TwitterLogo}
              image={post.image}
            />
          );
        })}
      </FlipMove>

      {Sdata.map((val)=>{
  return(

<Post
    key={val.id}
    displayName={val.displayName}
        username={val.username}
        verified={val.verified}
        text={val.text}
    
    image={val.image}
    avatar={val.avatar}

  />
  );
  } ) }

      

     
    </div>
  );
}

export default Feed;
