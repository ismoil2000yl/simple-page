import ImgNews from 'assets/images/jpg/news.jpg'
import moment from 'moment/moment'
import IconClock from 'assets/images/png/clock.png'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate()

    return (
        <div className='news'>
            <div className="news-box">
                <div className="news-box-img" onClick={()=>navigate('/page')}>
                    <img src={ImgNews} alt="" />
                </div>
                <div className="news-box-info">
                    <div className="btn-group">
                        <button className="btn-marketing">
                            Marketing
                        </button>
                        <button className="btn-teg">
                            #design
                        </button>
                        <button className="btn-teg">
                            #branding
                        </button>
                    </div>
                    <h1 className="news-box-info-title">
                        Rebranding va restyling - farqi nimada?
                    </h1>
                    <p className="news-box-info-description">
                        Hayotdagi eng doimiy narsa - bu oʻzgarish.
                        Brendlar ham bundan mustasno emas.
                        Rebranding yoki restayling'dan oʻtmagan
                        uzoq tarixga ega boʻlgan brend deyarli
                        Rebranding yoki restayling'dan oʻtmagan
                        uzoq tarixga ega boʻlgan brend deyarli
                        uzoq tarixga ega boʻlgan brend deyarli
                        Rebranding yoki restayling'dan oʻtmagan
                        uzoq tarixga ega boʻlgan brend deyarli
                    </p>
                    <h6 className="news-box-info-data">
                        <span><img src={IconClock} alt="" /></span>
                        {moment().format('MMMM Do YYYY')}
                    </h6>
                </div>
            </div>
            <hr />
            <div className="news-info">
                <div className="news-info-item">
                    <div className="btn-group">
                        <button className="btn-managment">Managment</button>
                        <button className='btn-teg'>#project</button>
                        <button className='btn-teg'>#product</button>
                        <button className='btn-teg'>#case</button>
                    </div>
                    <h1 className="news-info-item-title">
                        Process, Project, Case va Product management — asosiy farqlari nimada?
                    </h1>
                    <p className="news-info-item-description">
                        Boshqaruvning har xil turlari mavjud.
                        Eng mashhurlari process (jarayon) va project
                        (loyiha) boshqarish boʻlib, hozirda ular...
                    </p>
                    <h6 className="news-info-item-data">
                        <span><img src={IconClock} alt="" /></span>
                        {moment().format('MMMM Do YYYY')}
                    </h6>
                </div>
                <hr/>
                <div className="news-info-item">
                    <div className="btn-group">
                        <button className="btn-dasturlash">Dasturlash</button>
                        <button className='btn-teg'>#backend</button>
                        <button className='btn-teg'>#go</button>
                        <button className='btn-teg'>#python</button>
                    </div>
                    <h1 className="news-info-item-title">
                        Nima uchun Backend dasturchilari Go dasturlash tilini o'rganishlari kerak?
                    </h1>
                    <p className="news-info-item-description">
                        Tizimning Backend qismini ishlab chiqish uchun dasturlash
                        tillari yetarlicha albatta: siz universal Python, og'ir va...
                    </p>
                    <h6 className="news-info-item-data">
                        <span><img src={IconClock} alt="" /></span>
                        {moment().format('MMMM Do YYYY')}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default index