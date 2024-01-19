import { useEffect, useState } from "react";
import { getStoredDonateApplication } from "../../Utility/localStorage";
import { Link } from "react-router-dom";

// import {  useNavigate } from "react-router-dom";

const Donate = () => {


    const [donated, setDonated] = useState([])
    const [dataLength, setDataLength] = useState(4);

    // const { id, price, title, description } = Donate;



    useEffect(() => {
        const storedDonateIds = getStoredDonateApplication();
        setDonated(storedDonateIds)

    }, []);

    return (
        <div className="my-10">

            <div className="grid grid-cols-2 max-w-7xl mx-auto mt-24 gap-10">

                {donated.slice(0, dataLength).map((item, index) => (
                    <div key={index} className="flex w-[648px] h-[200px]  bg-red-300">
                        <div className="w-[220] h-full">
                            <img src={item.picture} className="w-[220px] h-full object-cover" />
                        </div>
                        <div className={`card-body `} style={{ backgroundColor: item.card_bg }}>
                            <button className="w-[90px] h-[30px] text-[${text_button_bg}] font-semibold" style={{ color: item.text_button_bg, background: item.category_bg }}>{item.category}</button>
                            <h2 className={`card-title text-${item.text_color} `} style={{ color: item.text_button_bg }}>{item.title}</h2>
                            <h4 className="text-base font-semibold" style={{ color: item.text_button_bg }}>{item.price}</h4>
                           
                            <Link to={`/Catagory/${item.id}`}>
                                <button className="w-[140px] h-[40px] rounded-md text-white font-semibold" style={{ background: item.text_button_bg }}>View Details</button>
                            </Link>

                        </div>
                    </div>
                ))}

             
            </div>

            {/* show all button */}

            <div className={dataLength === donated.length ? 'hidden' : 'flex mt-6 justify-center text-center '} >

                <button onClick={() => setDataLength(donated.length)} className=" w-[140px] h-[40px] rounded text-white font-semibold bg-[#009444] ">See All</button>

            </div>


        </div>


    );
};

export default Donate;
