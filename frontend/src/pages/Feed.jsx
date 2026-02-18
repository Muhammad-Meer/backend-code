import React, { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([
    { id: 1, image: "first post", caption: "this is content  __________________________________" },

  ]);

  return <>
            <h1>welcome</h1>
           <section className="feed-section">
            {
               posts.length > 0 ? (
                posts.map((one) => (
                  <div key={one.id} className="post-card">
                    <h1>{one.caption}</h1>
                  </div>
                ))
               ) : (
                <p>no posts available</p>
               )
            }
           </section>
           
         </>;
};

export default Feed;
