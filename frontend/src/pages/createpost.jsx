import React from "react";

const Createpost = () => {
  return (
    <>
      <section className="create-post-section">
        <h1>welcome create post page</h1>

        <form>

          <input type="text" placeholder="Enter post title" />
          <input type="text" placeholder="Enter post content" />
          <button type="submit">Create Post</button>
        </form>

      </section>
    </>
  );
};

export default Createpost;
