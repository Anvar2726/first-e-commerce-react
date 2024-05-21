import log from "../../assets/images/site-logo.png";
import tel from "../../assets/images/tel.png";
import location from "../../assets/images/loctn.png";
import ins from "../../assets/images/inst.png";
import fcbk from "../../assets/images/fcbk.png";


import "./footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <nav className="footer__nav">
          <div>
            <img src={log} alt="logo" />
          </div>
          <div className="footer__info">
            <h3>Куда пицца</h3>
            <p>О компании</p>
            <p>Пользовательское соглашение</p>
            <p>Условия гарантии</p>
          </div>
          <div className="footer__info">
            <h3>Помощь</h3>
            <p>Ресторан</p>
            <p>Контакты</p>
            <p>Поддержка</p>
            <p>Отследить заказ</p>
          </div>
          <div className="footer__contact">
            <h3>Контакты</h3>
              <a className="footer__link" href="tel:+7(926)2231011"> <img src={tel} alt="contact" />+7 (926) 223-10-11</a>
            <p className="footer__link">
              <img src={location} alt="location" />
              Москва, ул. Юных Ленинцев, д.99
            </p>
            <div>
              <a href="https://facebook.com" target="_blank" className="footer__link"><img src={fcbk} alt="facebook" />Facebok</a>
              <a href="https://instagram.com" target="_blank" className="footer__link"><img src={ins} alt="instagram" />Instagram</a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
