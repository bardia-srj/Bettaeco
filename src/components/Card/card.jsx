import { useContext, useEffect } from "react";
import Styled from "./Card.module.css"
import { IoLocationOutline } from "react-icons/io5";
import { TabContext } from "../../context";
import { Link } from "react-router-dom";
const Card = (Props) => {
    const { setDataState} = useContext(TabContext)

const HandlepropsCard = () =>{
    setDataState(Props)
}

useEffect(() =>{
    HandlepropsCard()
    
})

    return (
        <> 
        <Link to="/travelpage">
            <div className={Styled.CardBox} onClick={() => HandlepropsCard()}>
                <div className={Styled.ImageBox}>
                    <img src="image/1.jpg" alt="" />
                </div>
                <div className={Styled.TextBox}>
                    <div className={Styled.LocationBox}>
                        <IoLocationOutline />
                        <span>{Props.item.TitleTravel}</span>
                    </div>
                    <div className={Styled.DateBox}>
                       <span>{Props.item.Text3}  از تاریخ {Props.item.Text6}</span>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Card;