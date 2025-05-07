import React, { useEffect, useState } from 'react';
import PostItem from './components/postItem';
import PostForm from './components/postForm';

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  const editPost = (post) => {
    setEditingPost(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  const cancelEdit = () => {
    setEditingPost(null);
    setTitle('');
    setBody('');
  };

  const updatePost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${editingPost}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ id: editingPost, title, body }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setPosts(posts.map((p) => (p.id === editingPost ? updated : p)));
        cancelEdit();
      });
  };

  const createPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ title, body, userId: 1 }),
    })
      .then((res) => res.json())
      .then((newPost) => {
        setPosts([newPost, ...posts]);
        setTitle('');
        setBody('');
      });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Lista de Posts</h1>

      {/* Formulario de creación */}
      {!editingPost && (
        <PostForm
          title={title}
          body={body}
          setTitle={setTitle}
          setBody={setBody}
          onSubmit={createPost}
        />
      )}

      {/* Lista de posts */}
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onEdit={editPost}
          onDelete={deletePost}
          isEditing={editingPost === post.id}
          title={title}
          body={body}
          setTitle={setTitle}
          setBody={setBody}
          onSave={updatePost}
          onCancel={cancelEdit}
        />
      ))}
    </div>
  );
}

export default App;
