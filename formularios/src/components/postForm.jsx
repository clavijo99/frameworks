import React from 'react';

const PostForm = ({ title, body, setTitle, setBody, onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="border p-4 rounded mb-6"
    >
      <h2 className="text-xl font-bold mb-3">Crear nuevo post</h2>
      <input
        className="block border p-2 w-full mb-2"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="block border p-2 w-full mb-2"
        placeholder="Contenido"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Crear
      </button>
    </form>
  );
};

export default PostForm;
