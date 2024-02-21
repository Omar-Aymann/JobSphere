import { Link, NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <nav className="bg-white gap-3 px-28 flex justify-between h-2/5 p-0 m-0 items-center py-2">
            <div className="logo text-2xl font-bold"><Link to="/">JOBSPHERE</Link></div>
            <input className="input-group w-96 px-5 py-2 border-gray-400 border border-solid border-1 rounded-xl bg-slate-100" type="text" placeholder="search..." />
            <ul className="flex gap-4">
                <li><Link to="/jobs">find job</Link></li>
                <li><Link className="px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded" to="/login">login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;