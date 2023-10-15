import { Link } from "react-router-dom";
import img from "../../assets/login/login.jpg"

const Login = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-20">
            <div>
                <h2 className=" py-4 font-bold text-2xl">Please <span className="text-blue-500">Login</span> </h2>
                <form action="">
                    <h2 className="text-lg py-4">Enter your User Name</h2>
                    <input className="bg-blue-100  p-2 rounded-lg" type="text" placeholder="Enter user Name"/>
                    <h2 className="text-lg py-4">Enter password</h2>
                    <input className="bg-blue-100  p-2 rounded-lg" type="password" placeholder="Enter Password "/>
                    <br />
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-3 ">Submit</button>
                </form>
                <p className="py-4">Do not have account? <Link to="/register">Create Account</Link> </p>
            </div>
            <img  src={img} alt="" />
        </div>
    );
};

export default Login;