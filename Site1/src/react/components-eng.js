import { motion } from "framer-motion"

export function HeroEng() {
    return (
        <motion.section className="section-hero" id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>

            <div className="top-wrapper">
                <header className="header" id="subheader">
                    <div className="header-bottom">
                        <div className="container section-hero__container">
                            <span className="header-bottom-content">IT SOLUTIONS AND SERVICE</span>
                        </div>
                    </div>
                </header>

                <div className="inner-text">
                    <div className="container inner-text__container">
                        <div className="inner-text__content">
                            <h2 className="inner-text__title">About us</h2>
                            <p className="inner-text__text">Our company brings together experienced developers, testers, designers and consultants. We use Web technologies to create information solutions and customer service.</p>
                            <a href="mailto:arxinfo110001@gmail.com" target="_blank" rel="noopener noreferrer"
                                className="btn btn-contacts">Contact us</a>
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

export function ServicesEng() {
    return (
        <motion.section className="section__ways" id="ways"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="container section-ways__container">
                <h2 className="ways-title title">Solutions and services</h2>
                <ul className="ways-card__container">
                    <li className="ways-card-item">
                        <h3 className="ways-card-item__title">Development and improvement of software</h3>
                        <p className="ways-card-item__description"></p>
                    </li>
                    <li className="ways-card-item">
                        <h3 className="ways-card-item__title">Testing of software</h3>
                        <p className="ways-card-item__description"></p>
                    </li>
                    <li className="ways-card-item">
                        <h3 className="ways-card-item__title">Web design</h3>
                        <p className="ways-card-item__description"></p>
                    </li>
                    <li className="ways-card-item">
                        <h3 className="ways-card-item__title">Technical support</h3>
                        <p className="ways-card-item__description"></p>
                    </li>
                </ul>
            </div>
        </motion.section>
    );
}

export function NewsEng() {
    return (
        <motion.section className="section__news" id="news"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="container section-news__container">
                <h2 className="news-title title">News</h2>
                <p className="empty-text">This section is under construction...</p>
            </div>
        </motion.section>
    );
}

export function VacationEng() {
    return (
        <motion.section className="section__vacancy" id="vacation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="container section-vacancy__container">
                <h2 className="vacancy-title title">Career</h2>
                <p className="empty-text">This section is under construction...</p>
            </div>
        </motion.section>
    );
}

export function ContactsEng() {
    return (
        <motion.section className="section__contacts" id="contacts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="container section-contacts__container">
                <h2 className="contacts-title title">Contacts</h2>
                <div className="bankdata">
                    <h3 className="title companybank__data">Сompany details</h3>
                    <div className="bankdata__line bankdata__line1">
                        <span className="bankdata__title bankdata__title1">Company name:</span>
                        <span className="bankdata__info bankdata__info1">&nbsp;INFORMATION ARCHITECTURE LLC</span>
                    </div>
                    <div className="bankdata__line bankdata__line4">
                        <span className="bankdata__title bankdata__title4">INN:</span>
                        <span className="bankdata__info bankdata__info4">&nbsp;3662299660</span>
                    </div>
                </div>
                <a className="contacts-mail" href="mailto:arxinfo110001@gmail.com" target="_blank" rel="noopener noreferrer">
                    <p className="contacts-mail__text">Contact us</p>
                    <svg className="contacts-mail__mail" style={{ width: 25 + 'px', height: 25 + 'px' }}>
                        <use xlinkHref="../images/sprite.svg#mail"></use>
                    </svg>
                </a>
            </div>
        </motion.section>
    );
}

export function ErrorPageEng() {
    return (
        <motion.section className="section__error" id="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="container section-error__container">
                <h2 className="error-title title">Error 404</h2>
                <p className="empty-text error-text">Page doesn't find</p>
            </div>
        </motion.section>
    );
}