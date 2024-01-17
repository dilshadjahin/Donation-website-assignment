import { useLoaderData, useParams } from "react-router-dom";


const Description = () => {

    const catagories = useLoaderData();
    const { id } = useParams();
    const catagoryItem = catagories.find((catagory) => catagory.id === id);

    return (
        <div className="max-w-7xl mx-auto my-20 shadow-xl ">
            <div className="w-full h-[500px] relative ">
                <img src={catagoryItem.picture} className="w-full h-full object-cover" />
                <div className="card-actions  absolute z-10 bg-black w-full opacity-[.4] h-[100px] bottom-0  justify-start">
                    
                </div>
                <button className="bg-red-600 p-4 text-white font-semibold rounded m-6 absolute z-10 bottom-0">Donate {catagoryItem.price} </button>
            </div>
            <div className="card-body">
                <h2 className="text-[#0B0B0B] font-bold text-3xl">{catagoryItem.title}</h2>
                <p className="text-[#0B0B0B] font-normal text-base">{catagoryItem.description}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default Description;