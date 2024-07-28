import { useContext } from "react"
import Card from "../../components/Card/card"
import Header from "../../components/Header/Header"
import Styled from "./Travels.module.css"
import { TabContext } from "../../context"

const Travels = () => {
    const { travelData, setTravelData } = useContext(TabContext)

    return (
        <>
            <Header />
            <div className={Styled.BannerBox}>
                <img src="image/baner2.jpg" alt="" />
                <div className={Styled.BannerText}>
                  
                    <span className={Styled.s2}>برنامـــه‌ها</span>
                </div>
            </div>
            <div className={Styled.Box1}>
                <div className={Styled.TitleLine}>
                    <span>برنامـــه‌ها</span>
                </div>
                <div className={Styled.CardBox}>
                    {travelData?.map((item) => (
                        <Card item={item} />
                    ))}
                
                </div>
            </div>
         
        </>
    )
}

export default Travels