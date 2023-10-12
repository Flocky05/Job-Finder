import img from "../../assets/location/location-24.png"
import img2 from "../../assets/location/dolar.png"
import { Link } from "react-router-dom";


const Job = ({job}) => {
    
    /* const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=props.data; */
   if(job) return (
        <div className="bg-gray-50 p-10 lg:p-20 border rounded-lg gap-5 m-5 lg:m-10">
            <img src={job?.logo} alt="" />
            <h2 className="text-xl font-bold mt-8">{job?.job_title}</h2>
            <p className="mt-4">{job?.company_name}</p>
            <div className="flex gap-5 my-5">
                <button className="text-blue-600 text-center px-6 py-2 rounded-md border-2 border-blue-600">{job?.remote_or_onsite}</button>
                <button className="text-blue-600 text-center px-6 py-2 rounded-md border-2 border-blue-600">{job?.job_type}</button>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <img className="w-5" src={img} alt="" />
                    <p>{job?.location}</p>
                </div>
                <div className="flex gap-4">
                    <img className="w-5" src={img2} alt="" />
                    <p>{job?.salary}</p>
                </div>
            </div>
            <Link className="px-6 py-2 rounded-lg text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 inline-block" to="/jobDetails">View Details</Link>
        </div>
    );
};

export default Job;