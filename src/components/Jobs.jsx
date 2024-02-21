import { Link } from "react-router-dom";

const Jobs = () => {
    return (
        <div className=" cards-container w-full h-screen flex flex-col items-center  gap-2 ">
            <div className="job w-2/4 flex flex-col  rounded-lg m-2 bg-white p-4">
                <h2 className=" text-xl font-bold text-blue-600"><Link to="job/:id">Frontend Web developer</Link></h2>
                <p className=" font-medium text-lg">Facebook</p>
                <div className=" my-5">
                <p className=" p-1 rounded-lg bg-red-600 text-white inline-block">2 days ago</p>
                </div>
            </div>
        </div>
    )
}

export default Jobs;