import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";


const Catagory = () => {

    const [catagory, setCatagory] = useState([]);

    useEffect(() => {
        fetch('catagory.json')
            .then(res => res.json())
            .then(data => setCatagory(data));

    }, [])
    return (
        <div className="max-w-7xl mx-auto grid grid-rows-3 gap-6">

            <div className="grid grid-cols-4 gap-2 mb-6">
                {
                    catagory.map((card,idx) => (
                    <Cards key={idx} card={card} />))
                }

            </div>
            <div className="flex flex-row-reverse gap-3 mb-6">
                {
                    catagory.map((card) => (
                    <Cards key={card.id} card={card} />))
                }

            </div>
            <div className="grid grid-cols-4 gap-2  ">
                {
                    catagory.map((card) => (
                    <Cards key={card.id} card={card} />))
                }

            </div>
        </div>
    );
};

export default Catagory;