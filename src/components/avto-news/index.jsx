import AvtoImg1 from 'assets/images/jpg/avto-1.jpg'
import AvtoImg2 from 'assets/images/jpg/avto-2.jpg'
import AvtoImg3 from 'assets/images/jpg/avto-3.jpg'
import IconClock from 'assets/images/png/clock.png'

const index = () => {
  return (
    <div className='avto-news'>
      <h1 className="avto-news-title">
        Avto yangiliklar
      </h1>
      <hr />
      <div className="avto-news-info">
        <div className="avto-news-info-img">
          <img src={AvtoImg1} alt="" />
        </div>
        <div className="avto-news-info-box">
          <div className="btn-group">
            <button className="btn-marketing">Marketing</button>
            <button className="btn-teg">#design</button>
            <button className="btn-teg">#brending</button>
          </div>
          <h1 className="avto-news-info-box-title">
            Bentley ning birinchi elektromobili 1400 ot kuchiga ega bo'lib, 1,5 soniyada 0-97 km tezlikka erishadi
          </h1>
          <h6 className="avto-news-info-box-data">
            <span><img src={IconClock} alt="" /></span>
            4 daqiqa oldin
          </h6>
        </div>
      </div>
      <hr />
      <div className="avto-news-item">
        <div className="avto-news-item-info">
          <h1 className="avto-news-item-info-title">
            MercedesBenz Vision EQXX
          </h1>
          <p className="avto-news-item-info-description">
            MercedesBenz Vision EQXX uzoq masofali elektr konsept
            avtomobil bo‘lib, turli ilg‘or kelajak elektromobillari
            uchun sinov tajribasi bo‘lib xizmat qiladi.
          </p>
          <div className="avto-news-item-info-box">
            <div className="btn-group">
              <button className="btn-avto">Avto</button>
              <button className="btn-teg">#avtomobilsozlik</button>
              <button className="btn-teg">#elektroavto</button>
            </div>
            <h6 className="avto-news-item-info-box-data">
              <span><img src={IconClock} alt="" /></span>
              4 daqiqa oldin
            </h6>
          </div>
        </div>
        <div className="avto-news-item-img">
          <img src={AvtoImg2} alt="" />
        </div>
      </div>
      <hr />
      <div className="avto-news-item">
        <div className="avto-news-item-info">
          <h1 className="avto-news-item-info-title">
            Volkswagen ID.Aero - bu VW elektr ID oilasining yangi a'zosi
          </h1>
          <p className="avto-news-item-info-description">
            Volkswagen Xitoyda AERO kontsept avtomobilini
            debyut qilish orqali potentsial mijozlarga brendning
            birinchi to'liq elektr sedanini taklif qilmoqda.
          </p>
          <div className="avto-news-item-info-box">
            <div className="btn-group">
              <button className="btn-avto">Avto</button>
              <button className="btn-teg">#avtomobilsozlik</button>
              <button className="btn-teg">#elektroavto</button>
            </div>
            <h6 className="avto-news-item-info-box-data">
              <span><img src={IconClock} alt="" /></span>
              4 daqiqa oldin
            </h6>
          </div>
        </div>
        <div className="avto-news-item-img">
          <img src={AvtoImg3} alt="" />
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