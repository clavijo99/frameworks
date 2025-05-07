const PostItem = ({ post, onEdit, onDelete, isEditing, title, body, setTitle, setBody, onSave, onCancel }) => {
  return (
    <div className="border rounded p-3 mb-3">
      {isEditing ? (
        <>
          <input
            className="block border p-2 w-full mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="block border p-2 w-full mb-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={onSave} className="bg-green-500 text-white px-3 py-1 mr-2">Guardar</button>
          <button onClick={onCancel} className="bg-gray-500 text-white px-3 py-1">Cancelar</button>
        </>
      ) : (
        <>
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => onEdit(post)} className="bg-blue-500 text-white px-3 py-1 mr-2">Editar</button>
          <button onClick={() => onDelete(post.id)} className="bg-red-500 text-white px-3 py-1">Eliminar</button>
        </>
      )}
    </div>
  );
};

export default PostItem;
