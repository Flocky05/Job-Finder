import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-around p-7">
            <Link to="/"><h3 className="text-3xl font-bold ">CareerHub</h3></Link>
            <div className="grid grid-cols-3 gap-10">
                <Link to="/statistics"><h3 className="text-lg text-blue-600">Statistics</h3></Link>
                <Link to="/appliedJobs"><h3 className="text-lg">Applied Jobs</h3></Link>
                <Link to="/blog"><h3 className="text-lg">Blog</h3></Link>
            </div>
            <button className="px-6 py-2 rounded-lg text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 ">Star Applying</button>
        </div>
    );
};

export default Navbar;