import { Link } from "react-router-dom";
import Styled from "./Header.module.css"
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const Header = () => {
    const [menu, setMenu] = useState(false)
    const OpenMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <div className={Styled.HeaderBox2}>
                <div className={Styled.HeaderLine1}>
                    <div className={Styled.logoBox}>
                        <Link to="/">
                            <img src="image/Untitled-1.png" alt="" />
                        </Link>
                    </div>
                    <div className={Styled.menuBox}>
                        <div>{menu ? <IoClose onClick={OpenMenu} /> : <IoMenu onClick={OpenMenu} />}</div>
                    </div>
                </div>
                <div className={`${Styled.HeaderLine2} ${menu ? Styled.show : ""}`}>

                    <div>
                        <Link to="/travels">
                            برنامه ها
                        </Link>
                    </div>
                    <div>قوانین و مقررات</div>
                    <div>بلاگ</div>
                    <div>تماس با ما</div>
                    <div className={Styled.divEnd}>درباره ما</div>
                </div>
            </div>
            <div className={Styled.HeaderBox1}>
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