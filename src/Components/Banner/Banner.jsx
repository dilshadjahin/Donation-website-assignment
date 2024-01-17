

const Banner = () => {
    return (
        <div className=" mx-auto my-40 flex justify-center items-center flex-col text-center">

            <h3 className="text-5xl font-bold">I Grow By Helping People In Need</h3>
            <div className="flex items-center relative">
                <div className="form-control flex items-center">
                    <input type="text" placeholder="Search here" className="h-[46px] pl-4 focus:border-none border outline-[#F8F4EC] rounded-lg  focus:outline-[#F8F4EC] focus:rounded-lg w-24 md:w-full m-6" />
                </div>
                <button className="bg-red-600 text-white px-8 py-[11px] rounded absolute
                 right-[-90px]">Search</button>
            </div>

        </div>
    );
};

export default Banner;