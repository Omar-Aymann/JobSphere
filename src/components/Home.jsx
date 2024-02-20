const Home = () => {
    return (
        <section className="w-full flex flex-col hero h-screen bg-cover items-center justify-center bg-center">
            <div className="px-28 flex flex-col justify-center items-center gap-6">
                <p className="text-6xl font-black">Find your dream job</p>
                <input type="text" className="input-group w-full px-5 py-3 border-2 border-solid border-1 rounded-xl bg-slate-100" placeholder="Find your job" name="search" id="search" />
            </div>
        </section>
    )
}

export default Home;