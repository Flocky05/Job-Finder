import { Link } from "react-router-dom";


const Exchange = () => {
    return (
        <div className="h-screen bg-blue-50">
            <div className="grid grid-cols-1 justify-items-center p-20">
                <h2 className="text-2xl ">Wanna to Login?</h2>
                <Link className="text-white px-7 py-2 bg-blue-500 rounded-md mt-3 inline-block" to="/login">Login</Link>
            </div>
            <div className="grid grid-cols-1 justify-items-center p-20">
                <h2 className="text-2xl ">Do not have <span className="to-blue-600">Account</span> , wnna create Account.</h2>
                <Link className="text-white px-7 py-2 bg-green-500 rounded-md mt-3 inline-block" to="/register">Register</Link>
            </div>

        </div>
    );
};

export default Exchange;