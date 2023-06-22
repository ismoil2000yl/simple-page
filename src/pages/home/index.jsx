import News from 'components/news'
import LatestNews from 'components/latest-news'
import Telegram from 'components/telegram'
import AvtoNews from 'components/avto-news'

const index = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="home__wrapper">
          <News />
          <LatestNews />
          <Telegram />
          <AvtoNews/>
        </div>
      </div>
    </div>
  )
}

export default index