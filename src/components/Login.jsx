const Login = () => {
    return (
        <div className="login w-full h-screen flex justify-center items-center">
            <div className="box w-1/4 bg-white p-4 h-2/5 flex flex-col justify-center items-center shadow-lg rounded-lg gap-4">
                <p className="text-2xl font-bold">Login</p>
                <form className="flex flex-col justify-center items-center w-full gap-4">
                    <input className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" name="email" id="email" />
                    <input className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" name="password" id="password" />
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;