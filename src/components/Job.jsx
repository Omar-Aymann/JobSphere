const Job = () => {
    
    return (
        <section className="w-full flex flex-col h-screen bg-center items-center">
            <div className="card bg-white w-2/4 mt-1 grow-0 p-5 my-5">
                <h2 className="text-2xl font-bold">Job title</h2>
                <p className="font-bold pb-3">Company name</p>
                <p className="text-lg font-medium py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae totam, quae provident rerum consectetur possimus ab aut repellat vitae tenetur at delectus quaerat praesentium laboriosam perspiciatis, voluptates quidem fugit!</p>
                <button className="px-2 py-1 bg-blue-600 rounded-lg text-white">Apply now</button>
            </div>
        </section>
    )
}

export default Job;