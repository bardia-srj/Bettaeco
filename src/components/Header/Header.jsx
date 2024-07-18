import { Link } from "react-router-dom";
import Styled from "./Header.module.css"
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
const Header = () => {
    return (
        <>
            <div className={Styled.HeaderBox}>
                <div className={Styled.box1}>
                    <img src="image/Untitled-1.png" alt="" />
                </div>
                <div className={Styled.box2}>
                    <Link>برنامه ها</Link>
                    <Link>قوانین و مقررات</Link>
                    <Link>بلاگ</Link>
                    <Link>تماس با ما</Link>
                    <Link>درباره ما</Link>
                </div>
                <div className={Styled.box3}>

                    <FaTelegram />
                    <AiFillInstagram />
                </div>
            </div>
        </>
    )
}

export default Header