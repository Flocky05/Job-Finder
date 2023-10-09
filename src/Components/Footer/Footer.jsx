import { Link } from "react-router-dom";
import img1 from "../../assets/footer/facebook.png"
import img2 from "../../assets/footer/instragram.png"
import img3 from "../../assets/footer/linkedin.png"
import img4 from "../../assets/footer/twitter.png"


const Footer = () => {
    return (
        <div className="bg-black text-white p-20">
            <div className="grid grid-cols-5 justify-items-center my-10">
                <div>
                    <h2 className="text-xl font-semibold">CareerHub</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className="flex gap-3">
                        <img className="w-8" src={img1} alt="" />
                        <img className="w-8" src={img2} alt="" />
                        <img className="w-8" src={img3} alt="" />
                        <img className="w-8" src={img4} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Company</h2>
                    <li className="flex flex-col">
                        <Link className="text-sm" to="/">About Us</Link>
                        <Link className="text-sm" to="/">Work</Link>
                        <Link className="text-sm" to="/">Latest Newss</Link>
                        <Link className="text-sm" to="/">Careers</Link>
                    </li>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Product</h2>
                    <li className="flex flex-col">
                        <Link className="text-sm" to="/">Prototype</Link>
                        <Link className="text-sm" to="/">Plans & Pricing</Link>
                        <Link className="text-sm" to="/">Customers</Link>
                        <Link className="text-sm" to="/">Integrations</Link>
                    </li>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Support</h2>
                    <li className="flex flex-col">
                        <Link className="text-sm" to="/">Help Desk</Link>
                        <Link className="text-sm" to="/">Sales</Link>
                        <Link className="text-sm" to="/">Become a Partner</Link>
                        <Link className="text-sm" to="/">Developers</Link>
                    </li>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Contact</h2>
                    <li className="flex flex-col">
                        <Link className="text-sm" to="/">524 Broadway , NYC</Link>
                        <Link className="text-sm" to="/">+1 777 - 978 - 5570</Link>
                    </li>
                </div>
            </div>
            <hr />
            <div className="flex justify-between mt-8">
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;