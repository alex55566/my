
import { motion } from "framer-motion"

export function Hero() {
    return (
        <motion.section className="section-hero" id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="top-wrapper">
                <header className="header" id="subheader">
                    <div className="header-bottom">
                        <div className="container section-hero__container">
                            <span className="header-bottom-content">РЕШЕНИЯ И УСЛУГИ В ИНФОРМАЦИОННЫХ
                                ТЕХНОЛОГИЯХ</span>
                        </div>
                    </div>
                </header>

                <div className="inner-text">
                    <div className="container inner-text__container">
                        <div className="inner-text__content">
                            <h2 className="inner-text__title">О компании</h2>
                            <p className="inner-text__text">Наша компания объединияет опытных разработчиков,
                                тестировщиков,
                                дизайнеров и консультантов. Мы используем Web технологии для создания информационных решений
                                и клиентского сервиса.</p>
                            <a href="mailto:arxinfo110001@gmail.com" target="_blank" rel="noopener noreferrer"
                                className="btn btn-contacts">Связаться с нами</a>
                        </div>
                    </div>
                </div>

                <div className="slider-wrapper">
                    <div className="js-hero-swiper swiper-container slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide slide slide-1"></div>
                            <div className="swiper-slide slide slide-2"></div>
                            <div className="swiper-slide slide slide-3"></div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export function Services() {
    return (
        <motion.section className="section__ways" id="ways"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="container section-ways__container">
                <h2 className="ways-title title">Решения и услуги</h2>
                <ul className="ways-card__container">
                    <li className="ways-card-item">
                        <h3 className="ways-card-item__title">Разработка и доработка программных продуктов</h3>
                        <p className="ways-card-item__description"></p>
                    </li>
                    <li className="ways-card-item">
                        <h3 className="ways-card-item__title">Тестирование ПО</h3>
                        <p className="ways-card-item__description"></p>
                    </li>
                    <li className="ways-card-item">
                        <h3 className="ways-card-item__title">Bеб-дизайн</h3>
                        <p className="ways-card-item__description"></p>
                    </li>
                    <li className="ways-card-item">
                        <h3 className="ways-card-item__title">Техническая поддержка</h3>
                        <p className="ways-card-item__description"></p>
                    </li>
                </ul>
            </div>
        </motion.section>
    );
}

export function News() {
    return (
        <motion.section className="section__news" id="news"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="container section-news__container">
                <h2 className="news-title title">Новости</h2>
                <p className="empty-text">Данный раздел находится в разработке...</p>
            </div>
        </motion.section>
    );
}

export function Vacation() {
    return (
        <motion.section className="section__vacancy" id="vacation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="container section-vacancy__container">
                <h2 className="vacancy-title title">Вакансии</h2>
                <p className="empty-text">Данный раздел находится в разработке...</p>
            </div>
        </motion.section>
    );
}

export function Contacts() {
    return (
        <motion.section className="section__contacts" id="contacts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="container section-contacts__container">
                <h2 className="contacts-title title">Контакты</h2>
                <div className="bankdata">
                    <h3 className="title companybank__data">Реквизиты компании</h3>
                    <div className="bankdata__line bankdata__line1">
                        <span className="bankdata__title bankdata__title1">Наименование:</span>
                        <span className="bankdata__info bankdata__info1">&nbsp;ООО "ИНФОРМАЦИОННАЯ АРХИТЕКТУРА"</span>
                    </div>
                    <div className="bankdata__line bankdata__line4">
                        <span className="bankdata__title bankdata__title4">ИНН:</span>
                        <span className="bankdata__info bankdata__info4">&nbsp;3662299660</span>
                    </div>
                </div>
                <a className="contacts-mail" href="mailto:arxinfo110001@gmail.com" target="_blank" rel="noopener noreferrer">
                    <p className="contacts-mail__text">Связаться с нами</p>
                    <svg className="contacts-mail__mail" style={{ width: 25 + 'px', height: 25 + 'px' }}>
                        <use xlinkHref="../images/sprite.svg#mail"></use>
                    </svg>
                </a>
            </div>
        </motion.section>
    );
}


export function ErrorPage() {
    return (
        <motion.section className="section__error" id="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="container section-error__container">
                <h2 className="error-title title">Ошибка 404</h2>
                <p className="empty-text error-text">Страница не найдена</p>
            </div>
        </motion.section>
    );
}
