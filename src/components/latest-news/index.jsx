import IconClock from 'assets/images/png/clock.png'
import ImgNews1 from 'assets/images/jpg/latest-news-1.jpg'
import ImgNews2 from 'assets/images/jpg/latest-news-2.jpg'
import ImgNews3 from 'assets/images/jpg/latest-news-3.jpg'
import ImgNews4 from 'assets/images/jpg/latest-news-4.jpg'

const index = () => {

    return (
        <div className='latest-news'>
            <h1 className="latest-news-title">
                So'ngi yangiliklar
            </h1>
            <hr />
            <div className='latest-news-item'>
                <div className="latest-news-item-info">
                    <h1 className="latest-news-item-info-title">
                        Qanday qilib mukammal portfolioni yaratish va mijozlarni jalb qilish mumkin?
                    </h1>
                    <div className="latest-news-item-info-box">
                        <div className="btn-group">
                            <button className="btn-marketing">Marketing</button>
                            <button className="btn-teg">#design</button>
                            <button className="btn-teg">#brending</button>
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
                        IT kompaniyada amaliyotchi boʻlish qanday?
                    </h1>
                    <div className="latest-news-item-info-box">
                        <div className="btn-group">
                            <button className="btn-dasturlash">Dasturlash</button>
                            <button className="btn-teg">#design</button>
                            <button className="btn-teg">#brending</button>
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
                        Biznes menejment nima va bozorda biznes menejerlarga boʻlgan talab qanday?
                    </h1>
                    <div className="latest-news-item-info-box">
                        <div className="btn-group">
                            <button className="btn-managment">Managment</button>
                            <button className="btn-teg">#design</button>
                            <button className="btn-teg">#brending</button>
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
                        UI/UX dizayn sohasini oʻrganish uchun bepul va pullik kurslar
                    </h1>
                    <div className="latest-news-item-info-box">
                        <div className="btn-group">
                            <button className="btn-marketing">Marketing</button>
                            <button className="btn-teg">#design</button>
                            <button className="btn-teg">#brending</button>
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