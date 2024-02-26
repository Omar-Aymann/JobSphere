import { useEffect, useState } from "react";
import { getJob } from "../utils/utils";
import { useParams } from "react-router-dom";

const Job = () => {
    const [data, setData] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        if(!data) {
              async function fetchData() {
                const data = await getJob(id);
                setData(data);
              }
              fetchData();
        }
    }, [])
    return (
        <section className="w-full flex flex-col h-screen bg-center items-center">
            {data ? <div className="card bg-white w-2/4 mt-1 grow-0 p-5 my-5">
                <h2 className="text-2xl font-bold">{data.title}</h2>
                <p className="font-bold pb-3">{data.company}</p>
                <p className="text-lg font-medium py-2">{data.description}</p>
                <button className="px-2 py-1 bg-blue-600 rounded-lg text-white">Apply now</button>
            </div> : "wrong id"}
        </section>
    )
}

export default Job;