import img1 from "../../assets/jobCamping/img1.avif"
import img2 from "../../assets/jobCamping/img2.jpg"
import img3 from "../../assets/jobCamping/img3.jpg"

const JobCamping = () => {
    return (
        <div className="grid grid-cols-3 gap-10">
            <div className=" bg-yellow-100 m-10  p-10  rounded-md">
                <img src={img1} alt="" />
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur inventore modi at error aspernatur voluptates sit iure iste impedit.</p>
                    <button className="bg-orange-500 px-6 py-2 rounded-lg text-white mt-3">learn More</button>
                </div>
            </div>
            <div className=" bg-yellow-100 m-10  p-10  rounded-md">
                <img src={img2} alt="" />
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur inventore modi at error aspernatur voluptates sit iure iste impedit.</p>
                    <button className="bg-orange-500 px-6 py-2 rounded-lg text-white mt-3">learn More</button>
                </div>
            </div>
            <div className=" bg-yellow-100 m-10  p-10  rounded-md">
                <img src={img3} alt="" />
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur inventore modi at error aspernatur voluptates sit iure iste impedit.</p>
                    <button className="bg-orange-500 px-6 py-2 rounded-lg text-white mt-3">learn More</button>
                </div>
            </div>
        </div>
    );
};

export default JobCamping;