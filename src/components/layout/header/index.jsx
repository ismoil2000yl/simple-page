import IconLogo from 'assets/images/png/Logo.png'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import IconLeft from 'assets/images/png/left.png'
import IconShare from 'assets/images/png/share.png'

const header = () => {

  const [menuActive, setMenuActive] = useState(1)
  const [langActive, setLangActive] = useState(1)

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header className='header'>
      <div className="container">
        <div className={`header__wrapper ${location.pathname.toLowerCase().includes('page') ? 'header-none' : ''}`}>
          <div className="header__wrapper__nav">
            <div className="header__wrapper__nav__logo" onClick={() => navigate('/')}>
              <img src={IconLogo} alt="" />
            </div>
            <nav className="navbar">
              <ul className='navbar-box'>
                <li className={`navbar-box-item ${menuActive == 1 ? `active` : ''}`} onClick={() => setMenuActive(1)}>
                  <a className='navbar-box-item-link'>Texno Yangiliklar</a>
                </li>
                <li className={`navbar-box-item ${menuActive == 2 ? `active` : ''}`} onClick={() => setMenuActive(2)}>
                  <a className='navbar-box-item-link'>Avto Yangiliklar</a>
                </li>
                <li className={`navbar-box-item ${menuActive == 3 ? `active` : ''}`} onClick={() => setMenuActive(3)}>
                  <a className='navbar-box-item-link'>Sharhlar</a>
                </li>
              </ul>
            </nav>
          </div>
          <ul className="header__wrapper__language lang">
            <li className={`lang-item ${langActive == 1 ? `active-lang` : ''}`} onClick={() => setLangActive(1)}>
              <a className='lang-item-title'>Uz</a>
            </li>
            <li className={`lang-item ${langActive == 2 ? `active-lang` : ''}`} onClick={() => setLangActive(2)}>
              <a className='lang-item-title'>Ру</a>
            </li>
          </ul>
        </div>

        {
          location.pathname.toLowerCase().includes('page') ?
            <div className="header__page">
              <button className="header__page__btn" onClick={() => navigate(-1)}>
                <img src={IconLeft} alt="" />
              </button>
              <button className="header__page__btn header__page__logo" onClick={() => navigate('/')}>
                <img src={IconLogo} alt="" />
              </button>
              <button className="header__page__btn">
                <img src={IconShare} alt="" />
              </button>
            </div>
            : ''
        }

      </div>
    </header>
  )
}

export default header