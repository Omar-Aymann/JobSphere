import { getJobs } from "../utils/utils";
import { useEffect, useState } from "react";
import JobElement from "./JobElement";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

        useEffect(() => {
            if(jobs.length == 0) {
                getJobs().then((data) => {
                    setJobs(data);
                })            
            }
        }, [])

    return (
        <div className=" cards-container w-full h-screen flex flex-col items-center  gap-2 ">
            {jobs.length > 0 ? jobs.map((job) => {
               return <JobElement title={job.title} id={job._id} key={job._id} company={job.company} />
            })  : <div>There is no jobs yet, come back soon</div>}
        </div>
    )
}

export default Jobs;