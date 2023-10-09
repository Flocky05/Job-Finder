
import img1 from "../../assets/logo/airbnb.png"
import img2 from "../../assets/logo/CareerHub.png"
import img3 from "../../assets/logo/google.png"
import img4 from "../../assets/logo/netflix.png"
import img5 from "../../assets/logo/tesla.png"
const Companies = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-20 justify-items-center">
            <img className="p-3" src={img1} alt="" />
            <img className="p-3" src={img2} alt="" />
            <img className="p-3" src={img3} alt="" />
            <img className="p-3" src={img4} alt="" />
            <img className="p-3" src={img5} alt="" />
        </div>
    );
};

export default Companies;