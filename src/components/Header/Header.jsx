import Styled from "./Header.module.css"
import { IoMenu } from "react-icons/io5";
const Header = () => {
    return (
        <>
            <div className={Styled.HeaderBox}>
                <div className={Styled.LogoBox}>
                    <img src="image/bettalogo.jpg" alt="" />
                    
                </div>
                <div className={Styled.Menu1}>
                    <IoMenu />
                </div>
                {/* <div className={Styled.Menu2}></div> */}
            </div>
        </>
    )
}

export default Header