import { FaSearch } from "react-icons/fa";

const Home = () => {
    
    return (
        <section className="w-full flex flex-col hero h-screen bg-cover items-center justify-center bg-center">
            <div className="px-28 flex flex-col justify-center items-center gap-6">
                <p className="text-6xl font-bold text-white">Find your dream job</p>
                <p className="text-3xl font-bold text-white">build your career now</p>
                <div className="flex relative w-96 overflow-hidden">
                    <input type="text" className="input-group w-full px-5 py-3 border-2 border-solid border-1 rounded-full bg-slate-100"  placeholder="Find your job" name="search" id="search" />
                    <button className="p-2 w-10 h-full bg-blue-600 right-0 rounded-br-full rounded-tr-full absolute"><FaSearch className=" text-white" /></button>
                </div>
            </div>
        </section>
    )
}

export default Home;