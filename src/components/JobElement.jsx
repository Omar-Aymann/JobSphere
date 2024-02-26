import { Link } from "react-router-dom";

const JobElement = (props) => {
    return (
        <div className="job w-2/4 flex flex-col  rounded-lg m-2 bg-white p-4">
            <h2 className=" text-xl font-bold text-blue-600"><Link to={`/job/${props.id}`}>{props.title}</Link></h2>
            <p className=" font-medium text-lg">{props.company}</p>
            <div className=" my-5">
            <p className=" p-1 rounded-lg bg-red-600 text-white inline-block">2 days ago</p>
            </div>
        </div>
    )
}

export default JobElement;