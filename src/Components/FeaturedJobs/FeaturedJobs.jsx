import { useEffect, useState } from "react";
import Job from "../Job/Job.jsx";


const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    console.log(jobs);
    return (
        <div>
            <h2 className="text-4xl font-semibold p-10 text-center">Featured Jobs</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="grid grid-cols-1 lg:grid-cols-2 m-10 lg:m-20">
            {
                    jobs.map(job=><Job
                    key={job.id}
                    data={job}
                    ></Job>)
            }
           </div>
           <div className="grid grid-cols-1 justify-items-center">
                <button className="px-6 py-2 rounded-lg text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 ">See All Jobs</button>
           </div>
        </div>
    );
};

export default FeaturedJobs;