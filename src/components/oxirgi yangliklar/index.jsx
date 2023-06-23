import IconClock from 'assets/images/png/clock.png'
import IconDropDown from 'assets/images/png/dropdown.png'
import ImgNews1 from 'assets/images/jpg/post-news-1.jpg'
import ImgNews2 from 'assets/images/jpg/post-news-2.jpg'
import ImgNews3 from 'assets/images/jpg/post-news-3.jpg'
import ImgNews4 from 'assets/images/jpg/post-news-4.jpg'

const index = () => {

    return (
        <div className='latest-news'>
            <div className="latest-news-header">
                <h1 className='latest-news-header-title'>
                    Oxirgi yangiliklar
                    <span><img src={IconDropDown} className="latest-news-header-title-icon" alt="" /></span>
                </h1>
                <div className="btn-group">
                    <button className="btn-teg">#backend</button>
                    <button className="btn-teg">#frontend</button>
                    <button className="btn-teg">#database</button>
                </div>
            </div>
            <hr />
            <div className='latest-news-item'>
                <div className="latest-news-item-info">
                    <h1 className="latest-news-item-info-title">
                        Python dasturlash tili haqida batafsil
                    </h1>
                    <div className="latest-news-item-info-box">
                        <div className="btn-group">
                            <button className="btn-teg">#python</button>
                            <button className="btn-teg">#backend</button>
                        </div>
                        <h6 className="latest-news-item-info-box-data">
                            <span><img src={IconClock} alt="" /></span>
                            4 daqiqa oldin
                        </h6>
                    </div>
                </div>
                <div className="latest-news-item-img">
                    <img src={ImgNews1} alt="" />
                </div>
            </div>
            <hr />
            <div className='latest-news-item'>
                <div className="latest-news-item-info">
                    <h1 className="latest-news-item-info-title">
                        Dasturlash sohasida ishlash uchun Ingliz tilining o'rni
                    </h1>
                    <div className="latest-news-item-info-box">
                        <div className="btn-group">
                            <button className="btn-teg">#developing</button>
                            <button className="btn-teg">#ingliztili</button>
                        </div>
                        <h6 className="latest-news-item-info-box-data">
                            <span><img src={IconClock} alt="" /></span>
                            4 daqiqa oldin
                        </h6>
                    </div>
                </div>
                <div className="latest-news-item-img">
                    <img src={ImgNews2} alt="" />
                </div>
            </div>
            <hr />
            <div className='latest-news-item'>
                <div className="latest-news-item-info">
                    <h1 className="latest-news-item-info-title">
                        Loyihani QA tester orqali sinovdan oʻtkazish qanchalik ahamiyatli?
                    </h1>
                    <div className="latest-news-item-info-box">
                        <div className="btn-group">
                            <button className="btn-teg">#tester</button>
                            <button className="btn-teg">#product</button>
                            <button className="btn-teg">#case</button>
                        </div>
                        <h6 className="latest-news-item-info-box-data">
                            <span><img src={IconClock} alt="" /></span>
                            4 daqiqa oldin
                        </h6>
                    </div>
                </div>
                <div className="latest-news-item-img">
                    <img src={ImgNews3} alt="" />
                </div>
            </div>
            <hr />
            <div className='latest-news-item'>
                <div className="latest-news-item-info">
                    <h1 className="latest-news-item-info-title">
                        IT Park yurtimizdagi spikerlarni Startup Meetup tadbiriga taklif qiladi
                    </h1>
                    <div className="latest-news-item-info-box">
                        <div className="btn-group">
                            <button className="btn-teg">#itpark</button>
                            <button className="btn-teg">#community</button>
                        </div>
                        <h6 className="latest-news-item-info-box-data">
                            <span><img src={IconClock} alt="" /></span>
                            4 daqiqa oldin
                        </h6>
                    </div>
                </div>
                <div className="latest-news-item-img">
                    <img src={ImgNews4} alt="" />
                </div>
            </div>

            <div className="news-btn-box">
                <button className='news-btn-box-item'>
                    Ko'proq yangilik
                </button>
            </div>
        </div>
    )
}

export default index