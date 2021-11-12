import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "semantic-ui-react";

const Paginated = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (event) => {
    const res = setCurrentPage(event);
    console.log(res);
  };

  return (
    <div className="container">
      <h1>Pagination</h1>
      <ul className="container-small">
        {currentPosts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <Pagination
        activePage={currentPage}
        onPageChange={paginate}
        totalPages={indexOfLastPost}
      />
    </div>
  );
};

export default Paginated;
