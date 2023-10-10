import { Link } from "react-router-dom";


const Blog = () => {
    return (
        <div className="grid grid-cols-3 justify-items-center m-20">
            <div className="bg-blue-200 p-20 rounded-lg">
                <Link to="https://legacy.reactjs.org/docs/context.html#when-to-use-context"><h2>What is Context API?</h2></Link>
            </div>
            <div className="bg-blue-200 p-20 rounded-lg">
                <Link to="https://legacy.reactjs.org/docs/hooks-intro.html"><h2>What is React Hooks?</h2></Link>
            </div>
            <div className="bg-blue-200 p-20 rounded-lg">
                <Link to="https://legacy.reactjs.org/docs/hooks-intro.html"><h2>What is React?</h2></Link>
            </div>
        </div>
    );
};

export default Blog;