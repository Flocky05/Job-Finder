import img from "../../assets/images/user.png"

const Home = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="m-20 p-10">
                <h2 className="text-5xl font-bold">One Step </h2>
                <h2 className="text-5xl font-bold py-4">Closer To Your</h2>
                <h2 className="text-5xl font-bold text-blue-600">Dream Job</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="px-6 py-2 rounded-lg text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 mt-4">Get Started</button>
            </div>
            <img className="p-10" src={img} alt="" />
        </div>
    );
};

export default Home;