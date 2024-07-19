import Styled from "./Card.module.css"
import { IoLocationOutline } from "react-icons/io5";
const Card = (Props) => {
    return (
        <>
            <div className={Styled.CardBox}>
                <div className={Styled.ImageBox}>
                    <img src="image/1.jpg" alt="" />
                </div>
                <div className={Styled.TextBox}>
                    <div className={Styled.LocationBox}>
                        <IoLocationOutline />
                        <span>دزفول و اندیمشک</span>
                    </div>
                    <div className={Styled.DateBox}>
                       <span>۲/۵ روزه از تاریخ ۱۴۰۳/۱/۱</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;