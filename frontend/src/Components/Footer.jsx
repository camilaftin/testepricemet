import './Footer.scss'
import { useTheme } from "../hooks/useTheme"


const Footer = () => {
  const { theme } = useTheme();




  return (
    <footer>
      <div className={'footerWrapper'}>
        <div className={`navbar-${theme} bg-${theme} footer`}>
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
              </div>
              <div className={`col-sm-12 col-lg-6 icons ${theme == 'dark' ? 'iconsDark' : ''}`}>
                <a href="https://github.com/camilaftin/testepricemet"><img src="/images/ico-github.png" alt="ícone do github" className={`icon`} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer