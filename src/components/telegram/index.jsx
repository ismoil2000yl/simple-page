import TelegramBackground from 'assets/images/jpg/telegram-background.jpg'

const index = () => {
  return (
    <div className='telegram' style={{ backgroundImage: `url(${TelegramBackground})` }}>
      <div className="telegram-box">
        <h4 className="telegram-box-title">
          Bizni Telegramda kuzatib boring
        </h4>
        <button className="telegram-box-btn">
          @giglink
        </button>
      </div>
    </div>
  )
}

export default index