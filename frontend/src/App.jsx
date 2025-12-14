import { useEffect, useState } from "react";

function App() {
  
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  
  const fetchUsers = () => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  };

 
  const fetchComments = () => {
    fetch("http://localhost:8000/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  };

  
  useEffect(() => {
    fetchUsers();
    fetchComments();
  }, []);

  
  const addUser = () => {
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(() => {
        setUsername("");
        setPassword("");
        fetchUsers();
      })
      .catch((err) => console.error(err));
  };


  const addComment = () => {
    fetch("http://localhost:8000/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: author,
        content: content,
      }),
    })
      .then(() => {
        setAuthor("");
        setContent("");
        fetchComments();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ethical Hacking Demo</h1>


      <h2>Users</h2>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.username} | {u.password}
          </li>
        ))}
      </ul>

      <hr />

      <h2>Comments</h2>
      <input
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={addComment}>Add Comment</button>

      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            <strong>{c.author}</strong> :{" "}
            <span dangerouslySetInnerHTML={{ __html: c.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
