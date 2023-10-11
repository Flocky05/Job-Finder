import { Link } from "react-router-dom";
import img1 from "../../assets/Blog/img1.jpg"
import img2 from "../../assets/Blog/img2.jpg"
import img3 from "../../assets/Blog/img3.jpg"

const Blog = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center m-5 lg:m-10 gap-10">
            <div className="bg-blue-200 p-10 lg:p-20 rounded-lg">
                <Link to="https://legacy.reactjs.org/docs/context.html#when-to-use-context"target="_blank">
                    <h2>What is Context API?</h2>
                    <img className="h-60" src={img1} alt="" />
                </Link>
                
            </div>
            <div className="bg-blue-200 p-10 lg:p-20 rounded-lg">
                <Link to="https://legacy.reactjs.org/docs/hooks-intro.html" target="_blank">
                    <h2>What is React Hooks?</h2>
                    <img className="h-60" src={img2} alt="" />
                </Link>
                
            </div>
            <div className="bg-blue-200 p-10 lg:p-20 rounded-lg">
                <Link to="https://legacy.reactjs.org/docs/hooks-intro.html"target="_blank">
                    <h2>What is React?</h2>
                    <img className="h-60 object-cover" src={img3} alt="" />
                 </Link>
                
            </div>
        </div>
    );
};

export default Blog;