import { useContext } from "react"
import Card from "../../components/Card/card"
import Header from "../../components/Header/Header"
import Styled from "./Home.module.css"
import { TabContext } from "../../context"
const Home = () => {
    const { travelData } = useContext(TabContext)
    console.log(travelData);
    
    return (
        <>
            <Header />
            <div className={Styled.BannerBox}>
                <img src="image/baner2.jpg" alt="" />
                <div className={Styled.BannerText}>
                    <span className={Styled.s1}>کشف شگفتی‌های طبیعت ایران</span>
                    <span className={Styled.s2}>همقدم با گروه طبیعتگردی بتا</span>
                </div>
            </div>
            <div className={Styled.Box1}>
                <div className={Styled.TitleLine}>
                    <span>برنامـــه‌های پیـــش‌رو</span>
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

export default Home