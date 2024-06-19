import React, { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const [comment, setComment] = useState();

  const addComment =(event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      const newCommentObject = {
        id: comments[comments.length-1].id + 1,
        text: comment
      }

      setComments([...comments, newCommentObject]);
      setComment('');
    }
  }

  const updateComment = (event) => {
    setComment(event.target.value);
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start",gap: "12px",}}>
      {comments.map((element) => (
        <div key={element.id}>
          <p style={{margin: '0px', fontSize: "12px"}}  >
          {element.text}{" "}
          <button style={{ fontSize: "10px"}} onClick={() => deleteComment(element.id)}> Удалить комментарий</button>
        </p>
        </div>
      ))}
      <form onSubmit={addComment}>
        <input type="text" value={comment} onChange={updateComment}/>
        <button>Добавить</button>
      </form>
    </div>
  );
}
