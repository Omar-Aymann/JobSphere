const NewJob = () => {
    return (
        <div className="login w-full h-screen flex justify-center items-center">
            <div className="box w-1/4 bg-white p-4 h-auto py-6 px-8 flex flex-col justify-center items-center shadow-lg rounded-lg gap-4">
                <p className="text-2xl font-bold">Create New Job</p>
                <form className="flex flex-col justify-center items-center w-full gap-4">
                    <input placeholder="Job title" className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="title" id="title" />
                    <input className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company Name" type="text" name="company" id="company" />
                    <textarea className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="job description" name="description" id="" cols="30" rows="10"></textarea>
                    <button className="px-4 py-2 bg-green-600 hover:bg-blue-800 text-white rounded" type="submit">Create Job</button>
                </form>
            </div>
        </div>
    )
}

export default NewJob;