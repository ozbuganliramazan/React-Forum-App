import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListPostsView from './ListPostView';

const ListPostsController = () => {
  const [blogData, setBlogData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3060/post')
      .then((res) => setBlogData(res.data));
  }, []);

  // Modal ile alakalı fonksiyonlar
  const showUserPost = (parametre) => {
    setShowModal(!showModal);

    setUserPosts(blogData.filter((post) => post.user == parametre));
  };

  return (
    <ListPostsView
      blogData={blogData}
      showModal={showModal}
      showUserPost={showUserPost}
      userPosts={userPosts}
    />
  );
};

export default ListPostsController;