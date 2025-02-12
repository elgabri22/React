import React, { useState } from 'react';
import Comment from './Comment';

const CommentSystem = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newCommentAuthor, setNewCommentAuthor] = useState('');

  const handleAddComment = () => {
    if (newComment && newCommentAuthor) {
      const newCommentObj = {
        id: Date.now(),
        author: newCommentAuthor,
        text: newComment,
        responses: [],
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setNewCommentAuthor('');
    }
  };

  const handleAddResponse = (commentId, responseText) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              responses: [
                ...comment.responses,
                { author: 'Respuesta', text: responseText },
              ],
            }
          : comment
      )
    );
  };

  return (
    <div className="comment-system">
      <h2>Sistema de Comentarios</h2>

      <div className="add-comment">
        <input
          type="text"
          value={newCommentAuthor}
          onChange={(e) => setNewCommentAuthor(e.target.value)}
          placeholder="Tu nombre"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario..."
        />
        <button onClick={handleAddComment}>Añadir Comentario</button>
      </div>

      <div className="comments-list">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onAddResponse={handleAddResponse}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSystem;
