import { Link } from "react-router-dom";


const Cards = ({ card }) => {
    const { id, picture, card_bg, category, title, text_button_bg, text_color, category_bg } = card;

    console.log(card);

    return (
        <Link to={`/Catagory/${id}`}>

            <div className={`w-[312px] h-[283px] shadow-xl `}>
                <div className="w-[312px] h-[192px]">
                    <img src={picture} className="w-full h-full object-cover" />
                </div>
                <div className={`card-body `} style={{ backgroundColor: card_bg }}>

                    <button className="w-[90px] h-[30px] text-[${text_button_bg}] font-semibold" style={{ color: text_button_bg, background: category_bg }}>{category}</button>
                    <h2 className={`card-title text-${text_color} `} style={{ color: text_button_bg }}>{title}</h2>

                </div>
            </div>
        </Link>
    );
};



export default Cards;
