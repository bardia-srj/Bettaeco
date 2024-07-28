import { useContext, useState } from "react"
import Header from "../../components/Header/Header"
import Styled from "./TravelPage.module.css"
import { TabContext } from "../../context"

const TravelPage = () => {
    const [tab, setTab] = useState(1)
    const { dataState } = useContext(TabContext)
    console.log(dataState);
    return (
        <>
            <Header />
            <div className={Styled.TravelPageBox}>
                <div className={Styled.ImageBox}>
                    <img src="image/1.jpg" alt="" />
                    <div className={Styled.TitleTravel}>
                        <span>سفر {dataState.item.NumberTravel} /{dataState.item.TitleTravel}</span>
                    </div>
                </div>
                <div className={Styled.GalleryBox}>
                    <div className={Styled.Title1}>
                        <span>جاذبه ها</span>
                        <div className={Styled.Line}></div>
                        <h3>{dataState.item.Text1}</h3>
                    </div>
                    <div className={Styled.Gallery}>
                        <img src="image/409.jpg" alt="" />
                        <img src="image/409.jpg" alt="" />
                        <img src="image/409.jpg" alt="" />
                        <img src="image/409.jpg" alt="" />
                    </div>
                    <div className={Styled.DateBox}>
                        <div className={Styled.Title1}>

                            <span>تاریخ</span>
                            <div className={Styled.Line}></div>
                        </div>
                        <div className={Styled.table1}>
                            <div className={Styled.TableTitle}>
                                <span>{dataState.item.Text2}</span>
                            </div>
                            <div className={Styled.Tableline}>
                                <span>مدت برنامه: {dataState.item.Text3}</span>
                            </div>
                            <div className={Styled.Tableline}>
                                <span>نیاز به مرخصی: {dataState.item.Text4}</span>
                            </div>
                        </div>
                        <div className={Styled.table2}>
                            <div className={Styled.Tableline}>
                                <span>سختی سفر
                                    {dataState.item.Text5}</span>
                            </div>
                            <div className={Styled.Tableline}>
                                <span>زمان حرکت:{dataState.item.Text6}</span>
                            </div>
                            <div className={Styled.Tableline}>
                                <span>زمان بازگشت: {dataState.item.Text7}</span>
                            </div>
                            <div className={Styled.Tableline}>
                                <span>اقامت: {dataState.item.Text75}</span>
                            </div>
                            <div className={Styled.Tableline}>
                                <span>تعداد وعده‌های غذایی: {dataState.item.Text8}</span>
                            </div>
                            <div className={Styled.Tableline}>
                                <span>احتمال اجرا: {dataState.item.Text9}</span>
                            </div>
                            <div className={Styled.Tableline}>
                                <span>وسیله نقلیه اصلی:  {dataState.item.Text10}</span>
                            </div>
                            <div className={Styled.Tableline}>
                                <span>قیمت: {dataState.item.Text11}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styled.TabBox}>
                    <div className={Styled.TabTitleBox}>
                        <div className={`${tab == 1 ? Styled.TabTitleActive : Styled.TabTitle}`}>
                            <span onClick={() => setTab(1)}>شرح برنامه</span>
                        </div>
                        <div className={`${tab == 2 ? Styled.TabTitleActive : Styled.TabTitle}`}>
                            <span onClick={() => setTab(2)}>شرح خدمات</span>
                        </div>
                        <div className={`${tab == 3 ? Styled.TabTitleActive : Styled.TabTitle}`}>
                            <span onClick={() => setTab(3)}>اقامــت</span>
                        </div>
                        <div className={`${tab == 4 ? Styled.TabTitleActive : Styled.TabTitle}`}>
                            <span onClick={() => setTab(4)}>تجهیزات</span>
                        </div>
                        <div className={`${tab == 5 ? Styled.TabTitleActive : Styled.TabTitle}`}>
                            <span onClick={() => setTab(5)}>نکتــه‌ها</span>
                        </div>

                    </div>
                    <div className={`${tab == 1 ? Styled.TabPage1 : Styled.None}`}>
                        <h3>شرح برنامه</h3>
                        <div className={Styled.dataBox}>
                            <span>روز 1.<br />
                                {dataState.item.Text12}
                            </span>
                            <span>
                                روز 2.<br />
                                {dataState.item.Text13}

                            </span>

                        </div>
                    </div>
                    <div className={`${tab == 2 ? Styled.TabPage2 : Styled.None}`}>
                        <h3>شرح خدمات</h3>
                        <div>
                            <ul>
                                <li>{dataState.item.Text14}</li>
                                <li> {dataState.item.Text15}</li>
                                <li>{dataState.item.Text16}</li>
                                <li>{dataState.item.Text17}</li>
                                <li>{dataState.item.Text18}</li>
                                <li>{dataState.item.Text19}</li>
                                <li>{dataState.item.Text20}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${tab == 3 ? Styled.TabPage3 : Styled.None}`}>
                        <div className={Styled.TableBox}>
                            <div className={Styled.TableTitleBox}>
                                <span>روز : ۱</span>
                            </div>
                            <div className={Styled.TableBodyBox}>
                                <div>
                                    <span className={Styled.Text1}>مکان صبحانه:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>صبحانه توسط:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>مکان ناهار:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>ناهار توسط:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>مکان شام:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>شام توسط:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>اقامت محل:</span>
                                    <span className={Styled.Text2}> {dataState.item.Text21}</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>اقامت توسط:</span>
                                    <span className={Styled.Text2}> {dataState.item.Text22}</span>
                                </div>
                            </div>

                        </div>
                        <div className={Styled.TableBox}>
                            <div className={Styled.TableTitleBox}>
                                <span>روز : ۲</span>
                            </div>
                            <div className={Styled.TableBodyBox}>
                                <div>
                                    <span className={Styled.Text1}>مکان صبحانه:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>صبحانه توسط:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>مکان ناهار:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>ناهار توسط:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>مکان شام:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>شام توسط:</span>
                                    <span className={Styled.Text2}>-</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>اقامت محل:</span>
                                    <span className={Styled.Text2}> {dataState.item.Text21}</span>
                                </div>
                                <div>
                                    <span className={Styled.Text1}>اقامت توسط:</span>
                                    <span className={Styled.Text2}> {dataState.item.Text22}</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={`${tab == 4 ? Styled.TabPage2 : Styled.None}`}>
                        <h3>تجهیزات</h3>
                        <div className={Styled.MobilizationBox}>
                            <span>
                                کیسه خواب
                            </span>
                            <span>
                                ظروف غذاخوری غیر یکبار مصرف
                            </span>
                            <span>
                                تجهیزات ارتباطی
                            </span>
                            <span>
                                لوازم خودرو (زاپاس سالم - آچار چرخ - جک)
                            </span>
                            <span>
                                داروهای شخصی (در صورت مصرف)
                            </span>
                            <span>
                                آب به میزان کافی (هر نفر حداقل ۴ لیتر)
                            </span>
                            <span>
                                هدلایت و چراغ قوه
                            </span>
                            <span>
                                داروهای شخصی (در صورت مصرف)
                            </span>
                            <span>
                                آب به میزان کافی (هر نفر حداقل ۴ لیتر)
                            </span>
                            <span>
                                هدلایت و چراغ قوه
                            </span>
                            <span>
                                کارت شناسایی معتبر و مدارک خودرو
                            </span>
                            <span>
                                صندلی کمپ
                            </span>
                            <span>
                                پانچو و چتر
                            </span>
                            <span>
                                چادر و زیرانداز چادر
                            </span>
                            <span>
                                لباس خنک و آستین بلند برای روز و لباس گرم برای شب
                            </span>

                        </div>
                    </div>
                    <div className={`${tab == 5 ? Styled.TabPage2 : Styled.None}`}>
                        <h3>نکته ها</h3>
                        <div className={Styled.PointBox}>
                            <p>لطفا اطلاعات همراهان خود را بصورت کامل ارسال کنید.</p>
                            <p>همراه داشتن لوازمِ شخصی، تجهیزات مورد نیاز خودرو و همچنین رعایت کلیه‌ی اصول زیست‌محیطی در تمام سفرهای دلتا الزامی‌ست.</p>
                            <p>در سفرهای طبیعت‌گردی امکان تغییر کل یا بخشی از برنامه با توجه به شرایط غیرقابل پیش‌بینی از لحاظ زمان‌بندی و یا بازدید از مقاصد اعلام شده، به صلاحدید لیدر برنامه وجود دارد.</p>
                        </div>
                    </div>
                </div>
                <div className={Styled.AbouteBox}>
                    <div className={Styled.Title1}>
                        <span>درباره سفر</span>
                        <div className={Styled.Line}></div>
                    </div>
                    <div className={Styled.Aboute}>
                        <div>
                            <h2>{dataState.item.TitleTravel}</h2>
                            <span>{dataState.item.Text23}</span>
                        </div>
                        <div>
                            <h4>باشگاه: </h4>
                            <span>{dataState.item.Text24}</span>
                        </div>
                        <div>
                            <h4>سرویس سفر:</h4>
                            <span>اقتصادی</span>
                        </div>
                        <div>
                            <h4>مسیــر:</h4>
                            <span>مسیر رفت و برگشت: {dataState.item.Text26}</span>
                            <span>مسافت حدودی رفت و برگشت:{dataState.item.Text27}</span>
                            <span>پیش بینی حدودی وضع دما: هنوز بطور دقیق مشخص نیست </span>
                        </div>
                        <div>
                            <h4>لیـــدر سفــــر:</h4>
                            <span>{dataState.item.Text30}</span>
                        </div>
                        <div>
                            <h4>هزینه برای دوستانی که با خودروی شخصی تشریف می‌آورند:</h4>
                            <span>{dataState.item.Text31}
                                <br />
                                {dataState.item.Text32}


                            </span>
                        </div>
                        <div>
                            <h4>هزینه برای دوستانی که از خودروهای گروه استفاده می‌کنند:</h4>
                            <span>
                                {dataState.item.Text33}
                                <br/>
                                ({dataState.item.Text34})
                            </span>
                        </div>
                        <div>
                            <h4>ظرفیـــت‌ کل:</h4>
                            <span>محدود</span>
                        </div>
                        <div>
                            <h4>اطلاعات بیشتر و ثبت‌نام:</h4>
                            <span>تماس : 896-9492-0912 
                                <br />
                                 ثبت‌نام در واتس اپ : 6006-738-0930
                                <br />

                                </span>
                        </div>
                    </div>
                </div>
                <div className={Styled.LawsBox}>
                    <div className={Styled.Title1}>
                        <span>قوانین و مقررات</span>
                        <div className={Styled.Line}></div>
                    </div>
                    <div className={Styled.Laws}>
                        <p>لطفا در انتخاب سفر دقت کنید و قبل از ثبت‌نام شرایط کنسلی را مطالعه نمایید.</p>
                        <p>قبل از انتخاب سفر به جزییات آن دقت فرمایید، امکان اضافه شدن همسفری بعد از تکمیل ظرفیت سفر وجود ندارد.</p>
                        <p>شرکت در سفرهای بتا به منزله‌ی قبول تمام قوانین و مقررات گروه دلتا در سفر است.</p>
                    </div>
                </div>
            </div >
            {/* <Footer /> */}
        </>
    )
}
export default TravelPage


