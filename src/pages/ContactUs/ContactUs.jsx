import Styled from "./ContactUs.module.css"
import Header from "../../components/Header/Header"
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const ContactUs = () => {
    return (
        <>
            <Header />
            <div className={Styled.ImageBox}>
                <span>تماس با ما</span>
            </div>
            <div className={Styled.main}>
                <div className={Styled.ContactBox}>
                    <div className={Styled.iconBox}>
                        <IoCallOutline />
                    </div>
                    <div className={Styled.dataBox}>
                        <div>
                            <span>phone</span>
                        </div>
                        <div>
                            <span>0912-949-2896</span>
                        </div>
                    </div>
                    <div className={Styled.buttonBox}>
                        <a href="tel:98+09307386006">
                            <button>call</button>
                        </a>
                    </div>
                </div>
                <div className={Styled.ContactBox}>
                    <div className={Styled.iconBox}>
                        <FaInstagram />
                    </div>
                    <div className={Styled.dataBox}>
                        <div>
                            <span>instagram</span>
                        </div>
                        <div>
                            <span>@bettaeco.ir</span>
                        </div>
                    </div>
                    <div className={Styled.buttonBox}>
                        <a href="https://www.instagram.com/bettaeco.ir?igsh=MTFvbTYxYTducjU3aw%3D%3D&utm_source=qr">
                            <button>instagram</button>
                        </a>
                    </div>
                </div>
                <div className={Styled.ContactBox}>
                    <div className={Styled.iconBox}>

                        <FaTelegram />
                    </div>
                    <div className={Styled.dataBox}>
                        <div>
                            <span>telegram</span>
                        </div>
                        <div>
                            <span>@bettaecogroup</span>
                        </div>
                    </div>
                    <div className={Styled.buttonBox}>
                        <a href="https://t.me/bettaecogroup">
                            <button>telegram</button>
                        </a>
                    </div>
                </div>
                <div className={Styled.ContactBox}>
                    <div className={Styled.iconBox}>

                        <FaWhatsapp />
                    </div>
                    <div className={Styled.dataBox}>
                        <div>
                            <span>whatsapp</span>
                        </div>
                        <div>
                            <span>@bettaecogroup</span>
                        </div>
                    </div>
                    <div className={Styled.buttonBox}>
                        <a href="https://api.whatsapp.com/message/LJQO44PBALQQI1?autoload=1&app_absent=0">
                            <button>whatsapp</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs