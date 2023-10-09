import img1 from "../../assets/icons/accounts.png"
import img2 from "../../assets/icons/creative.png"
import img3 from "../../assets/icons/marketing.png"
import img4 from "../../assets/icons/chip.png"

const JobCategoryList = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold p-8">Job Category List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center mx-auto py-10">
                <div className="p-5">
                    <img className="bg-blue-100 p-5 rounded-lg" src={img1} alt="" />
                    <h3 className="text-lg font-bold">Account & Finance</h3>
                    <p className="text-gray-500">300 Jobs Available</p>
                </div>
                <div className="p-5">
                    <img className="bg-blue-100 p-5 rounded-lg" src={img2} alt="" />
                    <h3 className="text-lg font-bold">Creative Design</h3>
                    <p className="text-gray-500">100 Jobs Available</p>
                </div>
                <div className="p-5">
                    <img className="bg-blue-100 p-5 rounded-lg" src={img3} alt="" />
                    <h3 className="text-lg font-bold">Marketing & Sales</h3>
                    <p className="text-gray-500">150 Jobs Available</p>
                </div>
                <div className="p-5">
                    <img className="bg-blue-100 p-5 rounded-lg" src={img4} alt="" />
                    <h3 className="text-lg font-bold">Engineering Job</h3>
                    <p className="text-gray-500">244 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategoryList;