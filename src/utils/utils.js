import axios from "axios";

export async function getJobs() {
    const response = await axios.get("http://127.0.0.1:3000/jobs/");
    return response.data;
}
export async function getJob(id) {
   const response = await axios.get(`http://127.0.0.1:3000/jobs/${id}`);
   return response.data[0];
}