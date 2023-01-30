import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";

import { Hero, Services, News, Vacation, Contacts, ErrorPage } from './components-rus'

import { HeroEng, ServicesEng, NewsEng, VacationEng, ContactsEng, ErrorPageEng } from './components-eng'

import { Switch } from './switch'

import { useSelector } from "react-redux";

export function App() {

    const state = useSelector((state) => state.boolean)

    // console.log(store.getState().boolean)

    // store.subscribe(() => {
    //     console.log('withoutuseeffect')
    //     console.log(store.getState().boolean)
    // })

    if (!state) {
        return (
            <Router>
                <header className="section-header" id="header">
                    <div className="container section-header__container">
                        <button id="burger" className="btn header__burger"><span className="header__burger-body"></span></button>
                        <a href="https://arxinfo.online/" className="section-header__main-logo title-logo">
                            <div className="section-header__logo-first-line">ИНФОРМАЦИОННАЯ</div>
                            <div className="section-header__logo-second-line">АРХИТЕКТУРА</div>
                        </a>
                        <nav id="menu" className="section-header__nav">
                            <ul className="section-header__list">
                                <li className="section-header__item">
                                    <Link className="section-header__link" to="/">Главная</Link>
                                </li>
                                <li className="section-header__item">
                                    <Link className="section-header__link" to="/services">Решения и услуги</Link>
                                </li>
                                <li className="section-header__item">
                                    <Link className="section-header__link" to="/news">Новости</Link>
                                </li>
                                <li className="section-header__item">
                                    <Link className="section-header__link" to="/vacation">Вакансии</Link>
                                </li>
                                <li className="section-header__item">
                                    <Link className="section-header__link" to="/contacts">Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch />
                    </div>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Hero />} />

                        <Route path="en/" element={<Navigate to="/" />} />

                        <Route path="/services" element={<Services />} />

                        <Route path="en/services" element={<Navigate to="/services" />} />

                        <Route path="/news" element={<News />} />

                        <Route path="en/news" element={<Navigate to="/news" />} />

                        <Route path="/vacation" element={<Vacation />} />

                        <Route path="en/vacation" element={<Navigate to="/vacation" />} />

                        <Route path="/contacts" element={<Contacts />} />

                        <Route path="en/contacts" element={<Navigate to="/contacts" />} />

                        <Route path="/*" element={<ErrorPage />} />

                        <Route path="en/*" element={<Navigate to="/*" />} />

                    </Routes>
                </main>
                <footer className="section-footer">
                    <div className="container section-footer__container">
                        <div className="section-header__main-logo footer-logo">
                            <div className="section-header__logo-first-line">ИНФОРМАЦИОННАЯ</div>
                            <div className="section-header__logo-second-line">АРХИТЕКТУРА</div>
                        </div>
                        <div className="contacts__mail">
                            arxinfo110001@gmail.com
                        </div>
                    </div>
                </footer>
            </Router>
        );
    }
    else {
        return (
            <Router>
                <header className="section-header" id="header">
                    <div className="container section-header__container">
                        <button id="burger" className="btn header__burger"><span className="header__burger-body"></span></button>
                        <div className="section-header__main-logo">
                            <a href="https://arxinfo.online/en" className="section-header__main-logo title-logo">
                                <div className="section-header__logo-first-line">INFORMATION</div>
                                <div className="section-header__logo-second-line">ARCHITECTURE</div>
                            </a>
                        </div>
                        <nav id="menu" className="section-header__nav">
                            <ul className="section-header__list">
                                <li className="section-header__item">
                                    <Link className="section-header__link" to="/">Main Page</Link>
                                </li>
                                <li className="section-header__item">
                                    <Link className="section-header__link" to="/services">Solutions and services</Link>
                                </li>
                                <li className="section-header__item">
                                    <Link className="section-header__link" to="/news">News</Link>
                                </li>
                                <li className="section-header__item">
                                    <Link className="section-header__link" to="/vacation">Career</Link>
                                </li>
                                <li className="section-header__item">
                                    <Link className="section-header__link" to="/contacts">Contacts</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch />
                    </div>
                </header>
                <main>
                    <Routes>

                        <Route path="/en" element={<HeroEng />} />

                        <Route path="/" element={<Navigate to="/en" />} />

                        <Route path="/en/services" element={<ServicesEng />} />

                        <Route path="/services" element={<Navigate to="/en/services" />} />

                        <Route path="/en/news" element={<NewsEng />} />

                        <Route path="/news" element={<Navigate to="/en/news" />} />

                        <Route path="/en/vacation" element={<VacationEng />} />

                        <Route path="/vacation" element={<Navigate to="/en/vacation" />} />

                        <Route path="/en/contacts" element={<ContactsEng />} />

                        <Route path="/contacts" element={<Navigate to="/en/contacts" />} />

                        <Route path="/en/*" element={<ErrorPageEng />} />

                        <Route path="/*" element={<Navigate to="/en/*" />} />

                    </Routes>
                </main>
                <footer className="section-footer">
                    <div className="container section-footer__container">
                        <div className="section-header__main-logo footer-logo">
                            <div className="section-header__logo-first-line">INFORMATION</div>
                            <div className="section-header__logo-second-line">ARCHITECTURE</div>
                        </div>
                        <div className="contacts__mail">
                            arxinfo110001@gmail.com
                        </div>
                    </div>
                </footer>
            </Router>
        )
    }
}
