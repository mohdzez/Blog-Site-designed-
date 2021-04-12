import { useParams, useHistory } from "react-router";
import useFetch from "../CustomHooks/useFetch";
import '../Components/Blog-detail.style.scss'

const BlogDetailPage = () => {
  const { id } = useParams();
  const { data : blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id) ;

  const history = useHistory()

  const handleClick = (e) => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method : 'DELETE'
    }).then(
      () => history.push('/')
    )
  }
  return (
    <div className="blog_detail">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
          <article>
              <h2>{blog.title}</h2>
              <div></div>
              <p> Written By {blog.author.toUpperCase()}</p>
              <div>{blog.body}</div>

              <button onClick = {handleClick}>
                Delete
              </button>
          </article>
      )}
    </div>
  );
};

export default BlogDetailPage;
