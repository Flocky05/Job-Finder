import img1 from "../../assets/success/man1.avif"
import img2 from "../../assets/success/man2.avif"
import img3 from "../../assets/success/man3.jpg"

const Success = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-10 p-20">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div>
    );
};

export default Success;