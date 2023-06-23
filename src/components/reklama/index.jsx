import ReklamaImg from 'assets/images/jpg/reklama-1.png'

const index = () => {
    return (
        <div className='reklama'>
            <div className="reklama-img">
                <img src={ReklamaImg} alt="" />
            </div>
            <div className="reklama-info">
                <h1 className='reklama-info-title'>
                    Ingliz tilini biz bilan o'rganing...!
                </h1>
                <p className="reklama-info-description">
                    Покупайте любимые сладости
                    и побеждайте
                </p>
                <button className="reklama-info-btn">
                    Batafsil
                </button>
            </div>
        </div>
    )
}

export default index