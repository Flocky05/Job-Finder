import img1 from "../../assets/jobCamping/img1.avif"
import img2 from "../../assets/jobCamping/img2.jpg"
import img3 from "../../assets/jobCamping/img3.jpg"

const JobCamping = () => {
    return (
        <div>
            <h2 className="text-center text-3xl p-10 uppercase font-bold">JOb <span className="text-blue-400">Camping</span> 2023</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className=" m-10  rounded-md relative">
                    <img src={img1} alt="" />
                    <div>
                    <h2 className="text-3xl font-bold text-blue-500 absolute -mt-10 ml-8 z-10">Join Our New <span className="text-white">Placement</span> </h2>
                    </div>
                </div>
                <div className="  m-10 rounded-md relative">
                    <img src={img2} alt="" />
                    <div>
                    <h2 className="text-3xl font-bold text-white absolute -mt-10 ml-8 z-10">Join Our New <span className="text-blue-500">Project</span> </h2>
                    </div>
                </div>
                <div className="m-10  rounded-md relative">
                    <img className="" src={img3} alt="" />
                    <div>
                        <h2 className="text-3xl font-bold text-blue-500 absolute -mt-10 ml-8 z-10">Join <span className="text-white">Our New</span> Session</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCamping;