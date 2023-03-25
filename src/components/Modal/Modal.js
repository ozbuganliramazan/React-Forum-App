import React from 'react';

const Modal = ({ showModal, userPosts }) => {
  return (
    <>
      {showModal && (
        <div className="modal">
          <h2>
            <span>{userPosts[0].user} </span>Kullanıcısının Gönderileri
          </h2>
          {userPosts.map((post) => (
            <div className="post" key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Modal;