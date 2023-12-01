import img1 from "../../assets/success/man1.avif"
import img2 from "../../assets/success/man2.avif"
import img3 from "../../assets/success/man3.jpg"
import img4 from "../../assets/success/women1.jpg"
import img5 from "../../assets/success/women2.jpg"
import img6 from "../../assets/success/women3.jpg"
import img7 from "../../assets/success/women4.jpg"
import img8 from "../../assets/success/man4.avif"

const Success = () => {
    return (
        <div className="bg-gradient-to-b from-cyan-200 to-gray-300 text-white">
            <h2 className="text-2xl font-bold text-center pt-12">Success_Story For You</h2>
            <div className="grid grid-cols-3 gap-10 p-20">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <div className="grid grid-cols-2 gap-20 p-20">
                <img className="w-3/4 mx-auto" src={img4} alt="" />
                <img className="w-3/4 mx-auto" src={img5} alt="" />
            </div>
            <div className="grid grid-cols-3 gap-20 p-20">
                <img  src={img6} alt="" />
                <img  src={img7} alt="" />
                <img  className="h-72"  src={img8} alt="" />
            </div>
        </div>
    );
};

export default Success;