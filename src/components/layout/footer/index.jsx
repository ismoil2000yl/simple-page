import FooterLogo from 'assets/images/png/footer-logo.png'
import { IconAvto, IconFacebook, IconHome, IconInstagram, IconLenta, IconLink, IconTavfsif, IconTwitter } from 'assets/images/svg'
import BackgroundGiglink from 'assets/images/png/giglink-background.png'
import { useState } from 'react'

const footer = () => {

  const [active, setActive] = useState(1)

  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__wrapper" style={{ backgroundImage: `url(${BackgroundGiglink})` }}>
          <div className="footer__wrapper__left">
            <div className="footer__wrapper__left__logo">
              <img src={FooterLogo} alt="" />
            </div>
            <ul className="footer__wrapper__left__menu-info">
              <li className="footer__wrapper__left__menu-info__item">
                <a className="footer__wrapper__left__menu__item__link">Reklama</a>
              </li>
              <li className="footer__wrapper__left__menu-info__item">
                <a className="footer__wrapper__left__menu-info__item__link">Loyiha haqida</a>
              </li>
              <li className="footer__wrapper__left__menu-info__item">
                <a className="footer__wrapper__left__menu-info__item__link">Qoidalar</a>
              </li>
              <li className="footer__wrapper__left__menu-info__item">
                <a className="footer__wrapper__left__menu-info__item__link">Biz bilan aloqa</a>
              </li>
            </ul>
          </div>
          <div className="footer__wrapper__right">
            <ul className="footer__wrapper__right__menu">
              <li className="footer__wrapper__right__menu__item">
                <a className='footer__wrapper__right__menu__item__link'>Texno Yangiliklar</a>
              </li>
              <li className="footer__wrapper__right__menu__item">
                <a className='footer__wrapper__right__menu__item__link'>Avto Yangiliklar</a>
              </li>
              <li className="footer__wrapper__right__menu__item">
                <a className='footer__wrapper__right__menu__item__link'>Sharhlar</a>
              </li>
            </ul>
            <p className="footer__wrapper__right__network-title">
              Biz ijtimoiy tarmoqda:
            </p>
            <div className="footer__wrapper__right__network network">
              <button className='network__item'>
                <IconFacebook className="network__item__icon" />
              </button>
              <button className='network__item'>
                <IconInstagram className="network__item__icon" />
              </button>
              <button className='network__item'>
                <IconTwitter className="network__item__icon" />
              </button>
              <button className='network__item'>
                <IconLink className="network__item__icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="footer__box"  >
          <div className="footer__box__left">
            <h5 className='footer__box__left__item'>Design by Fido Studio</h5>
          </div>
          <div className="footer__box__right" >
            <p className="footer__box__right__item">
              © Copyright 2022 Giglink Barcha huquqlar himoyalangan.
              O‘zbekiston Matbuot va axborot agentligi tomonidan
              2013-yil 04-06-sonli ro‘yxatga olinganlik guvohnomasi № 0976
            </p>
          </div>
        </div>
      </div>

      <div className="footer__mobile">
        <div className="footer__mobile__box">
          <button className={`footer__mobile__box__item ${active == 1 ? `active-mobile` : ''}`} onClick={()=>setActive(1)}>
            <IconHome className={"footer__mobile__box__item__icon"} />
            Home
          </button>
          <button className={`footer__mobile__box__item ${active == 2 ? `active-mobile` : ''}`} onClick={()=>setActive(2)}>
            <IconLenta className={"footer__mobile__box__item__icon"} />
            Lenta
          </button>
          <button className={`footer__mobile__box__item ${active == 3 ? `active-mobile` : ''}`} onClick={()=>setActive(3)}>
            <IconAvto className={"footer__mobile__box__item__icon"} />
            Avto
          </button>
          <button className={`footer__mobile__box__item ${active == 4 ? `active-mobile` : ''}`} onClick={()=>setActive(4)}>
            <IconTavfsif className={"footer__mobile__box__item__icon"} />
            Tavsif
          </button>
        </div>
      </div>
    </footer>
  )
}

export default footer