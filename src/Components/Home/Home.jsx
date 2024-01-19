import { useState } from "react";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";


const Home = () => {

    const [search, setSearch] = useState('');
    return (
        <div>
            <Banner setSearch={setSearch}></Banner>
            <Catagory search={search}></Catagory>
        </div>
    );
};

export default Home;