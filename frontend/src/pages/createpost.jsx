import React from "react";

const createpost = () => {
  return (
    <>
      <section className="create-post-section">
        <h1>welcome create post page</h1>

        <form>

          <input type="text" placeholder="Enter post title" />
          <input type="text" placeholder="Enter post content" />
        </form>
        
      </section>
    </>
  );
};

export default createpost;
