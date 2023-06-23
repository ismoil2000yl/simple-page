import React from 'react'
import IconClock from 'assets/images/png/clock.png'
import IconEye from 'assets/images/png/eye.png'
import IconLike from 'assets/images/png/like.png'
import IconOpenBook from 'assets/images/png/open-book.png'
import PostImage from 'assets/images/jpg/post-image.jpg'
import { IconFacebook, IconLink, IconTelegram, IconTwitter } from 'assets/images/svg'


const index = () => {
    return (
        <div className='post'>
            <div className="post-statistic">
                <div className="post-statistic-box">
                    <h5 className='post-statistic-box-item'>
                        <span><img src={IconClock} alt="" /></span>
                        5-dekabr, 09:24
                    </h5>
                    <h5 className='post-statistic-box-item'>
                        <span><img src={IconEye} alt="" /></span>
                        12,900
                    </h5>
                    <h5 className='post-statistic-box-item'>
                        <span><img src={IconLike} alt="" /></span>
                        544
                    </h5>
                    <h5 className='post-statistic-box-item'>
                        <span><img src={IconOpenBook} alt="" /></span>
                        2 daqiqada o'qiladi
                    </h5>
                </div>
                <div className="post-statistic-network">
                    <div className="post-statistic-network-item">
                        <IconTelegram className={"post-statistic-network-item-icon"} />
                    </div>
                    <div className="post-statistic-network-item">
                        <IconFacebook className={"post-statistic-network-item-icon"} />
                    </div>
                    <div className="post-statistic-network-item">
                        <IconTwitter className={"post-statistic-network-item-icon"} />
                    </div>
                    <div className="post-statistic-network-item">
                        <IconLink className={"post-statistic-network-item-icon"} />
                    </div>
                </div>
            </div>
            <h1 className="post-title">
                Dasturlash sohasida ishlash uchun
                Ingliz tilining o'rni
            </h1>
            <p className="post-description">
                Hozirgi kunda dasturlash sohalarini o'rgatishga
                bel bog'lagan o'quv markazlar va onlayn kurslarda
                bu sohaning yaxshi daromad olib kelishi, o'rganish
                qiyin emasligi va kadrlar yetishmovchiligi haqida
                bong urib o'z kurslarini reklama qilmoqda.
            </p>
            <div className="post-img">
                <img src={PostImage} alt="" />
            </div>
            <div className="post-skeditor">
                <h3>Muammo</h3>
                <p>
                    Hozirgi kunda dasturlash sohalarini o'rgatishga
                    bel bog'lagan o'quv markazlar va onlayn kurslarda
                    bu sohaning yaxshi daromad olib kelishi, o'rganish
                    qiyin emasligi va kadrlar yetishmovchiligi haqida
                    bong urib o'z kurslarini reklama qilmoqda. Lekin
                    ularning aksariyati bu sohada Ingliz tilini bilish
                    qanchalik ahamiyatli ekanini unutmoqda.
                </p>
                <p>
                    Kompyuterga biz o'zimiz hohlagan vazigani bajarishini
                    dasturlash tilida tushuntirishimiz kerak. Dasturlash
                    tillari esa Ingliz tiliga asoslangan. Albatta kerakli
                    sintaksisni yodlab olib ham dastur yozsa bo'ladi lekin
                    mohiyatni tushunib dastur yozilsa yozilgan kod sifati
                    ham baland bo'ladi.
                </p>
                <div className='post-skeditor-div'>
                    <div className="container">
                        <div className="post-skeditor-div-wrapper">
                            <span>“</span>
                            <p>
                                Ishxonamizda ba'zi hamkasblarimiz Ingliz tilini
                                yaxshi bilmaydi lekin tinimsiz mehnat qilib,
                                izlanib dasturlashni o'rgangan va shu sohada
                                faoliyat yuritib kelishmoqda.
                            </p>
                        </div>
                    </div>
                </div>
                <h3>Yechim(?)</h3>
                <p>
                    Mening fikrimcha dasturchi hamkasblarimizning Ingliz
                    tilidan bilimlarini oshirish bo'yicha ular dasturlashni
                    o'rganishni boshlagan paytdan shug'ullanish kerak. Ularga
                    bu qanchalik muhim ekanligini tushuntirish, maxsus kurslar
                    tashkil qilish foydali bo'ladi.
                </p>
                <p>
                    Mening fikrimcha dasturchi hamkasblarimizning Ingliz tilidan
                    bilimlarini oshirish bo'yicha ular dasturlashni o'rganishni
                    boshlagan paytdan shug'ullanish kerak. Ularga bu qanchalik
                    muhim ekanligini tushuntirish, maxsus kurslar tashkil qilish foydali bo'ladi.
                </p>
                <h3>
                    P.S
                </h3>
                <p>
                    Qisqa qilib aytganda, Ingliz tilini yaxshi bilmaslik
                    uyda chiroq bo'la turib fonar yoqib o'tirishga o'xshaydi 😅.
                </p>
            </div>
            <hr />
            <div className="teg-group">
                <button className='teg'>#Dasturlash</button>
                <button className='teg'>#Ingiliztili</button>
                <button className='teg'>#Design</button>
                <button className='teg'>#UIUX</button>
                <button className='teg'>#Python</button>
                <button className='teg'>#Javascript</button>
                <button className='teg'>#C++</button>
            </div>
        </div>
    )
}

export default index