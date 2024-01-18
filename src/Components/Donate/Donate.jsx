import { useEffect, useState } from "react";
import { getStoredDonateApplication } from "../../Utility/localStorage";

const Donate = () => {



    const [donated, setDonated] = useState([])
    const [dataLength, setDataLength] = useState(2);

    useEffect(() => {
        const storedDonateIds = getStoredDonateApplication();
        setDonated(storedDonateIds)

    }, []);

    return (


        <div className="my-10">

            <div className="grid grid-cols-2 max-w-7xl mx-auto mt-24 gap-10">

                <div className="">

                    {donated.slice(0, dataLength).map((item, index) => (
                        <div key={index} className="">


                            <div className="flex mb-6">
                                <div>

                                    <img src={item.picture} className="w-full h-full object-cover" />

                                </div>

                                <div className={`card-body `} style={{ backgroundColor: item.card_bg }}>

                                    <button className="w-[90px] h-[30px] text-[${text_button_bg}] font-semibold" style={{ color: item.text_button_bg, background: item.category_bg }}>{item.category}</button>
                                    <h2 className={`card-title text-${item.text_color} `} style={{ color: item.text_button_bg }}>{item.title}</h2>
                                    <h4 className="text-base font-semibold" style={{ color: item.text_button_bg }}>{item.price}</h4>
                                    <button className="w-[140px] h-[40px] rounded-md text-white font-semibold" style={{ background: item.text_button_bg }}>View Details</button>

                                </div>

                            </div>


                        </div>
                    ))}
                </div>

                <div>

                    {donated.slice(0, dataLength).map((item, index) => (
                        <div key={index} className="">


                            <div className="flex mb-6">
                                <div className="">

                                    <img src={item.picture} className="w-full h-full object-cover" />

                                </div>

                                <div className={`card-body `} style={{ backgroundColor: item.card_bg }}>

                                    <button className="w-[90px] h-[30px] text-[${text_button_bg}] font-semibold" style={{ color: item.text_button_bg, background: item.category_bg }}>{item.category}</button>
                                    <h2 className={`card-title text-${item.text_color} `} style={{ color: item.text_button_bg }}>{item.title}</h2>
                                    <h4 className="text-base font-semibold" style={{ color: item.text_button_bg }}>{item.price}</h4>
                                    <button className="w-[140px] h-[40px] rounded-md text-white font-semibold" style={{ background: item.text_button_bg }}>View Details</button>

                                </div>

                            </div>


                        </div>
                    ))}
                </div>
            </div>

            {/* show all button */}

            <div className={ dataLength === donated.length ? 'hidden' : 'flex justify-center text-center '} >

                <button onClick={()=> setDataLength(donated.length)} className=" w-[140px] h-[40px] rounded text-white font-semibold bg-[#009444] ">See All</button>

            </div>


        </div>


    );
};

export default Donate;
