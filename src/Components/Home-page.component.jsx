import BlogPreview from "./Blog-preview.component";
import useFetch from '../CustomHooks/useFetch'
import '../Components/Home-page.style.scss';

const Homepage = () => {

    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <main>
            <header>
                <div>
                <h1> -/ ALL BLOGS \- </h1>
                </div>
            </header>
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogPreview blogs = {blogs}></BlogPreview>}

        </main>
     );
}
 
export default Homepage;