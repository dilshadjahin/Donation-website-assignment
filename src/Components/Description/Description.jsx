import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredDonateApplication, saveDonateApplication } from "../../Utility/localStorage";



const Description = () => {
    const saveLocal = saveDonateApplication;

    const catagories = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate()
    const catagoryItem = catagories.find((catagory) => catagory.id === id);
   
    if (!catagoryItem) {
        // Handle the case where the category with the given id is not found.
        // You might want to redirect or display an error message.
       console.log("not found");
      }
      const handleApplyDonate = () => {
        try {
          toast('Congratulations!! you have donated successfully');
          saveLocal(catagoryItem);
          const updatedStoredData = getStoredDonateApplication(); // Retrieve the updated data
          console.log(updatedStoredData);
          navigate('/donate');
        } catch (error) {
          console.error('Error in handleApplyDonate:', error);
        }
      };
      
      

    return (
        <div className="max-w-7xl mx-auto my-20 shadow-xl ">
            <div className="w-full h-[500px] relative ">
                <img src={catagoryItem.picture} className="w-full h-full object-cover" />
                <div className="card-actions  absolute z-10 bg-black w-full opacity-[.4] h-[100px] bottom-0  justify-start">
                    
                </div>
                <button onClick ={handleApplyDonate} className="bg-red-600 p-4 text-white font-semibold rounded m-6 absolute z-10 bottom-0">Donate {catagoryItem.price} </button>
            </div>
            <div className="card-body">
                <h2 className="text-[#0B0B0B] font-bold text-3xl">{catagoryItem.title}</h2>
                <p className="text-[#0B0B0B] font-normal text-base">{catagoryItem.description}</p>
               
            </div>
            <ToastContainer />
        </div>
    );
};

export default Description;