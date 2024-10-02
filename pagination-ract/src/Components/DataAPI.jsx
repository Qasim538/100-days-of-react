import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const DataAPI = () => {
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

  // get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h1 className="text-primary mt-5">100 Posts</h1>
      <Card posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
};

export default DataAPI;
