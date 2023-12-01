import { Link } from "react-router-dom";
import img from "../../assets/suggesion/img.avif"
import img2 from "../../assets/suggesion/arrow-16.png"

const Suggesion = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center m-10">
            <div className="p-20">
                <div className="text-3xl font-semibold">
                    <h3>What are you</h3>
                    <h3>waiting for?</h3>
                </div>
                <p>come and join with us, and get a different experiance</p>
                <div className="flex justify-items-center gap-5 ">
                    <Link to="/" className="text-blue-400 mt-3 inline-block text-xl">Learn more</Link>
                    <img className="mt-3" src={img2} alt="" />
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Suggesion;