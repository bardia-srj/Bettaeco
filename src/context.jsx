import { createContext, useEffect, useState } from "react";
export const TabContext = createContext();
export const TabProvider = ({ children }) => {


    const [travelData, setTravelData] = useState([])
    const [dataState , setDataState] = useState([])
    const data = [
        {
            TitleTravel: "شهرستان سمیرم (پادنا)",
            NumberTravel: "265",
            img1:"image/ut.jpg",
            Text1: "سافاری و کمپ در بهترین لوکیشن منطقه پادنا",
            img2: "image/JZ2A7639.JPG",
            img3: "image/JZ2A7661.JPG",
            img4: "image/JZ2A7731.JPG",
            img5: "image/JZ2A7807.JPG",
            img6:"image/Untitled-1.jpg",
            Text2: "از ۱۸ مرداد ۱۴۰۳",
            Text3: "۱.۵ روزه",
            Text4: "ندارد",
            Text5: "۳/۵",
            Text6: "۱۴۰۳/۰۵/۱۸",
            Text7: "۱۴۰۳/۰۵/۱۹",
            Text75:"کمپ متمرکز",
            Text8: "۴ وعده با بتا",
            Text9: "قطعی",
            Text10: "تمام خودرو های دو دیفرانسیل , خودرو های دو دیفرانسیل آفرودی",
            Text11: "با خودرو های شخصی مبلغ ۲,۸۰۰,۰۰۰ هزار تومان و با خودرو های گروه مبلغ  ۴,۸۰۰,۰۰۰ هزار تومان",
            Text12: "حرکت از محل قرار ساعت ۱۴ روز ۱۸ مرداد ماه به سمت لوکیشن مورد نظر و برپایی کمپ ",
            Text13:"بعد از صرف ناهار و جمع کردن کمپ و برگشت به سمت اصفهان در روز ۱۹ مرداد ماه",
            Text14:"برگزاری",
            Text15:"راهنمای محلی",
            Text16:"۱ وعده صبحانه سلف سرویس هتلی",
            Text17:"۱ وعده ناهار گرم به همراه نوشیدنی (شویدپلو با گردن)",
            Text18:"۱ وعده شام گرم به همراه نوشیدنی (قارچ برگر مخصوص)",
            Text19:"۱ میان وعده (میز مخصوص بتا)",
            Text20:"بازی های گروهی",
            Text21:"کمپ متمرکز",
            Text22:"-",
            Text23:"این سفر برای چهارمین بار در بتا اجرا میشود",
            Text24:"سفر و خانواده",
            Text25:"فول برد (لوکس)",
            Text26:"اصفهان-شهرضا-سمیرم-پادنا",
            Text27:"۵۴۰ کیلمتر",
            Text28:"۵ از ۵",
            Text29:"۳ از ۵",
            Text30:"مسیح سرجوقیان",
            Text31:"به ازای هر نفر ۳,۵۰۰,۰۰۰ هزار تومان ",
            Text32:"هزینه برای کودکان تا ۴ سال رایگان و ۴ تا ۸ سال نیم بها محاسبه میگردد",
            Text33:"به ازای هر نفر ۵,۵۰۰,۰۰۰ هزار تومان",
            Text34:"خودروی رونیز با ۳ سرنشین + راننده",

        },
      

    ]
    

const HandleData = (event) =>{
    setTravelData(event)
}

useEffect(()=>{
    HandleData(data)
})

    return (
        <TabContext.Provider value={{ travelData, setTravelData ,dataState , setDataState }}>
            {children}
        </TabContext.Provider>
    );
};
