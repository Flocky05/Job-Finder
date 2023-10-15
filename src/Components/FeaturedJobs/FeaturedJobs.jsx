import { useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/JobContext.jsx";
import Job from "../Job/Job.jsx";


const FeaturedJobs = () => {
    const {jobs}=useContext(Context);
    return (
        <div>
            <h2 className="text-4xl font-semibold p-10 text-center">Featured Jobs</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="grid grid-cols-1 lg:grid-cols-2 m-10 lg:m-20">
           {
            jobs.slice(0,4).map(job=><Job
            key={job.id}
            job={job}
            ></Job>)
           }
           </div>
           <div className="grid grid-cols-1 justify-items-center">
                <Link to="/alljobs" className="px-6 py-2 rounded-lg text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 inline-block">See All Jobs</Link>
           </div>
        </div>
    );
};

export default FeaturedJobs;