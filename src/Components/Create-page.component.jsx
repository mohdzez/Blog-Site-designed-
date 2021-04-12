import { useState } from "react";
import { useHistory } from "react-router";
import '../Components/Create-page.style.scss';

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, author, body };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default CreatePage;
